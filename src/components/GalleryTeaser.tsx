"use client";

import Link from "next/link";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
import { galleryPhotos } from "@/content/gallery/photos";
import { cldUrl } from "@/lib/cloudinary";
import { Reveal, MaskLines, HairlineGrow } from "@/components/motion";
import { ArrowRight } from "lucide-react";

// A mixed strip: players, sponsors, and course shots
const teaserPhotos = [
  ...galleryPhotos.filter((p) => p.category === "players").slice(0, 4),
  ...galleryPhotos.filter((p) => p.category === "sponsors").slice(0, 3),
  ...galleryPhotos.filter((p) => p.category === "course").slice(0, 3),
];

export function GalleryTeaser() {
  return (
    <section className="relative z-10 overflow-hidden py-24 md:py-36">
      <div className="container mx-auto mb-14 max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-5xl font-medium leading-[1.02] tracking-[-0.015em] text-cream md:text-6xl lg:text-7xl">
            <MaskLines
              lines={[
                <>Relive</>,
                <>the <em className="italic text-gold-bright">day</em>.</>,
              ]}
            />
          </h2>

          <Reveal delay={0.2} className="max-w-sm">
            <p className="text-base leading-relaxed text-cream/65">
              {galleryPhotos.length} photographs from the greens at Tukwet Canyon.
              The foursomes, the sponsor tents, and the course Armen would have loved.
            </p>
            <Link
              href="/gallery"
              className="link-rule mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-bright"
            >
              View The Gallery
              <ArrowRight size={13} strokeWidth={1.75} />
            </Link>
          </Reveal>
        </div>
        <HairlineGrow className="mt-10" />
      </div>

      <Reveal y={40}>
        <ImageAutoSlider
          images={teaserPhotos.map((p) => cldUrl(p, 800))}
          alts={teaserPhotos.map((p) => p.alt)}
        />
      </Reveal>
    </section>
  );
}
