import { GalleryClient } from "@/components/gallery/GalleryClient";
import { galleryPhotos, type GalleryCategory } from "@/content/gallery/photos";
import { OG_IMAGE } from "@/lib/site-config";
import { Hero } from "@/components/Hero";
import { Reveal, MaskLines } from "@/components/motion";
import { Cta } from "@/components/Cta";

export const metadata = {
  title: "2026 Photo Gallery",
  description:
    "Relive the inaugural Armenz Legacy Classic: photos of players, sponsors, and the course at Morongo Golf Club at Tukwet Canyon in Beaumont, CA — June 22, 2026. Benefiting CARMA and the PDJF.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "2026 Photo Gallery | Armenz Legacy",
    description:
      "Players, sponsors, and the course at Tukwet Canyon. Relive the inaugural Armenz Legacy Classic.",
    images: [OG_IMAGE],
  },
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ c?: string }>;
}) {
  const { c } = await searchParams;
  const initialCategory = (["players", "sponsors", "course"] as const).includes(
    c as GalleryCategory
  )
    ? (c as GalleryCategory)
    : undefined;

  return (
    <div className="relative min-h-screen bg-ink">
      <Hero
        compact
        eyebrow="June 22, 2026 · Morongo Golf Club at Tukwet Canyon"
        title={
          <>
            The 2026 <em className="italic text-gold-bright">gallery</em>.
          </>
        }
        subtitle={`${galleryPhotos.length} moments from the inaugural Armenz Legacy Classic. The players, the partners, and the course that made it unforgettable.`}
        showButtons={false}
      />

      {/* Grid + filters + lightbox */}
      <section className="pb-20 pt-10 md:pb-28 md:pt-12">
        <div className="container mx-auto max-w-[1700px] px-4 md:px-8">
          <GalleryClient initialCategory={initialCategory} />
        </div>
      </section>

      {/* Closing CTA — path back to the 2027 list */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <div className="border border-gold/20 px-8 py-14 text-center md:px-16 md:py-16">
            <h2 className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-5xl">
              <MaskLines
                lines={[
                  <span key="l">
                    Be in next year&apos;s <em className="italic text-gold-bright">gallery</em>.
                  </span>,
                ]}
              />
            </h2>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-cream/60">
                The 2027 Classic will be bigger. Join the early-access list and be the
                first to know when player spots and sponsorships open.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Cta href="/#early-access">Join The 2027 List</Cta>
                <Cta href="/sponsorships" variant="ghost">2026 Sponsors</Cta>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
