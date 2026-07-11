"use client";

import { useMemo, useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Expand } from "lucide-react";
import { CldImage } from "@/components/gallery/CldImage";
import { Lightbox } from "@/components/gallery/Lightbox";
import {
  galleryPhotos,
  CATEGORY_LABELS,
  type GalleryCategory,
  type GalleryPhoto,
} from "@/content/gallery/photos";
import { cn } from "@/lib/utils";

type Filter = "all" | GalleryCategory;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All Photos" },
  { key: "players", label: CATEGORY_LABELS.players },
  { key: "sponsors", label: CATEGORY_LABELS.sponsors },
  { key: "course", label: CATEGORY_LABELS.course },
];

/** Round-robin interleave so the "All" view mixes people, sponsors, and scenery. */
function interleave(photos: GalleryPhoto[]): GalleryPhoto[] {
  const buckets: GalleryPhoto[][] = [
    photos.filter((p) => p.category === "players"),
    photos.filter((p) => p.category === "sponsors"),
    photos.filter((p) => p.category === "course"),
  ];
  const out: GalleryPhoto[] = [];
  const max = Math.max(...buckets.map((b) => b.length));
  for (let i = 0; i < max; i++) {
    for (const bucket of buckets) {
      if (bucket[i]) out.push(bucket[i]);
    }
  }
  return out;
}

/** Tilt-on-hover card wrapper */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Shimmer skeleton for image loading state */
function ImageSkeleton() {
  return (
    <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function GalleryClient({ initialCategory }: { initialCategory?: GalleryCategory }) {
  const reducedMotion = useReducedMotion();
  const [filter, setFilter] = useState<Filter>(initialCategory ?? "all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress bar
  const { scrollYProgress } = useScroll({ container: undefined });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const allInterleaved = useMemo(() => interleave(galleryPhotos), []);
  const visible = useMemo(
    () => (filter === "all" ? allInterleaved : galleryPhotos.filter((p) => p.category === filter)),
    [filter, allInterleaved]
  );

  const markLoaded = useCallback((id: string) => {
    setLoadedImages((prev) => { const s = new Set(prev); s.add(id); return s; });
  }, []);

  // Reset loaded state on filter change
  useEffect(() => { setLoadedImages(new Set()); }, [filter]);

  return (
    <div ref={containerRef}>
      {/* Gold scroll-progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold origin-left z-[200]"
        style={{ scaleX }}
      />

      {/* Filter pills — sticky under the fixed navbar */}
      <div className="sticky top-14 lg:top-20 z-30 -mx-4 px-4 md:-mx-8 md:px-8 py-3 bg-ink/85 backdrop-blur-md border-y border-gold/10 mb-8 md:mb-10">
        <div
          className="flex gap-2 md:gap-3 overflow-x-auto md:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Filter photos by collection"
        >
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <motion.button
                key={f.key}
                onClick={() => {
                  setFilter(f.key);
                  setLightboxIndex(null);
                }}
                aria-pressed={active}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className={cn(
                  "cursor-pointer shrink-0 min-h-11 px-5 md:px-6 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold relative overflow-hidden",
                  active
                    ? "bg-gold text-ink border-gold"
                    : "bg-transparent text-cream/70 border-cream/20 hover:border-gold/60 hover:text-gold-bright"
                )}
              >
                {/* Active pill shimmer sweep */}
                {active && !reducedMotion && (
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Masonry grid */}
      <motion.div
        key={filter}
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((photo, i) => (
            <motion.div
              key={photo.id}
              layout
              initial={reducedMotion ? false : { opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: reducedMotion ? 0 : (i % 6) * 0.05,
              }}
              className="mb-4 break-inside-avoid"
            >
              <TiltCard>
                <button
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Enlarge photo: ${photo.alt}`}
                  className="cursor-pointer group relative block w-full overflow-hidden bg-ink-3 border border-cream/5 hover:border-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold transition-colors duration-300"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {/* Skeleton while loading */}
                  <AnimatePresence>
                    {!loadedImages.has(photo.id) && (
                      <motion.div
                        key="skeleton"
                        className="absolute inset-0 z-10 pointer-events-none"
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                      >
                        <ImageSkeleton />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <CldImage
                    photo={photo}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    priority={i < 4}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    onLoad={() => markLoaded(photo.id)}
                  />

                  {/* Multi-layer hover veil */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-400"
                  />

                  {/* Bottom overlay bar */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-350 motion-reduce:transition-none motion-reduce:translate-y-0"
                  >
                    <span className="flex items-center gap-2">
                      <span aria-hidden className="h-px w-4 bg-gold" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-bright">
                        {CATEGORY_LABELS[photo.category]}
                      </span>
                    </span>
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Expand size={15} strokeWidth={1.75} className="text-cream" />
                    </motion.span>
                  </span>
                </button>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={visible}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
