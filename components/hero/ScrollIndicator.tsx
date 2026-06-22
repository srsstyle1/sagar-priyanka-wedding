"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center text-[#D4AF37]"
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
    >
      <span className="mb-2 text-xs uppercase tracking-[6px]">
        Scroll
      </span>

      <ChevronDown size={26} />
    </motion.div>
  );
}