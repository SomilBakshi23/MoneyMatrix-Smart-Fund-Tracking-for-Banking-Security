import React from 'react';
import { Download, FileText, ChevronDown, Activity, ShieldAlert, BarChart3, Fingerprint, RefreshCw } from 'lucide-react';

export default function InspectView() {
  return (
    <div className="flex-1 flex flex-col bg-mm-card dark:bg-[#11110f] rounded-[28px] dark:rounded-none shadow-premium dark:shadow-none overflow-y-auto p-10 dark:p-8 relative font-sans transition-all duration-300">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-8 dark:mb-6 border-b border-gray-100 dark:border-[#2a2a28] pb-6 dark:pb-4 transition-colors">
        <div>
          <h2 className="text-4xl dark:text-2xl font-bold tracking-tight dark:tracking-normal text-mm-textDark dark:text-white mb-2 dark:mb-1 dark:font-mono">Intelligence Analytics</h2>
          <p className="text-sm dark:text-xs text-mm-textMuted dark:text-mm-dark-textMuted tracking-wide dark:tracking-normal font-medium dark:font-normal dark:font-mono">
            Deep inspection of high-confidence threat clusters.
          </p>
        </div>
        <div className="flex gap-4 dark:gap-3">
          <button className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-200 dark:border-[#32322a] hover:border-gray-300 dark:hover:border-mm-dark-textSubtle text-mm-textDark dark:text-white px-6 dark:px-4 py-3 dark:py-2 rounded-[16px] dark:rounded-lg text-xs dark:text-[10px] font-bold tracking-wider dark:tracking-[0.1em] uppercase transition-all duration-300 flex items-center gap-2 shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-[#212120] hover:-translate-y-1 dark:hover:translate-y-0 dark:font-mono">
            <Download size={14} className="dark:w-3 dark:h-3" />
            Export CSV
          </button>
          <button className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-200 dark:border-[#32322a] hover:border-gray-300 dark:hover:border-mm-dark-textSubtle text-mm-textDark dark:text-white px-6 dark:px-4 py-3 dark:py-2 rounded-[16px] dark:rounded-lg text-xs dark:text-[10px] font-bold tracking-wider dark:tracking-[0.1em] uppercase transition-all duration-300 flex items-center gap-2 shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-[#212120] hover:-translate-y-1 dark:hover:translate-y-0 dark:font-mono">
            <FileText size={14} className="dark:w-3 dark:h-3" />
            Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 dark:gap-6">
        
        {/* Left Column - Large Map & Volume */}
        <div className="col-span-8 flex flex-col gap-8 dark:gap-6">
          
          {/* Active Fraud Nodes Map Card */}
          <div className="bg-mm-bg dark:bg-[#1a1a18] rounded-[28px] dark:rounded-xl border border-gray-100 dark:border-[#2a2a28] p-8 dark:p-6 shadow-sm dark:shadow-lg hover:shadow-premium dark:hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-center mb-6 dark:mb-4">
              <h3 className="font-bold text-lg dark:text-sm text-mm-textDark dark:text-white dark:font-mono">Active Fraud Nodes</h3>
              <div className="flex items-center gap-2 bg-white dark:bg-transparent px-4 dark:px-0 py-2 dark:py-0 rounded-xl dark:rounded-none shadow-sm dark:shadow-none border border-gray-100 dark:border-none cursor-pointer hover:bg-gray-50 dark:hover:bg-transparent transition-all">
                <span className="text-[10px] dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase">Timeframe:</span>
                <span className="text-[10px] dark:text-[9px] text-mm-textDark dark:text-white font-bold dark:font-mono tracking-wider dark:tracking-[0.1em] uppercase border-b dark:border-mm-dark-textSubtle">Last 24H</span>
                <ChevronDown size={14} className="text-mm-textMuted dark:text-mm-dark-textSubtle dark:w-3 dark:h-3" />
              </div>
            </div>

            <div className="h-[280px] dark:h-[240px] w-full bg-white dark:bg-[#11110f] rounded-3xl dark:rounded-lg border border-gray-100 dark:border-[#2a2a28] relative overflow-hidden flex items-center justify-center shadow-sm dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] transition-all">
              {/* Map Visualization Backgrounds */}
              <div className="absolute inset-0 bg-[radial-gradient(#FCFAF8_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:hidden"></div>
              <div className="absolute inset-0 hidden dark:block" style={{
                backgroundImage: 'radial-gradient(circle at center, #32322a 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                opacity: 0.3
              }}></div>
              
              {/* Central Tracker Node */}
              <div className="relative">
                <div className="w-48 h-48 dark:w-40 dark:h-40 border border-mm-yellow/20 dark:border-mm-yellow/10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite]"></div>
                <div className="w-32 h-32 dark:w-24 dark:h-24 border border-mm-yellow/40 dark:border-[#ff4d4d]/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_6s_linear_infinite_reverse]"></div>
                <div className="w-48 h-48 dark:w-40 dark:h-40 border border-transparent dark:border-mm-yellow/5 border-l-mm-yellow/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] hidden dark:block"></div>
                
                <div className="w-16 h-16 dark:w-12 dark:h-12 bg-mm-yellow/10 dark:bg-mm-yellow/5 border-2 border-mm-yellow dark:border-mm-yellow/50 rounded-full flex items-center justify-center relative z-10 shadow-sm dark:shadow-[0_0_20px_rgba(255,197,0,0.2)] cursor-pointer hover:scale-110 dark:hover:scale-100 transition-transform">
                  <Activity size={24} className="text-mm-textDark dark:text-mm-yellow dark:w-5 dark:h-5" />
                </div>
                
                {/* Secondary nodes */}
                <div className="absolute -top-12 -right-16 dark:-top-10 dark:-right-12 w-4 h-4 dark:w-3 dark:h-3 bg-white dark:bg-mm-yellow border-2 border-mm-yellow dark:border-none rounded-full shadow-sm dark:shadow-[0_0_10px_#ffc500] cursor-pointer hover:scale-150 dark:hover:scale-100 transition-transform"></div>
                <div className="absolute bottom-8 -left-20 dark:bottom-6 dark:-left-16 w-3 h-3 dark:w-2 dark:h-2 bg-white dark:bg-[#ff4d4d] border-2 border-[#ff4d4d] dark:border-none rounded-full shadow-sm dark:shadow-[0_0_10px_#ff4d4d] cursor-pointer hover:scale-150 dark:hover:scale-100 transition-transform"></div>
                
                {/* Connecting Lines for Dark Mode */}
                <svg className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden dark:block" viewBox="0 0 200 200">
                  <path d="M100,100 L140,60" stroke="#ffc500" strokeWidth="1" strokeDasharray="2 2" className="opacity-30"/>
                  <path d="M100,100 L40,140" stroke="#ff4d4d" strokeWidth="1" strokeDasharray="2 2" className="opacity-30"/>
                </svg>
              </div>

              {/* Map Info Box */}
              <div className="absolute bottom-6 right-6 dark:bottom-4 dark:right-4 bg-white/90 dark:bg-[#1a1a18]/90 backdrop-blur-md border border-gray-100 dark:border-[#2a2a28] px-5 dark:px-4 py-3 dark:py-2 rounded-2xl dark:rounded-lg shadow-sm dark:shadow-none transition-all">
                <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase mb-1 dark:mb-0">Centroid Density</div>
                <div className="text-xl dark:text-lg font-bold text-mm-textDark dark:text-white dark:font-mono">89.4%</div>
              </div>
            </div>
          </div>

          {/* Volume Analytics */}
          <div className="bg-mm-bg dark:bg-[#1a1a18] rounded-[28px] dark:rounded-xl border border-gray-100 dark:border-[#2a2a28] p-8 dark:p-6 shadow-sm dark:shadow-lg hover:shadow-premium dark:hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-center mb-6 dark:mb-4">
              <h3 className="font-bold text-lg dark:text-sm text-mm-textDark dark:text-white dark:font-mono">Volume Analytics</h3>
              <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase border-b dark:border-mm-dark-textSubtle">USD EQUIVALENT</div>
            </div>
            
            <div className="h-40 dark:h-32 flex items-end gap-3 dark:gap-2 px-4 dark:px-2 transition-all">
              {/* Bar Chart */}
              {[40, 25, 60, 45, 80, 55, 30, 90, 65, 45, 70, 50].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end group">
                  <div 
                    className={`w-full rounded-t-lg dark:rounded-t-sm transition-all duration-300 cursor-pointer group-hover:bg-mm-yellow dark:group-hover:bg-[#ffc500]/80 ${i === 7 ? 'bg-mm-yellow dark:bg-mm-yellow shadow-sm dark:shadow-[0_0_15px_rgba(255,197,0,0.3)]' : 'bg-gray-200 dark:bg-[#2a2a28]'}`} 
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column - Risk & Feed */}
        <div className="col-span-4 flex flex-col gap-8 dark:gap-6">
          
          {/* Aggregated Risk Score */}
          <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[28px] dark:rounded-xl p-8 dark:p-6 shadow-sm dark:shadow-lg hover:shadow-premium dark:hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center">
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase mb-6 dark:mb-4 w-full text-left">Aggregated Risk</h3>
            
            {/* Risk Circular Meter */}
            <div className="w-36 h-36 dark:w-32 dark:h-32 rounded-full border-[8px] dark:border-[4px] border-gray-100 dark:border-[#2a2a28] flex flex-col items-center justify-center relative mb-6 dark:mb-4 shadow-sm dark:shadow-none bg-white dark:bg-transparent transition-all">
              <div className="absolute inset-0 border-[8px] dark:border-[4px] border-mm-yellow rounded-full shadow-sm dark:shadow-[0_0_15px_rgba(255,197,0,0.3)]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 75%)' }}></div>
              <span className="text-5xl dark:text-4xl font-bold text-mm-textDark dark:text-white tracking-tighter dark:tracking-normal dark:font-mono">74</span>
              <span className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-yellow tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase mt-1">Critical</span>
            </div>

            <div className="w-full flex justify-between px-4 dark:px-0 border-t border-gray-100 dark:border-[#2a2a28] pt-6 dark:pt-4 mt-2 dark:mt-0 transition-colors">
              <div className="text-left">
                <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase mb-1">Integrity</div>
                <div className="font-bold text-lg dark:text-sm text-mm-textDark dark:text-white dark:font-mono">Low</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase mb-1">Velocity</div>
                <div className="font-bold text-lg dark:text-sm text-[#ff4d4d] dark:font-mono">High</div>
              </div>
            </div>
          </div>

          {/* Flow Trends mini chart */}
          <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[28px] dark:rounded-xl p-8 dark:p-6 shadow-sm dark:shadow-lg hover:shadow-premium dark:hover:shadow-lg transition-all duration-300">
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase mb-6 dark:mb-4">Flow Trends</h3>
            <div className="h-20 dark:h-16 flex items-end gap-2 dark:gap-1.5 transition-all">
              {[20, 35, 25, 45, 30, 60, 40, 75, 50, 85].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end group">
                  <div 
                    className={`w-full rounded-md dark:rounded-sm transition-all duration-300 cursor-pointer group-hover:bg-mm-yellow dark:group-hover:bg-[#ffc500]/80 ${i === 9 ? 'bg-mm-yellow shadow-sm dark:shadow-[0_0_10px_rgba(255,197,0,0.3)]' : 'bg-gray-200 dark:bg-[#2a2a28]'}`} 
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Tactical Feed */}
          <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[28px] dark:rounded-xl p-6 shadow-sm dark:shadow-lg hover:shadow-premium dark:hover:shadow-lg transition-all duration-300 flex-1 flex flex-col overflow-hidden">
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase mb-4 px-2 dark:px-0">Tactical Feed</h3>
            
            <div className="flex-1 overflow-y-auto space-y-4 dark:space-y-3 pr-2 custom-scrollbar">
              
              <div className="bg-white dark:bg-[#11110f] border border-gray-100 dark:border-[#2a2a28] p-4 rounded-2xl dark:rounded-lg shadow-sm dark:shadow-none hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-md dark:hover:shadow-none dark:hover:border-[#ff8080]/50 transition-all cursor-pointer group">
                <div className="flex gap-3">
                  <div className="w-8 h-8 dark:w-7 dark:h-7 rounded-xl dark:rounded bg-[#ffebf0] dark:bg-[#330000]/50 text-[#ff4d4d] dark:text-[#ff8080] flex items-center justify-center shrink-0 transition-all">
                    <ShieldAlert size={16} className="dark:w-3.5 dark:h-3.5" />
                  </div>
                  <div>
                    <div className="text-sm dark:text-xs font-bold text-mm-textDark dark:text-white mb-1 dark:mb-0.5 leading-tight dark:font-mono">Rapid Sequence Outflow</div>
                    <div className="text-[10px] dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textMuted font-medium dark:font-mono">Multiple nodes • 12s ago</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#11110f] border border-gray-100 dark:border-[#2a2a28] p-4 rounded-2xl dark:rounded-lg shadow-sm dark:shadow-none hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-md dark:hover:shadow-none dark:hover:border-mm-yellow/50 transition-all cursor-pointer group">
                <div className="flex gap-3">
                  <div className="w-8 h-8 dark:w-7 dark:h-7 rounded-xl dark:rounded bg-mm-yellow/20 dark:bg-mm-yellow/10 text-mm-textDark dark:text-mm-yellow flex items-center justify-center shrink-0 transition-all">
                    <RefreshCw size={16} className="dark:w-3.5 dark:h-3.5" />
                  </div>
                  <div>
                    <div className="text-sm dark:text-xs font-bold text-mm-textDark dark:text-white mb-1 dark:mb-0.5 leading-tight dark:font-mono">Cross-Border Anomaly</div>
                    <div className="text-[10px] dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textMuted font-medium dark:font-mono">LU ↔ KY • 45s ago</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#11110f] border border-gray-100 dark:border-[#2a2a28] p-4 rounded-2xl dark:rounded-lg shadow-sm dark:shadow-none hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-md dark:hover:shadow-none dark:hover:border-mm-dark-textSubtle transition-all cursor-pointer group">
                <div className="flex gap-3">
                  <div className="w-8 h-8 dark:w-7 dark:h-7 rounded-xl dark:rounded bg-gray-100 dark:bg-[#1f1f1a] text-mm-textMuted dark:text-mm-dark-textSubtle flex items-center justify-center shrink-0 transition-all">
                    <Fingerprint size={16} className="dark:w-3.5 dark:h-3.5" />
                  </div>
                  <div>
                    <div className="text-sm dark:text-xs font-bold text-mm-textDark dark:text-white mb-1 dark:mb-0.5 leading-tight dark:font-mono">Signature Mismatch</div>
                    <div className="text-[10px] dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textMuted font-medium dark:font-mono">Auth Node 7 • 2m ago</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Health Metrics */}
      <div className="grid grid-cols-3 gap-8 dark:gap-6 mt-8 dark:mt-6 transition-all">
        
        <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[24px] dark:rounded-xl p-6 dark:p-5 shadow-sm dark:shadow-lg hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-premium dark:hover:shadow-lg transition-all duration-300">
          <div className="flex justify-between items-center mb-4 dark:mb-3">
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase">Entity Integrity</h3>
            <span className="font-bold text-lg dark:text-sm text-mm-textDark dark:text-white dark:font-mono">82%</span>
          </div>
          <div className="h-2 dark:h-1.5 w-full bg-gray-200 dark:bg-[#2a2a28] rounded-full overflow-hidden transition-all">
             <div className="h-full w-[82%] bg-mm-yellow dark:shadow-[0_0_8px_#ffc500] rounded-full"></div>
          </div>
        </div>

        <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[24px] dark:rounded-xl p-6 dark:p-5 shadow-sm dark:shadow-lg hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-premium dark:hover:shadow-lg transition-all duration-300">
          <div className="flex justify-between items-center mb-4 dark:mb-3">
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase">Network Status</h3>
            <span className="font-bold text-lg dark:text-sm text-mm-textDark dark:text-white dark:font-mono">Optimal</span>
          </div>
          <div className="h-2 dark:h-1.5 w-full bg-gray-200 dark:bg-[#2a2a28] rounded-full overflow-hidden transition-all">
             <div className="h-full w-[100%] bg-mm-yellow dark:shadow-[0_0_8px_#ffc500] rounded-full"></div>
          </div>
        </div>

        <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[24px] dark:rounded-xl p-6 dark:p-5 shadow-sm dark:shadow-lg hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-premium dark:hover:shadow-lg transition-all duration-300 flex items-center justify-between">
           <div>
             <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase mb-1">Secure Core</h3>
             <div className="font-bold text-lg dark:text-sm text-mm-textDark dark:text-white dark:font-mono">Online</div>
           </div>
           <div className="w-12 h-12 dark:w-10 dark:h-10 rounded-full border-4 dark:border-2 border-mm-yellow flex items-center justify-center bg-white dark:bg-transparent shadow-sm dark:shadow-[0_0_15px_rgba(255,197,0,0.2)] transition-all">
             <ShieldAlert size={16} className="text-mm-textDark dark:text-mm-yellow dark:w-4 dark:h-4" />
           </div>
        </div>

      </div>

    </div>
  );
}
