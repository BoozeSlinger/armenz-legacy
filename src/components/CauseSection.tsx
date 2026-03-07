"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CauseSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] text-zinc-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1B4332]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#d4af37] tracking-[0.3em] text-xs uppercase font-bold block mb-6">THE CAUSE</span>
        </motion.div>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-[#F5F0E8] leading-tight mb-8"
        >
          Every Swing Supports a <br/> <span className="italic text-[#d4af37] font-serif">Second Chance</span>
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-neutral-400 leading-relaxed text-balance max-w-3xl mx-auto mb-16 text-lg md:text-xl font-medium space-y-6"
        >
          <p>
            The Armen Z Legacy on the Greens honors a life lived with passion, purpose, and an unshakable belief in giving back. More than a golf tournament, this is a gathering of friends, family, and community united around something bigger than the game.
          </p>
          <p>
            Armen believed that second chances change lives — and this year, that belief takes the course. All tournament proceeds directly support the <strong className="text-zinc-200">Permanently Disabled Jockeys Fund</strong> and <strong className="text-zinc-200">CARMA</strong>, providing rehabilitation, retraining, and rehoming for the athletes — both human and equine — who give everything to the sport they love.
          </p>
          <p>
            Every swing, every putt, and every sponsorship translates to a lifetime of impact. Join us at the beautiful Morongo Golf Club at Tukwet Canyon for a memorable day on the greens, celebrating a legacy that lives on with every round played.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            href="/the-cause" 
            className="inline-block border border-[#d4af37]/30 text-[#d4af37] uppercase tracking-widest text-sm font-bold px-8 py-4 transition-all duration-300 hover:bg-[#d4af37] hover:text-black"
          >
            Read The Full Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
