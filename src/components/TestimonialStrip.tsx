"use client";

import { motion } from "framer-motion";

const quotes = [
  { text: "Best charity event I've played in Southern California.", attr: "2026 Player" },
  { text: "Tukwet Canyon is a bucket-list course. The cause made it even better.", attr: "2026 Player" },
  { text: "Our company was proud to sponsor — an incredibly well-run event.", attr: "2026 Sponsor" },
  { text: "Already locked in for 2027. This one's going to be huge.", attr: "2026 Attendee" },
  { text: "The course, the people, the purpose — unforgettable day.", attr: "2026 Foursome Member" },
  { text: "Armen would have loved every minute of it.", attr: "Family Friend" },
];

const doubled = [...quotes, ...quotes];

export function TestimonialStrip() {
  return (
    <section className="py-16 relative z-10 overflow-hidden border-y border-[#C9A84C]/10 bg-black/20">
      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((q, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 md:w-80 bg-zinc-900/50 border border-white/8 backdrop-blur-sm p-6 flex flex-col gap-3"
          >
            {/* Gold quote mark */}
            <span className="text-[#C9A84C] text-4xl font-serif leading-none select-none" aria-hidden>
              "
            </span>
            <p className="text-[#F5F0E8]/85 text-sm leading-relaxed font-medium flex-1">
              {q.text}
            </p>
            <p className="text-[#C9A84C]/60 text-[10px] uppercase tracking-widest font-bold">
              — {q.attr}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
