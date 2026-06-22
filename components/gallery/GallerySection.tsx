"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  description: string;
  reverse: boolean;
  onClick?: () => void;
}

export default function GallerySection({
  image,
  title,
  description,
  reverse,
  onClick,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className={`grid items-center gap-16 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div onClick={onClick}
           className="cursor-pointer overflow-hidden rounded-[40px] border border-[#D4AF37]/20">
        <Image
          src={image}
          alt={title}
          width={900}
          height={1200}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
      </div>

      <div>
        <h2 className="font-script text-6xl text-white">
          {title}
        </h2>

        <div className="my-8 h-px w-32 bg-[#D4AF37]/30" />

        <p className="text-lg leading-9 text-white/70">
          {description}
        </p>
      </div>
    </motion.div>
  );
}