import React, { useState } from 'react';
import { 
  Target, 
  Share2, 
  Bell, 
  SearchIcon, 
  Settings, 
  HelpCircle, 
  LogOut,
  Plus,
  Search,
  Grid,
  SlidersHorizontal,
  UserCircle
} from 'lucide-react';

import NetworkView from './NetworkView';
import AlertsView from './AlertsView';
import InspectView from './InspectView';

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('inspect');

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

          {/* Action Button (Top variant based on the Inspect design) */}
          <div className="px-6 mb-8">
            <button className="w-full bg-mm-yellow hover:bg-mm-yellowHover text-black font-bold py-3 rounded flex items-center justify-center gap-2 text-[11px] tracking-wider transition-colors shadow-[0_0_15px_rgba(255,197,0,0.15)]">
              <Plus size={14} strokeWidth={3} />
              NEW INVESTIGATION
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col">
            <button className="flex items-center gap-4 px-8 py-4 text-mm-textMuted hover:text-white transition-colors border-l-[3px] border-transparent text-xs font-mono tracking-wider w-full text-left">
              <Target size={18} />
              MONITOR
            </button>
            <button 
              onClick={() => setActiveTab('network')}
              className={`flex items-center gap-4 px-8 py-4 text-xs font-mono tracking-wider w-full text-left transition-colors ${activeTab === 'network' ? 'text-mm-yellow bg-mm-yellow/5 border-l-[3px] border-mm-yellow shadow-[inset_20px_0_20px_-20px_rgba(255,197,0,0.2)]' : 'text-mm-textMuted hover:text-white border-l-[3px] border-transparent'}`}
            >
              <Share2 size={18} />
              NETWORK
            </button>
            <button 
              onClick={() => setActiveTab('alerts')}
              className={`flex items-center gap-4 px-8 py-4 text-xs font-mono tracking-wider w-full text-left transition-colors ${activeTab === 'alerts' ? 'text-mm-yellow bg-mm-yellow/5 border-l-[3px] border-mm-yellow shadow-[inset_20px_0_20px_-20px_rgba(255,197,0,0.2)]' : 'text-mm-textMuted hover:text-white border-l-[3px] border-transparent'}`}
            >
              <Bell size={18} />
              ALERTS
            </button>
            <button 
              onClick={() => setActiveTab('inspect')}
              className={`flex items-center gap-4 px-8 py-4 text-xs font-mono tracking-wider w-full text-left transition-colors ${activeTab === 'inspect' ? 'text-mm-yellow bg-mm-yellow/5 border-l-[3px] border-mm-yellow shadow-[inset_20px_0_20px_-20px_rgba(255,197,0,0.2)]' : 'text-mm-textMuted hover:text-white border-l-[3px] border-transparent'}`}
            >
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
            <div className="font-bold text-mm-yellow tracking-wider text-sm uppercase">
              MoneyMatrix // Tactical
            </div>
            
            <nav className="flex gap-8 h-full">
              <button className="text-mm-textSubtle hover:text-white transition-colors text-[11px] font-mono tracking-[0.15em] h-full flex items-center uppercase">
                Live_Feed
              </button>
              <button className="text-mm-textSubtle hover:text-white transition-colors text-[11px] font-mono tracking-[0.15em] h-full flex items-center uppercase">
                Threat_Map
              </button>
              <button className="text-mm-yellow border-b-2 border-mm-yellow font-bold text-[11px] font-mono tracking-[0.15em] h-full flex items-center uppercase">
                Archive
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-mm-yellow">
              <button className="hover:text-white transition-colors"><Grid size={20} /></button>
              <button className="hover:text-white transition-colors"><SlidersHorizontal size={20} /></button>
              <button className="hover:text-white transition-colors"><UserCircle size={22} /></button>
            </div>
          </div>
        </header>

        {/* Dynamic Content Views */}
        <div className="flex-1 flex overflow-hidden relative">
          {activeTab === 'network' && <NetworkView />}
          {activeTab === 'alerts' && <AlertsView />}
          {activeTab === 'inspect' && <InspectView />}
        </div>
      </div>
    </div>
  );
}
