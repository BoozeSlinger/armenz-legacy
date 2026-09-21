"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SEEN_KEY = "az-preloader-seen";
const HOLD_MS = 5000;

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) {
      setVisible(false);
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(
      () => {
        sessionStorage.setItem(SEEN_KEY, "1");
        setVisible(false);
      },
      reducedMotion ? 900 : HOLD_MS
    );
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (!visible) document.documentElement.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
          aria-label="Loading"
          role="status"
        >
          {/* faint gold glow behind the ball */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(198,164,92,0.14) 0%, rgba(198,164,92,0.05) 40%, transparent 68%)",
            }}
          />

          {/* the ball, filmed flying through the air — background matted to black, blends straight into the ink bg */}
          <div className="relative h-[320px] w-[240px] md:h-[380px] md:w-[285px]">
            {reducedMotion ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src="/images/armenz-animation-nobg-poster.jpg"
                alt=""
                className="h-full w-full select-none object-contain"
                draggable={false}
              />
            ) : (
              <video
                src="/images/armenz-animation-nobg.mp4"
                poster="/images/armenz-animation-nobg-poster.jpg"
                autoPlay
                muted
                playsInline
                className="h-full w-full select-none object-contain"
                style={{ mixBlendMode: "lighten" }}
              />
            )}
          </div>

          {/* wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <span className="font-engraved text-[11px] font-semibold uppercase tracking-[0.42em] text-cream/70">
              Armenz Legacy
            </span>
            <span className="block h-px w-10 overflow-hidden bg-gold/25">
              <span className="az-loader-bar block h-full w-full bg-gold" />
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
