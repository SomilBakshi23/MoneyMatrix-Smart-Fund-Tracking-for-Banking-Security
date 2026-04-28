import React from 'react';
import { FileText, Download, MoreVertical, AlertTriangle, ArrowLeftRight, Info, ShieldAlert, Activity, ShieldCheck } from 'lucide-react';

export default function InspectView() {
  return (
    <div className="flex-1 flex flex-col bg-[#161614] overflow-y-auto p-8 relative">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-2">Intelligence Analytics</h2>
          <p className="text-sm text-mm-textMuted max-w-2xl leading-relaxed">
            Q3 Network Flow Analysis & Fraud Cluster Detection. Real-time tactical reporting generated at <span className="text-mm-yellow font-medium">04:12 UTC</span>.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-[#2a2a28] hover:bg-[#32322a] text-white px-5 py-2.5 rounded font-bold text-[11px] tracking-wider transition-colors">
            <FileText size={14} />
            EXPORT CSV
          </button>
          <button className="flex items-center gap-2 bg-mm-yellow hover:bg-mm-yellowHover text-black px-5 py-2.5 rounded font-bold text-[11px] tracking-wider transition-colors shadow-[0_0_15px_rgba(255,197,0,0.2)]">
            <Download size={14} />
            EXPORT PDF
          </button>
        </div>
      </div>

      {/* Top Row: Map & Risk */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        
        {/* Active Fraud Nodes Map */}
        <div className="col-span-8 bg-[#212120] rounded-xl p-8 border border-[#2a2a28] shadow-xl relative overflow-hidden flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="font-mono text-[9px] text-mm-yellow tracking-[0.2em] mb-2 uppercase font-bold">Visual Cluster</div>
              <h3 className="text-2xl font-bold text-white">Active Fraud Nodes</h3>
            </div>
            <div className="bg-[#cc0000] text-white font-mono text-[9px] font-bold tracking-wider px-3 py-1 rounded">
              HIGH THREAT
            </div>
          </div>

          <div className="flex-1 relative mt-4 min-h-[250px] bg-[#1a1a18] rounded-lg border border-[#262622] overflow-hidden">
            {/* World Map Pattern Simulation */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at center, #ffc500 1px, transparent 1px)',
              backgroundSize: '15px 15px',
              maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
            }}></div>
            
            {/* Radar / Nodes */}
            <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-40 h-40 border border-mm-yellow/30 rounded-full flex items-center justify-center">
                <div className="w-20 h-20 border border-mm-yellow/50 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-mm-yellow rounded-full shadow-[0_0_15px_#ffc500]"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 border border-[#ff8080]/30 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-[#ff8080] rounded-full shadow-[0_0_15px_#ff8080]"></div>
              </div>
            </div>

            {/* Bottom Left Centroid Density */}
            <div className="absolute bottom-4 left-4 bg-[#262622]/90 backdrop-blur border border-[#32322a] rounded-lg p-3">
              <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.1em] uppercase mb-1">Centroid Density</div>
              <div className="text-xl font-bold text-mm-yellow">89.4%</div>
            </div>
          </div>
        </div>

        {/* Aggregated Risk */}
        <div className="col-span-4 bg-[#212120] rounded-xl p-8 border border-[#2a2a28] shadow-xl flex flex-col justify-between">
          <div>
            <div className="font-mono text-[10px] text-mm-textSubtle tracking-[0.2em] uppercase font-bold mb-8">Aggregated Risk</div>
            <div className="text-center mb-10">
              <div className="text-7xl font-bold tracking-tighter text-[#ffe699] mb-2 leading-none">74</div>
              <div className="font-mono text-[9px] text-mm-textMuted tracking-[0.2em] uppercase">Global Threat Score</div>
            </div>
            
            <div className="w-full h-2 bg-[#1a1a18] rounded-full overflow-hidden mb-12">
              <div className="h-full bg-gradient-to-r from-mm-yellow to-[#ff8080] w-[74%]"></div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-[#2a2a28] pb-4">
              <span className="font-mono text-[10px] text-mm-textSubtle tracking-[0.1em] uppercase">Active Vectors</span>
              <span className="font-bold text-sm text-white">1,204</span>
            </div>
            <div className="flex justify-between items-center border-b border-[#2a2a28] pb-4">
              <span className="font-mono text-[10px] text-mm-textSubtle tracking-[0.1em] uppercase">Latency Drift</span>
              <span className="font-bold text-sm text-white">+12ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-[10px] text-mm-textSubtle tracking-[0.1em] uppercase">Signal Integrity</span>
              <span className="font-bold text-sm text-white">OPTIMAL</span>
            </div>
          </div>
        </div>

      </div>

      {/* Middle Row: Trends & Feed */}
      <div className="grid grid-cols-12 gap-6 mb-6 h-[340px]">
        
        {/* Flow Trends Chart */}
        <div className="col-span-4 bg-[#212120] rounded-xl p-6 border border-[#2a2a28] shadow-xl flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white">Flow Trends</h3>
            <MoreVertical size={16} className="text-mm-textSubtle" />
          </div>

          {/* Simple Bar Chart */}
          <div className="flex-1 flex items-end justify-between gap-2 mb-6 border-b border-[#2a2a28] pb-2">
            {[3, 4, 6, 9, 10, 6, 4, 3, 4, 3].map((height, i) => (
              <div key={i} className={`w-full rounded-t-sm transition-colors ${i === 4 ? 'bg-mm-yellow' : 'bg-[#32322a]'}`} style={{ height: `${height * 10}%` }}></div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1a1a18] p-3 rounded border border-[#262622]">
              <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.1em] uppercase mb-1">Peak Volume</div>
              <div className="font-bold text-sm text-white">1.2 TB/s</div>
            </div>
            <div className="bg-[#1a1a18] p-3 rounded border border-[#262622]">
              <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.1em] uppercase mb-1">Average Ops</div>
              <div className="font-bold text-sm text-white">842 req/m</div>
            </div>
          </div>
        </div>

        {/* Tactical Feed */}
        <div className="col-span-8 bg-[#212120] rounded-xl border border-[#2a2a28] shadow-xl flex flex-col overflow-hidden">
          <div className="p-5 border-b border-[#2a2a28] flex justify-between items-center bg-[#1a1a18]">
            <h3 className="font-mono text-[10px] font-bold tracking-[0.2em] text-mm-textSubtle uppercase">Tactical Feed // Suspicious Events</h3>
            <span className="font-mono text-[8px] tracking-[0.1em] text-mm-textMuted uppercase">Auto-Refresh: ON</span>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            <div className="space-y-1">
              
              {/* Event 1 */}
              <div className="p-4 hover:bg-[#2a2a28] rounded-lg transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#ff4d4d]/10 flex items-center justify-center border border-[#ff4d4d]/20 shrink-0">
                    <AlertTriangle size={14} className="text-[#ff4d4d]" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white mb-1">Rapid Sequence Outflow</div>
                    <div className="font-mono text-[9px] text-mm-textSubtle">ID: MM-90231 // Wallet Cluster Beta</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="font-bold text-sm text-[#ff8080] mb-1">$452,100</div>
                  <div className="font-mono text-[8px] text-mm-textMuted uppercase tracking-wider">2M AGO</div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="p-4 hover:bg-[#2a2a28] rounded-lg transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-mm-yellow/10 flex items-center justify-center border border-mm-yellow/20 shrink-0">
                    <ArrowLeftRight size={14} className="text-mm-yellow" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white mb-1">Cross-Border Anomaly</div>
                    <div className="font-mono text-[9px] text-mm-textSubtle">ID: MM-88412 // APAC Node 04</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="font-bold text-sm text-white mb-1">$12,400</div>
                  <div className="font-mono text-[8px] text-mm-textMuted uppercase tracking-wider">14M AGO</div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="p-4 hover:bg-[#2a2a28] rounded-lg transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#32322a] flex items-center justify-center border border-[#3a3a32] shrink-0">
                    <Info size={14} className="text-mm-textMuted" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white mb-1">Login Geo-Inconsistency</div>
                    <div className="font-mono text-[9px] text-mm-textSubtle">ID: MM-77123 // User 88219-X</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="font-bold text-sm text-white mb-1">N/A</div>
                  <div className="font-mono text-[8px] text-mm-textMuted uppercase tracking-wider">22M AGO</div>
                </div>
              </div>

              {/* Event 4 */}
              <div className="p-4 hover:bg-[#2a2a28] rounded-lg transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#ff4d4d]/10 flex items-center justify-center border border-[#ff4d4d]/20 shrink-0">
                    <ShieldAlert size={14} className="text-[#ff4d4d]" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white mb-1">Multiple Auth Failure</div>
                    <div className="font-mono text-[9px] text-mm-textSubtle">ID: MM-90234 // Admin Terminal 01</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="font-bold text-sm text-[#ff8080] mb-1">FAILED</div>
                  <div className="font-mono text-[8px] text-mm-textMuted uppercase tracking-wider">45M AGO</div>
                </div>
              </div>

            </div>
          </div>
          
          <div className="p-3 border-t border-[#2a2a28] bg-[#1a1a18] text-center">
            <button className="text-[10px] font-mono font-bold tracking-[0.2em] text-mm-yellow hover:text-mm-yellowHover transition-colors uppercase">
              View Full Terminal Logs
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Row: Mini Charts & Status */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Volume Analytics */}
        <div className="col-span-4 bg-[#212120] rounded-xl p-6 border border-[#2a2a28] shadow-xl flex flex-col justify-between h-[180px]">
          <div className="font-mono text-[9px] text-mm-textSubtle tracking-[0.1em] uppercase mb-4">Volume Analytics</div>
          
          <div className="flex-1 flex items-end justify-center gap-1.5 mb-2">
             {[4, 5, 8, 10, 8, 5, 4].map((h, i) => (
                <div key={i} className={`w-6 rounded-t-sm ${i >= 2 && i <= 4 ? 'bg-mm-yellow shadow-[0_0_10px_rgba(255,197,0,0.5)]' : 'bg-[#32322a]'}`} style={{ height: `${h * 10}%` }}></div>
             ))}
          </div>

          <div className="flex justify-between items-end">
            <div>
              <div className="text-2xl font-bold text-white leading-none">14.8k</div>
              <div className="font-mono text-[8px] text-mm-textMuted uppercase mt-1">Weekly Events</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-mm-yellow leading-none">+22.4%</div>
              <div className="font-mono text-[8px] text-mm-textMuted uppercase mt-1">vs Prev Week</div>
            </div>
          </div>
        </div>

        {/* Entity Integrity */}
        <div className="col-span-4 bg-[#212120] rounded-xl p-6 border border-[#2a2a28] shadow-xl flex flex-col justify-between h-[180px]">
          <div className="font-mono text-[9px] text-mm-textSubtle tracking-[0.1em] uppercase mb-4">Entity Integrity</div>
          
          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <div className="w-24 text-xs font-medium text-white">Verified Nodes</div>
              <div className="flex-1 h-1.5 bg-[#1a1a18] rounded-full overflow-hidden">
                <div className="h-full bg-mm-yellow w-[94%]"></div>
              </div>
              <div className="w-8 text-right font-mono text-[9px] font-bold text-white">94%</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-24 text-xs font-medium text-white leading-tight">Flagged IP Segments</div>
              <div className="flex-1 h-1.5 bg-[#1a1a18] rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-[#ff8080] w-[12%]"></div>
              </div>
              <div className="w-8 text-right font-mono text-[9px] font-bold text-white">12%</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-24 text-xs font-medium text-white leading-tight">Cold Storage Sync</div>
              <div className="flex-1 h-1.5 bg-[#1a1a18] rounded-full overflow-hidden relative">
                <div className="absolute top-0 right-0 h-full bg-mm-textMuted w-[5%]"></div>
              </div>
              <div className="w-8 text-right font-mono text-[9px] font-bold text-white">OK</div>
            </div>
          </div>
        </div>

        {/* Network Status */}
        <div className="col-span-4 bg-[#212120] rounded-xl p-6 border border-[#2a2a28] shadow-xl flex flex-col h-[180px]">
          <div className="font-mono text-[9px] text-mm-textSubtle tracking-[0.1em] uppercase mb-4">Network Status</div>
          
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-16 h-16 shrink-0">
              {/* SVG Donut Chart */}
              <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                <path className="text-[#1a1a18]" strokeWidth="3" stroke="currentColor" fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-mm-yellow" strokeDasharray="88, 100" strokeWidth="3" stroke="currentColor" fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-xs text-white">
                88%
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white text-sm mb-1">Secure Core</h4>
              <p className="text-[10px] text-mm-textMuted leading-relaxed">
                All peripheral nodes responding within expected TTL limits.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
