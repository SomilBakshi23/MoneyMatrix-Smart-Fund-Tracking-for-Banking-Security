import React from 'react';
import { AlertTriangle, Zap, Fingerprint, Ghost, Bitcoin, ExternalLink, Activity, ArrowRight } from 'lucide-react';

export default function AlertsView() {
  return (
    <div className="flex-1 flex flex-col bg-[#161614] overflow-y-auto p-8 relative">
      
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={14} className="text-mm-yellow" />
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-mm-yellow uppercase">Tactical Alert Feed</span>
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-white">Active Anomalies</h2>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-5xl font-bold tracking-tight text-[#ff8080]">-84.2%</div>
          <div className="font-mono text-[9px] tracking-[0.2em] text-mm-textSubtle uppercase">Global Integrity Delta</div>
        </div>
      </div>

      {/* Top Cards Row */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        
        {/* Circular Transaction Mesh Card */}
        <div className="col-span-8 bg-[#212120] rounded-xl p-8 flex flex-col justify-between border border-[#2a2a28] shadow-xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-white">Circular Transaction Mesh</h3>
            <div className="bg-[#cc0000] text-white font-mono text-[9px] font-bold tracking-wider px-3 py-1 rounded">
              CRITICAL SEVERITY
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <div className="font-mono text-[9px] tracking-[0.1em] text-mm-textSubtle mb-1 uppercase">Target Node</div>
              <div className="font-mono text-sm text-white">ACC-9920-X</div>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-[0.1em] text-mm-textSubtle mb-1 uppercase">Path Volatility</div>
              <div className="font-mono text-sm text-[#ff8080]">94.8% Alpha</div>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-[0.1em] text-mm-textSubtle mb-1 uppercase">Total Exposure</div>
              <div className="font-mono text-sm text-white">$1.42M USD</div>
            </div>
          </div>

          {/* Visualization Area */}
          <div className="bg-[#1a1a18] rounded-lg h-40 mb-6 relative overflow-hidden border border-[#262622] flex items-center justify-center">
            {/* Simulated Abstract Mesh */}
            <div className="absolute inset-0">
              <svg className="w-full h-full opacity-60">
                 <path d="M 50,120 Q 200,30 350,120 T 650,100" fill="transparent" stroke="#ffc500" strokeWidth="1" strokeDasharray="2 4" />
                 <path d="M 100,50 C 300,180 400,-20 600,150" fill="transparent" stroke="#ff8080" strokeWidth="1" strokeDasharray="4 2" className="opacity-50" />
                 <circle cx="350" cy="80" r="40" stroke="#ffc500" strokeWidth="1" strokeDasharray="4 4" fill="transparent" />
                 <circle cx="350" cy="80" r="20" stroke="#ff8080" strokeWidth="1" strokeDasharray="2 2" fill="transparent" />
              </svg>
              {/* Nodes */}
              <div className="absolute top-[80px] left-[350px] w-2 h-2 bg-[#ff8080] rounded-full shadow-[0_0_10px_#ff8080] -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-[60px] left-[200px] w-1.5 h-1.5 bg-mm-yellow rounded-full shadow-[0_0_8px_#ffc500] -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-[120px] left-[450px] w-1.5 h-1.5 bg-mm-yellow rounded-full shadow-[0_0_8px_#ffc500] -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute bottom-3 left-3 font-mono text-[8px] text-mm-textSubtle tracking-[0.1em]">
              PATTERN_RECOGNITION_ACTIVE // V.2.0.4
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#1a1a18] border border-[#2a2a28] flex items-center justify-center font-mono text-[10px] text-white z-30">JD</div>
              <div className="w-8 h-8 rounded-full bg-[#1a1a18] border border-mm-yellow flex items-center justify-center font-mono text-[10px] text-mm-yellow z-20">MK</div>
              <div className="w-8 h-8 rounded-full bg-[#1a1a18] border border-[#2a2a28] flex items-center justify-center font-mono text-[10px] text-mm-textSubtle z-10">+4</div>
            </div>
            <button className="bg-mm-yellow hover:bg-mm-yellowHover text-black font-bold py-2.5 px-6 rounded text-[10px] tracking-wider transition-colors shadow-[0_0_15px_rgba(255,197,0,0.2)] flex items-center gap-2">
              INVESTIGATE NODE
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Rapid Transfer Velocity Card */}
        <div className="col-span-4 bg-[#212120] rounded-xl p-8 border border-[#2a2a28] shadow-xl flex flex-col justify-between relative">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 bg-mm-yellow/10 rounded flex items-center justify-center text-mm-yellow">
              <Zap size={20} />
            </div>
            <div className="border border-mm-yellow/30 bg-[#1f1f1a] text-mm-yellow font-mono text-[8px] font-bold tracking-wider px-2 py-1 rounded">
              HIGH WARNING
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white">Rapid Transfer Velocity</h3>
            <p className="text-sm text-mm-textMuted leading-relaxed mb-8">
              System detected 14 transfers across 4 jurisdictions in &lt; 120 seconds.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between font-mono text-[9px] font-bold tracking-[0.1em] mb-2 uppercase">
              <span className="text-mm-textSubtle">Burst Magnitude</span>
              <span className="text-white">Extreme</span>
            </div>
            <div className="w-full h-1 bg-[#1a1a18] rounded-full overflow-hidden">
              <div className="h-full bg-mm-yellow w-[85%]"></div>
            </div>
          </div>

          <button className="w-full bg-transparent hover:bg-[#2a2a28] text-white font-mono font-bold py-3 rounded text-[10px] tracking-[0.2em] transition-colors border border-[#3a3a32]">
            QUICK VIEW
          </button>
        </div>
      </div>

      {/* Middle Mini Cards Row */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        
        {/* Identity Drift */}
        <div className="bg-[#212120] rounded-xl p-6 border border-[#2a2a28] shadow-lg flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Fingerprint size={16} className="text-mm-textMuted" />
            <span className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-white">Identity Drift</span>
          </div>
          <div className="text-3xl font-bold mb-3 text-white">0.82 <span className="text-xs text-mm-textMuted font-mono">COEFF</span></div>
          <div className="font-mono text-[9px] text-[#ff8080] tracking-wider uppercase">Anomaly Detected: Biometric Mismatch</div>
        </div>

        {/* Ghost Nodes */}
        <div className="bg-[#212120] rounded-xl p-6 border border-[#2a2a28] shadow-lg flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Ghost size={16} className="text-mm-textMuted" />
            <span className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-white">Ghost Nodes</span>
          </div>
          <div className="text-3xl font-bold mb-3 text-white">12 <span className="text-xs text-mm-textMuted font-mono">NEW</span></div>
          <div className="font-mono text-[9px] text-mm-yellow tracking-wider uppercase">Dormant Entities Reactivated</div>
        </div>

        {/* Crypto Offramp */}
        <div className="bg-[#212120] rounded-xl p-6 border border-[#2a2a28] shadow-lg flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Bitcoin size={16} className="text-mm-textMuted" />
            <span className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-white">Crypto Offramp</span>
          </div>
          <div className="text-3xl font-bold mb-3 text-white">$440K <span className="text-xs text-mm-textMuted font-mono">VALUE</span></div>
          <div className="font-mono text-[9px] text-mm-textSubtle tracking-wider uppercase">Non-Standard Wallet Routing</div>
        </div>

      </div>

      {/* Bottom List Section */}
      <div className="bg-[#212120] rounded-xl border border-[#2a2a28] shadow-xl overflow-hidden mb-8">
        <div className="p-6 border-b border-[#2a2a28]">
          <h3 className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-white">Alert History Log</h3>
        </div>
        
        <div className="p-2">
          <div className="flex items-center justify-between p-4 hover:bg-[#2a2a28] rounded-lg transition-colors cursor-pointer group">
            <div className="flex items-center gap-6">
              <span className="font-mono text-[10px] text-mm-textSubtle">14:22:01</span>
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff8080] shadow-[0_0_8px_#ff8080]"></div>
                <span className="font-bold text-sm text-white">Layered Structural Incongruity</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-mono text-[9px] font-bold text-[#ff8080] tracking-wider uppercase">High Risk</span>
              <ExternalLink size={14} className="text-mm-textSubtle group-hover:text-white transition-colors" />
            </div>
          </div>
          {/* More rows could go here */}
        </div>
      </div>

      {/* Floating Neural Link Active Indicator */}
      <div className="fixed bottom-12 right-12 bg-[#212120]/95 backdrop-blur-md border border-[#2a2a28] rounded-xl p-4 shadow-2xl flex items-center gap-4 z-50 pointer-events-none">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-mm-yellow/20 border-t-mm-yellow rounded-full animate-spin"></div>
        </div>
        <div>
          <div className="font-mono text-[9px] font-bold tracking-wider text-mm-yellow uppercase mb-0.5">Neural Link Active</div>
          <div className="font-mono text-[9px] text-mm-textSubtle">Scanning nodes 1.4M/sec</div>
        </div>
      </div>

    </div>
  );
}
