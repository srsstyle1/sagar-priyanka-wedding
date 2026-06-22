"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  date: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function StoryCard({
  title,
  date,
  description,
  image,
  reverse,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`grid items-center gap-10 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/20">
        <Image
          src={image}
          alt={title}
          width={800}
          height={900}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
      </div>

      <div>
        <p className="font-heading uppercase tracking-[5px] text-[#D4AF37]">
          {date}
        </p>

        <h2 className="mt-4 font-script text-6xl text-white">
          {title}
        </h2>

        <p className="mt-8 leading-9 text-white/70">
          {description}
        </p>
      </div>
    </motion.div>
  );
}