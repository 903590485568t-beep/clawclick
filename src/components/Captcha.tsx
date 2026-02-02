import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CaptchaProps {
  onVerify: () => void;
}

export const Captcha = ({ onVerify }: CaptchaProps) => {
  // Random position within the viewport (with some padding)
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    const randomTop = 20 + Math.random() * 60; // 20% to 80% height
    const randomLeft = 10 + Math.random() * 80; // 10% to 90% width
    setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed z-50 p-4 bg-black rounded-xl shadow-[0_0_20px_rgba(255,186,8,0.3)] border-2 border-claw-yellow flex flex-col items-center gap-2"
      style={{ top: position.top, left: position.left, transform: 'translate(-50%, -50%)' }}
    >
      <p className="text-sm font-bold text-claw-yellow whitespace-nowrap uppercase tracking-wider">⚠️ Human Verify</p>
      <button
        onClick={onVerify}
        className="w-8 h-8 rounded border-2 border-gray-600 hover:border-claw-yellow flex items-center justify-center transition-colors group bg-gray-900"
      >
        <div className="w-5 h-5 bg-claw-yellow rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </motion.div>
  );
};
