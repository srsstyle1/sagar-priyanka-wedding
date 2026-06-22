"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { JourneyItem } from "@/data/journey";

interface Props {
  item: JourneyItem;
  reverse?: boolean;
}

export default function JourneyScene({
  item,
  reverse = false,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#12050B] py-24 md:py-32">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[30px] border border-[#D4AF37]/20 shadow-2xl"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={900}
            height={1200}
            priority={item.id === 1}
            className={`
            h-[420px]
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-105
            md:h-[550px]
            lg:h-[700px]
           ${
            item.image.includes("groom")
             ? "object-[center_12%]"
             : "object-center"
       }
      `}
          />
        </motion.div>

        {/* TEXT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Subtitle */}

          <p className="text-sm uppercase tracking-[10px] text-[#D4AF37]">
            {item.subtitle}
          </p>

          {/* Title */}

          <h2 className="mt-6 font-script text-5xl leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {item.title}
          </h2>

          {/* Divider */}

          <div className="mx-auto my-8 h-px w-28 bg-[#D4AF37]/30 lg:mx-0" />

          {/* Description */}

          <p className="mx-auto max-w-xl text-base leading-8 text-white/70 md:text-lg lg:mx-0">
            {item.description}
          </p>
        </motion.div>
      </div>
      <div className="h-20 md:h-28" />
    </section>
  );
}