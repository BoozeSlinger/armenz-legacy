"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function PricingCards() {
  return (
    <section className="pt-16 pb-24 md:pt-20 md:pb-32 relative z-10 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-serif font-bold italic text-[#F5F0E8] mb-16"
        >
          Join Us on the Greens
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12 relative items-stretch">

          {/* Deluxe Single */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-none overflow-hidden border border-[#C9A84C]/40"
          >
            <div className="relative bg-zinc-800/30 backdrop-blur-xl p-8 flex flex-col h-full transition-all duration-300 group-hover:bg-zinc-800/50">
              <div className="flex flex-col items-center grow">
                <span className="text-[#C9A84C] text-sm uppercase tracking-widest font-bold mb-2">
                Individual
              </span>
              <h3 className="text-[#F5F0E8] text-2xl font-serif font-bold italic mb-4">
                Deluxe Single
              </h3>
                <div className="text-4xl font-bold text-[#F5F0E8] mb-8">$150</div>
                <ul className="text-zinc-200 text-sm font-semibold space-y-3 mb-8 text-left w-full">
                  <li className="flex items-center gap-3">
                    <span className="text-[#C9A84C] shrink-0">&#10003;</span>
                    <span>18 Holes of Golf</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#C9A84C] shrink-0">&#10003;</span>
                    <span>Cart & Range Balls</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#C9A84C] shrink-0">&#10003;</span>
                    <span>VIP Breakfast & Dinner</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Foursome */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-none border-2 border-[#C9A84C] z-10"
          >
            {/* Most Popular badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C9A84C] text-[#0A0A0A] text-[10px] sm:text-xs font-black px-4 py-1 uppercase tracking-wider z-20 whitespace-nowrap">
              Most Popular
            </div>

            <div className="relative bg-zinc-800/30 backdrop-blur-xl p-8 flex flex-col h-full transition-all duration-300 group-hover:bg-zinc-800/50 shadow-[0_0_40px_rgba(201,168,76,0.08)]">
              <div className="flex flex-col items-center grow">
                <span className="text-[#C9A84C] text-sm uppercase tracking-widest font-bold mb-2">
                Team
              </span>
              <h3 className="text-[#F5F0E8] text-2xl font-serif font-bold italic mb-4">
                Foursome
              </h3>
                <div className="text-4xl font-bold text-[#F5F0E8] mb-8">$600</div>
                <ul className="text-zinc-200 text-sm font-semibold space-y-3 mb-8 text-left w-full grow">
                  <li className="flex items-center gap-3">
                    <span className="text-[#C9A84C] shrink-0">&#10003;</span>
                    <span>Full Foursome Entry (4 Players)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#C9A84C] shrink-0">&#10003;</span>
                    <span>Cart & Range Balls</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#C9A84C] shrink-0">&#10003;</span>
                    <span>VIP Breakfast & Dinner for All</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secure Your Spot button with shine effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="group relative overflow-hidden bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] font-bold text-lg uppercase tracking-widest px-12 py-8 rounded-none transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(201,168,76,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_-10px_rgba(201,168,76,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] min-w-[300px]"
          >
            <Link href="/register">
              <span className="relative z-10">Secure Your Spot</span>
              {/* Animated shine sweep */}
              <span className="absolute inset-0 z-0 animate-shine bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-size-[250%_100%]" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
