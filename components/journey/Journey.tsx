"use client";

import { journey } from "@/data/journey";
import JourneyScene from "./JourneyScene";

export default function Journey() {
  return (
    <section id="journey">
      {journey.map((item, index) => (
        <JourneyScene
          key={item.id}
          item={item}
          reverse={index % 2 === 1}
        />
      ))}
    </section>
  );
}