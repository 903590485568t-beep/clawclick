import { ExternalLink, Rocket } from 'lucide-react';

export const TokenInfo = () => {
  return (
    <div className="w-full">
      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
        <Rocket size={14} /> Tokenomics
      </h4>
      
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-4 rounded-xl border border-blue-500/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors"></div>
          
          <h3 className="font-bold text-blue-300 mb-1 relative z-10">Buy on PumpFun</h3>
          <p className="text-xs text-blue-200/60 mb-3 relative z-10 max-w-[80%]">
            Join the revolution. The claw is waiting.
          </p>
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-lg shadow-blue-900/20 relative z-10"
          >
            View Chart <ExternalLink size={12} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
            <div className="text-[10px] text-gray-500 uppercase font-bold">Total Supply</div>
            <div className="font-mono font-bold text-white text-sm">1B</div>
          </div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
            <div className="text-[10px] text-gray-500 uppercase font-bold">Network</div>
            <div className="font-mono font-bold text-claw-red text-sm">SOL</div>
          </div>
        </div>
      </div>
    </div>
  );
};
