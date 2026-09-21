import Image from "next/image";

/**
 * ── SLOT: HIGHER-RES REPLACEMENT ─────────────────────────────────────────
 * The current source is a 1178x1568 screenshot of an Instagram post. When a
 * higher-res original is available:
 *   1. Drop it into public/images/armen/
 *   2. Point `src` at it and set `width` / `height` to its native pixels
 * The rendered-size cap below is derived from `width`, so it lifts
 * automatically. Re-check CROP_ZOOM too: a clean original no longer needs the
 * zoom that trims the Instagram arrows and page dots from the edges.
 */
const ARMEN_PORTRAIT = {
  src: "/images/armen/screenshot-1.png",
  width: 1178,
  height: 1568,
} as const;

/** Trims the screenshot's UI chrome (edge arrows, bottom dots) and tightens the crop. */
const CROP_ZOOM = 1.16;

/** Frame padding (12px x2) + hairline border (1px x2). */
const FRAME_CHROME = 26;

/**
 * Never render wider than the source can fill at 2x pixel density after the
 * crop zoom, so the portrait is not upscaled on retina screens.
 */
const MAX_CSS_WIDTH = Math.floor(ARMEN_PORTRAIT.width / CROP_ZOOM / 2);

export function ArmenPortrait({ alt, label }: { alt: string; label: string }) {
  return (
    <figure className="mx-auto w-full" style={{ maxWidth: MAX_CSS_WIDTH + FRAME_CHROME }}>
      <div className="relative border border-gold/25 p-2.5 md:p-3">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={ARMEN_PORTRAIT.src}
            alt={alt}
            fill
            quality={85}
            sizes={`(max-width: ${MAX_CSS_WIDTH + FRAME_CHROME}px) ${Math.round(CROP_ZOOM * 100)}vw, ${Math.ceil(MAX_CSS_WIDTH * CROP_ZOOM)}px`}
            className="object-cover object-top sepia-[0.25] saturate-[0.85]"
            style={{ transform: `scale(${CROP_ZOOM})`, transformOrigin: "50% 8%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" aria-hidden />
        </div>
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span className="font-serif text-lg italic text-cream/85">Armen Zennedjian</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/55">{label}</span>
      </figcaption>
    </figure>
  );
}
