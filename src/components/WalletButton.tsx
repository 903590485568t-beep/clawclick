import { useState } from 'react';
import { Wallet } from 'lucide-react';
import { clsx } from 'clsx';

export const WalletButton = () => {
  const [connected, setConnected] = useState(false);
  const [address] = useState('8x...4k29');

  const handleConnect = () => {
    setConnected(!connected);
  };

  return (
    <button
      onClick={handleConnect}
      className={clsx(
        "flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all duration-300 border",
        connected 
          ? "bg-black text-claw-red border-claw-red shadow-[0_0_10px_rgba(208,0,0,0.3)]" 
          : "bg-claw-red text-white border-transparent hover:bg-red-700 hover:shadow-lg"
      )}
    >
      <Wallet size={20} />
      {connected ? address : "Connect Wallet"}
    </button>
  );
};
