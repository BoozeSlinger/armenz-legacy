"use client";

import { Reveal, MaskLines, HairlineGrow, Stagger, StaggerItem } from "@/components/motion";
import { Cta } from "@/components/Cta";

/* ── Palette ── */
const swatches = [
  { name: "Ink", hex: "#0A0D0B", note: "The course at dusk. Base canvas.", cls: "bg-ink", text: "text-cream" },
  { name: "Ink 2", hex: "#0E1210", note: "Section lift. Quiet contrast.", cls: "bg-ink-2", text: "text-cream" },
  { name: "Bone Cream", hex: "#F1ECDF", note: "Warm off-white. Primary text.", cls: "bg-cream", text: "text-ink" },
  { name: "Champagne Gold", hex: "#C9A84C", note: "The single accent. Plates & rules.", cls: "bg-gold", text: "text-ink" },
  { name: "Gold Bright", hex: "#E8D194", note: "Emphasis. Italic words, hovers.", cls: "bg-gold-bright", text: "text-ink" },
  { name: "Gold Deep", hex: "#7E6A2E", note: "Shadow tone. Numerals & marks.", cls: "bg-gold-deep", text: "text-cream" },
];

/* ── Type specimens ── */
const typefaces = [
  {
    name: "Playfair Display",
    role: "Display",
    note: "A high-contrast transitional serif with a graceful italic. Carries every headline with an old-money, engraved-invitation weight. Italics do the emphasis work.",
    sample: "Armenz Legacy Classic",
    cls: "font-serif text-5xl md:text-6xl font-medium text-cream",
    italic: true,
  },
  {
    name: "Cinzel",
    role: "Engraved",
    note: "Roman capitals modeled on classical inscription. Reserved for numerals, timestamps, and small monumental marks.",
    sample: "VII · 09:00 · 2027",
    cls: "font-engraved text-3xl md:text-4xl text-gold-bright tracking-[0.1em]",
    italic: false,
  },
  {
    name: "Hanken Grotesk",
    role: "Text",
    note: "A humanist sans that stays invisible under long reading and snaps to attention in wide-tracked uppercase labels.",
    sample: "Every swing supports a second chance.",
    cls: "font-sans text-2xl md:text-3xl font-light text-cream/80",
    italic: false,
  },
];

const principles = [
  {
    n: "01",
    title: "One accent, held all the way down",
    body: "A single champagne gold rides against green-black ink across every section. No competing accents, no drift between warm and cool. Recognition comes from restraint.",
  },
  {
    n: "02",
    title: "Type is the hierarchy",
    body: "Scale, weight, and an italic word carry the emphasis. Cards are the exception, not the reflex. Hairline gold rules and negative space group the content instead of boxes.",
  },
  {
    n: "03",
    title: "Motion the eye can trust",
    body: "Lines rise out of clipped masks, rules draw themselves in, photography drifts against the scroll. Every move is motivated, honors reduced-motion, and settles on one heavy easing curve.",
  },
  {
    n: "04",
    title: "The photographs lead",
    body: "Ninety-seven real frames from the day carry the emotional weight. The design stays quiet so the course, the foursomes, and the man being honored can speak.",
  },
];

const motionSpecs = [
  { label: "House easing", value: "cubic-bezier(0.16, 1, 0.3, 1)" },
  { label: "Headline reveal", value: "line rises from clip · 1.1s · stagger 110ms" },
  { label: "Hairline draw", value: "scaleX 0 → 1 · 1.2s · left origin" },
  { label: "Hero parallax", value: "photo drifts 12% against scroll" },
  { label: "Reduced motion", value: "all entrances resolve to static" },
];

