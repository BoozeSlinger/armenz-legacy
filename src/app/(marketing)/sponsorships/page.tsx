import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CldImage } from "@/components/gallery/CldImage";
import { galleryPhotos } from "@/content/gallery/photos";
import { Reveal, MaskLines, HairlineGrow } from "@/components/motion";
import { Cta } from "@/components/Cta";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Thank You to Our 2026 Sponsors — Armenz Legacy Classic",
  description:
    "Gratitude to the sponsors who powered the inaugural Armenz Legacy charity golf tournament at Morongo Golf Club in Beaumont, CA — led by Triple Crown sponsor the Morongo Band of Mission Indians. 2027 sponsorships open soon.",
  keywords: [
    "Armenz Legacy 2026 sponsors",
    "Charity event sponsorships Inland Empire",
    "Golf tournament sponsor packages California",
    "Morongo Golf Club sponsorship",
  ],
  alternates: { canonical: "/sponsorships" },
};

const tentPhotos = galleryPhotos.filter((p) => p.category === "sponsors").slice(0, 6);

/* 2026 sponsor honor roll — logos live in Cloudinary golf/sponsor logos.
   dark: light-colored artwork that needs an ink plate instead of white. */
const sponsorLogos: { id: string; v: number; w: number; h: number; alt: string; url?: string; dark?: boolean }[] = [
  { id: "909mflogo_bsvlus", v: 1783628157, w: 1000, h: 1000, alt: "909 Market Foundation", url: "https://909marketfoundation.org" },
  { id: "Derby_Room_Logo_Hi_Res_vz02wh", v: 1783628157, w: 4479, h: 2956, alt: "The Derby Room", url: "https://www.thederbyroombar.com" },
  { id: "red-bull-logo-png-transparent_olyqak", v: 1783628164, w: 2400, h: 1476, alt: "Red Bull", url: "https://www.redbull.com" },
  { id: "jagermeister_logo_c1m1kg", v: 1783628160, w: 866, h: 650, alt: "Jägermeister", url: "https://www.jagermeister.com" },
  { id: "Farmers-Insurance-Logo_kt5zd2", v: 1783628159, w: 3840, h: 2160, alt: "Farmers Insurance", url: "https://www.farmersinsurance.com" },
  { id: "Pulte_log_fnkazd", v: 1783628164, w: 800, h: 490, alt: "Pulte Homes", url: "https://www.pultehomes.com" },
  { id: "Sysco_SoCal_-_No_Background_ngxtkb", v: 1783628165, w: 1208, h: 1199, alt: "Sysco Southern California", url: "https://www.sysco.com" },
  { id: "HappyDad_logo_abte16", v: 1783628160, w: 311, h: 162, alt: "Happy Dad Hard Seltzer", url: "https://happydaddrinkers.com" },
  { id: "good-boy-vodka-logo_xtgras", v: 1783628159, w: 1080, h: 1080, alt: "Good Boy Vodka", url: "https://goodboyvodka.com" },
  { id: "dios-azul_logo1_nz0crc", v: 1783628157, w: 520, h: 520, alt: "Dios Azul Tequila", url: "https://diosazulusa.com" },
  { id: "mailbu_engjlf", v: 1783628161, w: 302, h: 170, alt: "Malibu", url: "https://www.maliburum.com" },
  { id: "PVK_Compliant_Stacked_hudx0o", v: 1783628164, w: 341, h: 210, alt: "Perris Valley Kia", url: "https://www.perrisvalleykia.com" },
  { id: "bracero_logo_gmy3f8", v: 1783628157, w: 1425, h: 734, alt: "Bracero", url: "https://bracerorestaurant.com" },
  { id: "empire_gardens_logo1_ro73xy", v: 1783628158, w: 250, h: 250, alt: "Empire Gardens", url: "https://empiregardens.us" },
  { id: "pedder_ofcja9", v: 1783628163, w: 600, h: 600, alt: "Pedder Automotive Group", url: "https://www.pedderauto.com" },
  { id: "MSCGaming_hsnp5z", v: 1783628163, w: 1762, h: 845, alt: "MSC Gaming", url: "https://mscgaming.com" },
  { id: "PN_High_Club_vheydv", v: 1783628163, w: 627, h: 627, alt: "PN High Club", url: "https://pnhighclub.com" },
  { id: "EBY_2024_Scroll_Logo-Brand-Turquoise_RGB_4_valdrb", v: 1783628158, w: 1130, h: 1297, alt: "El Bandido Yankee Tequila", url: "https://elbandidoyankee.com" },
  { id: "THE_GENERATION_SY_LEGADO_LOGO_tkg5u9", v: 1783628165, w: 1181, h: 1181, alt: "The Generation Su Legado", url: "https://thegenerationsulegado.com" },
  { id: "Centenal_26_-Teal_White_Logo_i9gcmm", v: 1783628157, w: 2048, h: 1853, alt: "Centenal", url: "https://centenal26tequila.com", dark: true },
  { id: "logo-lrg_2026_imn7cl", v: 1783628160, w: 438, h: 343, alt: "Southern California Fair & Events", url: "https://www.scfair.com" },
  { id: "saplogoblack24_tct05f", v: 1783628166, w: 7363, h: 1331, alt: "Santa Anita Park", url: "https://www.santaanitapark.com" },
  { id: "30099EParr_Lumber_Legacy_Ranch_Logo_Only_nnkuoj", v: 1783628157, w: 432, h: 236, alt: "Legacy Ranch, Clements CA", url: "https://legacyranchclements.com" },
  { id: "NCB_LOGOS_ALL_znj666", v: 1783628163, w: 612, h: 432, alt: "National Commercial Builders", url: "https://www.ncb-ca.com" },
];

