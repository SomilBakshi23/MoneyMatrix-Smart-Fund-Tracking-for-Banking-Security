import React, { useState } from 'react';
import { ArrowRight, Lock, KeyRound, ShieldAlert, ShieldCheck, Hexagon, Shield, Globe } from 'lucide-react';
import Dashboard from './Dashboard';
import { ThemeProvider } from './ThemeContext';
import { loginUser } from './services/api';

function LoginScreen({ onLogin }) {
  const [employeeId, setEmployeeId] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [mfaEnabled, setMfaEnabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (employeeId && authCode) {
      setIsAuthenticating(true);
      try {
        const res = await loginUser({ username: employeeId, password: authCode });
        localStorage.setItem("token", res.data.access_token);
        onLogin();
      } catch (err) {
        console.error("Login failed", err);
        setIsAuthenticating(false);
      }
    }
  };

  return (
    // Dynamic theme support
    <div className="h-screen w-full bg-mm-bg dark:bg-[#161614] text-mm-textDark dark:text-white flex flex-col justify-between font-sans dark:font-inter relative overflow-hidden transition-colors duration-700">
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white dark:from-[#1f1f1a]/40 via-mm-bg dark:via-[#161614] to-mm-bg dark:to-[#161614] pointer-events-none transition-colors duration-700"></div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center w-full max-w-[1400px] mx-auto px-8 lg:px-16 z-10">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 dark:border-[#2a2a28] border-l-mm-yellow dark:border-l-[#FEDB71] mb-8 bg-white dark:bg-transparent shadow-sm dark:shadow-none transition-colors duration-700">
              <ShieldCheck size={16} className="text-mm-yellowHover dark:text-[#FEDB71]" />
              <span className="text-[10px] font-bold dark:font-mono uppercase tracking-widest text-mm-textMuted dark:text-[#a3a398]">Secure Channel Established</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tighter mb-6 flex items-center">
              MONEY<span className="text-mm-yellow dark:text-[#FEDB71]">MATRIX</span>
            </h1>

            <p className="text-xl md:text-2xl text-mm-textMuted dark:text-[#a3a398] leading-snug max-w-xl mb-16 font-light transition-colors duration-700">
              Premium Banking Network Access for Certified Fraud Investigators and Intelligence Officers.
            </p>

            <div className="flex items-start gap-16">
              <div>
                <div className="text-3xl font-bold text-mm-textDark dark:text-[#FEDB71] mb-2 transition-colors duration-700">99.9%</div>
                <div className="text-xs font-bold dark:font-mono uppercase tracking-widest text-mm-textMuted dark:text-[#a3a398]">Uptime Reliability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mm-textDark dark:text-[#FEDB71] mb-2 transition-colors duration-700">AES-256</div>
                <div className="text-xs font-bold dark:font-mono uppercase tracking-widest text-mm-textMuted dark:text-[#a3a398]">Bank-Grade Encryption</div>
              </div>
            </div>
          </div>

          {/* Right Column - Login Card */}
          <div className="w-full lg:w-[480px]">
            <div className="bg-white dark:bg-[#11110f] rounded-[32px] p-8 md:p-10 border border-gray-100 dark:border-[#2a2a28] relative shadow-premium dark:shadow-2xl transition-colors duration-700">
              
              {/* Card Header */}
              <div className="absolute top-6 right-8 text-[10px] text-gray-400 dark:text-[#6b6b63] font-bold dark:font-mono transition-colors duration-700">
                TRANS_ID: 8842-MM-SEC
              </div>
              
              <div className="flex justify-between items-start mb-10 mt-2">
                <div>
                  <h2 className="text-2xl font-bold text-mm-textDark dark:text-white mb-1 transition-colors duration-700">PORTAL LOGIN</h2>
                  <p className="text-[10px] uppercase tracking-widest text-mm-textMuted dark:text-[#a3a398] font-bold dark:font-mono transition-colors duration-700">Authorized Personnel Only</p>
                </div>
                <div className="w-12 h-12 rounded-xl border border-mm-yellow/30 flex items-center justify-center bg-mm-yellow/10">
                  <Lock size={20} className="text-mm-yellowHover dark:text-[#FEDB71]" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Employee ID */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold dark:font-mono text-mm-textDark dark:text-[#FEDB71] uppercase tracking-widest block ml-1 transition-colors duration-700">Employee ID / Email</label>
                  <div className="relative group">
                    <Hexagon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#6b6b63] group-focus-within:text-mm-yellowHover dark:group-focus-within:text-[#FEDB71] transition-colors" size={18} />
                    <input 
                      type="text" 
                      value={employeeId}
                      onChange={(e) => setEmployeeId(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-[#161614] border border-gray-200 dark:border-[#2a2a28] focus:border-mm-yellow dark:focus:border-[#FEDB71] rounded-2xl py-4 pl-12 pr-4 outline-none transition-all duration-300 text-sm dark:font-mono text-mm-textDark dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#4a4a42]"
                      placeholder="investigator@moneymatrix.io"
                      required
                    />
                  </div>
                </div>

                {/* Cipher */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-[10px] font-bold dark:font-mono text-mm-textDark dark:text-[#FEDB71] uppercase tracking-widest block transition-colors duration-700">Access Password</label>
                    <button type="button" className="text-[10px] font-bold dark:font-mono text-mm-textMuted dark:text-[#FEDB71] hover:text-mm-textDark dark:hover:text-white uppercase tracking-widest transition-colors">Reset Password</button>
                  </div>
                  <div className="relative group">
                    <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#6b6b63] group-focus-within:text-mm-yellowHover dark:group-focus-within:text-[#FEDB71] transition-colors" size={18} />
                    <input 
                      type="password" 
                      value={authCode}
                      onChange={(e) => setAuthCode(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-[#161614] border border-gray-200 dark:border-[#2a2a28] focus:border-mm-yellow dark:focus:border-[#FEDB71] rounded-2xl py-4 pl-12 pr-4 outline-none transition-all duration-300 text-sm dark:font-mono text-mm-textDark dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#4a4a42] tracking-[0.3em]"
                      placeholder="••••••••••••"
                      required
                    />
                  </div>
                </div>

                {/* MFA */}
                <div className="pt-2 pb-2">
                  <div 
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${mfaEnabled ? 'bg-gray-50 border-gray-200 dark:bg-[#161614] dark:border-[#2a2a28]' : 'bg-white border-gray-100 dark:bg-[#161614] dark:border-[#2a2a28]'}`}
                    onClick={() => setMfaEnabled(!mfaEnabled)}
                  >
                    <div className="flex items-center gap-4">
                      {/* Toggle */}
                      <div className={`w-10 h-5 rounded-full relative transition-colors ${mfaEnabled ? 'bg-mm-yellow dark:bg-[#FEDB71]' : 'bg-gray-200 dark:bg-[#2a2a28]'}`}>
                        <div className={`w-3 h-3 bg-white dark:bg-[#11110f] rounded-full absolute top-[4px] transition-all ${mfaEnabled ? 'right-1' : 'left-1 dark:bg-[#6b6b63]'}`}></div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-mm-textDark dark:text-white mb-0.5 transition-colors duration-700">MULTI-FACTOR AUTH</div>
                        <div className="text-[10px] text-mm-textMuted dark:text-[#a3a398] transition-colors duration-700">Send secure token to registered device</div>
                      </div>
                    </div>
                    <Shield size={16} className={mfaEnabled ? 'text-mm-yellowHover dark:text-[#FEDB71]' : 'text-gray-300 dark:text-[#4a4a42]'} />
                  </div>
                </div>

                {/* Submit */}
                <button 
                  type="submit" 
                  disabled={isAuthenticating}
                  className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm tracking-wider transition-all duration-300
                    ${isAuthenticating 
                      ? 'bg-gray-100 dark:bg-[#1f1f1a] text-gray-400 dark:text-[#4a4a42] cursor-not-allowed' 
                      : 'bg-mm-yellow hover:bg-mm-yellowHover dark:bg-[#FEDB71] dark:hover:bg-[#e6b200] text-black hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(254,219,113,0.4)] dark:shadow-[0_0_15px_rgba(255,197,0,0.2)]'}`}
                >
                  {isAuthenticating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-400 dark:border-[#4a4a42] border-t-transparent dark:border-t-transparent rounded-full animate-spin"></div>
                      AUTHENTICATING...
                    </>
                  ) : (
                    <>
                      SECURE LOGIN
                      <ArrowRight size={18} strokeWidth={2.5} />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-[#2a2a28]/50 flex flex-col items-center transition-colors duration-700">
                <ShieldAlert size={12} className="text-gray-400 dark:text-[#6b6b63] mb-3 transition-colors duration-700" />
                <div className="text-[8px] text-gray-400 dark:text-[#a3a398] dark:font-mono uppercase tracking-[0.2em] text-center font-bold transition-colors duration-700">
                  SECURE PORTAL © 2024 MONEYMATRIX FINANCIAL
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer Bars */}
      <div className="px-8 py-6 w-full flex justify-between items-end border-t border-gray-100 dark:border-[#2a2a28]/30 bg-white/80 dark:bg-[#161614]/80 backdrop-blur-sm z-10 transition-colors duration-700">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-[#FEDB71] animate-pulse"></div>
            <span className="text-[9px] font-bold dark:font-mono text-mm-textDark dark:text-[#FEDB71] uppercase tracking-widest transition-colors duration-700">SYSTEM: STABLE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-[#6b6b63]"></div>
            <span className="text-[9px] font-bold dark:font-mono text-mm-textMuted dark:text-[#6b6b63] uppercase tracking-widest transition-colors duration-700">NETWORK: SECURE</span>
          </div>
        </div>

        <div className="flex items-center gap-8 opacity-80">
          <div className="text-right flex flex-col gap-1">
            <div className="text-[8px] text-gray-400 dark:text-[#6b6b63] dark:font-mono uppercase tracking-widest font-bold transition-colors duration-700">LOC</div>
            <div className="text-[9px] text-mm-textDark dark:text-[#FEDB71] dark:font-mono tracking-widest font-bold transition-colors duration-700">HQ-GLOBAL</div>
          </div>
          <div className="text-right flex flex-col gap-1">
            <div className="text-[8px] text-gray-400 dark:text-[#6b6b63] dark:font-mono uppercase tracking-widest font-bold transition-colors duration-700">ENC LEVEL</div>
            <div className="text-[9px] text-mm-textDark dark:text-[#FEDB71] dark:font-mono tracking-widest font-bold transition-colors duration-700">AES-256-GCM</div>
          </div>
          <div className="h-6 w-px bg-gray-200 dark:bg-[#2a2a28] transition-colors duration-700"></div>
          <Globe size={14} className="text-gray-400 dark:text-[#6b6b63] transition-colors duration-700" />
          <div className="text-[9px] text-gray-500 dark:text-[#a3a398] dark:font-mono tracking-widest font-bold transition-colors duration-700">LATENCY: 12MS</div>
        </div>
      </div>

    </div>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  return (
    <ThemeProvider>
      {isAuthenticated ? (
        <Dashboard onLogout={() => {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        }} />
      ) : (
        <LoginScreen onLogin={() => setIsAuthenticated(true)} />
      )}
    </ThemeProvider>
  );
}
