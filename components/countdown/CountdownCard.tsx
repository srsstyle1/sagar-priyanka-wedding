"use client";

import { motion, AnimatePresence } from "framer-motion";

interface CountdownCardProps {
  value: number;
  label: string;
}

export default function CountdownCard({
  value,
  label,
}: CountdownCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="
        countdown-card
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-[#D4AF37]/20
        bg-white/5
        p-8
        text-center
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-[#D4AF37]/50
      "
    >
      {/* Gold Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#D4AF37]/10
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Animated Number */}
      <div className="relative z-10 overflow-hidden h-20 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -40,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              font-heading
              text-6xl
              md:text-7xl
              font-semibold
              text-white
            "
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Divider */}
      <div className="mx-auto my-5 h-px w-12 bg-[#D4AF37]/40" />

      {/* Label */}
      <p
        className="
          text-xs
          uppercase
          tracking-[5px]
          text-[#D4AF37]
          md:text-sm
        "
      >
        {label}
      </p>

      {/* Bottom Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          bg-[#D4AF37]
          transition-all
          duration-500
          group-hover:w-4/5
        "
      />
    </motion.div>
  );
}