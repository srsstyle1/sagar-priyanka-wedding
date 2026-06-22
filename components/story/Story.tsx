"use client";

import { story } from "@/data/story";
import StoryCard from "./StoryCard";

export default function Story() {
  return (
    <section
      id="story"
      className="relative bg-[#14050B] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-28 text-center">

          <p className="font-heading uppercase tracking-[8px] text-[#D4AF37]">
            Our Story
          </p>

          <h2 className="mt-6 font-script text-7xl text-white">
            Every Love Story
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-white/70">
            Every love story is beautiful, but ours is our favourite.
            Thank you for being part of this beautiful journey.
          </p>

        </div>

        <div className="space-y-40">

          {story.map((item, index) => (
            <StoryCard
              key={item.title}
              {...item}
              reverse={index % 2 === 1}
            />
          ))}

        </div>

      </div>
    </section>
  );
}