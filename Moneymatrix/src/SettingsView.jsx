import React from 'react';
import { 
  Shield, 
  Fingerprint, 
  ShieldAlert, 
  Save,
  Globe,
  Database,
  BookOpen,
  Plus
} from 'lucide-react';

export default function SettingsView() {
  return (
    <div className="flex-1 flex flex-col bg-mm-card dark:bg-[#11110f] rounded-[28px] dark:rounded-none shadow-premium dark:shadow-none overflow-y-auto p-10 dark:p-8 relative font-sans transition-all duration-300">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-4xl dark:text-5xl font-bold tracking-tight dark:tracking-tighter text-mm-textDark dark:text-white mb-2 dark:uppercase transition-all">Configuration Shell</h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 dark:w-1.5 dark:h-1.5 bg-mm-yellow rounded-full dark:shadow-[0_0_8px_#ffc500]"></div>
            <span className="text-sm dark:text-[10px] font-bold dark:font-normal text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.2em] uppercase dark:font-mono">
              System Operational // Node Matrix Sync Active
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs dark:text-[9px] font-bold dark:font-normal text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.2em] uppercase mb-1 dark:font-mono">
            Last Updated
          </div>
          <div className="font-mono text-sm tracking-wider text-mm-textDark dark:text-white font-bold dark:font-normal">
            2023.10.24 : 14:02:11
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-8 mb-12 flex-1 relative z-10">
        
        {/* Left Column */}
        <div className="col-span-7 flex flex-col gap-6 dark:gap-8">
          
          {/* Security Protocols */}
          <div>
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.2em] uppercase mb-4 font-bold dark:font-mono pl-2 dark:pl-0">
              Security Protocols
            </h3>
            
            <div className="grid grid-cols-2 gap-6 dark:gap-4 mb-6 dark:mb-4">
              {/* AES Card */}
              <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[28px] dark:rounded-xl p-8 dark:p-6 shadow-sm dark:shadow-lg hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-premium dark:hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-8 dark:mb-6">
                  <div className="w-12 h-12 dark:w-10 dark:h-10 bg-white dark:bg-transparent shadow-sm dark:shadow-none rounded-[16px] dark:rounded dark:border dark:border-[#32322a] flex items-center justify-center text-mm-yellow transition-all">
                    <Shield size={22} strokeWidth={2.5} className="dark:w-[18px] dark:h-[18px] dark:stroke-2" />
                  </div>
                  {/* Toggle Switch */}
                  <div className="w-12 h-6 dark:w-10 dark:h-5 bg-mm-yellow dark:bg-mm-yellow/20 rounded-full dark:border dark:border-mm-yellow relative flex items-center cursor-pointer shadow-sm dark:shadow-none transition-all">
                    <div className="w-4 h-4 dark:w-3 dark:h-3 bg-white dark:bg-mm-yellow rounded-full absolute right-1 shadow-sm dark:shadow-[0_0_8px_#ffc500]"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg dark:text-sm text-mm-textDark dark:text-white mb-2 dark:mb-1 dark:uppercase">AES-256 Bit Encryption</h4>
                  <p className="text-sm dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textMuted leading-relaxed">
                    Full packet obfuscation and end-to-end node tunneling.
                  </p>
                </div>
              </div>

              {/* Biometric Card */}
              <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[28px] dark:rounded-xl p-8 dark:p-6 shadow-sm dark:shadow-lg hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-premium dark:hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-8 dark:mb-6">
                  <div className="w-12 h-12 dark:w-10 dark:h-10 bg-white dark:bg-transparent shadow-sm dark:shadow-none rounded-[16px] dark:rounded dark:border dark:border-[#32322a] flex items-center justify-center text-mm-yellow transition-all">
                    <Fingerprint size={22} strokeWidth={2.5} className="dark:w-[18px] dark:h-[18px] dark:stroke-2" />
                  </div>
                  {/* Toggle Switch */}
                  <div className="w-12 h-6 dark:w-10 dark:h-5 bg-mm-yellow dark:bg-mm-yellow/20 rounded-full dark:border dark:border-mm-yellow relative flex items-center cursor-pointer shadow-sm dark:shadow-none transition-all">
                    <div className="w-4 h-4 dark:w-3 dark:h-3 bg-white dark:bg-mm-yellow rounded-full absolute right-1 shadow-sm dark:shadow-[0_0_8px_#ffc500]"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg dark:text-sm text-mm-textDark dark:text-white mb-2 dark:mb-1 dark:uppercase">Biometric MFA</h4>
                  <p className="text-sm dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textMuted leading-relaxed">
                    Liveness detection mandatory for all level 4+ transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Lockdown Triggers Card */}
            <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[28px] dark:rounded-xl p-6 shadow-sm dark:shadow-lg hover:-translate-y-1 dark:hover:translate-y-0 hover:shadow-premium dark:hover:shadow-lg transition-all duration-300 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 dark:w-12 dark:h-12 bg-white dark:bg-[#11110f] shadow-sm dark:shadow-none rounded-[20px] dark:rounded dark:border dark:border-[#32322a] flex items-center justify-center text-mm-yellow shrink-0 transition-all">
                  <ShieldAlert size={24} strokeWidth={2.5} className="dark:w-[20px] dark:h-[20px] dark:stroke-2" />
                </div>
                <div>
                  <h4 className="font-bold text-lg dark:text-sm text-mm-textDark dark:text-white mb-1 dark:uppercase">Automated Lockdown Triggers</h4>
                  <p className="text-sm dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textMuted">
                    System-wide suspension on pattern anomaly detection.
                  </p>
                </div>
              </div>
              <div className="w-12 h-6 dark:w-10 dark:h-5 bg-mm-yellow dark:bg-mm-yellow/20 rounded-full dark:border dark:border-mm-yellow relative flex items-center cursor-pointer shadow-sm dark:shadow-none shrink-0 transition-all">
                <div className="w-4 h-4 dark:w-3 dark:h-3 bg-white dark:bg-mm-yellow rounded-full absolute right-1 shadow-sm dark:shadow-[0_0_8px_#ffc500]"></div>
              </div>
            </div>
          </div>

          {/* Node Access */}
          <div className="mt-4 dark:mt-0">
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.2em] uppercase mb-4 font-bold dark:font-mono pl-2 dark:pl-0">
              Node Access
            </h3>
            <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[28px] dark:rounded-xl shadow-sm dark:shadow-lg overflow-hidden p-2 dark:p-0 transition-all duration-300">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-[#2a2a28]">
                    <th className="py-4 pl-6 text-xs dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.2em] uppercase font-bold dark:font-mono w-1/3">Identifier</th>
                    <th className="py-4 text-xs dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.2em] uppercase font-bold dark:font-mono w-1/3">IP Protocol</th>
                    <th className="py-4 pr-6 text-xs dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.2em] uppercase font-bold dark:font-mono w-1/3">Auth Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-[#2a2a28]">
                  <tr className="hover:bg-white dark:hover:bg-[#212120] transition-colors">
                    <td className="py-5 pl-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 dark:w-6 dark:h-6 rounded-xl dark:rounded-full bg-white dark:bg-[#32322a] shadow-sm dark:shadow-none flex items-center justify-center font-bold text-sm dark:text-[8px] text-mm-textDark dark:text-white dark:font-mono transition-all">A9</div>
                        <span className="font-bold text-sm dark:text-xs tracking-wider text-mm-textDark dark:text-white">ANALYST_091</span>
                      </div>
                    </td>
                    <td className="py-5 font-mono text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textMuted tracking-wider">
                      192.168.0.12.441
                    </td>
                    <td className="py-5 pr-6">
                      <div className="inline-flex flex-col bg-mm-yellow/10 dark:bg-[#262600]/30 rounded-xl dark:rounded px-4 dark:px-3 py-2 dark:py-1 border border-mm-yellow/20 dark:border-mm-yellow/30 transition-all">
                        <span className="text-[10px] dark:text-[8px] text-mm-textDark dark:text-mm-yellow font-bold uppercase tracking-wider text-center border-b border-mm-yellow/20 dark:border-mm-yellow/30 pb-1 dark:pb-0.5 mb-1 dark:mb-0.5 dark:font-mono">Level 4</span>
                        <span className="text-[10px] dark:text-[8px] text-mm-textDark dark:text-mm-yellow uppercase tracking-wider text-center dark:font-mono">Clearance</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-white dark:hover:bg-[#212120] transition-colors">
                    <td className="py-5 pl-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 dark:w-6 dark:h-6 rounded-xl dark:rounded-full bg-white dark:bg-[#32322a] shadow-sm dark:shadow-none flex items-center justify-center font-bold text-sm dark:text-[8px] text-mm-textDark dark:text-white dark:font-mono transition-all">S2</div>
                        <span className="font-bold text-sm dark:text-xs tracking-wider text-mm-textDark dark:text-white">SUPERVISOR_22</span>
                      </div>
                    </td>
                    <td className="py-5 font-mono text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textMuted tracking-wider">
                      45.221.0.88.109
                    </td>
                    <td className="py-5 pr-6">
                      <div className="inline-flex flex-col bg-gray-100 dark:bg-[#2a2a28]/50 rounded-xl dark:rounded px-4 dark:px-3 py-2 dark:py-1 border border-gray-200 dark:border-[#4a4a42] transition-all">
                        <span className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle font-bold uppercase tracking-wider text-center border-b border-gray-200 dark:border-[#4a4a42] pb-1 dark:pb-0.5 mb-1 dark:mb-0.5 dark:font-mono">Level 7</span>
                        <span className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textSubtle uppercase tracking-wider text-center dark:font-mono">Clearance</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-white dark:hover:bg-[#212120] transition-colors">
                    <td className="py-5 pl-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 dark:w-6 dark:h-6 rounded-xl dark:rounded-full bg-[#ffebf0] dark:bg-[#cc0000] text-[#ff4d4d] dark:text-white shadow-sm dark:shadow-none flex items-center justify-center font-bold text-sm dark:text-[8px] dark:font-mono transition-all">K0</div>
                        <span className="font-bold text-sm dark:text-xs tracking-wider text-mm-textDark dark:text-white">KERNEL_ROOT</span>
                      </div>
                    </td>
                    <td className="py-5 font-mono text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textMuted tracking-wider">
                      127.0.0.1.INTERNAL
                    </td>
                    <td className="py-5 pr-6">
                      <div className="inline-flex bg-[#ffebf0] dark:bg-[#330000]/50 border border-[#ff4d4d]/20 dark:border-[#ff4d4d]/30 rounded-xl dark:rounded px-4 dark:px-3 py-3 dark:py-1.5 transition-all">
                        <span className="text-[10px] dark:text-[8px] text-[#ff4d4d] dark:text-[#ff8080] font-bold uppercase tracking-wider text-center dark:font-mono">Root_Access</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="col-span-5 flex flex-col gap-6 dark:gap-8">
          
          {/* Alert Configs */}
          <div>
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.2em] uppercase mb-4 font-bold dark:font-mono pl-2 dark:pl-0">
              Alert Configs
            </h3>
            <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[28px] dark:rounded-xl p-8 shadow-sm dark:shadow-lg hover:shadow-premium dark:hover:shadow-lg transition-all duration-300">
              
              <div className="mb-10 dark:mb-8">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-xs dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase font-bold dark:font-mono">Suspicious Limit</span>
                  <span className="font-bold text-2xl dark:text-xl text-mm-textDark dark:text-white tracking-wider">$12,500.00</span>
                </div>
                <div className="h-2 dark:h-1.5 w-full bg-gray-200 dark:bg-[#2a2a28] rounded-full relative transition-all">
                  <div className="absolute left-0 top-0 h-full w-[40%] bg-mm-yellow rounded-l-full"></div>
                  <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-6 h-6 dark:w-4 dark:h-4 bg-white dark:bg-mm-yellow border-2 border-mm-yellow dark:border-none rounded-full shadow-sm dark:shadow-[0_0_10px_#ffc500] cursor-pointer hover:scale-110 dark:hover:scale-100 transition-transform"></div>
                </div>
              </div>

              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-xs dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase font-bold dark:font-mono">Transfer Frequency</span>
                  <span className="font-bold text-2xl dark:text-xl text-mm-textDark dark:text-white tracking-wider">15/min</span>
                </div>
                <div className="h-2 dark:h-1.5 w-full bg-gray-200 dark:bg-[#2a2a28] rounded-full relative transition-all">
                  <div className="absolute left-0 top-0 h-full w-[25%] bg-mm-yellow rounded-l-full"></div>
                  <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-6 h-6 dark:w-4 dark:h-4 bg-white dark:bg-mm-yellow border-2 border-mm-yellow dark:border-none rounded-full shadow-sm dark:shadow-[0_0_10px_#ffc500] cursor-pointer hover:scale-110 dark:hover:scale-100 transition-transform"></div>
                </div>
              </div>

              <div className="mb-12 dark:mb-10">
                <span className="text-xs dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.1em] uppercase font-bold block mb-4 dark:font-mono">Sensitivity Offset</span>
                <div className="flex gap-4 dark:gap-3">
                  <button className="flex-1 py-3 dark:py-2.5 rounded-xl dark:rounded border border-gray-200 dark:border-[#32322a] bg-white dark:bg-[#212120] text-mm-textMuted dark:text-mm-dark-textSubtle text-sm dark:text-[10px] font-bold dark:font-mono transition-all hover:bg-gray-50 dark:hover:bg-[#2a2a28] hover:-translate-y-1 dark:hover:translate-y-0">
                    0.5x
                  </button>
                  <button className="flex-1 py-3 dark:py-2.5 rounded-xl dark:rounded border border-mm-yellow bg-mm-yellow text-mm-textDark dark:text-black text-sm dark:text-[10px] font-bold dark:font-mono shadow-sm dark:shadow-[0_0_15px_rgba(255,197,0,0.3)] hover:-translate-y-1 dark:hover:translate-y-0 transition-all">
                    1.0x
                  </button>
                  <button className="flex-1 py-3 dark:py-2.5 rounded-xl dark:rounded border border-gray-200 dark:border-[#32322a] bg-white dark:bg-[#212120] text-mm-textMuted dark:text-mm-dark-textSubtle text-sm dark:text-[10px] font-bold dark:font-mono transition-all hover:bg-gray-50 dark:hover:bg-[#2a2a28] hover:-translate-y-1 dark:hover:translate-y-0">
                    2.0x
                  </button>
                  <button className="flex-1 py-3 dark:py-2.5 rounded-xl dark:rounded border border-gray-200 dark:border-[#32322a] bg-white dark:bg-[#212120] text-mm-textMuted dark:text-mm-dark-textSubtle text-sm dark:text-[10px] font-bold dark:font-mono transition-all hover:bg-gray-50 dark:hover:bg-[#2a2a28] hover:-translate-y-1 dark:hover:translate-y-0">
                    4.0x
                  </button>
                </div>
              </div>

              <button className="w-full bg-mm-yellow hover:bg-mm-yellowHover text-mm-textDark dark:text-black font-bold py-5 dark:py-4 rounded-2xl dark:rounded flex items-center justify-center gap-3 text-sm dark:text-[11px] tracking-wider dark:tracking-[0.2em] uppercase transition-all shadow-premium dark:shadow-[0_0_15px_rgba(255,197,0,0.2)] hover:-translate-y-1 dark:hover:translate-y-0 hover:scale-[1.02] dark:hover:scale-100 dark:font-mono">
                <Save size={20} className="dark:w-[16px] dark:h-[16px]" />
                COMMIT THRESHOLDS
              </button>

            </div>
          </div>

          {/* Integration Hub */}
          <div className="mt-4 dark:mt-0">
            <h3 className="text-xs dark:text-[10px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.2em] uppercase mb-4 font-bold dark:font-mono pl-2 dark:pl-0">
              Integration Hub
            </h3>
            
            <div className="space-y-4 dark:space-y-3">
              <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[24px] dark:rounded-xl p-5 dark:p-4 flex items-center justify-between border-l-[6px] dark:border-l-[3px] border-l-mm-yellow dark:border-l-[#f97316] hover:shadow-premium dark:hover:shadow-md hover:-translate-y-1 dark:hover:translate-y-0 dark:hover:bg-[#212120] transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-5 dark:gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center dark:w-auto dark:h-auto dark:bg-transparent dark:shadow-none dark:rounded-none">
                    <Globe size={20} className="text-mm-yellow dark:w-[18px] dark:h-[18px]" />
                  </div>
                  <div>
                    <div className="text-sm dark:text-[10px] font-bold tracking-wider text-mm-textDark dark:text-white mb-1 dark:mb-0.5 dark:font-mono">SWIFT_API_NODE</div>
                    <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textMuted tracking-wider uppercase font-bold dark:font-mono">Global Financial Network</div>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-[#2a2a28] text-mm-textDark dark:text-white text-[10px] dark:text-[8px] tracking-wider px-4 dark:px-3 py-2 dark:py-1 rounded-lg dark:rounded font-bold dark:font-mono transition-all">
                  LIVE
                </div>
              </div>

              <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[24px] dark:rounded-xl p-5 dark:p-4 flex items-center justify-between border-l-[6px] dark:border-l-[3px] border-l-gray-300 dark:border-l-mm-dark-textSubtle hover:shadow-premium dark:hover:shadow-md hover:-translate-y-1 dark:hover:translate-y-0 dark:hover:bg-[#212120] transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-5 dark:gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center dark:w-auto dark:h-auto dark:bg-transparent dark:shadow-none dark:rounded-none">
                    <Database size={20} className="text-gray-400 dark:text-mm-dark-textSubtle dark:w-[18px] dark:h-[18px]" />
                  </div>
                  <div>
                    <div className="text-sm dark:text-[10px] font-bold tracking-wider text-mm-textDark dark:text-white mb-1 dark:mb-0.5 dark:font-mono">CRIMINAL_NET_OSINT</div>
                    <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textMuted tracking-wider uppercase font-bold dark:font-mono">Database Synchronization</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-transparent px-4 dark:px-0 py-2 dark:py-0 rounded-lg dark:rounded-none">
                  <div className="w-2 h-2 dark:w-1.5 dark:h-1.5 rounded-full bg-mm-yellow dark:bg-white animate-pulse"></div>
                  <span className="text-mm-textDark dark:text-white text-[10px] dark:text-[8px] tracking-wider uppercase font-bold dark:font-mono">Syncing</span>
                </div>
              </div>

              <div className="bg-mm-bg dark:bg-[#1a1a18] border border-gray-100 dark:border-[#2a2a28] rounded-[24px] dark:rounded-xl p-5 dark:p-4 flex items-center justify-between border-l-[6px] dark:border-l-[3px] border-l-[#ff8080] dark:border-l-[#ff8080] hover:shadow-premium dark:hover:shadow-md hover:-translate-y-1 dark:hover:translate-y-0 dark:hover:bg-[#212120] transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-5 dark:gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center dark:w-auto dark:h-auto dark:bg-transparent dark:shadow-none dark:rounded-none">
                    <BookOpen size={20} className="text-[#ff4d4d] dark:text-[#ff8080] dark:w-[18px] dark:h-[18px]" />
                  </div>
                  <div>
                    <div className="text-sm dark:text-[10px] font-bold tracking-wider text-mm-textDark dark:text-white mb-1 dark:mb-0.5 dark:font-mono">REUTERS_SIGNAL_V3</div>
                    <div className="text-[10px] dark:text-[8px] text-mm-textMuted dark:text-mm-dark-textMuted tracking-wider uppercase font-bold dark:font-mono">Market Integrity Feed</div>
                  </div>
                </div>
                <div className="bg-[#ffebf0] dark:bg-[#330000]/50 text-[#ff4d4d] dark:text-[#ff8080] text-[10px] dark:text-[8px] tracking-wider px-4 dark:px-3 py-2 dark:py-1 rounded-lg dark:rounded font-bold dark:font-mono border border-[#ff4d4d]/20 dark:border-[#ff4d4d]/30 transition-all">
                  OFFLINE
                </div>
              </div>

              <button className="w-full bg-white dark:bg-[#1a1a18] hover:bg-gray-50 dark:hover:bg-[#212120] border border-gray-200 dark:border-[#2a2a28] border-dashed text-mm-textDark dark:text-white font-bold py-5 dark:py-4 rounded-[24px] dark:rounded-xl flex items-center justify-center gap-3 text-xs dark:text-[10px] tracking-wider dark:tracking-[0.2em] uppercase transition-all hover:shadow-sm dark:hover:shadow-none hover:-translate-y-1 dark:hover:translate-y-0 dark:font-mono">
                <Plus size={18} className="text-mm-textMuted dark:text-mm-dark-textSubtle dark:w-[16px] dark:h-[16px]" />
                Provision New Node
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Area (Dark Mode Only) */}
      <div className="mt-auto relative pt-12 hidden dark:block">
        {/* Yellow Bar Chart blocks visualization */}
        <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end opacity-20 pointer-events-none">
          <div className="w-1/6 bg-mm-yellow h-[20%] skew-y-[-2deg] origin-bottom-left"></div>
          <div className="w-1/6 bg-mm-yellow h-[40%] skew-y-[-2deg] origin-bottom-left -ml-1"></div>
          <div className="w-1/6 bg-mm-yellow h-[15%] skew-y-[-2deg] origin-bottom-left -ml-1"></div>
          <div className="w-1/4 bg-mm-yellow h-[80%] skew-y-[-2deg] origin-bottom-left -ml-1"></div>
          <div className="flex-1 bg-mm-yellow h-[10%] skew-y-[-2deg] origin-bottom-left -ml-1"></div>
        </div>

        <div className="text-center font-mono text-[8px] text-[#4a4a42] tracking-[0.4em] uppercase relative z-10 pb-4">
          MoneyMatrix // Configuration_Shell_Module_V4.02.99
        </div>
      </div>

    </div>
  );
}
