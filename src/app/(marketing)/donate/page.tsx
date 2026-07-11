import { EventbriteWidget } from "@/components/EventbriteWidget";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Donate — Horse Racing Charity Events California (CARMA & PDJF)",
  description:
    "Make a tax-deductible donation supporting CARMA's retired racehorses and the Permanently Disabled Jockeys Fund. Every dollar honors Armen Zennedjian's legacy.",
  keywords: [
    "Horse racing charity events California",
    "CARMA charity events",
    "Permanently Disabled Jockeys Fund donation",
  ],
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Hero
        compact
        eyebrow="Support the Legacy"
        title={
          <>
            You don&apos;t have to play to make a <em className="italic text-gold-bright">difference</em>.
          </>
        }
        subtitle="Every contribution, no matter the size, goes directly to supporting retired Thoroughbreds and injured jockeys."
        showButtons={false}
      />

      {/* Donation widget */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-8">
          <div className="border border-gold/20 p-8 md:p-12">
            <h2 className="text-center font-serif text-3xl font-medium text-cream md:text-4xl">
              Complete your <em className="italic text-gold-bright">donation</em>
            </h2>
            <p className="mx-auto mt-4 mb-10 max-w-md text-center text-base font-light leading-relaxed text-cream/60">
              Use the secure Eventbrite checkout below to complete your contribution.
            </p>

            <EventbriteWidget
              eventId="1983383494423"
              containerId="eventbrite-widget-container-1983383494423-donate"
            />

            <p className="mx-auto mt-8 max-w-lg text-center text-xs font-light leading-relaxed text-cream/40">
              Your donation is tax-deductible. This tournament runs through the{" "}
              <span className="text-cream/60">909 Market Foundation</span>, a 501(c)(3)
              charitable organization. EIN: 92-0881763.
            </p>
          </div>
        </div>
      </section>

      {/* Thank-you note */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto max-w-3xl px-4 md:px-8 text-center">
          <Reveal>
            <blockquote className="border-y border-gold/15 py-12">
              <p className="mx-auto max-w-2xl font-serif text-2xl font-medium italic leading-[1.4] text-cream/90 md:text-3xl">
                &ldquo;Thank you for keeping Armen&apos;s spirit alive. Your generosity
                gives second chances to the horses and riders who give everything to the
                sport we love.&rdquo;
              </p>
              <footer className="mt-7 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-bright/90">
                The Armen Z Legacy Family
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
