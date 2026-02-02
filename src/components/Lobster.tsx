import { motion } from 'framer-motion';

export const Lobster = ({ onClick, isAnimating }: { onClick: () => void; isAnimating: boolean }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.92, rotate: -2 }}
      animate={isAnimating ? { 
        scale: [1, 1.1, 1],
        rotate: [0, -3, 3, 0]
      } : {}}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      className="cursor-pointer relative z-10 w-80 h-80 md:w-[500px] md:h-[500px]" // Increased size
    >
      <svg
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_20px_50px_rgba(208,0,0,0.4)] filter"
      >
        <defs>
          {/* Main Body Gradient */}
          <radialGradient id="carapaceGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(300)">
            <stop offset="0%" stopColor="#D90429" /> {/* Vivid Red */}
            <stop offset="60%" stopColor="#8D0801" /> {/* Deep Red */}
            <stop offset="100%" stopColor="#2B0504" /> {/* Almost Black */}
          </radialGradient>

          {/* Claw Gradient - Shiny */}
          <linearGradient id="clawGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EF233C" />
            <stop offset="50%" stopColor="#D90429" />
            <stop offset="100%" stopColor="#540804" />
          </linearGradient>

          {/* Gold Highlight for Spikes */}
          <linearGradient id="spikeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFBA08" />
            <stop offset="100%" stopColor="#FAA307" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ================= LEGS (Background) ================= */}
        <g stroke="#540804" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
           {/* Left Legs */}
           <path d="M300 450 L200 430 L150 460" />
           <path d="M310 500 L210 500 L160 540" />
           <path d="M320 550 L230 570 L190 620" />
           <path d="M330 600 L250 630 L220 680" />

           {/* Right Legs */}
           <path d="M500 450 L600 430 L650 460" />
           <path d="M490 500 L590 500 L640 540" />
           <path d="M480 550 L570 570 L610 620" />
           <path d="M470 600 L550 630 L580 680" />
        </g>

        {/* ================= TAIL FAN ================= */}
        <path 
          d="M300 700 Q400 780 500 700 L520 740 Q400 820 280 740 Z" 
          fill="#540804" stroke="#2B0504" strokeWidth="4"
        />
        {/* Tail Segments */}
        <path d="M320 650 Q400 680 480 650 L500 700 Q400 740 300 700 Z" fill="url(#carapaceGrad)" stroke="#2B0504" strokeWidth="4"/>
        <path d="M330 600 Q400 630 470 600 L480 650 Q400 680 320 650 Z" fill="url(#carapaceGrad)" stroke="#2B0504" strokeWidth="4"/>
        <path d="M340 550 Q400 580 460 550 L470 600 Q400 630 330 600 Z" fill="url(#carapaceGrad)" stroke="#2B0504" strokeWidth="4"/>


        {/* ================= CARAPACE (Main Body) ================= */}
        <path 
          d="M340 550 C300 450 280 300 400 200 C520 300 500 450 460 550 Z" 
          fill="url(#carapaceGrad)" 
          stroke="#2B0504" 
          strokeWidth="6"
        />
        {/* Carapace Details/Armor */}
        <path d="M400 200 L400 550" stroke="#2B0504" strokeWidth="2" opacity="0.5"/>
        <path d="M320 400 Q400 450 480 400" stroke="#2B0504" strokeWidth="4" fill="none" opacity="0.3"/>
        <path d="M305 350 Q400 400 495 350" stroke="#2B0504" strokeWidth="4" fill="none" opacity="0.3"/>

        {/* ================= MASSIVE CLAWS (The Star of the Show) ================= */}
        
        {/* --- LEFT CLAW --- */}
        <g transform="rotate(-15 250 250)">
            {/* Arm */}
            <path d="M300 300 Q200 300 150 250" stroke="#8D0801" strokeWidth="40" strokeLinecap="round"/>
            
            {/* The Claw Pincer Bottom */}
            <path 
              d="M150 250 Q100 250 50 200 Q100 220 150 250" 
              fill="#540804" stroke="#2B0504" strokeWidth="4"
            />
            {/* The Claw Pincer Top (GIANT) */}
            <path 
              d="M150 250 C140 100 20 -50 -50 50 C20 100 80 180 150 250" 
              fill="url(#clawGrad)" 
              stroke="#2B0504" 
              strokeWidth="6"
            />
            {/* Spikes on Claw */}
            <path d="M40 80 L20 60 L60 70 Z" fill="url(#spikeGrad)" />
            <path d="M80 120 L60 100 L100 110 Z" fill="url(#spikeGrad)" />
            <path d="M110 160 L90 140 L130 150 Z" fill="url(#spikeGrad)" />
        </g>

        {/* --- RIGHT CLAW --- */}
        <g transform="rotate(15 550 250)">
            {/* Arm */}
            <path d="M500 300 Q600 300 650 250" stroke="#8D0801" strokeWidth="40" strokeLinecap="round"/>
            
            {/* The Claw Pincer Bottom */}
            <path 
              d="M650 250 Q700 250 750 200 Q700 220 650 250" 
              fill="#540804" stroke="#2B0504" strokeWidth="4"
            />
            {/* The Claw Pincer Top (GIANT) */}
            <path 
              d="M650 250 C660 100 780 -50 850 50 C780 100 720 180 650 250" 
              fill="url(#clawGrad)" 
              stroke="#2B0504" 
              strokeWidth="6"
            />
            {/* Spikes on Claw */}
            <path d="M760 80 L780 60 L740 70 Z" fill="url(#spikeGrad)" />
            <path d="M720 120 L740 100 L700 110 Z" fill="url(#spikeGrad)" />
            <path d="M690 160 L710 140 L670 150 Z" fill="url(#spikeGrad)" />
        </g>

        {/* ================= FACE ================= */}
        {/* Antennae */}
        <path d="M380 220 C350 100 250 50 200 20" stroke="#EF233C" strokeWidth="4" fill="none" />
        <path d="M420 220 C450 100 550 50 600 20" stroke="#EF233C" strokeWidth="4" fill="none" />
        
        {/* Eyes (Glowing) */}
        <circle cx="380" cy="230" r="12" fill="black" stroke="#2B0504" strokeWidth="2" />
        <circle cx="380" cy="230" r="4" fill="white" />
        
        <circle cx="420" cy="230" r="12" fill="black" stroke="#2B0504" strokeWidth="2" />
        <circle cx="420" cy="230" r="4" fill="white" />

      </svg>
      
      {/* Click Impact Effect (Optional overlay in div) */}
      {isAnimating && (
        <motion.div 
          className="absolute inset-0 rounded-full bg-red-500/20 z-0"
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};
