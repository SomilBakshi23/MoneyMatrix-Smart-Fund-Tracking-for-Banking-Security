import React, { useState } from 'react';
import { ArrowRight, Lock, KeyRound, ShieldAlert, ShieldCheck, Hexagon, Shield, Globe } from 'lucide-react';
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
      setTimeout(() => {
        onLogin();
      }, 1500);
    }
  };

  return (
    <div className="h-screen w-full bg-[#161614] text-white flex flex-col justify-between font-inter relative overflow-hidden">
      
      {/* Background radial gradient to give it depth like the image */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#1f1f1a]/40 via-[#161614] to-[#161614] pointer-events-none"></div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center w-full max-w-[1400px] mx-auto px-8 lg:px-16 z-10">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#2a2a28] border-l-[#FEDB71] mb-8">
              <ShieldCheck size={16} className="text-[#FEDB71]" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#a3a398]">Encrypted Channel Established</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tighter mb-6 flex items-center">
              MONEY<span className="text-[#FEDB71]">MATRIX</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#a3a398] leading-snug max-w-xl mb-16 font-light">
              Secure Banking Network Access for Certified Fraud Investigators and Intelligence Officers.
            </p>

            <div className="flex items-start gap-16">
              <div>
                <div className="text-3xl font-bold text-[#FEDB71] mb-2">99.9%</div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#a3a398]">Uptime Reliability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FEDB71] mb-2">AES-256</div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#a3a398]">Quantum Encryption</div>
              </div>
            </div>
          </div>

          {/* Right Column - Login Card */}
          <div className="w-full lg:w-[480px]">
            <div className="bg-[#11110f] rounded-[32px] p-8 md:p-10 border border-[#2a2a28] relative shadow-2xl">
              
              {/* Card Header */}
              <div className="absolute top-6 right-8 text-[10px] font-mono text-[#6b6b63] font-bold">
                TRANS_ID: 8842-MM-SEC
              </div>
              
              <div className="flex justify-between items-start mb-10 mt-2">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">TERMINAL LOGIN</h2>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#a3a398] font-bold">Authorized Personnel Only</p>
                </div>
                <div className="w-12 h-12 rounded-xl border border-[#FEDB71]/30 flex items-center justify-center bg-[#FEDB71]/10">
                  <Lock size={20} className="text-[#FEDB71]" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Employee ID */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-[#FEDB71] uppercase tracking-widest block ml-1">Employee ID / Email</label>
                  <div className="relative group">
                    <Hexagon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b63] group-focus-within:text-[#FEDB71] transition-colors" size={18} />
                    <input 
                      type="text" 
                      value={employeeId}
                      onChange={(e) => setEmployeeId(e.target.value)}
                      className="w-full bg-[#161614] border border-[#2a2a28] focus:border-[#FEDB71] rounded-2xl py-4 pl-12 pr-4 outline-none transition-all duration-300 text-sm font-mono text-white placeholder:text-[#4a4a42]"
                      placeholder="investigator@moneymatrix.io"
                      required
                    />
                  </div>
                </div>

                {/* Cipher */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-[10px] font-mono font-bold text-[#FEDB71] uppercase tracking-widest block">Access Cipher</label>
                    <button type="button" className="text-[10px] font-mono font-bold text-[#FEDB71] uppercase tracking-widest hover:text-white transition-colors">Reset Access</button>
                  </div>
                  <div className="relative group">
                    <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b63] group-focus-within:text-[#FEDB71] transition-colors" size={18} />
                    <input 
                      type="password" 
                      value={authCode}
                      onChange={(e) => setAuthCode(e.target.value)}
                      className="w-full bg-[#161614] border border-[#2a2a28] focus:border-[#FEDB71] rounded-2xl py-4 pl-12 pr-4 outline-none transition-all duration-300 text-sm font-mono text-white placeholder:text-[#4a4a42] tracking-[0.3em]"
                      placeholder="••••••••••••"
                      required
                    />
                  </div>
                </div>

                {/* MFA */}
                <div className="pt-2 pb-2">
                  <div 
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${mfaEnabled ? 'bg-[#161614] border-[#2a2a28]' : 'bg-[#161614] border-[#2a2a28]'}`}
                    onClick={() => setMfaEnabled(!mfaEnabled)}
                  >
                    <div className="flex items-center gap-4">
                      {/* Toggle */}
                      <div className={`w-10 h-5 rounded-full relative transition-colors ${mfaEnabled ? 'bg-[#FEDB71]' : 'bg-[#2a2a28]'}`}>
                        <div className={`w-3 h-3 bg-[#11110f] rounded-full absolute top-[4px] transition-all ${mfaEnabled ? 'right-1' : 'left-1 bg-[#6b6b63]'}`}></div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white mb-0.5">MULTI-FACTOR AUTH</div>
                        <div className="text-[10px] text-[#a3a398]">Send secure token to registered device</div>
                      </div>
                    </div>
                    <Shield size={16} className={mfaEnabled ? 'text-[#FEDB71]' : 'text-[#4a4a42]'} />
                  </div>
                </div>

                {/* Submit */}
                <button 
                  type="submit" 
                  disabled={isAuthenticating}
                  className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm tracking-wider transition-all duration-300
                    ${isAuthenticating 
                      ? 'bg-[#1f1f1a] text-[#4a4a42] cursor-not-allowed' 
                      : 'bg-[#FEDB71] hover:bg-[#e6b200] text-black hover:-translate-y-0.5 shadow-[0_0_15px_rgba(255,197,0,0.2)]'}`}
                >
                  {isAuthenticating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#4a4a42] border-t-transparent rounded-full animate-spin"></div>
                      AUTHENTICATING...
                    </>
                  ) : (
                    <>
                      INITIALIZE SESSION
                      <ArrowRight size={18} strokeWidth={2.5} />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-[#2a2a28]/50 flex flex-col items-center">
                <ShieldAlert size={12} className="text-[#6b6b63] mb-3" />
                <div className="text-[8px] font-mono text-[#a3a398] uppercase tracking-[0.2em] text-center font-bold">
                  PRECISION SYSTEM © 2024 MONEYMATRIX FINANCIAL<br/>UNIT
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer Bars */}
      <div className="px-8 py-6 w-full flex justify-between items-end border-t border-[#2a2a28]/30 bg-[#161614]/80 backdrop-blur-sm z-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FEDB71] animate-pulse"></div>
            <span className="text-[9px] font-mono font-bold text-[#FEDB71] uppercase tracking-widest">SYSTEM CORE: STABLE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6b6b63]"></div>
            <span className="text-[9px] font-mono font-bold text-[#6b6b63] uppercase tracking-widest">NETWORK LINK: ACTIVE</span>
          </div>
        </div>

        <div className="flex items-center gap-8 opacity-80">
          <div className="text-right flex flex-col gap-1">
            <div className="text-[8px] font-mono text-[#6b6b63] uppercase tracking-widest font-bold">GRID LOC</div>
            <div className="text-[9px] font-mono text-[#FEDB71] tracking-widest font-bold">40.7128° N, 74.0060° W</div>
          </div>
          <div className="text-right flex flex-col gap-1">
            <div className="text-[8px] font-mono text-[#6b6b63] uppercase tracking-widest font-bold">ENC LEVEL</div>
            <div className="text-[9px] font-mono text-[#FEDB71] tracking-widest font-bold">AES-256-GCM</div>
          </div>
          <div className="h-6 w-px bg-[#2a2a28]"></div>
          <Globe size={14} className="text-[#6b6b63]" />
          <div className="text-[9px] font-mono text-[#a3a398] tracking-widest font-bold">LATENCY: 12MS</div>
        </div>
      </div>

    </div>
  );
}

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
