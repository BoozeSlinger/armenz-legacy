import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Contact — Armenz Legacy Classic, Beaumont CA",
  description:
    "Questions about the Armenz Legacy Classic in Beaumont, CA? Contact us about player registration, sponsorship packages, or supporting CARMA & PDJF.",
  alternates: { canonical: "/contact" },
};

const inputClass =
  "h-12 w-full border-0 border-b border-cream/20 bg-transparent px-0 text-base font-light text-cream transition-colors duration-300 placeholder:text-cream/25 focus:border-gold focus:outline-none";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Hero
        compact
        eyebrow="Inquiries"
        title={
          <>
            Have questions? <em className="italic text-gold-bright">We&apos;re here.</em>
          </>
        }
        subtitle="Media inquiries, volunteering, sponsorship questions, or supporting the cause. We read everything and will get back to you."
        showButtons={false}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-2xl px-4 md:px-8">
          <Reveal>
            <form action="https://formspree.io/f/xbjnzzop" method="POST" className="space-y-8">
              <input type="hidden" name="_cc" value="derbyroomcelebrates@gmail.com" />
              <input type="hidden" name="subject" value="New Contact Inquiry: Armenz Legacy" />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/50">
                    First Name *
                  </label>
                  <input id="firstName" name="firstName" required autoComplete="given-name" placeholder="First name" className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/50">
                    Last Name *
                  </label>
                  <input id="lastName" name="lastName" required autoComplete="family-name" placeholder="Last name" className={inputClass} />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/50">
                  Email Address *
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/50">
                  Message *
                </label>
                <textarea id="message" name="message" required placeholder="How can we help?" className="min-h-[140px] w-full border-0 border-b border-cream/20 bg-transparent px-0 py-2 text-base font-light text-cream transition-colors duration-300 placeholder:text-cream/25 focus:border-gold focus:outline-none" />
              </div>
              <button
                type="submit"
                className="h-14 w-full bg-gold text-[11px] font-semibold uppercase tracking-[0.25em] text-ink transition-colors duration-500 hover:bg-gold-bright active:scale-[0.99]"
              >
                Send Message
              </button>
              <p className="text-center text-xs font-light text-cream/40">
                Or email us directly at{" "}
                <a href="mailto:armenzlegacy@gmail.com" className="link-rule text-gold-bright/90">
                  armenzlegacy@gmail.com
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
