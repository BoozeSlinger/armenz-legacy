"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function VenueSection() {
  return (
    <section id="venue" className="py-24 md:py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-serif font-bold italic text-white mb-4 leading-tight"
            >
              The Venue
            </motion.h2>
            
            <motion.h3
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl font-serif text-[#d4af37] mb-8"
            >
              A World-Class Stage for a Meaningful Cause
            </motion.h3>
            
            <div className="space-y-6 mb-12">
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-400 font-sans leading-relaxed text-lg"
              >
                Nestled in the hills of Beaumont, CA, Morongo Golf Club at Tukwet Canyon is one of Southern California's most celebrated golf destinations — and the proud home of the Southern California PGA.
              </motion.p>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-neutral-400 font-sans leading-relaxed text-lg"
              >
                The 36-hole facility features two championship courses designed by Lee Schmidt and Brian Curley, both stretching over 7,300 yards with stunning mountain views. Whether you're navigating the tight fairways and steep bunkers of The Champions Course or taking on the dramatic elevation changes of The Links-style Legends Course, every hole delivers a memorable round worthy of the day's purpose.
              </motion.p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-1 bg-white/[0.03] rounded-lg border-l-2 border-[#d4af37] p-6 shadow-lg backdrop-blur-sm"
              >
                <span className="text-[#d4af37] text-xs uppercase tracking-widest block mb-2 font-bold">Location</span>
                <span className="text-white font-bold text-lg leading-snug block">
                  Morongo Golf Club at Tukwet Canyon<br/>
                  <span className="text-sm font-normal text-neutral-300 mt-1 block">36211 Champion Dr, Beaumont, CA 92223</span>
                </span>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex-1 bg-white/[0.03] rounded-lg border-l-2 border-[#d4af37] p-6 shadow-lg backdrop-blur-sm"
              >
                <span className="text-[#d4af37] text-xs uppercase tracking-widest block mb-2 font-bold">Date</span>
                <span className="text-white font-bold text-lg leading-snug block">
                  June 22, 2026<br/>
                  <span className="text-sm font-normal text-neutral-300 mt-1 block">8:00 AM Registration</span>
                </span>
              </motion.div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div 
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-2xl border border-white/5 shadow-2xl group"
            >
              <Image
                src="/images/venue/tukwet-logo.png"
                alt="Tukwet Canyon"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-zinc-900"
              />
            </motion.div>

            <motion.div 
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="h-[250px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.196564619424!2d-117.00902672365287!3d33.91032482110696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db454ee6cae389%3A0xe5a3de711bc32c66!2sMorongo%20Golf%20Club%20at%20Tukwet%20Canyon!5e0!3m2!1sen!2sus!4v1709289299482!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
