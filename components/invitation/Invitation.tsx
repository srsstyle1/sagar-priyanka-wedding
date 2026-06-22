"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import RoyalButton from "../ui/RoyalButton";
import Section from "../ui/Section";
import { wedding } from "@/data/weeding";

export default function Invitation() {
  return (
    <Section id="invitation">
      <GlassCard className="mx-auto max-w-4xl p-12 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl text-[#D4AF37]"
        >
          श्री गणेशाय नमः
        </motion.p>

        <h2 className="mt-8 text-5xl font-[family-name:var(--font-cormorant)] text-[#D4AF37]">
          Wedding Invitation
        </h2>

        <p className="mt-10 text-xl leading-9 text-white/80">
          Together with our beloved families,
          we request the honour of your gracious
          presence at the wedding ceremony of
        </p>

        <div className="mt-10 script-font text-7xl text-[#D4AF37]">
          {wedding.couple.groom}
        </div>

        <div className="my-4 text-4xl text-white">&</div>

        <div className="script-font text-7xl text-[#D4AF37]">
          {wedding.couple.bride}
        </div>

        <div className="mt-12 space-y-3">
          <p className="text-xl">
            {wedding.wedding.date}
          </p>

          <p className="text-lg text-white/70">
            {wedding.wedding.venue}
          </p>
        </div>

        <div className="mt-12">
          <a
            href={wedding.wedding.map}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RoyalButton>
              View Wedding Venue
            </RoyalButton>
          </a>
        </div>

      </GlassCard>
    </Section>
  );
}