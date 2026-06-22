"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "15%", size: 3, delay: 0 },
  { left: "18%", top: "72%", size: 4, delay: 1.2 },
  { left: "28%", top: "38%", size: 2, delay: 2.4 },
  { left: "40%", top: "82%", size: 3, delay: 0.8 },
  { left: "52%", top: "20%", size: 4, delay: 1.8 },
  { left: "63%", top: "58%", size: 3, delay: 2.8 },
  { left: "74%", top: "28%", size: 2, delay: 0.5 },
  { left: "82%", top: "75%", size: 4, delay: 3.2 },
  { left: "90%", top: "42%", size: 3, delay: 1.4 },
  { left: "96%", top: "18%", size: 2, delay: 2.2 },
];

export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: 0.45,
            boxShadow: "0 0 12px rgba(212,175,55,0.8)",
          }}
          animate={{
            y: [-10, 15, -10],
            x: [-2, 2, -2],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}