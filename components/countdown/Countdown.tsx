"use client";

import { useEffect, useState } from "react";
import CountdownCard from "./CountdownCard";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_DATE = new Date("2026-06-26T18:30:00");

export default function Countdown() {
  const [mounted, setMounted] = useState(false);

  const [time, setTime] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTime = (): CountdownTime => {
    const now = new Date();

    const difference = WEDDING_DATE.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    setMounted(true);

    setTime(calculateTime());

    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <section
        id="countdown"
        className="relative overflow-hidden bg-[#17060D] pt-28 pb-24 md:pt-36 md:pb-28"
      >
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <p className="uppercase tracking-[8px] text-[#D4AF37]">
              Every Moment Matters
            </p>

            <h2 className="mt-4 font-script text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Our Forever Begins In
            </h2>

          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">

            <CountdownCard value={0} label="Days" />
            <CountdownCard value={0} label="Hours" />
            <CountdownCard value={0} label="Minutes" />
            <CountdownCard value={0} label="Seconds" />

          </div>

        </div>
      </section>
    );
  }

  return (
    <section
     
      id="countdown"
      className="relative overflow-hidden bg-[#17060D] pt-28 pb-24 md:pt-36 md:pb-28"
      >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF3715,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37]">
            Every Moment Matters
          </p>

          <h2 className="mt-5 font-script text-6xl text-white md:text-8xl">
            Our Forever Begins In
          </h2>

          <p className="mx-auto mt-6 max-w-2xl px-4 text-base leading-8 text-white/70 md:text-lg">
            Every passing moment brings us closer to celebrating
            love, laughter, and a lifetime of beautiful memories
            with our family and friends.
          </p>

        </div>

        {/* Countdown */}

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 md:mt-16 md:gap-6 lg:grid-cols-4">

          <CountdownCard value={time.days} label="Days" />

          <CountdownCard value={time.hours} label="Hours" />

          <CountdownCard value={time.minutes} label="Minutes" />

          <CountdownCard value={time.seconds} label="Seconds" />

        </div>

        {/* Footer */}

        <div className="mt-20 text-center">

          <div className="mx-auto mb-8 h-px w-40 bg-[#D4AF37]/30" />

          <h3 className="font-script text-4xl text-[#D4AF37] md:text-6xl">
            26 June 2026
          </h3>

          <p className="mt-5 text-lg text-white/60">
            We can't wait to celebrate this beautiful day with you.
          </p>

        </div>

      </div>
    </section>
  );
}