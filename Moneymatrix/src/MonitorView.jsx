import React from 'react';
import { Shield, Zap, Users, Search, ZoomIn, ZoomOut, List } from 'lucide-react';

export default function MonitorView() {
  return (
    <div className="flex-1 flex flex-col bg-[#11110f] overflow-y-auto p-8 relative font-sans">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-2">Live Monitor</h2>
          <p className="text-xs text-mm-textMuted tracking-wide">
            Real-time heuristic signal analysis across global networks.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-lg px-6 py-3 flex flex-col justify-center shadow-lg">
            <span className="font-mono text-[9px] text-mm-yellow tracking-[0.1em] uppercase mb-1 font-bold">Active Investigations</span>
            <span className="text-2xl font-bold text-white leading-none">142</span>
          </div>
          <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-lg px-6 py-3 flex flex-col justify-center shadow-lg">
            <span className="font-mono text-[9px] text-mm-textSubtle tracking-[0.1em] uppercase mb-1 font-bold">Threat Level</span>
            <span className="text-2xl font-bold text-[#ffae00] leading-none uppercase">Elevated</span>
          </div>
        </div>
      </div>

      {/* Top Row: Pulse & Stream */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        
        {/* Transaction Pulse */}
        <div className="col-span-8 bg-[#1a1a18] rounded-xl p-6 border border-[#2a2a28] shadow-xl flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Transaction Pulse</h3>
              <div className="text-[10px] text-mm-textMuted">Live volume monitoring across primary protocols</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-mm-yellow rounded-full shadow-[0_0_8px_#ffc500] animate-pulse"></div>
              <span className="font-mono text-[9px] text-mm-yellow tracking-[0.1em] font-bold uppercase">Live Streaming</span>
            </div>
          </div>

          <div className="flex-1 relative mb-6 h-[140px] flex items-end">
             {/* Simulated Sine Wave Chart */}
             <div className="absolute inset-0 border-b border-mm-yellow/20">
               <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0,80 Q 15,30 25,60 T 50,40 T 70,80 T 85,20 T 100,50" fill="none" stroke="#ffc500" strokeWidth="1.5" className="opacity-70" />
                  <path d="M 0,80 Q 15,30 25,60 T 50,40 T 70,80 T 85,20 T 100,50 L 100,100 L 0,100 Z" fill="url(#grad)" className="opacity-10" />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffc500" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="#ffc500" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
               </svg>
               {/* Glowing Points */}
               <div className="absolute top-[50%] left-[20%] w-3 h-3 bg-mm-yellow rounded-full shadow-[0_0_15px_#ffc500] -translate-x-1/2 -translate-y-1/2"></div>
               <div className="absolute top-[60%] left-[40%] w-2 h-2 bg-mm-yellow rounded-full shadow-[0_0_10px_#ffc500] -translate-x-1/2 -translate-y-1/2"></div>
               <div className="absolute top-[30%] left-[75%] w-3 h-3 bg-mm-yellow rounded-full shadow-[0_0_15px_#ffc500] -translate-x-1/2 -translate-y-1/2"></div>
             </div>
          </div>

          <div className="grid grid-cols-4 gap-4 border-t border-[#2a2a28] pt-4">
            <div>
              <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.1em] uppercase mb-1">Throughput</div>
              <div className="font-bold text-sm text-white">14,204 TPS</div>
            </div>
            <div>
              <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.1em] uppercase mb-1">Avg Latency</div>
              <div className="font-bold text-sm text-white">12ms</div>
            </div>
            <div>
              <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.1em] uppercase mb-1">Vol at Risk</div>
              <div className="font-bold text-sm text-mm-yellow">$2.4M</div>
            </div>
            <div>
              <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.1em] uppercase mb-1">Node Health</div>
              <div className="font-bold text-sm text-white">Optimal</div>
            </div>
          </div>
        </div>

        {/* Threat Stream */}
        <div className="col-span-4 bg-[#1a1a18] rounded-xl border border-[#2a2a28] shadow-xl flex flex-col">
          <div className="p-6 border-b border-[#2a2a28] flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">Threat Stream</h3>
            <List size={16} className="text-mm-yellow" />
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            
            <div className="bg-[#11110f] border border-[#2a2a28] rounded-lg p-4 group hover:border-[#ff8080]/50 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[9px] font-bold text-[#f97316] tracking-wider uppercase">High Risk</span>
                <span className="font-mono text-[9px] text-mm-textSubtle">2m ago</span>
              </div>
              <div className="font-bold text-sm text-white mb-1">Large Transfer Detected</div>
              <div className="font-mono text-[9px] text-mm-textMuted">Origin: LU-002 • $45,000.00</div>
            </div>

            <div className="bg-[#11110f] border border-[#2a2a28] rounded-lg p-4 group hover:border-mm-textSubtle transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[9px] font-bold text-mm-textSubtle tracking-wider uppercase">Anomaly</span>
                <span className="font-mono text-[9px] text-mm-textSubtle">5m ago</span>
              </div>
              <div className="font-bold text-sm text-white mb-1">Dormant Account Activity</div>
              <div className="font-mono text-[9px] text-mm-textMuted">ID: #4920 • Last active: 2021</div>
            </div>

            <div className="bg-[#11110f] border border-[#2a2a28] rounded-lg p-4 group hover:border-[#ff8080]/50 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[9px] font-bold text-[#f97316] tracking-wider uppercase">High Risk</span>
                <span className="font-mono text-[9px] text-mm-textSubtle">8m ago</span>
              </div>
              <div className="font-bold text-sm text-white mb-1">Velocity Limit Triggered</div>
              <div className="font-mono text-[9px] text-mm-textMuted">Entity: CC-Global • Burst: 450 trx/sec</div>
            </div>

          </div>
        </div>
      </div>

      {/* Global Signal Hub (Map) */}
      <div className="flex-1 bg-[#1a1a18] rounded-xl border border-[#2a2a28] shadow-xl relative overflow-hidden mb-6 flex flex-col min-h-[350px]">
        
        <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
            opacity: 0.05
        }}></div>

        <div className="relative z-10 p-6 flex justify-between items-start pointer-events-none">
          <h3 className="text-xl font-bold text-white mb-2">Global Signal Hub</h3>
        </div>
        <div className="relative z-10 px-6 flex gap-6 font-mono text-[9px] font-bold tracking-[0.1em] uppercase pointer-events-none">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-mm-yellow shadow-[0_0_8px_#ffc500]"></div>
            <span className="text-white">Active Ingress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-mm-textSubtle"></div>
            <span className="text-mm-textSubtle">Standby Nodes</span>
          </div>
        </div>

        {/* Map visualization area */}
        <div className="absolute inset-0 mt-16 overflow-hidden flex items-center justify-center">
           {/* Faint world map silhouette simulation */}
           <div className="w-[80%] h-[80%] opacity-20 relative" style={{
              backgroundImage: 'radial-gradient(circle at center, #888 1px, transparent 1px)',
              backgroundSize: '8px 8px',
              maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 500\'%3E%3Cpath d=\'M200,150 Q250,100 300,150 T400,100 T500,200 T600,100 T800,200 T900,100 L900,400 L200,400 Z\' fill=\'black\'/%3E%3C/svg%3E")',
              WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 500\'%3E%3Cpath d=\'M200,150 Q250,100 300,150 T400,100 T500,200 T600,100 T800,200 T900,100 L900,400 L200,400 Z\' fill=\'black\'/%3E%3C/svg%3E")',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center'
           }}></div>
           
           {/* Active Nodes */}
           <div className="absolute top-[40%] left-[20%] w-2 h-2 bg-mm-yellow rounded-full shadow-[0_0_10px_#ffc500]"></div>
           <div className="absolute top-[60%] left-[45%] w-2.5 h-2.5 bg-mm-yellow rounded-full shadow-[0_0_10px_#ffc500]"></div>
           <div className="absolute top-[35%] left-[65%] w-2 h-2 bg-mm-yellow rounded-full shadow-[0_0_10px_#ffc500]"></div>
           <div className="absolute top-[75%] left-[70%] w-2 h-2 bg-mm-yellow rounded-full shadow-[0_0_10px_#ffc500]"></div>

           <div className="absolute top-[45%] right-[10%] w-12 h-12 bg-mm-yellow rounded-full shadow-[0_0_30px_#ffc500] flex items-center justify-center text-black font-bold text-xl animate-pulse">
             *
           </div>
        </div>

        {/* Bottom Left Stats */}
        <div className="absolute bottom-6 left-6 bg-[#11110f]/90 backdrop-blur border border-[#2a2a28] rounded-lg flex divide-x divide-[#2a2a28]">
          <div className="px-5 py-3">
             <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.1em] uppercase mb-1">Active Regions</div>
             <div className="font-bold text-sm text-white">18 Geo-clusters</div>
          </div>
          <div className="px-5 py-3">
             <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.1em] uppercase mb-1">Peak Load</div>
             <div className="font-bold text-sm text-mm-yellow">APAC North</div>
          </div>
        </div>

        {/* Bottom Right Zoom */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          <button className="w-8 h-8 bg-[#212120] hover:bg-[#2a2a28] border border-[#32322a] rounded flex items-center justify-center text-white transition-colors">
            <ZoomIn size={14} />
          </button>
          <button className="w-8 h-8 bg-[#212120] hover:bg-[#2a2a28] border border-[#32322a] rounded flex items-center justify-center text-white transition-colors">
            <ZoomOut size={14} />
          </button>
        </div>

      </div>

      {/* Bottom Mini Stats */}
      <div className="grid grid-cols-3 gap-6">
        
        <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-xl p-4 flex items-center gap-4 shadow-lg">
          <div className="w-10 h-10 border border-[#32322a] rounded-lg flex items-center justify-center text-mm-yellow">
            <Shield size={18} />
          </div>
          <div>
            <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.1em] uppercase mb-0.5">Shield Uptime</div>
            <div className="font-bold text-lg text-white">99.998%</div>
          </div>
        </div>

        <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-xl p-4 flex items-center gap-4 shadow-lg">
          <div className="w-10 h-10 border border-[#32322a] rounded-lg flex items-center justify-center text-mm-yellow">
            <Zap size={18} />
          </div>
          <div>
            <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.1em] uppercase mb-0.5">Heuristic Speed</div>
            <div className="font-bold text-lg text-white">0.4ms / Signal</div>
          </div>
        </div>

        <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-xl p-4 flex items-center gap-4 shadow-lg">
          <div className="w-10 h-10 border border-[#32322a] rounded-lg flex items-center justify-center text-mm-yellow">
            <Users size={18} />
          </div>
          <div>
            <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.1em] uppercase mb-0.5">Current Analysts</div>
            <div className="font-bold text-lg text-white">24 Active</div>
          </div>
        </div>

      </div>

    </div>
  );
}
