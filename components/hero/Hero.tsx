"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-20">
        <HeroContent />
      </div>
    </section>
  );
}