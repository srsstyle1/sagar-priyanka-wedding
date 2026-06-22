"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080506]">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF3715,transparent_70%)]" />

      {/* Top Divider */}

      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center">

        {/* Animated Heart */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >
          <Heart
            className="h-12 w-12 fill-[#D4AF37] text-[#D4AF37]"
          />
        </motion.div>

        {/* Couple */}

        <h2 className="mt-8 font-script text-5xl text-white md:text-7xl">
          Sagar &amp; Priyanka
        </h2>

        {/* Date */}

        <p className="mt-4 uppercase tracking-[8px] text-[#D4AF37]">
          26 June 2026
        </p>

        {/* Divider */}

        <div className="my-12 h-px w-32 bg-[#D4AF37]/30" />

        {/* Quote */}

        <p className="max-w-xl font-script text-3xl leading-relaxed text-white/90 md:text-4xl">
          “Every love story is beautiful,
          <br />
          but ours is our favorite.”
        </p>

        {/* Divider */}

        <div className="my-12 h-px w-20 bg-[#D4AF37]/20" />

        {/* Thank You */}

        <p className="max-w-2xl text-lg leading-9 text-white/70">
          Thank you for being part of our most cherished memories.
          Your love, blessings and presence make this celebration
          truly unforgettable.
        </p>

        {/* Bottom Divider */}

        <div className="mt-16 mb-8 h-px w-full bg-[#D4AF37]/15" />

        {/* Credit */}

        <p className="text-sm tracking-[3px] text-white/40">
          Crafted with ❤️ by Sagar
        </p>

      </div>
    </footer>
  );
}