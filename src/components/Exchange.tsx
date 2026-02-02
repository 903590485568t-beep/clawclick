import { useState } from 'react';
import { ArrowRightLeft, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

export const Exchange = ({ points, onExchange }: { points: number, onExchange: (amount: number) => void }) => {
  const [amount, setAmount] = useState('');
  const rate = 100000; // 100,000 points = 1 $ClawClick

  const handleExchange = () => {
    const val = parseInt(amount);
    if (val > 0 && val <= points) {
      onExchange(val);
      setAmount('');
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-claw-red mb-4 flex items-center gap-2">
        <ArrowRightLeft size={20} /> Exchange
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Points to Exchange</label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:border-claw-red focus:outline-none transition-colors"
              placeholder="0"
            />
            <span className="absolute right-4 top-2 text-gray-500 text-sm">PTS</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">Available: {points} PTS</div>
        </div>

        <div className="flex justify-center">
          <ArrowRightLeft className="text-claw-red rotate-90" size={20} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">You Receive</label>
          <div className="bg-black/20 px-4 py-2 rounded-lg border border-gray-800 flex justify-between items-center">
            <span className="font-bold text-lg text-white">
              {amount ? (parseInt(amount) / rate).toFixed(2) : '0.00'}
            </span>
            <span className="font-bold text-claw-red">$ClawClick</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">Rate: {rate} PTS = 1 $ClawClick</div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleExchange}
          disabled={!amount || parseInt(amount) > points || parseInt(amount) <= 0}
          className="w-full bg-claw-red text-white py-3 rounded-xl font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
        >
          <Coins size={20} />
          Exchange Now
        </motion.button>
      </div>
    </div>
  );
};
