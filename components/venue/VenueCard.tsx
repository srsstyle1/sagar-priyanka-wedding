"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "lucide-react";

interface VenueCardProps {
  title: string;
  subtitle: string;
  image: string;
  map: string;
}

export default function VenueCard({
  title,
  subtitle,
  image,
  map,
}: VenueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden rounded-[36px] border border-[#D4AF37]/20 bg-[#1B0A12]/80 backdrop-blur-xl shadow-2xl"
    >
      {/* Image */}

      <div className="relative h-[320px] md:h-[500px] overflow-hidden">

        <Image
          src={image}
          alt={subtitle}
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#12050B] via-transparent to-transparent" />

      </div>

      {/* Content */}

      <div className="px-8 py-10 text-center">

        <p className="text-sm uppercase tracking-[8px] text-[#D4AF37]">
          {title}
        </p>

        <h3 className="mt-5 font-script text-5xl text-white md:text-6xl">
          {subtitle}
        </h3>

        <div className="mx-auto my-8 h-px w-20 bg-[#D4AF37]/30" />

        <p className="mx-auto max-w-xl text-white/70 leading-8">

          {title === "Wedding Ceremony"
            ? "Where our forever begins, surrounded by love, laughter and our cherished family."
            : "Where we gather together to celebrate a beautiful new beginning with everyone we love."}

        </p>

        <a
          href={map}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#D4AF37] px-8 py-3 text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
        >
          <Navigation className="h-5 w-5" />

          View on Google Maps →

        </a>

      </div>
    </motion.div>
  );
}