"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/couple.webp"
          alt="Sagar & Priyanka"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#2B0D17] via-transparent to-black/30" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.45)_100%)]" />
    </>
  );
}