const sponsorPitch = [
  { stat: "200+", label: "Attendees", detail: "Inland Empire business and equestrian community" },
  { stat: "Logo", label: "Placement", detail: "Scorecards, course signage, and player swag" },
  { stat: "10k+", label: "Social Reach", detail: "Combined audience recognition across channels" },
  { stat: "100%", label: "Tax-Deductible", detail: "Both CARMA and the PDJF hold 501(c)(3) status" },
];

export default function SponsorshipsPage() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Hero
        compact
        eyebrow="Gratitude · The Inaugural Classic"
        title={
          <>
            Thank you to our 2026 <em className="italic text-gold-bright">sponsors</em>.
          </>
        }
        subtitle="The inaugural Legacy on the Greens happened because these partners showed up for the cause. This page is our thank-you, and your invitation for 2027."
        showButtons={false}
      />

      {/* Triple Crown feature */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/80">
                Triple Crown Title Sponsor
              </p>
              <h2 className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-5xl">
                <MaskLines
                  lines={[
                    <span key="l1">Morongo Band of</span>,
                    <span key="l2">
                      Mission <em className="italic text-gold-bright">Indians</em>
                    </span>,
                  ]}
                />
              </h2>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-md text-base font-light leading-relaxed text-cream/65">
                  Our presenting partner made the inaugural Classic possible, from the
                  fairways of Tukwet Canyon to the final toast at the awards dinner.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.15} y={36}>
                <a
                  href="https://tukwetcanyon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-gold/20 bg-ink-2 p-3 transition-colors duration-500 hover:border-gold/40"
                >
                  <span className="flex items-center justify-center bg-[#f7f5ef] px-10 py-12 transition-colors duration-500 group-hover:bg-white md:px-16 md:py-14">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/Morongologo.png"
                      alt="Morongo Band of Mission Indians"
                      className="mx-auto h-28 w-auto object-contain md:h-40"
                    />
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Tier honor roll */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="pb-10">
            <h2 className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-5xl">
              <MaskLines
                lines={[
                  <span key="l">
                    Every tier made an <em className="italic text-gold-bright">impact</em>.
                  </span>,
                ]}
              />
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {sponsorLogos.map((logo, i) => (
              <Reveal key={logo.id} delay={(i % 4) * 0.06} y={20}>
                {logo.url ? (
                  <a
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex aspect-[3/2] items-center justify-center p-6 transition-colors duration-500 md:p-8 ${
                      logo.dark
                        ? "border border-gold/20 bg-ink-2 hover:border-gold/40"
                        : "bg-[#f7f5ef] hover:bg-white"
                    }`}
                    aria-label={`Visit ${logo.alt}`}
                  >
                    <div className="relative h-full w-full">
                      <CldImage
                        photo={logo}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-contain grayscale transition-[filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 motion-reduce:grayscale-0"
                      />
                    </div>
                  </a>
                ) : (
                  <div
                    className={`group flex aspect-[3/2] items-center justify-center p-6 transition-colors duration-500 md:p-8 ${
                      logo.dark
                        ? "border border-gold/20 bg-ink-2 hover:border-gold/40"
                        : "bg-[#f7f5ef] hover:bg-white"
                    }`}
                  >
                    <div className="relative h-full w-full">
                      <CldImage
                        photo={logo}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-contain grayscale transition-[filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 motion-reduce:grayscale-0"
                      />
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-base font-light leading-relaxed text-cream/55">
              To every business that claimed a tent, a tee sign, a towel, or a tee time,
              thank you. The 2026 Classic carried your name onto the course.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sponsors in action */}
      <section className="border-y border-gold/10 bg-ink-2 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-5xl">
              <MaskLines
                lines={[
                  <span key="l">
                    Sponsors in <em className="italic text-gold-bright">action</em>.
                  </span>,
                ]}
              />
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {tentPhotos.map((photo, i) => (
              <Reveal key={photo.id} delay={(i % 3) * 0.08}>
                <Link
                  href="/gallery?c=sponsors"
                  className="group relative block aspect-[3/2] overflow-hidden border border-cream/5 transition-colors duration-300 hover:border-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label={`View sponsor photos in the gallery: ${photo.alt}`}
                >
                  <CldImage
                    photo={photo}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority={i < 2}
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-ink/25 transition-opacity duration-500 group-hover:opacity-0" />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 text-center">
              <Cta href="/gallery?c=sponsors" variant="ghost">See All Sponsor Photos</Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2027 pitch */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-5xl lg:sticky lg:top-32">
                <MaskLines
                  lines={[
                    <span key="l1">Want in for</span>,
                    <span key="l2">
                      <em className="italic text-gold-bright">2027</em>?
                    </span>,
                  ]}
                />
              </h2>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <p className="max-w-xl text-lg font-light leading-relaxed text-cream/70">
                  Sponsoring the Armenz Legacy Classic puts your brand in front of a
                  curated audience of local business owners, community leaders, and
                  equestrian professionals. People who remember the companies that show up.
                </p>
              </Reveal>

              <HairlineGrow className="mt-12" />
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {sponsorPitch.map((item, i) => (
                  <Reveal
                    key={item.label}
                    delay={(i % 2) * 0.1}
                    className={`border-gold/12 py-9 ${
                      i % 2 === 0 ? "sm:border-r sm:pr-10" : "sm:pl-10"
                    } ${i >= 2 ? "border-t" : ""} ${i === 1 ? "border-t sm:border-t-0" : ""}`}
                  >
                    <span className="font-engraved block text-4xl text-cream md:text-5xl">
                      {item.stat}
                    </span>
                    <h3 className="mt-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-cream/90">
                      {item.label}
                    </h3>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-cream/50">
                      {item.detail}
                    </p>
                  </Reveal>
                ))}
              </div>
              <HairlineGrow />

              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-col items-start gap-4">
                  <Cta href="/#early-access">Get 2027 Sponsorship Access</Cta>
                  <p className="text-sm font-light text-cream/45">
                    Tiers sold out in 2026. The early-access list hears first.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
