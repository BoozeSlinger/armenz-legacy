"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  images: string[];
  alts?: string[];
}

/* Repeating size rhythm — landscape / portrait / square — so the strip
   reads as a curated contact sheet, not a uniform carousel. */
const SIZES = [
  "w-[26rem] h-[17rem] md:w-[30rem] md:h-[20rem]",
  "w-[15rem] h-[19rem] md:w-[17rem] md:h-[22rem]",
  "w-[19rem] h-[19rem] md:w-[21rem] md:h-[21rem]",
  "w-[24rem] h-[16rem] md:w-[27rem] md:h-[18rem]",
  "w-[16rem] h-[20rem] md:w-[18rem] md:h-[23rem]",
];

export const ImageAutoSlider = ({ images, alts = [] }: Props) => {
  const prefersReduced = useReducedMotion();
  const looped = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Edge fades into the ink */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent md:w-40" />

      <motion.div
        className="flex items-end gap-5 md:gap-7"
        style={{ width: "max-content" }}
        animate={prefersReduced ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration: 64, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      >
        {looped.map((src, i) => (
          <div
            key={i}
            className={`group relative flex-shrink-0 overflow-hidden ${SIZES[i % SIZES.length]}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alts[i % images.length] ?? `Event photo ${(i % images.length) + 1}`}
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045] motion-reduce:group-hover:scale-100"
              loading={i < images.length ? "eager" : "lazy"}
              decoding="async"
            />
            {/* Quiet ink wash lifts on hover */}
            <div className="pointer-events-none absolute inset-0 bg-ink/25 transition-opacity duration-700 group-hover:opacity-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
