import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  User, 
  KeyRound, 
  Shield, 
  ArrowRight,
  Database
} from 'lucide-react';
import Dashboard from './Dashboard';

function LoginScreen({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen w-full bg-mm-bg text-white font-sans flex flex-col justify-between p-8 overflow-hidden selection:bg-mm-yellow selection:text-black">
      {/* Background pattern (optional subtle grid if needed) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto w-full gap-20 relative z-10">
        
        {/* Left Side: Branding & Info */}
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-mm-yellow border border-mm-yellow rounded-full p-1 border-l-0 border-b-0 -rotate-45">
               <div className="rotate-45">
                 <ShieldCheck size={16} />
               </div>
            </div>
            <span className="font-mono text-[11px] text-mm-textMuted tracking-[0.2em] font-medium">
              ENCRYPTED CHANNEL ESTABLISHED
            </span>
          </div>

          <h1 className="text-7xl font-bold tracking-tighter mb-8 flex items-center">
            <span className="text-[#f4f4f4]">MONEY</span>
            <span className="text-mm-yellow">MATRIX</span>
          </h1>

          <p className="text-[22px] leading-relaxed text-mm-textMuted max-w-lg mb-16 font-light">
            Secure Banking Network Access for Certified Fraud Investigators and Intelligence Officers.
          </p>

          <div className="flex gap-20">
            <div>
              <div className="text-mm-yellow text-2xl font-bold mb-2">99.9%</div>
              <div className="font-mono text-[10px] text-mm-textSubtle tracking-[0.15em]">UPTIME RELIABILITY</div>
            </div>
            <div>
              <div className="text-mm-yellow text-2xl font-bold mb-2">AES-256</div>
              <div className="font-mono text-[10px] text-mm-textSubtle tracking-[0.15em]">QUANTUM ENCRYPTION</div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Card */}
        <div className="w-[440px] bg-mm-card/90 backdrop-blur-sm border border-mm-border rounded-3xl p-10 relative shadow-2xl">
          
          {/* Card Header */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-2xl font-bold mb-2">TERMINAL LOGIN</h2>
              <div className="font-mono text-[10px] text-mm-textSubtle tracking-[0.15em]">AUTHORIZED PERSONNEL ONLY</div>
            </div>
            <div className="flex flex-col items-end gap-3 absolute top-10 right-10">
              <div className="font-mono text-[9px] text-mm-textSubtle tracking-wider">TRANS_ID: 8842-MM-SEC</div>
              <div className="bg-mm-input border border-mm-border p-2.5 rounded-xl">
                <Lock size={16} className="text-mm-yellow" />
              </div>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Employee ID */}
            <div>
              <label className="block font-mono text-[10px] text-mm-yellow tracking-[0.15em] mb-3 font-semibold">
                EMPLOYEE ID / EMAIL
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-mm-textSubtle pointer-events-none">
                  <User size={18} />
                </div>
                <input 
                  type="email" 
                  placeholder="investigator@moneymatrix.io"
                  className="w-full bg-mm-input border border-mm-border focus:border-mm-yellow/50 focus:ring-1 focus:ring-mm-yellow/50 rounded-xl py-4 pl-12 pr-4 text-sm outline-none transition-all placeholder:text-mm-textSubtle/50 font-mono"
                />
              </div>
            </div>

            {/* Access Cipher */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-mono text-[10px] text-mm-yellow tracking-[0.15em] font-semibold">
                  ACCESS CIPHER
                </label>
                <button type="button" className="font-mono text-[9px] text-mm-yellow hover:text-mm-yellowHover transition-colors cursor-pointer tracking-wider font-semibold">
                  RESET ACCESS
                </button>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-mm-textSubtle pointer-events-none">
                  <KeyRound size={18} />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••••••"
                  className="w-full bg-mm-input border border-mm-border focus:border-mm-yellow/50 focus:ring-1 focus:ring-mm-yellow/50 rounded-xl py-4 pl-12 pr-4 text-sm outline-none transition-all placeholder:text-mm-textSubtle/50 font-mono tracking-[0.2em]"
                />
              </div>
            </div>

            {/* MFA Toggle */}
            <div className="border border-mm-border bg-mm-bg/50 rounded-xl p-4 flex items-center justify-between mt-2">
              <div className="flex items-center gap-4">
                <button 
                  type="button" 
                  className="w-11 h-6 bg-mm-yellow rounded-full relative flex items-center shrink-0 cursor-pointer transition-colors"
                  role="switch"
                  aria-checked="true"
                >
                  <div className="w-4 h-4 bg-[#161613] rounded-full absolute right-1 transition-transform"></div>
                </button>
                <div>
                  <div className="font-bold text-sm mb-1 text-white">MULTI-FACTOR AUTH</div>
                  <div className="font-sans text-[11px] text-mm-textMuted">Send secure token to registered device</div>
                </div>
              </div>
              <Shield size={18} className="text-mm-yellow shrink-0" />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-mm-yellow hover:bg-mm-yellowHover text-black font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-3 mt-4 text-[13px] tracking-wide"
            >
              INITIALIZE SESSION
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Card Footer */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <Shield size={12} className="text-mm-textSubtle" />
            <div className="font-mono text-[8px] text-mm-textSubtle tracking-[0.3em] text-center w-full">
              PRECISION SYSTEM © 2024 MONEYMATRIX FINANCIAL UNIT
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="w-full flex justify-between items-end pb-2 relative z-10">
        {/* Left Status */}
        <div className="flex flex-col gap-3 font-mono text-[9px] tracking-[0.15em] font-semibold">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-mm-yellow shadow-[0_0_8px_rgba(255,197,0,0.8)]"></div>
            <span className="text-mm-yellow">SYSTEM CORE: STABLE</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-mm-textSubtle"></div>
            <span className="text-mm-textSubtle">NETWORK LINK: ACTIVE</span>
          </div>
        </div>

        {/* Right Status */}
        <div className="flex items-end gap-10 font-mono">
          <div className="flex flex-col items-end gap-1">
            <span className="text-[7px] text-mm-textSubtle tracking-widest">GRID LOC</span>
            <span className="text-mm-yellow text-[9px] tracking-widest">40.7128° N, 74.0060° W</span>
          </div>
          
          <div className="flex flex-col items-end gap-1">
            <span className="text-[7px] text-mm-textSubtle tracking-widest">ENC LEVEL</span>
            <span className="text-mm-yellow text-[9px] tracking-widest">AES-256-GCM</span>
          </div>

          <div className="flex items-center gap-4 text-[9px] text-mm-textMuted tracking-widest pb-0.5">
            <Database size={12} className="text-mm-textSubtle" />
            <span>LATENCY: 12MS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Dashboard onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
