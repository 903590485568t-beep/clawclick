import { motion } from 'framer-motion';
import { MouseEvent } from 'react';
import lobsterImg from '../assets/titan_lobster.png';

export const Lobster = ({ onClick, isAnimating }: { onClick: (e: MouseEvent) => void; isAnimating: boolean }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9, rotate: -5 }}
      animate={isAnimating ? { 
        scale: [1, 1.15, 0.9, 1],
        rotate: [0, -5, 5, 0]
      } : {
        scale: [1, 1.02, 1],
      }}
      transition={isAnimating ? {
        type: "spring",
        stiffness: 400,
        damping: 15
      } : {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      onClick={onClick}
      className="cursor-pointer relative z-10 w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center"
    >
      <img 
        src={lobsterImg} 
        alt="ClawClick Lobster" 
        className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(208,0,0,0.4)] filter"
      />
    </motion.div>
  );
};
