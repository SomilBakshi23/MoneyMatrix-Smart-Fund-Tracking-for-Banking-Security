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
    <div className="flex-1 flex flex-col bg-[#11110f] overflow-y-auto p-8 relative font-sans">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-5xl font-bold tracking-tighter text-white mb-2 uppercase">Configuration Shell</h2>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-mm-yellow rounded-full shadow-[0_0_8px_#ffc500]"></div>
            <span className="font-mono text-[10px] text-mm-textSubtle tracking-[0.2em] uppercase">
              System Operational // Node Matrix Sync Active
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[9px] text-mm-textSubtle tracking-[0.2em] uppercase mb-1">
            Last Updated
          </div>
          <div className="font-mono text-sm tracking-wider text-white">
            2023.10.24 : 14:02:11
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-8 mb-12 flex-1">
        
        {/* Left Column */}
        <div className="col-span-7 flex flex-col gap-8">
          
          {/* Security Protocols */}
          <div>
            <h3 className="font-mono text-[10px] text-mm-textSubtle tracking-[0.2em] uppercase mb-4 font-bold">
              Security Protocols
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* AES Card */}
              <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-xl p-6 shadow-lg flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 border border-[#32322a] rounded flex items-center justify-center text-mm-yellow">
                    <Shield size={18} />
                  </div>
                  {/* Toggle Switch */}
                  <div className="w-10 h-5 bg-mm-yellow/20 rounded-full border border-mm-yellow relative flex items-center cursor-pointer">
                    <div className="w-3 h-3 bg-mm-yellow rounded-full absolute right-1 shadow-[0_0_8px_#ffc500]"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1 uppercase">AES-256 Bit</h4>
                  <h4 className="font-bold text-sm text-white mb-2 uppercase">Encryption</h4>
                  <p className="text-[10px] text-mm-textMuted leading-relaxed">
                    Full packet obfuscation and end-to-end node tunneling.
                  </p>
                </div>
              </div>

              {/* Biometric Card */}
              <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-xl p-6 shadow-lg flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 border border-[#32322a] rounded flex items-center justify-center text-mm-yellow">
                    <Fingerprint size={18} />
                  </div>
                  {/* Toggle Switch */}
                  <div className="w-10 h-5 bg-mm-yellow/20 rounded-full border border-mm-yellow relative flex items-center cursor-pointer">
                    <div className="w-3 h-3 bg-mm-yellow rounded-full absolute right-1 shadow-[0_0_8px_#ffc500]"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-2 uppercase mt-5">Biometric MFA</h4>
                  <p className="text-[10px] text-mm-textMuted leading-relaxed">
                    Liveness detection mandatory for all level 4+ transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Lockdown Triggers Card */}
            <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-xl p-6 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-[#32322a] bg-[#11110f] rounded flex items-center justify-center text-mm-yellow shrink-0">
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1 uppercase">Automated Lockdown Triggers</h4>
                  <p className="text-[10px] text-mm-textMuted">
                    System-wide suspension on pattern anomaly detection.
                  </p>
                </div>
              </div>
              <div className="w-10 h-5 bg-mm-yellow/20 rounded-full border border-mm-yellow relative flex items-center shrink-0 cursor-pointer">
                <div className="w-3 h-3 bg-mm-yellow rounded-full absolute right-1 shadow-[0_0_8px_#ffc500]"></div>
              </div>
            </div>
          </div>

          {/* Node Access */}
          <div>
            <h3 className="font-mono text-[10px] text-mm-textSubtle tracking-[0.2em] uppercase mb-4 font-bold">
              Node Access
            </h3>
            <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-xl shadow-lg overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#2a2a28]">
                    <th className="py-4 pl-6 font-mono text-[8px] text-mm-textSubtle tracking-[0.2em] uppercase font-bold w-1/3">Identifier</th>
                    <th className="py-4 font-mono text-[8px] text-mm-textSubtle tracking-[0.2em] uppercase font-bold w-1/3">IP Protocol</th>
                    <th className="py-4 pr-6 font-mono text-[8px] text-mm-textSubtle tracking-[0.2em] uppercase font-bold w-1/3">Auth Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2a28]">
                  <tr className="hover:bg-[#212120] transition-colors">
                    <td className="py-5 pl-6">
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#32322a] flex items-center justify-center font-mono text-[8px] font-bold text-white">A9</div>
                        <span className="font-bold text-xs tracking-wider text-white">ANALYST_091</span>
                      </div>
                    </td>
                    <td className="py-5 font-mono text-[10px] text-mm-textMuted tracking-wider">
                      192.168.0.12.441
                    </td>
                    <td className="py-5 pr-6">
                      <div className="inline-flex flex-col border border-mm-yellow/30 bg-[#262600]/30 rounded px-3 py-1">
                        <span className="font-mono text-[8px] text-mm-yellow font-bold uppercase tracking-wider text-center border-b border-mm-yellow/30 pb-0.5 mb-0.5">Level 4</span>
                        <span className="font-mono text-[8px] text-mm-yellow uppercase tracking-wider text-center">Clearance</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#212120] transition-colors">
                    <td className="py-5 pl-6">
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#32322a] flex items-center justify-center font-mono text-[8px] font-bold text-white">S2</div>
                        <span className="font-bold text-xs tracking-wider text-white">SUPERVISOR_22</span>
                      </div>
                    </td>
                    <td className="py-5 font-mono text-[10px] text-mm-textMuted tracking-wider">
                      45.221.0.88.109
                    </td>
                    <td className="py-5 pr-6">
                      <div className="inline-flex flex-col border border-[#4a4a42] bg-[#2a2a28]/50 rounded px-3 py-1">
                        <span className="font-mono text-[8px] text-mm-textSubtle font-bold uppercase tracking-wider text-center border-b border-[#4a4a42] pb-0.5 mb-0.5">Level 7</span>
                        <span className="font-mono text-[8px] text-mm-textSubtle uppercase tracking-wider text-center">Clearance</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#212120] transition-colors">
                    <td className="py-5 pl-6">
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#cc0000] flex items-center justify-center font-mono text-[8px] font-bold text-white">K0</div>
                        <span className="font-bold text-xs tracking-wider text-white">KERNEL_ROOT</span>
                      </div>
                    </td>
                    <td className="py-5 font-mono text-[10px] text-mm-textMuted tracking-wider">
                      127.0.0.1.INTERNAL
                    </td>
                    <td className="py-5 pr-6">
                      <div className="inline-flex border border-[#ff4d4d]/30 bg-[#330000]/50 rounded px-3 py-1.5">
                        <span className="font-mono text-[8px] text-[#ff8080] font-bold uppercase tracking-wider text-center">Root_Access</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="col-span-5 flex flex-col gap-8">
          
          {/* Alert Configs */}
          <div>
            <h3 className="font-mono text-[10px] text-mm-textSubtle tracking-[0.2em] uppercase mb-4 font-bold">
              Alert Configs
            </h3>
            <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-xl p-8 shadow-lg">
              
              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <span className="font-mono text-[9px] text-mm-textSubtle tracking-[0.1em] uppercase font-bold">Suspicious Limit</span>
                  <span className="font-bold text-xl text-white tracking-wider">$12,500.00</span>
                </div>
                <div className="h-1.5 w-full bg-[#2a2a28] rounded-full relative">
                  <div className="absolute left-0 top-0 h-full w-[40%] bg-mm-yellow rounded-l-full"></div>
                  <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-4 h-4 bg-mm-yellow rounded-full shadow-[0_0_10px_#ffc500] cursor-pointer"></div>
                </div>
              </div>

              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <span className="font-mono text-[9px] text-mm-textSubtle tracking-[0.1em] uppercase font-bold">Transfer Frequency</span>
                  <span className="font-bold text-xl text-white tracking-wider">15/min</span>
                </div>
                <div className="h-1.5 w-full bg-[#2a2a28] rounded-full relative">
                  <div className="absolute left-0 top-0 h-full w-[25%] bg-mm-yellow rounded-l-full"></div>
                  <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-4 h-4 bg-mm-yellow rounded-full shadow-[0_0_10px_#ffc500] cursor-pointer"></div>
                </div>
              </div>

              <div className="mb-10">
                <span className="font-mono text-[9px] text-mm-textSubtle tracking-[0.1em] uppercase font-bold block mb-4">Sensitivity Offset</span>
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 rounded border border-[#32322a] bg-[#212120] text-mm-textSubtle font-mono text-[10px] font-bold transition-colors hover:bg-[#2a2a28]">
                    0.5x
                  </button>
                  <button className="flex-1 py-2.5 rounded border border-mm-yellow bg-mm-yellow text-black font-mono text-[10px] font-bold shadow-[0_0_15px_rgba(255,197,0,0.3)]">
                    1.0x
                  </button>
                  <button className="flex-1 py-2.5 rounded border border-[#32322a] bg-[#212120] text-mm-textSubtle font-mono text-[10px] font-bold transition-colors hover:bg-[#2a2a28]">
                    2.0x
                  </button>
                  <button className="flex-1 py-2.5 rounded border border-[#32322a] bg-[#212120] text-mm-textSubtle font-mono text-[10px] font-bold transition-colors hover:bg-[#2a2a28]">
                    4.0x
                  </button>
                </div>
              </div>

              <button className="w-full bg-mm-yellow hover:bg-mm-yellowHover text-black font-bold py-4 rounded flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase transition-colors shadow-[0_0_15px_rgba(255,197,0,0.2)]">
                <Save size={16} />
                Commit Thresholds
              </button>

            </div>
          </div>

          {/* Integration Hub */}
          <div>
            <h3 className="font-mono text-[10px] text-mm-textSubtle tracking-[0.2em] uppercase mb-4 font-bold">
              Integration Hub
            </h3>
            
            <div className="space-y-3">
              <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-xl p-4 flex items-center justify-between border-l-[3px] border-l-[#f97316] group hover:bg-[#212120] transition-colors cursor-pointer shadow-md">
                <div className="flex items-center gap-4">
                  <Globe size={18} className="text-mm-yellow" />
                  <div>
                    <div className="font-mono text-[10px] font-bold tracking-wider text-white mb-0.5">SWIFT_API_NODE</div>
                    <div className="font-mono text-[8px] text-mm-textMuted tracking-wider uppercase">Global Financial Network</div>
                  </div>
                </div>
                <div className="bg-[#2a2a28] text-white font-mono text-[8px] tracking-wider px-3 py-1 rounded">
                  LIVE
                </div>
              </div>

              <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-xl p-4 flex items-center justify-between border-l-[3px] border-l-mm-textSubtle group hover:bg-[#212120] transition-colors cursor-pointer shadow-md">
                <div className="flex items-center gap-4">
                  <Database size={18} className="text-mm-textSubtle" />
                  <div>
                    <div className="font-mono text-[10px] font-bold tracking-wider text-white mb-0.5">CRIMINAL_NET_OSINT</div>
                    <div className="font-mono text-[8px] text-mm-textMuted tracking-wider uppercase">Database Synchronization</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                  <span className="text-white font-mono text-[8px] tracking-wider uppercase">Syncing</span>
                </div>
              </div>

              <div className="bg-[#1a1a18] border border-[#2a2a28] rounded-xl p-4 flex items-center justify-between border-l-[3px] border-l-[#ff8080] group hover:bg-[#212120] transition-colors cursor-pointer shadow-md">
                <div className="flex items-center gap-4">
                  <BookOpen size={18} className="text-[#ff8080]" />
                  <div>
                    <div className="font-mono text-[10px] font-bold tracking-wider text-white mb-0.5">REUTERS_SIGNAL_V3</div>
                    <div className="font-mono text-[8px] text-mm-textMuted tracking-wider uppercase">Market Integrity Feed</div>
                  </div>
                </div>
                <div className="bg-[#330000]/50 border border-[#ff4d4d]/30 text-[#ff8080] font-mono text-[8px] tracking-wider px-3 py-1 rounded">
                  OFFLINE
                </div>
              </div>

              <button className="w-full bg-[#1a1a18] hover:bg-[#212120] border border-[#2a2a28] border-dashed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors shadow-sm">
                <Plus size={16} className="text-mm-textSubtle" />
                Provision New Node
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="mt-auto relative pt-12">
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
