import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface FloatingTextProps {
  x: number;
  y: number;
  text: string;
  id: number;
  onComplete: (id: number) => void;
}

export const FloatingText = ({ x, y, text, id, onComplete }: FloatingTextProps) => {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(id), 1000);
    return () => clearTimeout(timer);
  }, [id, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1, y: y, x: x, scale: 0.5 }}
      animate={{ opacity: 0, y: y - 100, scale: 1.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute pointer-events-none text-xl font-black text-white z-50 whitespace-nowrap"
      style={{ textShadow: '2px 2px 0px #D00000' }} 
    >
      {text}
    </motion.div>
  );
};
