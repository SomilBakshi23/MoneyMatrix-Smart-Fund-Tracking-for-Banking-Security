import React from 'react';
import { 
  Plus, 
  Minus, 
  RotateCcw,
  Search,
  Grid,
  SlidersHorizontal,
  UserCircle,
  HelpCircle,
  LogOut,
  Target,
  Share2,
  Bell,
  SearchIcon,
  Settings,
  X,
  Building2,
  User,
  Wallet,
  AlertTriangle,
  Activity,
  ArrowRight
} from 'lucide-react';

export default function Dashboard({ onLogout }) {
  return (
    <div className="h-screen w-full bg-[#0d0d0c] text-white font-sans flex overflow-hidden selection:bg-mm-yellow selection:text-black">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0a0a] border-r border-[#1f1f1a] flex flex-col justify-between shrink-0 h-full relative z-20">
        <div>
          {/* Logo Section */}
          <div className="p-8 pb-6">
            <h1 className="text-2xl font-bold tracking-tight text-mm-yellow mb-1">
              MoneyMatrix
            </h1>
            <div className="font-mono text-[9px] text-mm-textSubtle tracking-[0.2em] uppercase">
              Signal Black Terminal
            </div>
          </div>

          {/* Action Button */}
          <div className="px-6 mb-8">
            <button className="w-full bg-mm-yellow hover:bg-mm-yellowHover text-black font-bold py-3 rounded text-[11px] tracking-wider transition-colors shadow-[0_0_15px_rgba(255,197,0,0.15)]">
              NEW INVESTIGATION
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col">
            <button className="flex items-center gap-4 px-8 py-4 text-mm-textMuted hover:text-white transition-colors border-l-[3px] border-transparent text-xs font-mono tracking-wider w-full text-left">
              <Target size={18} />
              MONITOR
            </button>
            <button className="flex items-center gap-4 px-8 py-4 text-mm-yellow bg-mm-yellow/5 border-l-[3px] border-mm-yellow text-xs font-mono tracking-wider w-full text-left shadow-[inset_20px_0_20px_-20px_rgba(255,197,0,0.2)]">
              <Share2 size={18} />
              NETWORK
            </button>
            <button className="flex items-center gap-4 px-8 py-4 text-mm-textMuted hover:text-white transition-colors border-l-[3px] border-transparent text-xs font-mono tracking-wider w-full text-left">
              <Bell size={18} />
              ALERTS
            </button>
            <button className="flex items-center gap-4 px-8 py-4 text-mm-textMuted hover:text-white transition-colors border-l-[3px] border-transparent text-xs font-mono tracking-wider w-full text-left">
              <SearchIcon size={18} />
              INSPECT
            </button>
            <button className="flex items-center gap-4 px-8 py-4 text-mm-textMuted hover:text-white transition-colors border-l-[3px] border-transparent text-xs font-mono tracking-wider w-full text-left">
              <Settings size={18} />
              SYSTEMS
            </button>
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col mb-4">
          <button className="flex items-center gap-4 px-8 py-4 text-mm-textMuted hover:text-white transition-colors border-l-[3px] border-transparent text-xs font-mono tracking-wider w-full text-left">
            <HelpCircle size={18} />
            SUPPORT
          </button>
          <button onClick={onLogout} className="flex items-center gap-4 px-8 py-4 text-mm-textMuted hover:text-white transition-colors border-l-[3px] border-transparent text-xs font-mono tracking-wider w-full text-left">
            <LogOut size={18} />
            LOGOUT
          </button>
        </div>
      </aside>

      {/* Main Interface Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0d0d0c] relative">
        
        {/* Top Header */}
        <header className="h-20 border-b border-[#1f1f1a] flex items-center justify-between px-8 shrink-0 bg-[#0a0a0a]/80 backdrop-blur-md z-20">
          <div className="flex items-center gap-12 h-full">
            <div className="font-bold text-mm-yellow tracking-wider text-sm">
              MONEYMATRIX // TACTICAL
            </div>
            
            <nav className="flex gap-8 h-full">
              <button className="text-mm-textSubtle hover:text-white transition-colors text-[11px] font-mono tracking-[0.15em] h-full flex items-center">
                LIVE_FEED
              </button>
              <button className="text-mm-yellow border-b-2 border-mm-yellow font-bold text-[11px] font-mono tracking-[0.15em] h-full flex items-center">
                THREAT_MAP
              </button>
              <button className="text-mm-textSubtle hover:text-white transition-colors text-[11px] font-mono tracking-[0.15em] h-full flex items-center">
                ARCHIVE
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-mm-textSubtle" />
              <input 
                type="text" 
                placeholder="QUERY SIGNAL..." 
                className="bg-[#1f1f1a] border border-transparent focus:border-mm-yellow/50 rounded-full py-2.5 pl-10 pr-4 text-xs font-mono w-64 outline-none transition-colors placeholder:text-mm-textSubtle/50"
              />
            </div>
            <div className="flex items-center gap-4 text-mm-yellow">
              <button className="hover:text-white transition-colors"><Grid size={20} /></button>
              <button className="hover:text-white transition-colors"><SlidersHorizontal size={20} /></button>
              <button className="hover:text-white transition-colors"><UserCircle size={22} /></button>
            </div>
          </div>
        </header>

        {/* Dashboard Content - Split view */}
        <div className="flex-1 flex overflow-hidden relative">
          
          {/* Threat Map Area (Center) */}
          <div className="flex-1 relative overflow-hidden bg-[#0a0a09]">
            {/* Map Grid Background */}
            <div className="absolute inset-0 pointer-events-none" 
                 style={{
                   backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
                   backgroundSize: '40px 40px',
                   opacity: 0.05
                 }}
            ></div>
            
            {/* Map Radar Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/5 rounded-full pointer-events-none"></div>

            {/* Network Visualization */}
            <div className="absolute inset-0">
              {/* Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Hub to Recipient X */}
                <line x1="50%" y1="45%" x2="70%" y2="30%" stroke="#ffc500" strokeWidth="2" strokeDasharray="4 4" className="opacity-50" />
                {/* Hub to Wallet */}
                <line x1="50%" y1="45%" x2="35%" y2="60%" stroke="#6b6b63" strokeWidth="2" className="opacity-50" />
                {/* Hub to Flagged Entity */}
                <line x1="50%" y1="45%" x2="65%" y2="70%" stroke="#ff4d4d" strokeWidth="3" strokeDasharray="6 4" className="opacity-80" />
                {/* Flagged to off-screen right */}
                <line x1="65%" y1="70%" x2="90%" y2="75%" stroke="#ff4d4d" strokeWidth="2" className="opacity-40" />
              </svg>

              {/* Node: HUB_ALPHA_09 */}
              <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-mm-yellow/20 rounded-full blur-xl scale-150 animate-pulse"></div>
                  <div className="w-16 h-16 rounded-full border-2 border-mm-yellow bg-[#161613] flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(255,197,0,0.3)]">
                    <Building2 className="text-mm-yellow" size={24} />
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 font-mono text-[10px] font-bold tracking-wider whitespace-nowrap bg-[#0a0a0a] px-3 py-1 border border-[#1f1f1a] rounded">
                    HUB_ALPHA_09
                  </div>
                </div>
              </div>

              {/* Node: RECIPIENT_X */}
              <div className="absolute top-[30%] left-[70%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border-2 border-mm-textSubtle bg-[#161613] flex items-center justify-center shadow-lg">
                    <User className="text-mm-textSubtle" size={16} />
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 font-mono text-[9px] text-mm-textSubtle tracking-wider whitespace-nowrap">
                    RECIPIENT_X
                  </div>
                </div>
              </div>

              {/* Node: Wallet */}
              <div className="absolute top-[60%] left-[35%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border-2 border-mm-textSubtle bg-[#161613] flex items-center justify-center shadow-lg">
                    <Wallet className="text-white" size={16} />
                  </div>
                </div>
              </div>

              {/* Node: FLAGGED_ENTITY */}
              <div className="absolute top-[70%] left-[65%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#ff4d4d]/20 rounded-full blur-xl scale-150 animate-pulse"></div>
                  <div className="w-14 h-14 rounded-full border-2 border-[#ff4d4d] bg-[#1a0f0f] flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(255,77,77,0.3)]">
                    <AlertTriangle className="text-[#ff4d4d]" size={20} />
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 font-mono text-[10px] font-bold tracking-wider whitespace-nowrap bg-[#ff4d4d] text-white px-3 py-1 rounded">
                    FLAGGED_ENTITY
                  </div>
                </div>
              </div>

            </div>

            {/* Top Left Meta Info */}
            <div className="absolute top-8 left-8 font-mono text-[9px] text-mm-textSubtle tracking-[0.2em] space-y-3 pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-mm-textSubtle"></div>
                <div>PACKET_ID: 0X9928AF</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-mm-yellow"></div>
                <div className="text-mm-yellow">LATENCY: 14MS</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-mm-textSubtle"></div>
                <div>UPTIME: 99.998%</div>
              </div>
            </div>

            {/* Scanner Floating Card */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[380px] bg-[#141412]/95 backdrop-blur-md border border-[#2a2a22] rounded-xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-mm-yellow/10 flex items-center justify-center">
                  <Activity size={14} className="text-mm-yellow" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] font-bold text-white uppercase">HEURISTIC SCANNER</div>
              </div>
              <p className="text-xs text-mm-textMuted leading-relaxed mb-6 font-sans">
                Analyzing node <span className="text-mm-yellow font-medium">HUB_ALPHA_09</span>. Patterns suggest potential <span className="text-white font-medium">Smurfing Activity</span> detected across 14 edge connections.
              </p>
              <div className="flex gap-3">
                <button className="flex-1 bg-mm-yellow hover:bg-mm-yellowHover text-black font-bold py-2.5 rounded text-[10px] tracking-wider transition-colors shadow-lg">
                  ISOLATE
                </button>
                <button className="flex-1 bg-[#262622] hover:bg-[#32322a] text-white font-bold py-2.5 rounded text-[10px] tracking-wider transition-colors border border-[#3a3a32]">
                  IGNORE
                </button>
              </div>
            </div>

            {/* Bottom Left Map Controls */}
            <div className="absolute bottom-8 left-8 flex flex-col gap-2">
              <button className="w-10 h-10 bg-[#1f1f1a] hover:bg-[#2a2a22] border border-[#32322a] rounded flex items-center justify-center text-white transition-colors">
                <Plus size={18} />
              </button>
              <button className="w-10 h-10 bg-[#1f1f1a] hover:bg-[#2a2a22] border border-[#32322a] rounded flex items-center justify-center text-white transition-colors">
                <Minus size={18} />
              </button>
              <button className="w-10 h-10 bg-[#1f1f1a] hover:bg-[#2a2a22] border border-[#32322a] rounded flex items-center justify-center text-white transition-colors mt-2">
                <RotateCcw size={16} />
              </button>
            </div>

            {/* Bottom Center Legend */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 bg-[#0d0d0a]/80 backdrop-blur-sm border border-[#1f1f1a] rounded-full px-8 py-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-mm-textSubtle"></div>
                <span className="font-mono text-[9px] tracking-wider text-mm-textMuted">NORMAL</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-mm-yellow shadow-[0_0_8px_rgba(255,197,0,0.5)]"></div>
                <span className="font-mono text-[9px] tracking-wider text-white">SUSPICIOUS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#ff4d4d] shadow-[0_0_8px_rgba(255,77,77,0.5)]"></div>
                <span className="font-mono text-[9px] tracking-wider text-mm-textMuted">CRITICAL</span>
              </div>
            </div>

          </div>

          {/* Right Panel (Entity Focus) */}
          <div className="w-[420px] bg-[#161614] border-l border-[#1f1f1a] flex flex-col shrink-0 h-full z-10 relative">
            
            {/* Panel Header */}
            <div className="p-8 pb-6 relative">
              <button className="absolute top-8 right-8 text-mm-textSubtle hover:text-white transition-colors">
                <X size={20} />
              </button>
              <div className="font-mono text-[10px] text-mm-yellow tracking-[0.2em] mb-2 uppercase">Entity Focus</div>
              <h2 className="text-3xl font-bold tracking-tight">HUB_ALPHA_09</h2>
            </div>

            {/* Threat Score */}
            <div className="px-8 mb-8">
              <div className="flex justify-between items-end mb-2">
                <div className="font-mono text-[9px] text-mm-textSubtle tracking-[0.2em] uppercase">Threat Score</div>
                <div className="text-3xl font-bold text-mm-yellow leading-none">
                  74<span className="text-sm text-mm-textMuted">/100</span>
                </div>
              </div>
              <div className="h-1.5 w-full bg-[#262622] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-mm-yellow to-[#ff4d4d] w-[74%]"></div>
              </div>
            </div>

            {/* Metrics */}
            <div className="px-8 grid grid-cols-2 gap-4 mb-10">
              <div className="bg-[#1f1f1a] rounded-lg p-5 border border-[#2a2a22]">
                <div className="font-mono text-[9px] text-mm-textSubtle tracking-[0.2em] mb-2 uppercase">Node Volume</div>
                <div className="text-xl font-bold">$1.24M</div>
              </div>
              <div className="bg-[#1f1f1a] rounded-lg p-5 border border-[#2a2a22]">
                <div className="font-mono text-[9px] text-mm-textSubtle tracking-[0.2em] mb-2 uppercase">Connections</div>
                <div className="text-xl font-bold">42 Active</div>
              </div>
            </div>

            {/* Recent Signal Bursts */}
            <div className="flex-1 flex flex-col min-h-0">
              <div className="px-8 mb-4">
                <div className="font-mono text-[10px] text-mm-textSubtle tracking-[0.2em] uppercase">Recent Signal Bursts</div>
              </div>
              
              <div className="flex-1 overflow-y-auto px-4 pb-4">
                <div className="space-y-1">
                  
                  {/* Burst 1 */}
                  <div className="p-4 hover:bg-[#1f1f1a] rounded-lg transition-colors group border border-transparent hover:border-[#2a2a22]">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#ff8080]"></div>
                        <span className="font-bold text-sm">Rapid Outbound Transfer</span>
                      </div>
                      <span className="font-mono text-[9px] text-mm-textSubtle">14:22:31</span>
                    </div>
                    <p className="text-xs text-mm-textMuted pl-5 mb-3 leading-relaxed">
                      High-velocity movement to unverified beneficiary in Zone_7.
                    </p>
                    <div className="pl-5 flex justify-between items-center">
                      <span className="font-mono text-[10px] font-bold tracking-wider text-[#ff8080]">-$450,000.00</span>
                      <ArrowRight size={12} className="text-mm-textSubtle group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Burst 2 */}
                  <div className="p-4 hover:bg-[#1f1f1a] rounded-lg transition-colors group border border-transparent hover:border-[#2a2a22]">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-mm-yellow"></div>
                        <span className="font-bold text-sm">Structured Deposit Burst</span>
                      </div>
                      <span className="font-mono text-[9px] text-mm-textSubtle">12:05:48</span>
                    </div>
                    <p className="text-xs text-mm-textMuted pl-5 mb-3 leading-relaxed">
                      Multiple deposits below reporting threshold from regional terminals.
                    </p>
                    <div className="pl-5 flex justify-between items-center">
                      <span className="font-mono text-[10px] font-bold tracking-wider text-mm-yellow">+$12,400.00</span>
                      <ArrowRight size={12} className="text-mm-textSubtle group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Burst 3 */}
                  <div className="p-4 hover:bg-[#1f1f1a] rounded-lg transition-colors group border border-transparent hover:border-[#2a2a22]">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-mm-textSubtle"></div>
                        <span className="font-bold text-sm text-mm-textMuted">Standard Settlement</span>
                      </div>
                      <span className="font-mono text-[9px] text-mm-textSubtle">09:12:15</span>
                    </div>
                    <p className="text-xs text-mm-textMuted pl-5 mb-3 leading-relaxed">
                      Routine clearance with established institutional partner.
                    </p>
                    <div className="pl-5 flex justify-between items-center">
                      <span className="font-mono text-[10px] font-bold tracking-wider text-mm-textSubtle">-$2,100.44</span>
                      <ArrowRight size={12} className="text-mm-textSubtle group-hover:text-white transition-colors" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="p-6 border-t border-[#1f1f1a] bg-[#161614]">
              <button className="w-full bg-[#262622] hover:bg-[#32322a] text-white font-bold py-4 rounded font-mono text-[10px] tracking-[0.2em] transition-colors border border-[#3a3a32]">
                GENERATE FULL REPORT
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
