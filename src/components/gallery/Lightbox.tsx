"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { cloudinaryLoader, cldSrc, cldUrl } from "@/lib/cloudinary";
import { CATEGORY_LABELS, type GalleryPhoto } from "@/content/gallery/photos";

interface LightboxProps {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const SWIPE_THRESHOLD = 70;

export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const reducedMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);
  const photo = photos[index];
  const total = photos.length;
  const [direction, setDirection] = useState(0);

  const goPrev = useCallback(() => {
    setDirection(-1);
    onNavigate((index - 1 + total) % total);
  }, [index, total, onNavigate]);

  const goNext = useCallback(() => {
    setDirection(1);
    onNavigate((index + 1) % total);
  }, [index, total, onNavigate]);

  // Keyboard: Escape closes, arrows navigate
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, goPrev, goNext]);

  // Lock body scroll while open; restore focus to trigger on unmount
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  // Warm the CDN cache for neighbors so arrow/swipe feels instant
  useEffect(() => {
    [photos[(index + 1) % total], photos[(index - 1 + total) % total]].forEach((p) => {
      if (!p) return;
      const img = new window.Image();
      img.src = cldUrl(p, 1600);
    });
  }, [index, photos, total]);

  // Auto-scroll filmstrip to keep current thumb visible
  useEffect(() => {
    const strip = filmstripRef.current;
    if (!strip) return;
    const thumb = strip.children[index] as HTMLElement | undefined;
    if (!thumb) return;
    const thumbCenter = thumb.offsetLeft + thumb.offsetWidth / 2;
    const stripHalf = strip.clientWidth / 2;
    strip.scrollTo({ left: thumbCenter - stripHalf, behavior: "smooth" });
  }, [index]);

  if (!photo) return null;

  const slideVariants = {
    enter: (dir: number) => ({
      x: reducedMotion ? 0 : dir * 80,
      opacity: 0,
      scale: 0.96,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      x: reducedMotion ? 0 : dir * -80,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${total}: ${photo.alt}`}
      initial={reducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[100] flex flex-col bg-[#080808]/97 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Progress bar */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#F5D980] z-50"
        initial={{ width: "0%" }}
        animate={{ width: `${((index + 1) / total) * 100}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 min-w-0">
          <motion.span
            layout
            className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-[#C9A84C] border border-[#C9A84C]/40 px-2.5 py-1 whitespace-nowrap"
          >
            {CATEGORY_LABELS[photo.category]}
          </motion.span>
          <span className="text-[#F5F0E8]/60 text-xs md:text-sm font-medium tabular-nums whitespace-nowrap">
            <span className="text-[#F5F0E8]/80 font-semibold">{index + 1}</span>
            <span className="mx-1">/</span>
            {total}
          </span>
        </div>

        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <motion.button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close photo viewer"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="cursor-pointer flex items-center justify-center w-11 h-11 text-[#F5F0E8]/70 hover:text-[#C9A84C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] transition-colors duration-200"
          >
            <X size={24} strokeWidth={2} />
          </motion.button>
        </div>
      </div>

      {/* Stage */}
      <div className="relative flex-1 flex items-center justify-center min-h-0 px-2 md:px-20">
        {/* Prev — desktop */}
        <motion.button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Previous photo"
          whileHover={{ scale: 1.08, x: -2 }}
          whileTap={{ scale: 0.93 }}
          className="cursor-pointer hidden md:flex absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 border border-[#C9A84C]/30 bg-[#0A0A0A]/60 text-[#F5F0E8] hover:bg-[#C9A84C] hover:text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] transition-all duration-200"
        >
          <ChevronLeft size={26} />
        </motion.button>

        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={photo.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            drag={reducedMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) goNext();
              else if (info.offset.x > SWIPE_THRESHOLD) goPrev();
            }}
            className="relative max-w-full max-h-full cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              loader={cloudinaryLoader}
              src={cldSrc(photo)}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              sizes="(max-width: 768px) 100vw, 85vw"
              className="max-h-[65dvh] md:max-h-[70dvh] w-auto h-auto max-w-full object-contain select-none shadow-[0_8px_60px_rgba(0,0,0,0.8)] pointer-events-none"
              priority
            />
            {/* Golden frame glow */}
            <div className="absolute inset-0 ring-1 ring-[#C9A84C]/20 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Next — desktop */}
        <motion.button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Next photo"
          whileHover={{ scale: 1.08, x: 2 }}
          whileTap={{ scale: 0.93 }}
          className="cursor-pointer hidden md:flex absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 border border-[#C9A84C]/30 bg-[#0A0A0A]/60 text-[#F5F0E8] hover:bg-[#C9A84C] hover:text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] transition-all duration-200"
        >
          <ChevronRight size={26} />
        </motion.button>
      </div>

      {/* Caption + mobile controls */}
      <div
        className="shrink-0 px-4 pt-2 pb-3 md:px-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[#F5F0E8]/60 text-xs md:text-sm italic font-serif max-w-2xl mx-auto text-balance">
          {photo.alt}
        </p>
        {/* Mobile nav */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-3">
          <motion.button
            onClick={goPrev}
            aria-label="Previous photo"
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer flex items-center justify-center w-12 h-12 border border-[#C9A84C]/30 bg-[#0A0A0A]/60 text-[#F5F0E8] active:bg-[#C9A84C] active:text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] transition-colors duration-150"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={goNext}
            aria-label="Next photo"
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer flex items-center justify-center w-12 h-12 border border-[#C9A84C]/30 bg-[#0A0A0A]/60 text-[#F5F0E8] active:bg-[#C9A84C] active:text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] transition-colors duration-150"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>

      {/* Filmstrip thumbnail rail */}
      <div
        ref={filmstripRef}
        className="shrink-0 flex gap-1.5 overflow-x-auto px-4 pb-4 md:px-8 md:pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ scrollBehavior: "smooth" }}
      >
        {photos.map((p, i) => {
          const active = i === index;
          return (
            <motion.button
              key={p.id}
              onClick={() => { setDirection(i > index ? 1 : -1); onNavigate(i); }}
              aria-label={`Go to photo ${i + 1}`}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                opacity: active ? 1 : 0.45,
                scale: active ? 1.05 : 1,
                y: active ? -2 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className={`cursor-pointer shrink-0 w-14 h-10 md:w-16 md:h-11 overflow-hidden relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] transition-all duration-200 ${
                active ? "ring-2 ring-[#C9A84C]" : "ring-1 ring-white/10"
              }`}
            >
              <Image
                loader={cloudinaryLoader}
                src={cldSrc(p)}
                alt={`Thumbnail ${i + 1}`}
                width={80}
                height={56}
                className="w-full h-full object-cover"
                sizes="80px"
              />
              {active && (
                <motion.div
                  layoutId="filmstrip-active"
                  className="absolute inset-0 bg-[#C9A84C]/20"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
