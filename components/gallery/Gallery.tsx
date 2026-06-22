"use client";

import { useState } from "react";

import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";

import GallerySection from "./GallerySection";
import GalleryLightbox from "./GalleryLightbox";

import { gallery } from "@/data/gallery";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Section id="gallery" className="bg-[#18070F]">
        <SectionHeader
          eyebrow="Our Memories"
          title="Wedding Album"
          subtitle="Every picture tells a story. Every smile captures a beautiful memory. Thank you for being part of our journey."
        />

        <div className="space-y-40">
          {gallery.map((item, index) => (
            <GallerySection
              key={index}
              image={item.src}
              title={item.title}
              description={item.description}
              reverse={index % 2 === 1}
              onClick={() => handleOpen(index)}
            />
          ))}
        </div>
      </Section>

      <GalleryLightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={gallery}
      />
    </>
  );
}