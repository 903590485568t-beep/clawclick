import { useState, useEffect } from 'react';
import { Lobster } from './components/Lobster';
import { WalletButton } from './components/WalletButton';
import { Exchange } from './components/Exchange';
import { TokenInfo } from './components/TokenInfo';
import { Bubbles } from './components/Bubbles';
import { Captcha } from './components/Captcha';
import { FloatingText } from './components/FloatingText';
import { motion, AnimatePresence } from 'framer-motion';

// Meme phrases for random display
const MEME_PHRASES = [
  "Wen Lambo?", "To The Moon! 🚀", "HODL!", "Buy the Dip", 
  "Diamond Hands 💎", "So Fast!", "Much Wow", "Click Click", 
  "Solana Summer ☀️", "Pump It!", "Jeets get out", "Chad Move",
  "100x Soon", "WAGMI", "LFG!!!", "Based", "Red Lobster 🦞",
  "Claw Gang", "Snip Snip"
];

function App() {
  const [points, setPoints] = useState(0);
  const [clawTokens, setClawTokens] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showExchange, setShowExchange] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Floating Text State
  const [floatingTexts, setFloatingTexts] = useState<{id: number, x: number, y: number, text: string}[]>([]);

  // Captcha State
  const [clicksSinceLastCaptcha, setClicksSinceLastCaptcha] = useState(0);
  const [captchaThreshold, setCaptchaThreshold] = useState(50); 
  const [showCaptcha, setShowCaptcha] = useState(false);

  // Load state from local storage on mount
  useEffect(() => {
    const savedPoints = localStorage.getItem('clawPoints');
    const savedTokens = localStorage.getItem('clawTokens');
    if (savedPoints) setPoints(parseInt(savedPoints));
    if (savedTokens) setClawTokens(parseFloat(savedTokens));
    
    setCaptchaThreshold(Math.floor(Math.random() * 50) + 20);
  }, []);

  // Save state to local storage
  useEffect(() => {
    localStorage.setItem('clawPoints', points.toString());
    localStorage.setItem('clawTokens', clawTokens.toString());
  }, [points, clawTokens]);

  const handleLobsterClick = (e: React.MouseEvent) => {
    if (showCaptcha) return;

    setPoints(prev => prev + 1);
    setClickCount(prev => prev + 1);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);

    // Add floating text (random chance or every N clicks)
    if (Math.random() > 0.7) {
      const randomText = MEME_PHRASES[Math.floor(Math.random() * MEME_PHRASES.length)];
      const newText = {
        id: Date.now(),
        x: e.clientX + (Math.random() * 40 - 20),
        y: e.clientY - 20,
        text: randomText
      };
      setFloatingTexts(prev => [...prev, newText]);
    }

    // Captcha Logic
    const newClickCount = clicksSinceLastCaptcha + 1;
    setClicksSinceLastCaptcha(newClickCount);

    if (newClickCount >= captchaThreshold) {
      setShowCaptcha(true);
    }
  };

  const removeFloatingText = (id: number) => {
    setFloatingTexts(prev => prev.filter(ft => ft.id !== id));
  };

  const handleCaptchaVerify = () => {
    setShowCaptcha(false);
    setClicksSinceLastCaptcha(0);
    setCaptchaThreshold(Math.floor(Math.random() * 80) + 20);
  };

  const handleExchange = (amount: number) => {
    setPoints(prev => prev - amount);
    setClawTokens(prev => prev + (amount / 100000));
    setShowExchange(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-claw-red selection:text-white overflow-x-hidden relative">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a0505] via-[#000000] to-[#000000]"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <Bubbles />

      {/* Floating Texts Container */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {floatingTexts.map(ft => (
          <FloatingText 
            key={ft.id} 
            id={ft.id} 
            x={ft.x} 
            y={ft.y} 
            text={ft.text} 
            onComplete={removeFloatingText} 
          />
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-black/10 backdrop-blur-md border-b border-white/5 z-40 transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-claw-red to-claw-dark-red rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(208,0,0,0.5)]">
               <span className="text-2xl">🦞</span>
            </div>
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tighter" title="The one and only!">$ClawClick</span>
          </div>
          
          <div className="flex items-center gap-4">
             <a 
               href="https://x.com/ClawClickFun" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-10 h-10 flex items-center justify-center bg-white/5 text-white rounded-full hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20"
               title="Follow us on X"
             >
               <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
               </svg>
             </a>
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Balance</span>
              <span className="text-claw-red font-mono font-bold text-lg leading-none shadow-red-glow">{clawTokens.toFixed(4)} $CLAW</span>
            </div>
            <WalletButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-12 relative z-10 min-h-screen flex flex-col justify-center">
        
        {/* Captcha Overlay */}
        {showCaptcha && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center">
             <Captcha onVerify={handleCaptchaVerify} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: GAME ZONE (Larger area) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
             
             {/* Dynamic Glow behind Lobster */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
             
             {/* Score Board */}
             <div className="text-center mb-12 relative z-20">
              <motion.div 
                key={points}
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-8xl md:text-[10rem] font-black text-white drop-shadow-[0_0_30px_rgba(208,0,0,0.6)] select-none font-mono tracking-tighter leading-none"
              >
                {points}
              </motion.div>
              <div className="flex items-center justify-center gap-3 mt-4">
                 <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-500"></div>
                 <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-sm">Points Mined</p>
                 <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-500"></div>
              </div>
            </div>

            {/* Game Area */}
            <div className="relative group perspective-1000">
              {/* CLICK ME HINT */}
              {clickCount < 5 && (
                 <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full font-black text-sm whitespace-nowrap z-30 pointer-events-none shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                 >
                   TAP TO MINE
                   <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                 </motion.div>
              )}

              <div className="cursor-pointer transition-all duration-100 hover:scale-105 active:scale-95 active:rotate-1 relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                 <Lobster onClick={handleLobsterClick} isAnimating={isAnimating} />
              </div>
            </div>
            
          </div>

          {/* RIGHT COLUMN: DASHBOARD (Glassmorphism) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Glass Card Container */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-1 shadow-2xl">
              <div className="bg-black/40 rounded-[20px] p-6">
                
                {/* Stats Header */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
                   <div>
                     <h3 className="text-xl font-bold text-white">Control Panel</h3>
                     <p className="text-xs text-gray-500 font-mono mt-1">ID: 8X...992A</p>
                   </div>
                   <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold border border-green-500/20 flex items-center gap-2">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                     ONLINE
                   </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                    <button 
                      onClick={() => setShowExchange(!showExchange)}
                      className="group w-full py-4 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] hover:from-claw-red hover:to-claw-dark-red text-white rounded-xl font-bold shadow-lg transition-all border border-white/5 hover:border-red-500/50 flex items-center justify-between px-6 overflow-hidden relative"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <span className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">🔄</span>
                        {showExchange ? 'Close Exchange' : 'Exchange Points'}
                      </span>
                      <span className="relative z-10 opacity-50 group-hover:opacity-100 transition-opacity">→</span>
                      
                      {/* Hover effect light */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>

                    <AnimatePresence>
                      {showExchange && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden w-full"
                        >
                          <Exchange points={points} onExchange={handleExchange} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>

                <div className="mt-8">
                   <TokenInfo />
                </div>

              </div>
            </div>

            {/* Bottom Status Card */}
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors cursor-default">
                  <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">🚀</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Phase</span>
                  <span className="text-white font-bold">Accumulation</span>
               </div>
               <button 
                onClick={() => alert("🏎️ Vroom Vroom! Soon brother, soon.")}
                className="bg-claw-yellow/10 backdrop-blur-md border border-claw-yellow/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-claw-yellow/20 transition-colors"
               >
                  <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">🏎️</span>
                  <span className="text-xs text-yellow-500/70 uppercase tracking-wider font-bold">Goal</span>
                  <span className="text-yellow-400 font-bold">Lambo</span>
               </button>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-6 mt-auto relative z-10 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-600 text-xs font-mono">
          <p>© 2024 $ClawClick Protocol. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
             <span>System: Stable</span>
             <span>v1.0.2-beta</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
