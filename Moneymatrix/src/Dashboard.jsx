import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { flushSync } from 'react-dom';
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
  UserCircle,
  Moon,
  Sun
} from 'lucide-react';

import NetworkView from './NetworkView';
import AlertsView from './AlertsView';
import InspectView from './InspectView';
import MonitorView from './MonitorView';
import SettingsView from './SettingsView';
import SupportView from './SupportView';
import { useTheme } from './ThemeContext';

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('monitor');
  const { isDarkMode, toggleTheme } = useTheme();
  
  const handleThemeToggle = async (e) => {
    // Disable CSS transitions temporarily to prevent them from fading underneath the wave
    document.documentElement.classList.add('disable-transitions');

    // Fallback for browsers that don't support view transitions
    if (!document.startViewTransition) {
      toggleTheme();
      document.documentElement.classList.remove('disable-transitions');
      return;
    }

    // Get click position
    const x = e.clientX;
    const y = e.clientY;
    
    // Calculate distance to the furthest corner
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    // Start transition
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        toggleTheme();
      });
    });

    // Wait for the pseudo-elements to be created
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      document.documentElement.animate(
        { clipPath: clipPath },
        {
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });

    // Re-enable CSS transitions after the wave is finished
    transition.finished.finally(() => {
      document.documentElement.classList.remove('disable-transitions');
    });
  };

  return (
    <div className={`h-screen w-full font-sans flex overflow-hidden p-4 dark:p-0 gap-6 dark:gap-0 dark:selection:bg-mm-yellow dark:selection:text-black ${isDarkMode ? 'bg-[#0d0d0c] text-white' : 'bg-mm-bg text-mm-textDark'}`}>

      {/* Sidebar */}
      <aside className={`w-72 dark:w-64 rounded-[28px] dark:rounded-none shadow-premium dark:shadow-none dark:border-r dark:border-[#1f1f1a] flex flex-col justify-between shrink-0 h-full relative z-20 py-8 px-6 dark:p-8 dark:pb-6 transition-colors duration-700 ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-mm-card'}`}>
        <div>
          {/* Logo Section */}
          <div className="mb-10 pl-2 dark:mb-8 dark:pl-0">
            <h1 className="text-2xl font-bold tracking-tight text-mm-textDark dark:text-mm-yellow mb-1 dark:font-mono">
              MoneyMatrix
            </h1>
            <div className="text-[10px] dark:text-[9px] text-mm-textMuted dark:text-mm-dark-textSubtle uppercase font-bold tracking-wider dark:tracking-[0.2em] dark:font-mono">
              Premium Portal
            </div>
          </div>

          {/* Action Button */}
          <div className="mb-8 dark:mb-8 dark:px-0">
            <button className="w-full bg-mm-yellow hover:bg-mm-yellowHover text-mm-textDark dark:text-black font-bold py-4 dark:py-3 rounded-[20px] dark:rounded flex items-center justify-center gap-2 text-xs dark:text-[11px] tracking-wider transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] dark:hover:-translate-y-0 dark:hover:scale-100 shadow-premium dark:shadow-[0_0_15px_rgba(255,197,0,0.15)] dark:font-mono">
              <Plus size={isDarkMode ? 14 : 16} strokeWidth={3} />
              NEW INVESTIGATION
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 dark:gap-0">
            {[
              { id: 'monitor', icon: Target, label: 'MONITOR' },
              { id: 'network', icon: Share2, label: 'NETWORK' },
              { id: 'alerts', icon: Bell, label: 'ALERTS' },
              { id: 'inspect', icon: SearchIcon, label: 'INSPECT' },
              { id: 'settings', icon: Settings, label: 'SYSTEMS' },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-4 px-6 dark:px-8 py-4 rounded-[20px] dark:rounded-none text-sm dark:text-xs font-bold dark:font-mono tracking-wider w-full text-left transition-all duration-300 
                  ${activeTab === item.id 
                    ? 'bg-mm-yellow dark:bg-mm-yellow/5 text-mm-textDark dark:text-mm-yellow shadow-md dark:shadow-[inset_20px_0_20px_-20px_rgba(255,197,0,0.2)] scale-[1.02] dark:scale-100 dark:border-l-[3px] dark:border-mm-yellow' 
                    : 'text-mm-textMuted dark:text-mm-dark-textMuted hover:bg-gray-50 dark:hover:bg-transparent dark:hover:text-white hover:text-mm-textDark dark:border-l-[3px] dark:border-transparent'}`}
              >
                <item.icon size={isDarkMode ? 18 : 20} className="transition-transform duration-300" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col gap-2 dark:gap-0 dark:mb-4">
          <button 
            onClick={() => setActiveTab('support')}
            className={`flex items-center gap-4 px-6 dark:px-8 py-4 rounded-[20px] dark:rounded-none text-sm dark:text-xs font-bold dark:font-mono tracking-wider w-full text-left transition-all duration-300 
              ${activeTab === 'support' 
                ? 'bg-mm-yellow dark:bg-mm-yellow/5 text-mm-textDark dark:text-mm-yellow shadow-md dark:shadow-[inset_20px_0_20px_-20px_rgba(255,197,0,0.2)] scale-[1.02] dark:scale-100 dark:border-l-[3px] dark:border-mm-yellow' 
                : 'text-mm-textMuted dark:text-mm-dark-textMuted hover:bg-gray-50 dark:hover:bg-transparent dark:hover:text-white hover:text-mm-textDark dark:border-l-[3px] dark:border-transparent'}`}
          >
            <HelpCircle size={isDarkMode ? 18 : 20} className="transition-transform duration-300" />
            SUPPORT
          </button>
          <button onClick={onLogout} className="flex items-center gap-4 px-6 dark:px-8 py-4 rounded-[20px] dark:rounded-none text-mm-textMuted dark:text-mm-dark-textMuted hover:bg-gray-50 dark:hover:bg-transparent dark:hover:text-white hover:text-mm-textDark transition-all duration-300 text-sm dark:text-xs font-bold dark:font-mono tracking-wider w-full text-left dark:border-l-[3px] dark:border-transparent">
            <LogOut size={isDarkMode ? 18 : 20} />
            LOGOUT
          </button>
        </div>
      </aside>

      {/* Main Interface Area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        
        {/* Top Header */}
        <header className={`h-20 rounded-[28px] dark:rounded-none shadow-premium dark:shadow-none dark:border-b dark:border-[#1f1f1a] flex items-center justify-between px-8 shrink-0 z-20 mb-6 dark:mb-0 transition-colors duration-700 ${isDarkMode ? 'bg-[#0a0a0a]/80 backdrop-blur-md' : 'bg-mm-card'}`}>
          <div className="flex items-center gap-12 h-full">
            <div className="font-bold text-mm-textDark dark:text-mm-yellow tracking-wider text-sm uppercase dark:font-mono">
              MoneyMatrix // Tactical
            </div>
            
            <nav className="flex gap-2 dark:gap-8 h-full items-center">
              <button className="text-mm-textMuted dark:text-mm-dark-textSubtle dark:hover:text-white transition-colors text-xs dark:text-[11px] font-bold dark:font-mono tracking-wider dark:tracking-[0.15em] px-4 dark:px-0 py-2 dark:py-0 dark:h-full rounded-xl dark:rounded-none hover:bg-gray-50 dark:hover:bg-transparent uppercase flex items-center">
                Live_Feed
              </button>
              <button className="text-mm-textDark dark:text-mm-dark-textSubtle bg-mm-yellow dark:bg-transparent dark:hover:text-white transition-colors text-xs dark:text-[11px] font-bold dark:font-mono tracking-wider dark:tracking-[0.15em] px-4 dark:px-0 py-2 dark:py-0 dark:h-full rounded-xl dark:rounded-none shadow-sm dark:shadow-none uppercase flex items-center">
                Threat_Map
              </button>
              <button className="text-mm-textMuted dark:text-mm-yellow dark:border-b-2 dark:border-mm-yellow hover:text-mm-textDark transition-colors text-xs dark:text-[11px] font-bold dark:font-mono tracking-wider dark:tracking-[0.15em] px-4 dark:px-0 py-2 dark:py-0 dark:h-full rounded-xl dark:rounded-none hover:bg-gray-50 dark:hover:bg-transparent uppercase flex items-center">
                Archive
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-mm-textDark dark:text-mm-yellow">
              {/* Animated Theme Toggle Button */}
              <button 
                onClick={handleThemeToggle}
                className="relative overflow-hidden hover:text-mm-yellow dark:hover:text-white transition-colors w-10 h-10 rounded-full bg-gray-50 dark:bg-[#11110f] flex items-center justify-center border dark:border-[#32322a] border-transparent"
                title="Toggle Theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDarkMode ? 'dark' : 'light'}
                    initial={{ y: -30, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 30, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
                    className="absolute"
                  >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={20} />}
                  </motion.div>
                </AnimatePresence>
              </button>

              <button className="hover:text-mm-yellow dark:hover:text-white transition-colors w-10 h-10 rounded-full bg-gray-50 dark:bg-[#11110f] flex items-center justify-center"><Grid size={isDarkMode ? 20 : 20} /></button>
              <button className="hover:text-mm-yellow dark:hover:text-white transition-colors w-10 h-10 rounded-full bg-gray-50 dark:bg-[#11110f] flex items-center justify-center"><SlidersHorizontal size={isDarkMode ? 20 : 20} /></button>
              <button className="hover:text-mm-yellow dark:hover:text-white transition-colors w-10 h-10 rounded-full bg-gray-50 dark:bg-[#11110f] flex items-center justify-center"><UserCircle size={isDarkMode ? 22 : 22} /></button>
            </div>
          </div>
        </header>

        {/* Dynamic Content Views */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {activeTab === 'monitor' && <MonitorView />}
          {activeTab === 'network' && <NetworkView />}
          {activeTab === 'alerts' && <AlertsView />}
          {activeTab === 'inspect' && <InspectView />}
          {activeTab === 'settings' && <SettingsView />}
          {activeTab === 'support' && <SupportView />}
        </div>
      </div>
    </div>
  );
}
