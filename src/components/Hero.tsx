"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/Countdown";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  showCountdown?: boolean;
  compact?: boolean;
  transparentBg?: boolean;
  showLogo?: boolean;
  showButtons?: boolean;
}

export function Hero({ 
  title = (
    <>
      <span className="block text-[#C9A84C] mb-2 leading-tight">Honoring a Legacy</span>
      <span className="block text-[#F5F0E8] leading-tight">Driving for a Cause</span>
    </>
  ), 
  subtitle = "Join us June 22nd to honor Armen's legacy and give back to the athletes — human and equine — who give everything to the sport.",
  showCountdown = true,
  compact = false,
  transparentBg = false,
  showLogo = true,
  showButtons = true
}: HeroProps) {
  return (
    <section className={cn(
      "relative w-full flex items-center justify-center pt-28 pb-16 overflow-hidden",
      compact ? "min-h-[70vh] md:min-h-[75vh]" : "min-h-[90vh]",
      transparentBg ? "bg-transparent" : "bg-[#0A0A0A]"
    )}>
      {/* Background Image with animated scale - only show if not transparentBg */}
      {!transparentBg && (
        <>
          <motion.div 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-center bg-cover pointer-events-none"
            style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }}
          />
          {/* Texture overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-black/30 pointer-events-none" />
        </>
      )}

      <div className={cn("container relative px-4 md:px-8 flex flex-col items-center text-center", compact ? "mt-0" : "mt-2")}>
        
        {/* Enormously enlarged logo with transparent PNG */}
        {showLogo && (
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-72 h-72 sm:w-96 sm:h-96 md:w-md md:h-112 relative mb-2 drop-shadow-2xl"
          >
            <Image 
              src="/images/hero/logo.png" 
              alt="Armen Z Legacy Logo" 
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        )}

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold italic tracking-[0.15em] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-4xl"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-[#C9A84C] max-w-2xl font-medium whitespace-pre-line leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-4"
        >
          {subtitle}
        </motion.p>
        
        {showCountdown && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-2"
          >
            <Countdown />
          </motion.div>
        )}
        
        {showButtons && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 w-full max-w-sm mx-auto sm:max-w-none justify-center"
          >
            <Button asChild size="lg" className="group relative overflow-hidden bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] font-bold px-8 py-6 rounded-none shadow-[0_4px_20px_0_rgba(201,168,76,0.3)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] transition-all duration-300">
              <Link href="/register">
                <span className="relative z-10 tracking-wide text-sm sm:text-base uppercase">Secure Your Spot</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group relative border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] font-bold px-8 py-6 rounded-none bg-transparent backdrop-blur-sm transition-all duration-300">
              <Link href="/sponsorships">
                <span className="relative z-10 tracking-wide text-sm sm:text-base uppercase">Sponsor Now</span>
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
