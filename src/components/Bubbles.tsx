import { motion } from 'framer-motion';
import lobsterImg from '../assets/titan_lobster.png';

export const Bubbles = () => {
  // Increased count for more density
  const items = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-10 filter blur-[1px]"
          initial={{
            top: '110%',
            left: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
            rotate: Math.random() * 360,
          }}
          animate={{
            top: '-10%',
            rotate: Math.random() * 360 + 360,
          }}
          transition={{
            duration: Math.random() * 20 + 15, // Slow floating
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20,
          }}
        >
          <img src={lobsterImg} alt="" className="w-8 h-8 opacity-60" />
        </motion.div>
      ))}
      
      {/* Additional atmospheric particles */}
      {Array.from({ length: 10 }).map((_, i) => (
         <motion.div
          key={`p-${i}`}
          className="absolute w-1 h-1 bg-red-500 rounded-full opacity-20"
          initial={{
            top: '110%',
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            top: '-10%',
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
};
