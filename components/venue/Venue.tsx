"use client";

import { motion } from "framer-motion";
import VenueCard from "./VenueCard";
import { venues } from "@/data/venues";

export default function Venue() {
  return (
    <section
      id="venue"
      className="relative overflow-hidden bg-[#12050B] py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF3715,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-24 text-center"
        >
          <p className="mb-3 uppercase tracking-[8px] text-[#D4AF37]">
            Wedding Destinations
          </p>

          <h2 className="font-script text-5xl leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Find Your Way
          </h2>

          <div className="mx-auto my-8 h-px w-40 bg-[#D4AF37]/30" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Explore the beautiful places where we'll begin our forever
               and celebrate this special occasion with our loved ones.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="space-y-20">

          {venues.map((venue, index) => (
            <div key={venue.id}>

              <VenueCard
                title={venue.title}
                subtitle={venue.subtitle}
                image={venue.image}
                map={venue.map}
              />

              {index !== venues.length - 1 && (
                <div className="my-20 flex justify-center">

                  <div className="flex items-center gap-4">

                    <div className="h-px w-20 bg-[#D4AF37]/30" />

                    <span className="text-3xl text-[#D4AF37]">
                      ✦
                    </span>

                    <div className="h-px w-20 bg-[#D4AF37]/30" />

                  </div>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}