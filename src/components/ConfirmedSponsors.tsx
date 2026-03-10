"use client";

import { motion } from "framer-motion";

interface Sponsor {
  id: string;
  name: string;
  tier: string;
  url?: string;
  logo?: string;
}

const confirmedSponsors: Sponsor[] = [
  {
    id: "morongo",
    name: "Morongo Band of Mission Indians",
    tier: "Triple Crown",
    url: "https://www.morongonation.org",
  },
];

const tierColors: Record<string, string> = {
  "Triple Crown": "#C9A84C",
  "Kentucky Derby": "#C9A84C",
  "Preakness": "#A8A8A8",
  "Belmont Stakes": "#CD7F32",
};

export function ConfirmedSponsors() {
  if (confirmedSponsors.length === 0) return null;

  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37] tracking-[0.3em] text-xs uppercase font-bold block mb-4">Our Sponsors</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F5F0E8]">
            Confirmed Sponsors
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {confirmedSponsors.map((sponsor, i) => {
            const tierColor = tierColors[sponsor.tier] ?? "#C9A84C";
            const inner = (
              <div className="flex flex-col items-center gap-3 text-center">
                {sponsor.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-16 w-auto object-contain"
                  />
                )}
                <span
                  className="text-xs uppercase tracking-widest font-bold px-3 py-1 border"
                  style={{ color: tierColor, borderColor: `${tierColor}40` }}
                >
                  {sponsor.tier} Sponsor
                </span>
                <p className="text-[#F5F0E8] font-serif font-bold text-xl">
                  {sponsor.name}
                </p>
              </div>
            );

            return (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 md:p-10 shadow-2xl min-w-[280px] max-w-xs"
              >
                {sponsor.url ? (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
