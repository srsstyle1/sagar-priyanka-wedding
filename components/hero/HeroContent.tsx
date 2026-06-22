"use client";

import { motion } from "framer-motion";
import RoyalButton from "../ui/RoyalButton";
import GoldDivider from "../ui/GoldDivider";
import WeddingLogo from "../ui/WeddingLogo";
import { wedding } from "@/data/weeding";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">

      <div className="max-w-3xl">

        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:.8}}
        >
          <WeddingLogo />
        </motion.div>

        <motion.p
          className="mt-10 font-heading text-lg uppercase tracking-[8px] text-[#D4AF37]"
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{delay:.3}}
        >
          Together with 
          <br />
          Our Families
        </motion.p>

        <motion.h1
          className="font-script mt-10 text-7xl text-white md:text-[8rem]"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.6}}
        >
          {wedding.couple.groom}
        </motion.h1>

        <GoldDivider />

        <motion.h1
          className="font-script text-7xl text-white md:text-[8rem]"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.9}}
        >
          {wedding.couple.bride}
        </motion.h1>

        <motion.p
          className="mx-auto mt-10 max-w-2xl font-body text-lg leading-9 text-white/80"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.2}}
        >
          Request the honour of your gracious presence as we celebrate the beginning of our forever.
        </motion.p>

        <motion.div
          className="mt-14"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5}}
        >
          <RoyalButton>
            View Invitation
          </RoyalButton>
        </motion.div>

      </div>

    </div>
  );
}