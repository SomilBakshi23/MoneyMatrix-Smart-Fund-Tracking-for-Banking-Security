import React from 'react';
import { ShieldAlert, Zap, Search, Fingerprint, Activity, Clock, Filter, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function AlertsView() {
  return (
    <div className="flex-1 flex flex-col bg-mm-card dark:bg-[#11110f] rounded-[28px] dark:rounded-none shadow-premium dark:shadow-none overflow-y-auto p-10 dark:p-8 relative font-sans transition-all duration-300">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-10 dark:mb-8 border-b border-gray-100 dark:border-[#2a2a28] pb-6 dark:pb-4 transition-colors">
        <div>
          <h2 className="text-4xl dark:text-2xl font-bold tracking-tight dark:tracking-normal text-mm-textDark dark:text-white mb-2 dark:mb-1 dark:font-mono">Active Anomalies</h2>
          <p className="text-sm dark:text-xs text-mm-textMuted dark:text-mm-dark-textMuted tracking-wide dark:tracking-normal font-medium dark:font-normal dark:font-mono">
            Real-time heuristic threat detection and investigation queue.
          </p>
        </div>
        <div className="flex gap-4 dark:gap-3">
          <button className="bg-white dark:bg-[#1a1a18] border border-gray-200 dark:border-[#32322a] hover:border-gray-300 dark:hover:border-mm-dark-textSubtle text-mm-textDark dark:text-white px-6 dark:px-4 py-3 dark:py-2 rounded-2xl dark:rounded-lg text-xs dark:text-[10px] font-bold tracking-wider dark:tracking-[0.1em] uppercase transition-all flex items-center gap-2 shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-[#212120] hover:-translate-y-1 dark:hover:translate-y-0 dark:font-mono">
            <Filter size={16} className="dark:w-3.5 dark:h-3.5" />
            Filter
          </button>
          <button className="bg-mm-yellow hover:bg-mm-yellowHover text-mm-textDark dark:text-black px-6 dark:px-4 py-3 dark:py-2 rounded-2xl dark:rounded-lg text-xs dark:text-[10px] font-bold tracking-wider dark:tracking-[0.1em] uppercase transition-all flex items-center gap-2 shadow-premium dark:shadow-[0_0_15px_rgba(255,197,0,0.2)] hover:-translate-y-1 dark:hover:translate-y-0 hover:scale-[1.02] dark:hover:scale-100 dark:font-mono">
            <CheckCircle2 size={16} className="dark:w-3.5 dark:h-3.5" />
            Mark All Read
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-8 dark:gap-6 flex-1">
        
        {/* Left Column - Threat Feed */}
        <div className="col-span-8 flex flex-col h-full bg-mm-bg dark:bg-[#1a1a18] rounded-[28px] dark:rounded-xl border border-gray-100 dark:border-[#2a2a28] shadow-sm dark:shadow-lg hover:shadow-premium dark:hover:shadow-lg transition-all duration-300 overflow-hidden p-2 dark:p-0">
          
          <div className="p-6 dark:p-4 border-b border-gray-100 dark:border-[#2a2a28] flex justify-between items-center bg-white dark:bg-transparent rounded-t-[26px] dark:rounded-none transition-colors">
            <h3 className="text-lg dark:text-sm font-bold text-mm-textDark dark:text-white dark:font-mono">Tactical Alert Feed</h3>
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 dark:h-2 dark:w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mm-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 dark:h-2 dark:w-2 bg-mm-yellow border border-white dark:border-none dark:shadow-[0_0_8px_#ffc500]"></span>
              </span>
              <span className="text-[10px] dark:text-[8px] text-mm-textDark dark:text-mm-yellow tracking-wider dark:tracking-[0.1em] uppercase font-bold dark:font-mono">Live</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 dark:space-y-3 custom-scrollbar">
            
            {/* Alert Item 1 (Critical) */}
            <div className="bg-white dark:bg-[#11110f] border border-[#ffebf0] dark:border-[#330000] rounded-[24px] dark:rounded-lg p-6 dark:p-4 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none hover:-translate-y-1 dark:hover:translate-y-0 dark:hover:border-[#ff4d4d]/50 transition-all duration-300 relative overflow-hidden group cursor-pointer">
              <div className="absolute left-0 top-0 bottom-0 w-2 dark:w-1 bg-[#ff4d4d] dark:shadow-[0_0_10px_#ff4d4d]"></div>
              <div className="flex justify-between items-start mb-4 dark:mb-2 pl-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 dark:w-8 dark:h-8 rounded-xl dark:rounded bg-[#ffebf0] dark:bg-[#330000]/50 text-[#ff4d4d] dark:text-[#ff8080] flex items-center justify-center transition-colors">
                    <ShieldAlert size={20} className="dark:w-4 dark:h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-mm-textDark dark:text-white text-lg dark:text-sm dark:font-mono">Velocity Limit Exceeded</h4>
                    <span className="text-[10px] dark:text-[8px] text-[#ff4d4d] dark:text-[#ff8080] tracking-wider dark:tracking-[0.1em] uppercase font-bold dark:font-mono">Priority: Critical</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm dark:text-[10px] font-bold text-mm-textDark dark:text-white">23:41:09</div>
                  <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:font-mono">Today</div>
                </div>
              </div>
              <div className="pl-14 dark:pl-12 text-sm dark:text-xs text-mm-textMuted dark:text-mm-dark-textMuted mb-4 dark:mb-3 leading-relaxed dark:font-mono">
                Account <span className="font-mono text-mm-textDark dark:text-white font-bold bg-gray-50 dark:bg-[#1f1f1a] px-1 rounded">MX-8892</span> attempted 450 rapid micro-transactions targeting diverse geographic regions within a 2-minute window. Automated freeze applied.
              </div>
              <div className="pl-14 dark:pl-12 flex gap-3 dark:gap-2">
                <button className="bg-mm-yellow hover:bg-mm-yellowHover text-mm-textDark dark:text-black px-5 dark:px-4 py-2 rounded-xl dark:rounded text-xs dark:text-[10px] font-bold tracking-wider dark:tracking-[0.1em] uppercase transition-all shadow-sm dark:shadow-[0_0_10px_rgba(255,197,0,0.2)] dark:font-mono">
                  Investigate
                </button>
                <button className="bg-white dark:bg-[#1a1a18] border border-gray-200 dark:border-[#32322a] hover:bg-gray-50 dark:hover:bg-[#212120] text-mm-textDark dark:text-mm-dark-textSubtle px-5 dark:px-4 py-2 rounded-xl dark:rounded text-xs dark:text-[10px] font-bold tracking-wider dark:tracking-[0.1em] uppercase transition-all shadow-sm dark:shadow-none dark:font-mono">
                  Dismiss
                </button>
              </div>
            </div>

            {/* Alert Item 2 (Warning) */}
            <div className="bg-white dark:bg-[#11110f] border border-mm-yellow/30 dark:border-mm-yellow/20 rounded-[24px] dark:rounded-lg p-6 dark:p-4 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none hover:-translate-y-1 dark:hover:translate-y-0 dark:hover:border-mm-yellow/50 transition-all duration-300 relative overflow-hidden group cursor-pointer">
              <div className="absolute left-0 top-0 bottom-0 w-2 dark:w-1 bg-mm-yellow dark:shadow-[0_0_10px_#ffc500]"></div>
              <div className="flex justify-between items-start mb-4 dark:mb-2 pl-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 dark:w-8 dark:h-8 rounded-xl dark:rounded bg-mm-yellow/20 dark:bg-mm-yellow/10 text-mm-textDark dark:text-mm-yellow flex items-center justify-center transition-colors">
                    <Zap size={20} className="dark:w-4 dark:h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-mm-textDark dark:text-white text-lg dark:text-sm dark:font-mono">Suspicious Ingress Flow</h4>
                    <span className="text-[10px] dark:text-[8px] text-mm-textDark dark:text-mm-yellow tracking-wider dark:tracking-[0.1em] uppercase font-bold dark:font-mono">Priority: Elevated</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm dark:text-[10px] font-bold text-mm-textDark dark:text-white">22:15:44</div>
                  <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:font-mono">Today</div>
                </div>
              </div>
              <div className="pl-14 dark:pl-12 text-sm dark:text-xs text-mm-textMuted dark:text-mm-dark-textMuted mb-4 dark:mb-3 leading-relaxed dark:font-mono">
                Large capital injection of <span className="font-bold text-mm-textDark dark:text-mm-yellow bg-mm-yellow/20 dark:bg-mm-yellow/10 px-1 rounded">$1.2M</span> from previously dormant entity. Geolocation trace indicates discrepancy with registered address.
              </div>
              <div className="pl-14 dark:pl-12 flex gap-3 dark:gap-2">
                <button className="bg-mm-yellow hover:bg-mm-yellowHover text-mm-textDark dark:text-black px-5 dark:px-4 py-2 rounded-xl dark:rounded text-xs dark:text-[10px] font-bold tracking-wider dark:tracking-[0.1em] uppercase transition-all shadow-sm dark:shadow-[0_0_10px_rgba(255,197,0,0.2)] dark:font-mono">
                  Investigate
                </button>
              </div>
            </div>

            {/* Alert Item 3 (Info) */}
            <div className="bg-white dark:bg-[#11110f] border border-gray-200 dark:border-[#2a2a28] rounded-[24px] dark:rounded-lg p-6 dark:p-4 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none hover:-translate-y-1 dark:hover:translate-y-0 dark:hover:border-mm-dark-textSubtle transition-all duration-300 relative overflow-hidden group cursor-pointer">
              <div className="absolute left-0 top-0 bottom-0 w-2 dark:w-1 bg-gray-300 dark:bg-[#32322a]"></div>
              <div className="flex justify-between items-start mb-4 dark:mb-2 pl-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 dark:w-8 dark:h-8 rounded-xl dark:rounded bg-gray-100 dark:bg-[#1f1f1a] text-mm-textMuted dark:text-mm-dark-textSubtle flex items-center justify-center transition-colors">
                    <Fingerprint size={20} className="dark:w-4 dark:h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-mm-textDark dark:text-white text-lg dark:text-sm dark:font-mono">Device Signature Changed</h4>
                    <span className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase font-bold dark:font-mono">Priority: Normal</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm dark:text-[10px] font-bold text-mm-textDark dark:text-white">18:02:10</div>
                  <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:font-mono">Today</div>
                </div>
              </div>
              <div className="pl-14 dark:pl-12 text-sm dark:text-xs text-mm-textMuted dark:text-mm-dark-textMuted mb-4 dark:mb-3 leading-relaxed dark:font-mono">
                User <span className="font-bold text-mm-textDark dark:text-white">C-881</span> authenticated from a new mobile device identifier. MFA challenge was successfully completed.
              </div>
              <div className="pl-14 dark:pl-12 flex gap-3 dark:gap-2">
                <button className="bg-white dark:bg-[#1a1a18] border border-gray-200 dark:border-[#32322a] hover:bg-gray-50 dark:hover:bg-[#212120] text-mm-textDark dark:text-mm-dark-textSubtle px-5 dark:px-4 py-2 rounded-xl dark:rounded text-xs dark:text-[10px] font-bold tracking-wider dark:tracking-[0.1em] uppercase transition-all shadow-sm dark:shadow-none dark:font-mono">
                  View Logs
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column - Threat Mesh & Summary */}
        <div className="col-span-4 flex flex-col gap-8 dark:gap-6">
          
          {/* Abstract Threat Mesh Visual */}
          <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[28px] dark:rounded-xl p-8 dark:p-6 shadow-sm dark:shadow-lg hover:shadow-premium dark:hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase mb-6 dark:mb-4 relative z-10">Pattern Mesh</h3>
            
            <div className="h-48 dark:h-40 relative flex items-center justify-center">
               {/* Soft abstract mesh for light mode */}
               <svg viewBox="0 0 100 100" className="w-full h-full opacity-30 dark:opacity-10 dark:hidden">
                  <path d="M10,50 Q25,25 50,50 T90,50 M20,80 Q40,40 80,80 M30,20 Q60,80 70,20" fill="none" stroke="#140F1F" strokeWidth="1" />
                  <path d="M10,50 L20,80 L50,50 L80,80 L90,50 L70,20 L50,50 L30,20 Z" fill="none" stroke="#FEDB71" strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: 'center' }} />
               </svg>
               {/* Abstract mesh for dark mode */}
               <svg viewBox="0 0 100 100" className="w-full h-full opacity-30 hidden dark:block">
                  <path d="M10,50 Q25,25 50,50 T90,50 M20,80 Q40,40 80,80 M30,20 Q60,80 70,20" fill="none" stroke="#ffc500" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-50" />
                  <path d="M10,50 L20,80 L50,50 L80,80 L90,50 L70,20 L50,50 L30,20 Z" fill="none" stroke="#ff4d4d" strokeWidth="1" className="animate-[spin_10s_linear_infinite] opacity-30" style={{ transformOrigin: 'center' }} />
               </svg>
               
               {/* Nodes */}
               <div className="absolute top-[30%] left-[30%] w-4 h-4 dark:w-3 dark:h-3 bg-white dark:bg-mm-yellow border-2 border-mm-yellow dark:border-none rounded-full shadow-sm dark:shadow-[0_0_10px_#ffc500] hover:scale-150 dark:hover:scale-100 transition-transform cursor-pointer"></div>
               <div className="absolute top-[70%] left-[40%] w-3 h-3 dark:w-2 dark:h-2 bg-white dark:bg-gray-300 dark:bg-mm-dark-textSubtle border-2 border-gray-300 dark:border-none rounded-full shadow-sm dark:shadow-none"></div>
               <div className="absolute top-[50%] left-[60%] w-5 h-5 dark:w-4 dark:h-4 bg-white dark:bg-[#ff4d4d] border-[3px] border-[#ff4d4d] dark:border-none rounded-full shadow-sm dark:shadow-[0_0_15px_#ff4d4d] animate-pulse"></div>
               <div className="absolute top-[20%] left-[70%] w-3 h-3 dark:w-2 dark:h-2 bg-white dark:bg-mm-yellow border-2 border-mm-yellow dark:border-none rounded-full shadow-sm dark:shadow-[0_0_10px_#ffc500]"></div>
            </div>

            <div className="mt-6 dark:mt-4 flex justify-between items-end border-t border-gray-100 dark:border-[#2a2a28] pt-6 dark:pt-4 transition-colors">
               <div>
                 <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase mb-1">Detected Clusters</div>
                 <div className="font-bold text-2xl dark:text-xl text-mm-textDark dark:text-white dark:font-mono">4</div>
               </div>
               <div className="text-right">
                 <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase mb-1">Confidence</div>
                 <div className="font-bold text-2xl dark:text-xl text-mm-yellow dark:text-[#ffc500] drop-shadow-sm dark:drop-shadow-[0_0_10px_#ffc500] dark:font-mono">92%</div>
               </div>
            </div>
          </div>

          {/* Alert Summary Stats */}
          <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[28px] dark:rounded-xl p-8 dark:p-6 shadow-sm dark:shadow-lg hover:shadow-premium dark:hover:shadow-lg transition-all duration-300 flex-1">
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] font-bold dark:font-mono uppercase mb-6 dark:mb-4">Queue Status</h3>
            
            <div className="space-y-6 dark:space-y-4">
              <div>
                <div className="flex justify-between items-end mb-2 dark:mb-1">
                  <span className="text-sm dark:text-xs font-bold text-mm-textDark dark:text-white dark:font-mono">Critical</span>
                  <span className="text-lg dark:text-sm font-bold text-[#ff4d4d] dark:text-[#ff8080] dark:font-mono">12</span>
                </div>
                <div className="h-2 dark:h-1.5 bg-gray-200 dark:bg-[#2a2a28] rounded-full overflow-hidden transition-colors">
                  <div className="h-full bg-[#ff4d4d] dark:shadow-[0_0_8px_#ff4d4d] rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2 dark:mb-1">
                  <span className="text-sm dark:text-xs font-bold text-mm-textDark dark:text-white dark:font-mono">Elevated</span>
                  <span className="text-lg dark:text-sm font-bold text-mm-yellow dark:text-[#ffc500] drop-shadow-sm dark:drop-shadow-none dark:font-mono">45</span>
                </div>
                <div className="h-2 dark:h-1.5 bg-gray-200 dark:bg-[#2a2a28] rounded-full overflow-hidden transition-colors">
                  <div className="h-full bg-mm-yellow dark:shadow-[0_0_8px_#ffc500] rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2 dark:mb-1">
                  <span className="text-sm dark:text-xs font-bold text-mm-textDark dark:text-white dark:font-mono">Normal</span>
                  <span className="text-lg dark:text-sm font-bold text-mm-textMuted dark:text-mm-dark-textSubtle dark:font-mono">128</span>
                </div>
                <div className="h-2 dark:h-1.5 bg-gray-200 dark:bg-[#2a2a28] rounded-full overflow-hidden transition-colors">
                  <div className="h-full bg-gray-300 dark:bg-[#4a4a42] rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            
          </div>

        </div>

      </div>

    </div>
  );
}
