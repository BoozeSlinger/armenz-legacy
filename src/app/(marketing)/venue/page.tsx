import { Hero } from "@/components/Hero";
import { Reveal, HairlineGrow } from "@/components/motion";

export const metadata = {
  title: "Venue — Morongo Golf Club at Tukwet Canyon",
  description:
    "Home of the 2026 Armenz Legacy Classic: Morongo Golf Club at Tukwet Canyon in Beaumont, CA. Course details, location, and map.",
  keywords: [
    "Morongo Golf Club events",
    "Tukwet Canyon golf course",
    "Beaumont CA golf tournaments",
    "Inland Empire golf venues",
  ],
  alternates: { canonical: "/venue" },
};

const facts = [
  { label: "Location", value: "Morongo Golf Club at Tukwet Canyon, 36211 Champion Dr, Beaumont, CA 92223" },
  { label: "Parking", value: "Complimentary valet parking was available for all sponsors and deluxe pass holders." },
  { label: "Attire", value: "Traditional golf attire was required: collared shirts, no denim or cargo pants, soft spikes only." },
];

export default function VenuePage() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Hero
        compact
        eyebrow="The 2026 Venue"
        title={
          <>
            Legendary golf, breathtaking <em className="italic text-gold-bright">setting</em>.
          </>
        }
        subtitle="Set against the San Gorgonio Mountains, Tukwet Canyon offers 36 holes of world-class golf that reward strategy and teamwork."
        showButtons={false}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl font-medium leading-[1.1] text-cream md:text-4xl">
                The course
              </h2>
              <HairlineGrow className="mt-8" />
              <div>
                {facts.map((fact, i) => (
                  <Reveal key={fact.label} delay={i * 0.1}>
                    <div className="border-b border-gold/12 py-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-bright/90">
                        {fact.label}
                      </p>
                      <p className="mt-2 text-base font-light leading-relaxed text-cream/65">
                        {fact.value}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.15} y={32}>
                <div className="border border-gold/20 p-2.5 md:p-3">
                  <div className="h-[420px] w-full md:h-[520px]">
                    <iframe
                      title="Map to Morongo Golf Club at Tukwet Canyon"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.196564619424!2d-117.00902672365287!3d33.91032482110696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db454ee6cae389%3A0xe5a3de711bc32c66!2sMorongo%20Golf%20Club%20at%20Tukwet%20Canyon!5e0!3m2!1sen!2sus!4v1709289299482!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "grayscale(0.4) invert(0.9) hue-rotate(180deg)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
