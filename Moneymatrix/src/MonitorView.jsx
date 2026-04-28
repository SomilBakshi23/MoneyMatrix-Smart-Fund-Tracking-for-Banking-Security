import React from 'react';
import { Shield, Zap, Users, Search, ZoomIn, ZoomOut, List } from 'lucide-react';

export default function MonitorView() {
  return (
    <div className="flex-1 flex flex-col bg-mm-card dark:bg-[#11110f] rounded-[28px] dark:rounded-none shadow-premium dark:shadow-none overflow-y-auto p-10 dark:p-8 relative font-sans transition-all duration-300">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-10 dark:mb-8">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-mm-textDark dark:text-white mb-2 dark:font-mono transition-all">Live Monitor</h2>
          <p className="text-sm dark:text-xs text-mm-textMuted dark:text-mm-dark-textMuted tracking-wide dark:font-mono">
            Real-time heuristic signal analysis across global networks.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-2xl dark:rounded-lg px-8 py-4 dark:px-6 dark:py-3 flex flex-col justify-center shadow-sm dark:shadow-lg hover:shadow-premium dark:hover:shadow-lg hover:-translate-y-1 dark:hover:translate-y-0 transition-all duration-300">
            <span className="text-[10px] dark:text-[9px] text-mm-textMuted dark:text-mm-yellow tracking-wider dark:tracking-[0.1em] uppercase mb-1 font-bold dark:font-mono">Active Investigations</span>
            <span className="text-3xl dark:text-2xl font-bold text-mm-textDark dark:text-white leading-none dark:font-mono">142</span>
          </div>
          <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-2xl dark:rounded-lg px-8 py-4 dark:px-6 dark:py-3 flex flex-col justify-center shadow-sm dark:shadow-lg hover:shadow-premium dark:hover:shadow-lg hover:-translate-y-1 dark:hover:translate-y-0 transition-all duration-300">
            <span className="text-[10px] dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase mb-1 font-bold dark:font-mono">Threat Level</span>
            <span className="text-3xl dark:text-2xl font-bold text-mm-yellow dark:text-[#ffae00] leading-none uppercase drop-shadow-sm dark:drop-shadow-none dark:font-mono">Elevated</span>
          </div>
        </div>
      </div>

      {/* Top Row: Pulse & Stream */}
      <div className="grid grid-cols-12 gap-8 dark:gap-6 mb-8 dark:mb-6">
        
        {/* Transaction Pulse */}
        <div className="col-span-8 bg-mm-bg dark:bg-[#1a1a18] rounded-[28px] dark:rounded-xl p-8 dark:p-6 border border-gray-100 dark:border-[#2a2a28] shadow-sm dark:shadow-xl flex flex-col hover:shadow-premium dark:hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl dark:text-lg font-bold text-mm-textDark dark:text-white mb-1 dark:font-mono">Transaction Pulse</h3>
              <div className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textMuted dark:font-mono">Live volume monitoring across primary protocols</div>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-transparent px-4 py-2 dark:p-0 rounded-full dark:rounded-none border border-gray-100 dark:border-none shadow-sm dark:shadow-none transition-all">
              <div className="w-2 h-2 dark:w-1.5 dark:h-1.5 bg-mm-yellow rounded-full shadow-[0_0_8px_#ffc500] animate-pulse"></div>
              <span className="text-[10px] dark:text-[9px] text-mm-textDark dark:text-mm-yellow tracking-wider dark:tracking-[0.1em] font-bold uppercase dark:font-mono">Live Streaming</span>
            </div>
          </div>

          <div className="flex-1 relative mb-6 h-[160px] dark:h-[140px] flex items-end">
             {/* Simulated Sine Wave Chart */}
             <div className="absolute inset-0 border-b border-gray-200 dark:border-mm-yellow/20 transition-colors">
               <svg className="w-full h-full dark:hidden" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0,80 Q 15,30 25,60 T 50,40 T 70,80 T 85,20 T 100,50" fill="none" stroke="#FEDB71" strokeWidth="3" />
                  <path d="M 0,80 Q 15,30 25,60 T 50,40 T 70,80 T 85,20 T 100,50 L 100,100 L 0,100 Z" fill="url(#grad)" className="opacity-20" />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FEDB71" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#FCFAF8" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
               </svg>
               <svg className="w-full h-full hidden dark:block" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0,80 Q 15,30 25,60 T 50,40 T 70,80 T 85,20 T 100,50" fill="none" stroke="#ffc500" strokeWidth="1.5" className="opacity-70" />
                  <path d="M 0,80 Q 15,30 25,60 T 50,40 T 70,80 T 85,20 T 100,50 L 100,100 L 0,100 Z" fill="url(#grad-dark)" className="opacity-10" />
                  <defs>
                    <linearGradient id="grad-dark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffc500" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="#ffc500" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
               </svg>
               {/* Glowing Points */}
               <div className="absolute top-[50%] left-[20%] w-4 h-4 dark:w-3 dark:h-3 bg-white dark:bg-mm-yellow border-[3px] border-mm-yellow dark:border-none rounded-full shadow-sm dark:shadow-[0_0_15px_#ffc500] -translate-x-1/2 -translate-y-1/2 hover:scale-125 dark:hover:scale-100 transition-transform cursor-pointer"></div>
               <div className="absolute top-[60%] left-[40%] w-3 h-3 dark:w-2 dark:h-2 bg-white dark:bg-mm-yellow border-2 border-mm-yellow dark:border-none rounded-full shadow-sm dark:shadow-[0_0_10px_#ffc500] -translate-x-1/2 -translate-y-1/2 hover:scale-125 dark:hover:scale-100 transition-transform cursor-pointer"></div>
               <div className="absolute top-[30%] left-[75%] w-4 h-4 dark:w-3 dark:h-3 bg-white dark:bg-mm-yellow border-[3px] border-mm-yellow dark:border-none rounded-full shadow-sm dark:shadow-[0_0_15px_#ffc500] -translate-x-1/2 -translate-y-1/2 hover:scale-125 dark:hover:scale-100 transition-transform cursor-pointer"></div>
             </div>
          </div>

          <div className="grid grid-cols-4 gap-4 pt-4 dark:border-t dark:border-[#2a2a28] transition-colors">
            <div>
              <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase mb-1 font-bold dark:font-mono">Throughput</div>
              <div className="font-bold text-lg dark:text-sm text-mm-textDark dark:text-white dark:font-mono">14,204 TPS</div>
            </div>
            <div>
              <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase mb-1 font-bold dark:font-mono">Avg Latency</div>
              <div className="font-bold text-lg dark:text-sm text-mm-textDark dark:text-white dark:font-mono">12ms</div>
            </div>
            <div>
              <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase mb-1 font-bold dark:font-mono">Vol at Risk</div>
              <div className="font-bold text-lg dark:text-sm text-mm-yellow drop-shadow-sm dark:drop-shadow-none dark:font-mono">$2.4M</div>
            </div>
            <div>
              <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase mb-1 font-bold dark:font-mono">Node Health</div>
              <div className="font-bold text-lg dark:text-sm text-mm-textDark dark:text-white dark:font-mono">Optimal</div>
            </div>
          </div>
        </div>

        {/* Threat Stream */}
        <div className="col-span-4 bg-mm-bg dark:bg-[#1a1a18] rounded-[28px] dark:rounded-xl border border-gray-100 dark:border-[#2a2a28] shadow-sm dark:shadow-xl flex flex-col hover:shadow-premium dark:hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 border-b border-gray-100 dark:border-[#2a2a28] flex justify-between items-center bg-white dark:bg-transparent rounded-t-[28px] dark:rounded-none transition-colors">
            <h3 className="text-lg font-bold text-mm-textDark dark:text-white dark:font-mono">Threat Stream</h3>
            <div className="w-8 h-8 dark:w-auto dark:h-auto rounded-full bg-gray-50 dark:bg-transparent flex items-center justify-center">
              <List size={16} className="text-mm-textDark dark:text-mm-yellow" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 dark:space-y-3 custom-scrollbar">
            
            <div className="bg-white dark:bg-[#11110f] border border-gray-100 dark:border-[#2a2a28] rounded-2xl dark:rounded-lg p-5 dark:p-4 hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-md dark:hover:shadow-none dark:hover:border-[#ff8080]/50 transition-all duration-300 cursor-pointer group">
              <div className="flex justify-between items-center mb-3 dark:mb-2">
                <span className="text-[10px] dark:text-[9px] font-bold text-[#ff4d4d] dark:text-[#f97316] bg-[#ffebf0] dark:bg-transparent px-3 dark:px-0 py-1 dark:py-0 rounded-full dark:rounded-none tracking-wider uppercase dark:font-mono">High Risk</span>
                <span className="text-[10px] dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textSubtle font-medium dark:font-mono">2m ago</span>
              </div>
              <div className="font-bold text-sm text-mm-textDark dark:text-white mb-1 dark:font-mono">Large Transfer Detected</div>
              <div className="text-xs dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textMuted dark:font-mono">Origin: LU-002 • $45,000.00</div>
            </div>

            <div className="bg-white dark:bg-[#11110f] border border-gray-100 dark:border-[#2a2a28] rounded-2xl dark:rounded-lg p-5 dark:p-4 hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-md dark:hover:shadow-none dark:hover:border-mm-dark-textSubtle transition-all duration-300 cursor-pointer group">
              <div className="flex justify-between items-center mb-3 dark:mb-2">
                <span className="text-[10px] dark:text-[9px] font-bold text-mm-textDark dark:text-mm-dark-textSubtle bg-gray-100 dark:bg-transparent px-3 dark:px-0 py-1 dark:py-0 rounded-full dark:rounded-none tracking-wider uppercase dark:font-mono">Anomaly</span>
                <span className="text-[10px] dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textSubtle font-medium dark:font-mono">5m ago</span>
              </div>
              <div className="font-bold text-sm text-mm-textDark dark:text-white mb-1 dark:font-mono">Dormant Account Activity</div>
              <div className="text-xs dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textMuted dark:font-mono">ID: #4920 • Last active: 2021</div>
            </div>

            <div className="bg-white dark:bg-[#11110f] border border-gray-100 dark:border-[#2a2a28] rounded-2xl dark:rounded-lg p-5 dark:p-4 hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-md dark:hover:shadow-none dark:hover:border-[#ff8080]/50 transition-all duration-300 cursor-pointer group">
              <div className="flex justify-between items-center mb-3 dark:mb-2">
                <span className="text-[10px] dark:text-[9px] font-bold text-[#ff4d4d] dark:text-[#f97316] bg-[#ffebf0] dark:bg-transparent px-3 dark:px-0 py-1 dark:py-0 rounded-full dark:rounded-none tracking-wider uppercase dark:font-mono">High Risk</span>
                <span className="text-[10px] dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textSubtle font-medium dark:font-mono">8m ago</span>
              </div>
              <div className="font-bold text-sm text-mm-textDark dark:text-white mb-1 dark:font-mono">Velocity Limit Triggered</div>
              <div className="text-xs dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textMuted dark:font-mono">Entity: CC-Global • Burst: 450 trx/sec</div>
            </div>

          </div>
        </div>
      </div>

      {/* Global Signal Hub (Map) */}
      <div className="flex-1 bg-mm-bg dark:bg-[#1a1a18] rounded-[28px] dark:rounded-xl border border-gray-100 dark:border-[#2a2a28] shadow-sm dark:shadow-xl relative overflow-hidden mb-8 dark:mb-6 flex flex-col min-h-[400px] dark:min-h-[350px] transition-all">
        
        {/* Map background pattern */}
        <div className="absolute inset-0 dark:hidden" style={{
            backgroundImage: 'radial-gradient(circle at center, #FEDB71 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.15
        }}></div>
        <div className="absolute inset-0 hidden dark:block" style={{
            backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
            opacity: 0.05
        }}></div>

        <div className="relative z-10 p-8 dark:p-6 flex justify-between items-start pointer-events-none">
          <h3 className="text-2xl dark:text-xl font-bold text-mm-textDark dark:text-white mb-2 dark:font-mono">Global Signal Hub</h3>
        </div>
        <div className="relative z-10 px-8 dark:px-6 flex gap-6 text-[10px] dark:text-[9px] font-bold tracking-wider dark:tracking-[0.1em] uppercase dark:font-mono pointer-events-none">
          <div className="flex items-center gap-2 bg-white dark:bg-transparent px-3 dark:px-0 py-1.5 dark:py-0 rounded-full dark:rounded-none shadow-sm dark:shadow-none border border-gray-100 dark:border-none">
            <div className="w-2.5 h-2.5 dark:w-2 dark:h-2 rounded-full bg-mm-yellow dark:shadow-[0_0_8px_#ffc500]"></div>
            <span className="text-mm-textDark dark:text-white">Active Ingress</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-transparent px-3 dark:px-0 py-1.5 dark:py-0 rounded-full dark:rounded-none shadow-sm dark:shadow-none border border-gray-100 dark:border-none">
            <div className="w-2.5 h-2.5 dark:w-2 dark:h-2 rounded-full bg-gray-300 dark:bg-mm-dark-textSubtle"></div>
            <span className="text-mm-textMuted dark:text-mm-dark-textSubtle">Standby Nodes</span>
          </div>
        </div>

        {/* Map visualization area */}
        <div className="absolute inset-0 mt-16 overflow-hidden flex items-center justify-center">
           {/* Soft light world map silhouette */}
           <div className="w-[80%] h-[80%] opacity-10 dark:opacity-20 relative" style={{
              backgroundImage: 'radial-gradient(circle at center, #140F1F 1.5px, transparent 1.5px)',
              backgroundSize: '10px 10px',
              maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 500\'%3E%3Cpath d=\'M200,150 Q250,100 300,150 T400,100 T500,200 T600,100 T800,200 T900,100 L900,400 L200,400 Z\' fill=\'black\'/%3E%3C/svg%3E")',
              WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 500\'%3E%3Cpath d=\'M200,150 Q250,100 300,150 T400,100 T500,200 T600,100 T800,200 T900,100 L900,400 L200,400 Z\' fill=\'black\'/%3E%3C/svg%3E")',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center'
           }}></div>
           {/* Replace dark mode dots with different styling */}
           <style>
             {`.dark .map-bg-dots { background-image: radial-gradient(circle at center, #888 1px, transparent 1px); background-size: 8px 8px; }`}
           </style>
           <div className="w-[80%] h-[80%] opacity-20 relative hidden dark:block map-bg-dots" style={{
              maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 500\'%3E%3Cpath d=\'M200,150 Q250,100 300,150 T400,100 T500,200 T600,100 T800,200 T900,100 L900,400 L200,400 Z\' fill=\'black\'/%3E%3C/svg%3E")',
              WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 500\'%3E%3Cpath d=\'M200,150 Q250,100 300,150 T400,100 T500,200 T600,100 T800,200 T900,100 L900,400 L200,400 Z\' fill=\'black\'/%3E%3C/svg%3E")',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              position: 'absolute'
           }}></div>
           
           {/* Active Nodes */}
           <div className="absolute top-[40%] left-[20%] w-3 h-3 dark:w-2 dark:h-2 bg-white dark:bg-mm-yellow border-2 border-mm-yellow dark:border-none rounded-full shadow-sm dark:shadow-[0_0_10px_#ffc500] cursor-pointer hover:scale-150 dark:hover:scale-100 transition-transform"></div>
           <div className="absolute top-[60%] left-[45%] w-4 h-4 dark:w-2.5 dark:h-2.5 bg-white dark:bg-mm-yellow border-[3px] border-mm-yellow dark:border-none rounded-full shadow-sm dark:shadow-[0_0_10px_#ffc500] cursor-pointer hover:scale-150 dark:hover:scale-100 transition-transform"></div>
           <div className="absolute top-[35%] left-[65%] w-3 h-3 dark:w-2 dark:h-2 bg-white dark:bg-mm-yellow border-2 border-mm-yellow dark:border-none rounded-full shadow-sm dark:shadow-[0_0_10px_#ffc500] cursor-pointer hover:scale-150 dark:hover:scale-100 transition-transform"></div>
           <div className="absolute top-[75%] left-[70%] w-3 h-3 dark:w-2 dark:h-2 bg-white dark:bg-mm-yellow border-2 border-mm-yellow dark:border-none rounded-full shadow-sm dark:shadow-[0_0_10px_#ffc500] cursor-pointer hover:scale-150 dark:hover:scale-100 transition-transform"></div>

           <div className="absolute top-[45%] right-[10%] w-16 h-16 dark:w-12 dark:h-12 bg-white dark:bg-mm-yellow border-[4px] border-mm-yellow dark:border-none rounded-full shadow-premium dark:shadow-[0_0_30px_#ffc500] flex items-center justify-center text-mm-textDark dark:text-black font-bold text-2xl dark:text-xl hover:scale-110 dark:hover:scale-100 transition-transform cursor-pointer group dark:animate-pulse">
             <div className="absolute inset-0 bg-mm-yellow opacity-20 rounded-full animate-ping group-hover:animate-none dark:hidden"></div>
             *
           </div>
        </div>

        {/* Bottom Left Stats */}
        <div className="absolute bottom-8 left-8 dark:bottom-6 dark:left-6 bg-white/90 dark:bg-[#11110f]/90 backdrop-blur-md border border-gray-100 dark:border-[#2a2a28] rounded-[20px] dark:rounded-lg flex shadow-premium dark:shadow-none divide-x divide-gray-100 dark:divide-[#2a2a28] transition-all">
          <div className="px-6 py-4 dark:px-5 dark:py-3">
             <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase mb-1 font-bold dark:font-mono">Active Regions</div>
             <div className="font-bold text-sm text-mm-textDark dark:text-white dark:font-mono">18 Geo-clusters</div>
          </div>
          <div className="px-6 py-4 dark:px-5 dark:py-3">
             <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase mb-1 font-bold dark:font-mono">Peak Load</div>
             <div className="font-bold text-sm text-mm-yellow drop-shadow-sm dark:drop-shadow-none dark:font-mono">APAC North</div>
          </div>
        </div>

        {/* Bottom Right Zoom */}
        <div className="absolute bottom-8 right-8 dark:bottom-6 dark:right-6 flex gap-3 dark:gap-2 transition-all">
          <button className="w-12 h-12 dark:w-8 dark:h-8 bg-white dark:bg-[#212120] hover:bg-gray-50 dark:hover:bg-[#2a2a28] border border-gray-100 dark:border-[#32322a] shadow-sm dark:shadow-none rounded-2xl dark:rounded flex items-center justify-center text-mm-textDark dark:text-white transition-all hover:-translate-y-1 dark:hover:translate-y-0">
            <ZoomIn size={20} className="dark:w-[14px] dark:h-[14px]" />
          </button>
          <button className="w-12 h-12 dark:w-8 dark:h-8 bg-white dark:bg-[#212120] hover:bg-gray-50 dark:hover:bg-[#2a2a28] border border-gray-100 dark:border-[#32322a] shadow-sm dark:shadow-none rounded-2xl dark:rounded flex items-center justify-center text-mm-textDark dark:text-white transition-all hover:-translate-y-1 dark:hover:translate-y-0">
            <ZoomOut size={20} className="dark:w-[14px] dark:h-[14px]" />
          </button>
        </div>

      </div>

      {/* Bottom Mini Stats */}
      <div className="grid grid-cols-3 gap-8 dark:gap-6">
        
        <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[24px] dark:rounded-xl p-6 dark:p-4 flex items-center gap-6 dark:gap-4 shadow-sm dark:shadow-lg hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-premium dark:hover:shadow-lg transition-all duration-300">
          <div className="w-14 h-14 dark:w-10 dark:h-10 bg-white dark:bg-transparent border border-gray-100 dark:border-[#32322a] shadow-sm dark:shadow-none rounded-[20px] dark:rounded-lg flex items-center justify-center text-mm-yellow transition-all">
            <Shield size={24} strokeWidth={2.5} className="dark:w-[18px] dark:h-[18px] dark:stroke-2" />
          </div>
          <div>
            <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase mb-1 font-bold dark:font-mono">Shield Uptime</div>
            <div className="font-bold text-2xl dark:text-lg text-mm-textDark dark:text-white dark:font-mono">99.998%</div>
          </div>
        </div>

        <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[24px] dark:rounded-xl p-6 dark:p-4 flex items-center gap-6 dark:gap-4 shadow-sm dark:shadow-lg hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-premium dark:hover:shadow-lg transition-all duration-300">
          <div className="w-14 h-14 dark:w-10 dark:h-10 bg-white dark:bg-transparent border border-gray-100 dark:border-[#32322a] shadow-sm dark:shadow-none rounded-[20px] dark:rounded-lg flex items-center justify-center text-mm-yellow transition-all">
            <Zap size={24} strokeWidth={2.5} className="dark:w-[18px] dark:h-[18px] dark:stroke-2" />
          </div>
          <div>
            <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase mb-1 font-bold dark:font-mono">Heuristic Speed</div>
            <div className="font-bold text-2xl dark:text-lg text-mm-textDark dark:text-white dark:font-mono">0.4ms / Signal</div>
          </div>
        </div>

        <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[24px] dark:rounded-xl p-6 dark:p-4 flex items-center gap-6 dark:gap-4 shadow-sm dark:shadow-lg hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-premium dark:hover:shadow-lg transition-all duration-300">
          <div className="w-14 h-14 dark:w-10 dark:h-10 bg-white dark:bg-transparent border border-gray-100 dark:border-[#32322a] shadow-sm dark:shadow-none rounded-[20px] dark:rounded-lg flex items-center justify-center text-mm-yellow transition-all">
            <Users size={24} strokeWidth={2.5} className="dark:w-[18px] dark:h-[18px] dark:stroke-2" />
          </div>
          <div>
            <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase mb-1 font-bold dark:font-mono">Current Analysts</div>
            <div className="font-bold text-2xl dark:text-lg text-mm-textDark dark:text-white dark:font-mono">24 Active</div>
          </div>
        </div>

      </div>

    </div>
  );
}
