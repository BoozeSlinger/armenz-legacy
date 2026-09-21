import Link from "next/link";
import Image from "next/image";
import { donationsOpen } from "@/lib/site-config";

const links = [
  { href: "/gallery", label: "2026 Gallery" },
  { href: "/sponsorships", label: "2026 Sponsors" },
  { href: "/the-cause", label: "The Cause" },
  ...(donationsOpen ? [{ href: "/donate", label: "Donate" }] : []),
  { href: "/news", label: "News" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-gold/15 bg-[#070907] text-cream">
      {/* 2027 CTA band */}
      <div className="border-b border-gold/15">
        <div className="container mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center md:px-8">
          <div>
            <p className="font-serif text-2xl font-medium text-cream md:text-3xl">
              Ready to play in <em className="italic text-gold-bright">2027</em>?
            </p>
            <p className="mt-1.5 text-sm font-light text-cream/55">
              Join the early-access list. Spots go fast.
            </p>
          </div>
          <Link
            href="/#early-access"
            className="shrink-0 bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-gold-bright active:scale-[0.985]"
          >
            Join The 2027 List
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-16 md:grid-cols-12 md:px-8">
        {/* Brand */}
        <div className="flex flex-col gap-5 md:col-span-5">
          <Link href="/" className="relative inline-block h-16 w-16 opacity-90 transition-opacity hover:opacity-100">
            <Image
              src="/images/hero/logo.png"
              alt="Armen Z Legacy crest"
              fill
              sizes="64px"
              className="object-contain"
            />
          </Link>
          <p className="font-serif text-xl font-medium text-cream">
            Armen Z Legacy
            <span className="mt-1 block text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-gold/80">
              Charity Golf Classic
            </span>
          </p>
          <p className="max-w-xs text-sm font-light leading-relaxed text-cream/50">
            The inaugural Classic honored Armen&apos;s legacy at Tukwet Canyon, with all
            proceeds benefiting{" "}
            <a href="https://www.carma4horses.org" target="_blank" rel="noopener noreferrer" className="link-rule text-gold-bright/90">
              CARMA
            </a>{" "}
            and the{" "}
            <a href="https://pdjf.org" target="_blank" rel="noopener noreferrer" className="link-rule text-gold-bright/90">
              PDJF
            </a>.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-3">
          <h4 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/40">
            Navigate
          </h4>
          <ul className="space-y-3.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-light text-cream/65 transition-colors duration-300 hover:text-gold-bright"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Event info */}
        <div className="md:col-span-4">
          <h4 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/40">
            The Classic
          </h4>
          <ul className="space-y-5 text-sm font-light text-cream/55">
            <li>
              <span className="block font-serif text-base italic text-cream/85">2026 · The Inaugural</span>
              <span className="mt-1 block leading-relaxed">
                June 22, 2026 · Morongo Golf Club at Tukwet Canyon, Beaumont, CA
              </span>
            </li>
            <li>
              <span className="block font-serif text-base italic text-cream/85">2027 · The Return</span>
              <span className="mt-1 block leading-relaxed">
                Details announced soon.{" "}
                <Link href="/#early-access" className="link-rule text-gold-bright/90">
                  Join the list
                </Link>{" "}
                to hear first.
              </span>
            </li>
            <li className="pt-1">
              <a href="mailto:armenzlegacy@gmail.com" className="link-rule text-gold-bright/90">
                armenzlegacy@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/8">
        <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs font-light text-cream/35 md:flex-row md:px-8">
          <p className="max-w-lg text-center md:text-left">
            Tax-deductible donations processed through the{" "}
            <span className="text-cream/55">909 Market Foundation</span>, a 501(c)(3)
            non-profit (EIN: 92-0881763).
          </p>
          <div className="flex shrink-0 flex-col items-center gap-2 md:flex-row md:gap-6">
            <p>© {new Date().getFullYear()} Armen Z Legacy</p>
            <p>
              Built by{" "}
              <a
                href="https://lastcall.marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-gold-bright"
              >
                Last Call Marketing
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
