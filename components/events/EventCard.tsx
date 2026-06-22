"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

import DirectionButton from "./DirectionButton";
import CalendarButton from "./CalendarButton";

interface Props {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  map: string;
}

export default function EventCard({
  title,
  date,
  time,
  venue,
  address,
  map,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
      mx-auto
      max-w-2xl
      rounded-[40px]
      border
      border-[#D4AF37]/20
      bg-white/[0.03]
      px-10
      py-14
      text-center
      backdrop-blur-xl
      "
    >
      <h2 className="font-script text-6xl text-white">
        {title}
      </h2>

      <div className="mt-10 space-y-5">

        <div className="flex items-center justify-center gap-3 text-[#D4AF37]">
          <CalendarDays size={18} />
          {date}
        </div>

        <div className="flex items-center justify-center gap-3 text-white/80">
          <Clock3 size={18} />
          {time}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <MapPin
            size={18}
            className="text-[#D4AF37]"
          />

          <span className="font-heading text-2xl text-white">
            {venue}
          </span>
        </div>

        <p className="text-white/60">
          {address}
        </p>

      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">

        <DirectionButton url={map} />

        <CalendarButton date={date} />

      </div>
    </motion.div>
  );
}