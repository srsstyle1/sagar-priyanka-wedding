"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

import Glow from "../effects/Glow";
import Particles from "../effects/Particles";
import Vignette from "../effects/Vignette";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <HeroBackground />

      {/* Visual Effects */}
      <Vignette />
      <Glow />
      <Particles />

      {/* Hero Content */}
      <div className="relative z-20">
        <HeroContent />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