export function GuideClient() {
  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-40 pb-16 md:pb-20">
        <div className="glow-gold-faint absolute inset-0" aria-hidden />
        <div className="container relative mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-bright/90">
              Design System · The 2027 Refresh
            </p>
          </Reveal>
          <h1 className="max-w-4xl font-serif text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.015em] text-cream">
            <MaskLines
              delay={0.15}
              lines={[
                <span key="l1">The look of a</span>,
                <span key="l2">
                  <em className="italic text-gold-bright">legacy</em>.
                </span>,
              ]}
            />
          </h1>
          <Reveal delay={0.5}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
              How the Armenz Legacy site is built to feel: the palette, the type, and the
              motion that carry a memorial charity tournament with the weight it deserves.
            </p>
          </Reveal>
        </div>
        <HairlineGrow className="absolute bottom-0 left-0 right-0" delay={0.6} />
      </section>

      {/* Palette */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-medium text-cream md:text-5xl">
              <MaskLines lines={[<span key="l">The <em className="italic text-gold-bright">palette</em></span>]} />
            </h2>
            <Reveal delay={0.2}>
              <p className="max-w-sm text-base font-light leading-relaxed text-cream/60">
                Green-black ink for the course at dusk, warm bone cream for the type, and a
                champagne gold triad that does all the accent work.
              </p>
            </Reveal>
          </div>

          <Stagger gap={0.08} className="grid grid-cols-1 gap-px overflow-hidden border border-gold/15 bg-gold/15 sm:grid-cols-2 lg:grid-cols-3">
            {swatches.map((s) => (
              <StaggerItem key={s.name}>
                <div className={`flex h-full flex-col justify-between p-7 ${s.cls} ${s.text} min-h-[190px]`}>
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-2xl italic">{s.name}</span>
                    <span className="font-engraved text-[11px] tracking-[0.1em] opacity-70">{s.hex}</span>
                  </div>
                  <p className={`mt-8 text-sm font-light leading-relaxed ${s.text === "text-ink" ? "text-ink/70" : "text-cream/60"}`}>
                    {s.note}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Typography */}
      <section className="border-y border-gold/10 bg-ink-2 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="mb-4 font-serif text-4xl font-medium text-cream md:text-5xl">
            <MaskLines lines={[<span key="l">The <em className="italic text-gold-bright">typography</em></span>]} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mb-14 max-w-md text-base font-light leading-relaxed text-cream/60">
              Three voices. A display serif for feeling, inscription capitals for
              permanence, and a humanist sans that gets out of the way.
            </p>
          </Reveal>

          <div>
            {typefaces.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="grid grid-cols-1 items-baseline gap-6 border-t border-gold/12 py-12 last:border-b lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-3">
                    <p className="font-serif text-2xl text-cream">{t.name}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-bright/90">
                      {t.role}
                    </p>
                    <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-cream/55">
                      {t.note}
                    </p>
                  </div>
                  <div className="lg:col-span-9">
                    <p className={t.cls}>
                      {t.italic ? (
                        <>
                          Relive the <em className="italic text-gold-bright">day</em>.
                        </>
                      ) : (
                        t.sample
                      )}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-5xl lg:sticky lg:top-32">
                <MaskLines
                  lines={[
                    <span key="l1">Four</span>,
                    <span key="l2">
                      <em className="italic text-gold-bright">principles</em>
                    </span>,
                  ]}
                />
              </h2>
            </div>
            <div className="lg:col-span-8">
              {principles.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.08}>
                  <div className="grid grid-cols-1 gap-4 border-t border-gold/12 py-9 last:border-b sm:grid-cols-12 sm:gap-8">
                    <span className="font-engraved text-sm tracking-[0.2em] text-gold/80 sm:col-span-2">
                      {p.n}
                    </span>
                    <div className="sm:col-span-10">
                      <h3 className="font-serif text-2xl font-medium text-cream md:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-base font-light leading-relaxed text-cream/60">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Motion spec ledger */}
      <section className="border-t border-gold/10 bg-ink-2 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <h2 className="mb-4 font-serif text-4xl font-medium text-cream md:text-5xl">
            <MaskLines lines={[<span key="l">Motion <em className="italic text-gold-bright">in numbers</em></span>]} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mb-12 max-w-md text-base font-light leading-relaxed text-cream/60">
              One easing curve governs everything. Every entrance you just watched runs on
              these values.
            </p>
          </Reveal>
          <HairlineGrow />
          <div>
            {motionSpecs.map((m, i) => (
              <Reveal key={m.label} delay={(i % 5) * 0.06}>
                <div className="flex flex-col gap-1 border-b border-gold/12 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/70">
                    {m.label}
                  </span>
                  <span className="font-engraved text-sm tracking-[0.06em] text-gold-bright">
                    {m.value}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl font-medium leading-[1.1] text-cream md:text-4xl">
            <MaskLines
              lines={[
                <span key="l">
                  See the system <em className="italic text-gold-bright">in the wild</em>.
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-lg text-base font-light leading-relaxed text-cream/60">
              Everything on this page is the same palette, type, and motion that carry the
              tournament story from the hero to the last hairline.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Cta href="/">Back to the Site</Cta>
              <Cta href="/gallery" variant="ghost">View The Gallery</Cta>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
