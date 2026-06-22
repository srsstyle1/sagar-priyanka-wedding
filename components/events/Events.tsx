"use client";

import { events } from "@/data/events";
import EventCard from "./EventCard";
import EventDivider from "./EventDivider";

export default function Events() {
  return (
    <section
      id="events"
      className="bg-[#12050B] pt-40 pb-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[10px] text-[#D4AF37]">
            JOIN US
          </p>

          <h2 className="mt-6 font-script text-6xl text-white md:text-8xl">
            Wedding Celebrations
          </h2>

           <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
             We warmly invite you to celebrate the most cherished moments of our lives as we begin this beautiful journey together.
           </p> 

           <div className="mx-auto mt-10 h-px w-32 bg-[#D4AF37]/30" />

        </div>

        <div className="mt-20 space-y-8">

          {events.map((event, index) => (
           <div key={event.id}>
           <EventCard {...event} />

            {index !== events.length - 1 && <EventDivider />}
            </div>
            ))}

        </div>

      </div>

      <div className="h-16 md:h-24" />
      
    </section>
  );
}