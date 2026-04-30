import React from 'react';
import { FileText, Lock, ShieldCheck, Code, AlertTriangle, User } from 'lucide-react';

export default function SupportView() {
  return (
    <div className="flex-1 flex flex-col bg-mm-card dark:bg-[#11110f] rounded-[28px] dark:rounded-none shadow-premium dark:shadow-none overflow-y-auto p-10 dark:p-8 relative font-sans transition-all duration-300 custom-scrollbar">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-10 dark:mb-8">
        <div>
          <div className="text-[10px] dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider dark:tracking-[0.2em] uppercase mb-2 font-bold dark:font-mono">
            Tactical Overview
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-mm-textDark dark:text-white mb-2 dark:font-mono uppercase transition-all">
            Support Intel Matrix
          </h2>
        </div>
        <div className="flex gap-4">
          <div className="border border-gray-100 dark:border-[#2a2a28] rounded-[24px] dark:rounded-full px-8 py-3 dark:px-6 dark:py-2 flex flex-col items-center justify-center shadow-sm dark:shadow-none bg-mm-bg dark:bg-[#1a1a18]">
            <span className="text-[8px] dark:text-[7px] text-mm-textMuted dark:text-[#a3a398] tracking-widest uppercase mb-1 font-bold dark:font-mono">Global Latency</span>
            <span className="text-xl dark:text-lg font-bold text-mm-textDark dark:text-[#FEDB71] leading-none dark:font-mono">14.2ms</span>
          </div>
          <div className="border border-gray-100 dark:border-[#2a2a28] rounded-[24px] dark:rounded-full px-8 py-3 dark:px-6 dark:py-2 flex flex-col items-center justify-center shadow-sm dark:shadow-none bg-mm-bg dark:bg-[#1a1a18]">
            <span className="text-[8px] dark:text-[7px] text-mm-textMuted dark:text-[#a3a398] tracking-widest uppercase mb-1 font-bold dark:font-mono">Node Uptime</span>
            <span className="text-xl dark:text-lg font-bold text-mm-textDark dark:text-[#FEDB71] leading-none dark:font-mono">99.999%</span>
          </div>
        </div>
      </div>

      {/* Top Row: Traffic & Breach Protocol */}
      <div className="grid grid-cols-12 gap-8 dark:gap-6 mb-8 dark:mb-6">
        
        {/* Real-Time Traffic Load */}
        <div className="col-span-8 bg-mm-bg dark:bg-[#1a1a18] rounded-[28px] dark:rounded-2xl p-8 dark:p-6 border border-gray-100 dark:border-[#2a2a28] shadow-sm dark:shadow-lg flex flex-col">
          <h3 className="text-[10px] dark:text-[9px] font-bold text-mm-textDark dark:text-[#FEDB71] mb-6 dark:font-mono tracking-widest uppercase">
            Real-Time Traffic Load
          </h3>
          <div className="flex-1 flex items-end gap-2 h-[120px]">
            {/* Mock Bars */}
            {[40, 60, 50, 80, 100, 70, 60, 50, 40, 30, 50].map((height, i) => (
              <div 
                key={i} 
                className={`flex-1 rounded-sm transition-all duration-500 ${height === 100 ? 'bg-mm-yellow dark:bg-[#FEDB71] shadow-[0_0_15px_#FEDB71]' : height === 80 ? 'bg-gray-300 dark:bg-[#4a4a42]' : 'bg-gray-200 dark:bg-[#2a2a28]'}`}
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>

        {/* System Breach Protocol */}
        <div className="col-span-4 bg-mm-yellow dark:bg-[#FEDB71] rounded-[28px] dark:rounded-2xl p-8 dark:p-6 shadow-[0_8px_30px_rgba(254,219,113,0.3)] flex flex-col relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
          <div className="absolute top-6 right-6 border border-black/20 rounded px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-black">
            Urgent
          </div>
          <AlertTriangle size={24} className="text-black mb-4" />
          <h3 className="text-2xl font-black text-black mb-4 leading-tight">
            SYSTEM BREACH<br/>PROTOCOL
          </h3>
          <p className="text-sm text-black/80 font-medium">
            Immediate node isolation required for Cluster-7 deployment.
          </p>
        </div>
      </div>

      {/* Middle Section: Knowledge Archive & Admin Link */}
      <div className="grid grid-cols-12 gap-8 dark:gap-6 mb-8 dark:mb-6">
        
        {/* Knowledge Archive */}
        <div className="col-span-9">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-sm dark:text-xs font-bold text-mm-textDark dark:text-white uppercase tracking-widest dark:font-mono">
              Knowledge Archive
            </h3>
            <div className="flex-1 h-px bg-gray-200 dark:bg-[#2a2a28]"></div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-mm-bg dark:bg-[#1a1a18] rounded-2xl p-6 border border-gray-100 dark:border-[#2a2a28] hover:border-mm-yellow dark:hover:border-[#FEDB71] transition-colors cursor-pointer group shadow-sm dark:shadow-none">
              <FileText size={18} className="text-mm-textDark dark:text-white mb-4 group-hover:text-mm-yellow transition-colors" />
              <h4 className="text-[10px] font-bold text-mm-textDark dark:text-white uppercase tracking-widest mb-3 dark:font-mono">Technical Docs</h4>
              <p className="text-[10px] text-mm-textMuted dark:text-[#a3a398] leading-relaxed dark:font-mono">Deep integration specs for core ledger modules and routing protocols.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-mm-bg dark:bg-[#1a1a18] rounded-2xl p-6 border border-gray-100 dark:border-[#2a2a28] hover:border-mm-yellow dark:hover:border-[#FEDB71] transition-colors cursor-pointer group shadow-sm dark:shadow-none">
              <Lock size={18} className="text-mm-textDark dark:text-white mb-4 group-hover:text-mm-yellow transition-colors" />
              <h4 className="text-[10px] font-bold text-mm-textDark dark:text-white uppercase tracking-widest mb-3 dark:font-mono">Security Protocols</h4>
              <p className="text-[10px] text-mm-textMuted dark:text-[#a3a398] leading-relaxed dark:font-mono">Mandatory encryption standards and multi-sig clearance documentation.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-mm-bg dark:bg-[#1a1a18] rounded-2xl p-6 border border-gray-100 dark:border-[#2a2a28] hover:border-mm-yellow dark:hover:border-[#FEDB71] transition-colors cursor-pointer group shadow-sm dark:shadow-none">
              <ShieldCheck size={18} className="text-mm-textDark dark:text-white mb-4 group-hover:text-mm-yellow transition-colors" />
              <h4 className="text-[10px] font-bold text-mm-textDark dark:text-white uppercase tracking-widest mb-3 dark:font-mono">Compliance Guides</h4>
              <p className="text-[10px] text-mm-textMuted dark:text-[#a3a398] leading-relaxed dark:font-mono">Global regulatory frameworks and automated reporting standards.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-mm-bg dark:bg-[#1a1a18] rounded-2xl p-6 border border-gray-100 dark:border-[#2a2a28] hover:border-mm-yellow dark:hover:border-[#FEDB71] transition-colors cursor-pointer group shadow-sm dark:shadow-none">
              <Code size={18} className="text-mm-textDark dark:text-white mb-4 group-hover:text-mm-yellow transition-colors" />
              <h4 className="text-[10px] font-bold text-mm-textDark dark:text-white uppercase tracking-widest mb-3 dark:font-mono">API Reference</h4>
              <p className="text-[10px] text-mm-textMuted dark:text-[#a3a398] leading-relaxed dark:font-mono">RESTful endpoints, WebSocket streams, and sandbox authentication.</p>
            </div>
          </div>
        </div>

        {/* Direct Admin Link */}
        <div className="col-span-3 bg-mm-bg dark:bg-[#1a1a18] rounded-[28px] dark:rounded-2xl p-8 dark:p-6 border border-gray-100 dark:border-[#2a2a28] shadow-sm dark:shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm dark:text-[11px] font-bold text-mm-textDark dark:text-white uppercase tracking-widest mb-4 dark:font-mono">
              Direct Admin Link
            </h3>
            <p className="text-[10px] text-mm-textMuted dark:text-[#a3a398] leading-relaxed dark:font-mono mb-6">
              Direct encrypted communication with level-9 system architects for emergency override.
            </p>
            
            <div className="flex items-center gap-4 bg-gray-50 dark:bg-[#11110f] p-3 rounded-xl border border-gray-100 dark:border-[#2a2a28] mb-6">
              <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-[#2a2a28] flex items-center justify-center overflow-hidden relative">
                <User size={20} className="text-gray-400 dark:text-[#6b6b63]" />
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-mm-yellow dark:bg-[#FEDB71] rounded-full border border-white dark:border-[#11110f]"></div>
              </div>
              <div>
                <div className="text-[8px] font-bold text-mm-textMuted dark:text-[#a3a398] uppercase tracking-widest dark:font-mono">Admin ID</div>
                <div className="text-xs font-bold text-mm-textDark dark:text-white dark:font-mono">V. Sokolov</div>
              </div>
            </div>
          </div>

          <div>
            <button className="w-full bg-mm-yellow dark:bg-[#FEDB71] hover:bg-mm-yellowHover dark:hover:bg-[#e6b200] text-black font-bold py-4 rounded-xl text-[10px] tracking-widest uppercase transition-colors shadow-[0_4px_14px_rgba(254,219,113,0.3)] dark:shadow-[0_0_15px_rgba(255,197,0,0.2)] dark:font-mono mb-4">
              Emergency Override
            </button>
            <div className="flex items-center justify-between px-2">
              <span className="text-[8px] font-bold text-mm-textMuted dark:text-[#a3a398] uppercase tracking-widest dark:font-mono">Admin Load</span>
              <span className="text-[8px] font-bold text-mm-textDark dark:text-[#FEDB71] uppercase tracking-widest dark:font-mono">Moderate</span>
            </div>
            <div className="h-1 bg-gray-100 dark:bg-[#2a2a28] w-full rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-mm-yellow dark:bg-[#FEDB71] w-[40%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Global Risk Dial */}
      <div className="bg-mm-bg dark:bg-[#1a1a18] rounded-[28px] dark:rounded-2xl p-8 dark:p-8 border border-gray-100 dark:border-[#2a2a28] shadow-sm dark:shadow-lg flex items-center justify-between">
        
        {/* Risk Dial */}
        <div className="flex items-center gap-8">
          <div>
            <div className="text-[9px] font-bold text-mm-textMuted dark:text-[#6b6b63] uppercase tracking-[0.2em] mb-6 dark:font-mono">
              Global Risk Dial
            </div>
            <div className="flex items-center gap-6">
              {/* Circular Progress */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" className="text-gray-200 dark:text-[#2a2a28]" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="283" strokeDashoffset="70" className="text-mm-textDark dark:text-[#FEDB71]" strokeLinecap="round" />
                </svg>
                <span className="absolute text-xl font-bold text-mm-textDark dark:text-white dark:font-mono">75%</span>
              </div>
              <div>
                <div className="text-sm font-bold text-mm-textDark dark:text-[#FEDB71] tracking-wider uppercase mb-1 dark:font-mono">Elevated Risk</div>
                <div className="text-[9px] text-mm-textMuted dark:text-[#a3a398] uppercase tracking-widest dark:font-mono">Protocol 08-Alpha<br/>Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Throughput Metrics Mini Chart */}
        <div className="flex flex-col items-center">
           <div className="text-[9px] font-bold text-mm-textMuted dark:text-[#6b6b63] uppercase tracking-[0.2em] mb-6 dark:font-mono">
              Throughput Metrics
            </div>
            <div className="flex items-end gap-1.5 h-10">
              {[20, 30, 40, 60, 40, 100, 30, 20, 10].map((h, i) => (
                <div key={i} className={`w-3 rounded-sm ${h === 100 ? 'bg-mm-yellow dark:bg-[#FEDB71]' : 'bg-gray-200 dark:bg-[#2a2a28]'}`} style={{ height: `${h}%` }}></div>
              ))}
            </div>
        </div>

        {/* System Secure Status */}
        <div className="flex flex-col items-end justify-center">
           <div className="flex items-center gap-2 mb-2">
             <div className="w-2 h-2 rounded-full bg-mm-yellow dark:bg-[#FEDB71] animate-pulse"></div>
             <span className="text-[10px] font-bold text-mm-textDark dark:text-white uppercase tracking-widest dark:font-mono">System Secure</span>
           </div>
           <div className="text-[8px] text-mm-textMuted dark:text-[#6b6b63] uppercase tracking-widest dark:font-mono text-right">
             Last Integrity Check: 0.003s ago<br/><br/>
             <span className="text-[6px] opacity-50">NODE HASH: 8F93-AE21-FF02-BC91</span>
           </div>
        </div>

      </div>

    </div>
  );
}
