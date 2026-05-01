import React, { useState, useEffect } from 'react';
import { Target, Search, Filter, Shield, Activity, Maximize2, Zap, AlertTriangle, ChevronRight } from 'lucide-react';
import ForceGraph2D from "react-force-graph-2d";
import { getGraphData } from "./services/api";
import { connectSocket } from "./services/socket";

export default function NetworkView() {
  const [zoom, setZoom] = useState(1);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    const fetchGraph = async () => {
      try {
        const res = await getGraphData("A1");
        const nodes = [];
        const links = [];

        res.data.forEach(item => {
          nodes.push({ id: item.source });
          nodes.push({ id: item.target });

          links.push({
            source: item.source,
            target: item.target,
            amount: item.amount
          });
        });

        setGraphData({
          nodes: [...new Map(nodes.map(n => [n.id, n])).values()],
          links
        });
      } catch (err) {
        console.error("Failed to fetch graph data", err);
      }
    };
    fetchGraph();

    const unsubscribe = connectSocket((message) => {
      if (message.type === "NEW_TRANSACTION") {
        setGraphData(prev => {
          const newNodes = [...prev.nodes];
          const hasSender = newNodes.find(n => n.id === message.data.sender_id);
          const hasReceiver = newNodes.find(n => n.id === message.data.receiver_id);
          
          if (!hasSender) newNodes.push({ id: message.data.sender_id });
          if (!hasReceiver) newNodes.push({ id: message.data.receiver_id });

          return {
            nodes: newNodes,
            links: [...prev.links, {
              source: message.data.sender_id,
              target: message.data.receiver_id,
              amount: message.data.amount
            }]
          };
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex-1 flex gap-8 dark:gap-0 bg-mm-card dark:bg-[#0a0a0a] rounded-[28px] dark:rounded-none shadow-premium dark:shadow-none overflow-hidden p-8 dark:p-0 relative font-sans transition-all duration-300">
      
      {/* Main Map Area */}
      <div className="flex-1 bg-mm-bg dark:bg-black border border-gray-100 dark:border-none rounded-[28px] dark:rounded-none shadow-sm dark:shadow-none relative overflow-hidden flex flex-col group hover:shadow-premium dark:hover:shadow-none transition-all duration-300">
        
        {/* Map Header Overlay */}
        <div className="absolute top-0 left-0 right-0 p-8 z-20 flex justify-between items-start pointer-events-none">
          <div>
            <h2 className="text-3xl dark:text-2xl font-bold tracking-tight dark:tracking-normal text-mm-textDark dark:text-mm-yellow mb-1 dark:font-mono drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(255,197,0,0.5)]">Threat Map</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 dark:w-1.5 dark:h-1.5 rounded-full bg-[#ff4d4d] dark:bg-[#ff0000] dark:shadow-[0_0_10px_#ff0000] animate-pulse"></div>
              <span className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-[#ff0000] tracking-wider dark:tracking-[0.2em] font-bold dark:font-mono uppercase">Live Tracking Active</span>
            </div>
          </div>

          <div className="flex gap-3 dark:gap-2 pointer-events-auto">
            <button className="bg-white dark:bg-[#11110f] border border-gray-200 dark:border-[#22221e] hover:border-gray-300 dark:hover:border-mm-yellow/50 w-12 h-12 dark:w-10 dark:h-10 rounded-2xl dark:rounded flex items-center justify-center text-mm-textDark dark:text-mm-yellow shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(255,197,0,0.2)] hover:-translate-y-1 dark:hover:translate-y-0 transition-all">
              <Filter size={20} className="dark:w-[16px] dark:h-[16px]" />
            </button>
            <button className="bg-white dark:bg-[#11110f] border border-gray-200 dark:border-[#22221e] hover:border-gray-300 dark:hover:border-mm-yellow/50 w-12 h-12 dark:w-10 dark:h-10 rounded-2xl dark:rounded flex items-center justify-center text-mm-textDark dark:text-mm-yellow shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(255,197,0,0.2)] hover:-translate-y-1 dark:hover:translate-y-0 transition-all">
              <Search size={20} className="dark:w-[16px] dark:h-[16px]" />
            </button>
            <button className="bg-white dark:bg-[#11110f] border border-gray-200 dark:border-[#22221e] hover:border-gray-300 dark:hover:border-mm-yellow/50 w-12 h-12 dark:w-10 dark:h-10 rounded-2xl dark:rounded flex items-center justify-center text-mm-textDark dark:text-mm-yellow shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(255,197,0,0.2)] hover:-translate-y-1 dark:hover:translate-y-0 transition-all">
              <Maximize2 size={20} className="dark:w-[16px] dark:h-[16px]" />
            </button>
          </div>
        </div>

        {/* The Graph */}
        <div className="absolute inset-0 flex items-center justify-center bg-black" style={{ transform: `scale(${zoom})`, transition: 'transform 0.5s ease-out' }}>
          <ForceGraph2D
            graphData={graphData}
            nodeLabel="id"
            linkLabel={(link) => `$${link.amount}`}
            nodeAutoColorBy="id"
          />
        </div>

        {/* Bottom Left Legend */}
        <div className="absolute bottom-8 left-8 dark:bottom-0 dark:left-0 bg-white/90 dark:bg-[#0a0a0a]/80 backdrop-blur-md border border-gray-100 dark:border-none dark:border-t dark:border-r dark:border-[#1a1a18] p-5 dark:p-6 rounded-[20px] dark:rounded-none shadow-premium dark:shadow-none transition-all">
          <h4 className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle font-bold dark:font-mono uppercase tracking-wider dark:tracking-[0.2em] mb-4 dark:mb-3">Node Designation</h4>
          <div className="space-y-3 dark:space-y-2">
             <div className="flex items-center gap-3 dark:gap-2">
               <div className="w-3 h-3 dark:w-2 dark:h-2 rounded-full bg-mm-yellow dark:shadow-[0_0_8px_#ffc500] border border-white dark:border-none shadow-sm dark:shadow-none"></div>
               <span className="text-xs dark:text-[10px] font-bold text-mm-textDark dark:text-mm-yellow dark:font-mono">Active Transfer</span>
             </div>
             <div className="flex items-center gap-3 dark:gap-2">
               <div className="w-3 h-3 dark:w-2 dark:h-2 rounded-full bg-[#ff4d4d] dark:bg-[#ff0000] dark:shadow-[0_0_8px_#ff0000] border border-white dark:border-none shadow-sm dark:shadow-none"></div>
               <span className="text-xs dark:text-[10px] font-bold text-mm-textDark dark:text-[#ff0000] dark:font-mono">Blocked Entity</span>
             </div>
             <div className="flex items-center gap-3 dark:gap-2">
               <div className="w-3 h-3 dark:w-2 dark:h-2 rounded-full bg-gray-300 dark:bg-[#33332d] border border-white dark:border-none shadow-sm dark:shadow-none"></div>
               <span className="text-xs dark:text-[10px] font-bold text-mm-textMuted dark:text-mm-dark-textSubtle dark:font-mono">Standby Node</span>
             </div>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-8 right-8 dark:bottom-6 dark:right-6 flex flex-col gap-2 transition-all">
          <button onClick={() => setZoom(z => Math.min(z + 0.2, 2))} className="w-10 h-10 dark:w-8 dark:h-8 bg-white dark:bg-[#11110f] hover:bg-gray-50 dark:hover:bg-[#1a1a18] border border-gray-100 dark:border-[#22221e] rounded-xl dark:rounded flex items-center justify-center text-mm-textDark dark:text-mm-yellow shadow-sm dark:shadow-none hover:-translate-y-1 dark:hover:translate-y-0 transition-all font-bold text-lg dark:text-sm">+</button>
          <button onClick={() => setZoom(z => Math.max(z - 0.2, 0.5))} className="w-10 h-10 dark:w-8 dark:h-8 bg-white dark:bg-[#11110f] hover:bg-gray-50 dark:hover:bg-[#1a1a18] border border-gray-100 dark:border-[#22221e] rounded-xl dark:rounded flex items-center justify-center text-mm-textDark dark:text-mm-yellow shadow-sm dark:shadow-none hover:-translate-y-1 dark:hover:translate-y-0 transition-all font-bold text-lg dark:text-sm">-</button>
        </div>
      </div>

      {/* Right Side Panel */}
      <div className="w-96 dark:w-80 flex flex-col gap-6 dark:gap-0 shrink-0 h-full border-l border-transparent dark:border-[#1a1a18] dark:bg-[#0a0a0a] transition-all duration-300">
        
        {/* Top Scan Status Card */}
        <div className="bg-mm-bg dark:bg-transparent border border-gray-100 dark:border-none rounded-[28px] dark:rounded-none p-8 dark:p-6 shadow-sm dark:shadow-none hover:shadow-premium dark:hover:shadow-none transition-all duration-300 dark:border-b dark:border-[#1a1a18]">
          <div className="flex justify-between items-center mb-6 dark:mb-4">
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle font-bold dark:font-mono tracking-wider dark:tracking-[0.2em] uppercase">Heuristic Scan</h3>
            <span className="flex items-center gap-2 bg-white dark:bg-transparent px-3 dark:px-0 py-1 dark:py-0 rounded-lg dark:rounded-none border border-gray-100 dark:border-none shadow-sm dark:shadow-none">
              <div className="w-1.5 h-1.5 rounded-full bg-mm-yellow dark:shadow-[0_0_5px_#ffc500] animate-pulse"></div>
              <span className="text-[9px] dark:text-[8px] font-bold text-mm-textDark dark:text-mm-yellow uppercase tracking-wider dark:tracking-[0.2em] dark:font-mono">Running</span>
            </span>
          </div>

          <div className="mb-6 dark:mb-4">
            <div className="flex justify-between items-end mb-2 dark:mb-1">
              <span className="text-sm dark:text-[10px] font-bold text-mm-textDark dark:text-white dark:font-mono">Network Coverage</span>
              <span className="text-xl dark:text-sm font-bold text-mm-textDark dark:text-mm-yellow dark:font-mono drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(255,197,0,0.5)]">98.2%</span>
            </div>
            <div className="h-2 dark:h-1 bg-gray-200 dark:bg-[#1a1a18] rounded-full dark:rounded-none overflow-hidden">
               <div className="h-full bg-mm-yellow dark:shadow-[0_0_10px_#ffc500] rounded-full dark:rounded-none w-[98.2%] shadow-sm dark:shadow-none"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 dark:gap-2">
            <div className="bg-white dark:bg-[#11110f] border border-gray-100 dark:border-[#22221e] rounded-2xl dark:rounded p-4 dark:p-3 shadow-sm dark:shadow-none">
              <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle font-bold uppercase tracking-wider dark:tracking-[0.1em] mb-1 dark:font-mono">Nodes Analyzed</div>
              <div className="font-bold text-xl dark:text-base text-mm-textDark dark:text-white dark:font-mono">1.2M</div>
            </div>
            <div className="bg-white dark:bg-[#11110f] border border-gray-100 dark:border-[#22221e] rounded-2xl dark:rounded p-4 dark:p-3 shadow-sm dark:shadow-none">
              <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle font-bold uppercase tracking-wider dark:tracking-[0.1em] mb-1 dark:font-mono">Anomalies</div>
              <div className="font-bold text-xl dark:text-base text-[#ff4d4d] dark:text-[#ff0000] dark:font-mono dark:drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">14</div>
            </div>
          </div>
        </div>

        {/* Entity Focus List */}
        <div className="bg-mm-bg dark:bg-transparent border border-gray-100 dark:border-none rounded-[28px] dark:rounded-none p-6 shadow-sm dark:shadow-none hover:shadow-premium dark:hover:shadow-none transition-all duration-300 flex-1 flex flex-col overflow-hidden">
          <div className="flex justify-between items-center mb-6 dark:mb-4 px-2 dark:px-0">
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle font-bold tracking-wider dark:tracking-[0.2em] uppercase dark:font-mono">Entity Focus</h3>
            <button className="text-[10px] dark:text-[8px] text-mm-textDark dark:text-mm-yellow font-bold tracking-wider uppercase hover:text-mm-yellow dark:hover:text-white transition-colors dark:font-mono">View All</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 dark:space-y-2 custom-scrollbar pr-2 dark:pr-1">
            
            <div className="bg-white dark:bg-[#11110f] border border-[#ffebf0] dark:border-l-[3px] dark:border-l-[#ff0000] dark:border-y-[#1a1a18] dark:border-r-[#1a1a18] rounded-2xl dark:rounded p-4 dark:p-3 shadow-sm dark:shadow-none cursor-pointer hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-md dark:hover:shadow-none dark:hover:bg-[#161614] transition-all group">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 dark:w-6 dark:h-6 rounded-full dark:rounded bg-[#ffebf0] dark:bg-[#330000]/50 text-[#ff4d4d] dark:text-[#ff8080] flex items-center justify-center font-bold text-[10px] dark:text-[8px] dark:font-mono transition-colors">C-9</div>
                  <span className="font-bold text-sm dark:text-[11px] text-mm-textDark dark:text-white dark:font-mono">Entity_Alpha_X</span>
                </div>
                <AlertTriangle size={16} className="text-[#ff4d4d] dark:text-[#ff8080] dark:w-3.5 dark:h-3.5" />
              </div>
              <div className="flex justify-between items-end">
                <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle font-bold uppercase tracking-wider dark:font-mono">Risk Score</div>
                <div className="text-sm dark:text-xs font-bold text-[#ff4d4d] dark:text-[#ff0000] dark:font-mono">94 / 100</div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#11110f] border border-gray-100 dark:border-l-[3px] dark:border-l-mm-yellow dark:border-y-[#1a1a18] dark:border-r-[#1a1a18] rounded-2xl dark:rounded p-4 dark:p-3 shadow-sm dark:shadow-none cursor-pointer hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-md dark:hover:shadow-none dark:hover:bg-[#161614] transition-all group">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 dark:w-6 dark:h-6 rounded-full dark:rounded bg-gray-100 dark:bg-mm-yellow/10 text-mm-textMuted dark:text-mm-yellow flex items-center justify-center font-bold text-[10px] dark:text-[8px] dark:font-mono transition-colors">M-2</div>
                  <span className="font-bold text-sm dark:text-[11px] text-mm-textDark dark:text-white dark:font-mono">Node_Beta_4</span>
                </div>
                <Activity size={16} className="text-mm-yellow dark:w-3.5 dark:h-3.5" />
              </div>
              <div className="flex justify-between items-end">
                <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle font-bold uppercase tracking-wider dark:font-mono">Risk Score</div>
                <div className="text-sm dark:text-xs font-bold text-mm-yellow dark:font-mono">68 / 100</div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#11110f] border border-gray-100 dark:border-[#1a1a18] rounded-2xl dark:rounded p-4 dark:p-3 shadow-sm dark:shadow-none cursor-pointer hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-md dark:hover:shadow-none dark:hover:bg-[#161614] transition-all group">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 dark:w-6 dark:h-6 rounded-full dark:rounded bg-gray-100 dark:bg-[#1a1a18] text-mm-textMuted dark:text-mm-dark-textSubtle flex items-center justify-center font-bold text-[10px] dark:text-[8px] dark:font-mono transition-colors">L-1</div>
                  <span className="font-bold text-sm dark:text-[11px] text-mm-textDark dark:text-white dark:font-mono">Gateway_Prime</span>
                </div>
                <Shield size={16} className="text-gray-400 dark:text-mm-dark-textSubtle dark:w-3.5 dark:h-3.5" />
              </div>
              <div className="flex justify-between items-end">
                <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle font-bold uppercase tracking-wider dark:font-mono">Risk Score</div>
                <div className="text-sm dark:text-xs font-bold text-mm-textDark dark:text-white dark:font-mono">12 / 100</div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
