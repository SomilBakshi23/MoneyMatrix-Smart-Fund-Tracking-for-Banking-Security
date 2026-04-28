import React, { useState } from 'react';
import { Fingerprint, ScanFace, ChevronRight, Lock, KeyRound, ShieldAlert } from 'lucide-react';
import Dashboard from './Dashboard';

function LoginScreen({ onLogin }) {
  const [employeeId, setEmployeeId] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [mfaEnabled, setMfaEnabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeId && authCode) {
      setIsAuthenticating(true);
      // Simulate network delay for effect
      setTimeout(() => {
        onLogin();
      }, 1500);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden transition-colors duration-300">
      
      {/* Background Soft Gradients (Light Mode Only) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-mm-yellow/10 rounded-full blur-[120px] pointer-events-none dark:hidden"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-mm-yellow/5 rounded-full blur-[100px] pointer-events-none dark:hidden"></div>

      <div className="w-[440px] z-10">
        
        {/* Header / Logo */}
        <div className="mb-10 text-center">
          <div className="w-16 h-16 mx-auto bg-mm-card dark:bg-[#161614] shadow-premium dark:shadow-none rounded-[28px] dark:rounded-none border border-gray-100 dark:border-[#2a2a28] flex items-center justify-center mb-6 transition-all duration-300">
            <Lock size={28} className="text-mm-yellow" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2 dark:text-mm-yellow dark:font-mono">
            MoneyMatrix
          </h1>
          <p className="text-sm text-mm-textMuted dark:text-mm-dark-textSubtle tracking-wider uppercase font-medium dark:font-mono">
            Secure Portal Access
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-mm-card dark:bg-mm-dark-card shadow-premium dark:shadow-xl rounded-[28px] dark:rounded-none p-8 border border-gray-50/50 dark:border-[#2a2a28] transition-all duration-300">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 dark:border-[#2a2a28]">
            <h2 className="font-bold text-lg dark:text-white dark:font-mono">Sign In</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mm-yellow animate-pulse"></div>
              <span className="text-[10px] text-mm-textMuted dark:text-mm-dark-textMuted uppercase font-bold tracking-wider dark:font-mono">System Active</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* ID Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-mm-textMuted dark:text-mm-dark-textSubtle uppercase tracking-wider block ml-2 dark:font-mono">Employee ID</label>
              <div className="relative group">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-mm-textMuted dark:text-[#4a4a42] group-focus-within:text-mm-yellow transition-colors" size={18} />
                <input 
                  type="text" 
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  className="w-full bg-mm-bg dark:bg-[#0a0a0a] border border-transparent dark:border-[#2a2a28] focus:border-mm-yellow dark:focus:border-mm-yellow focus:bg-white dark:focus:bg-[#0a0a0a] rounded-[20px] dark:rounded-none py-4 pl-12 pr-4 outline-none transition-all duration-300 font-mono text-sm tracking-wider shadow-sm dark:shadow-none placeholder:text-gray-300 dark:placeholder:text-[#32322a] dark:text-white"
                  placeholder="MX-0000"
                  required
                />
              </div>
            </div>

            {/* Cipher Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-mm-textMuted dark:text-mm-dark-textSubtle uppercase tracking-wider block ml-2 dark:font-mono">Auth Cipher</label>
              <div className="relative group">
                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-mm-textMuted dark:text-[#4a4a42] group-focus-within:text-mm-yellow transition-colors" size={18} />
                <input 
                  type="password" 
                  value={authCode}
                  onChange={(e) => setAuthCode(e.target.value)}
                  className="w-full bg-mm-bg dark:bg-[#0a0a0a] border border-transparent dark:border-[#2a2a28] focus:border-mm-yellow dark:focus:border-mm-yellow focus:bg-white dark:focus:bg-[#0a0a0a] rounded-[20px] dark:rounded-none py-4 pl-12 pr-4 outline-none transition-all duration-300 font-mono text-sm tracking-wider shadow-sm dark:shadow-none placeholder:text-gray-300 dark:placeholder:text-[#32322a] dark:text-white"
                  placeholder="••••••••••••"
                  required
                />
              </div>
            </div>

            {/* Hardware Token / MFA */}
            <div className="pt-2">
              <div 
                className={`flex items-center justify-between p-4 rounded-[20px] dark:rounded-none border transition-all duration-300 cursor-pointer ${mfaEnabled ? 'bg-mm-yellow/10 dark:bg-mm-yellow/5 border-mm-yellow shadow-sm dark:shadow-[inset_0_0_15px_rgba(255,197,0,0.1)]' : 'bg-mm-bg dark:bg-[#0a0a0a] border-transparent dark:border-[#2a2a28] hover:bg-gray-50 dark:hover:bg-[#11110f]'}`}
                onClick={() => setMfaEnabled(!mfaEnabled)}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl dark:rounded-none ${mfaEnabled ? 'bg-mm-yellow text-white dark:text-black' : 'bg-gray-200 dark:bg-[#1f1f1a] text-gray-400 dark:text-[#4a4a42]'}`}>
                    <ScanFace size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold dark:text-white dark:font-mono">Biometric MFA</div>
                    <div className="text-[10px] text-mm-textMuted dark:text-mm-dark-textMuted dark:font-mono">Required for Level 4+</div>
                  </div>
                </div>
                <div className={`w-10 h-5 rounded-full dark:rounded-none relative transition-colors border ${mfaEnabled ? 'bg-mm-yellow border-mm-yellow' : 'bg-gray-200 dark:bg-[#1a1a18] border-transparent dark:border-[#32322a]'}`}>
                  <div className={`w-3 h-3 bg-white dark:bg-mm-yellow rounded-full dark:rounded-none absolute top-[3px] transition-all ${mfaEnabled ? 'right-1' : 'left-1'}`}></div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isAuthenticating}
              className={`w-full py-4 rounded-[20px] dark:rounded flex items-center justify-center gap-3 font-bold text-sm tracking-wider transition-all duration-300 dark:font-mono
                ${isAuthenticating 
                  ? 'bg-gray-100 dark:bg-[#1f1f1a] text-mm-textMuted dark:text-[#4a4a42] cursor-not-allowed' 
                  : 'bg-mm-yellow hover:bg-mm-yellowHover text-mm-textDark hover:-translate-y-1 dark:hover:translate-y-0 hover:scale-[1.02] dark:hover:scale-100 shadow-premium dark:shadow-[0_0_15px_rgba(255,197,0,0.2)]'}`}
            >
              {isAuthenticating ? (
                <>
                  <div className="w-4 h-4 border-2 border-mm-textMuted dark:border-mm-dark-textSubtle border-t-transparent rounded-full animate-spin"></div>
                  AUTHENTICATING...
                </>
              ) : (
                <>
                  INITIALIZE SESSION
                  <ChevronRight size={18} strokeWidth={3} />
                </>
              )}
            </button>

          </form>
        </div>

        {/* Footer Status */}
        <div className="mt-8 flex justify-center gap-6 text-[10px] font-mono text-mm-textMuted dark:text-mm-dark-textMuted uppercase font-bold tracking-wider">
          <div className="flex items-center gap-2">
            <ShieldAlert size={12} />
            <span>Connection Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Fingerprint size={12} />
            <span>V 4.02.99</span>
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper icon component
const UserIcon = ({ className, size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <Dashboard onLogout={() => setIsAuthenticated(false)} />
      ) : (
        <LoginScreen onLogin={() => setIsAuthenticated(true)} />
      )}
    </>
  );
}
