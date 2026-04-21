import Link from "next/link";
import { PostLayout } from "@/components/news/PostLayout";
import { getPost } from "@/content/news/posts";

const post = getPost("corporate-sponsorship-charity-golf-inland-empire-2026")!;

export const metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/news/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
  },
};

export default function Post() {
  return (
    <PostLayout post={post}>
      <p>
        For Inland Empire businesses looking to align their brand with a meaningful
        cause, the inaugural Armenz Legacy Charity Golf Tournament — Legacy on the
        Greens: The Armen Zennedjian Classic — offers something rare: high-visibility
        sponsorship of a first-year event with a built-in audience of regional
        decision-makers, horse racing supporters, and community leaders. The
        tournament tees off June 22, 2026 at Morongo Golf Club at Tukwet Canyon in
        Beaumont, CA, with proceeds benefiting CARMA (California Retirement
        Management Account) and the PDJF (Permanently Disabled Jockeys Fund).
      </p>
      <p>
        If your marketing plan includes corporate sponsorship opportunities in
        Beaumont CA or charity event sponsorships across the Inland Empire, this
        guide walks through what is available and how to choose the right level for
        your goals.
      </p>

      <h2 className="text-3xl font-serif font-bold italic text-[#F5F0E8] mt-12 mb-4">
        Why Sponsor a First-Year Charity Golf Tournament
      </h2>
      <p>
        Inaugural events offer something later editions cannot: founding-sponsor
        status. Your company becomes part of the origin story of what we intend to
        grow into one of Southern California&apos;s signature horse-racing community
        gatherings.
      </p>
      <p>Beyond legacy positioning, a sponsorship at the Armenz Legacy Tournament delivers:</p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-200">
        <li><strong className="text-[#F5F0E8]">Targeted reach</strong> — Inland Empire executives, horse racing industry professionals, and equestrian community members in one venue for a full day</li>
        <li><strong className="text-[#F5F0E8]">Brand placement</strong> at a premier Southern California golf destination</li>
        <li><strong className="text-[#F5F0E8]">Cause alignment</strong> with two well-respected California-based nonprofits in the equine and racing world</li>
        <li><strong className="text-[#F5F0E8]">Tax-deductible giving</strong> through the tournament&apos;s beneficiary partners</li>
        <li><strong className="text-[#F5F0E8]">Networking access</strong> with potential clients, partners, and community leaders</li>
      </ul>
      <p>
        For companies in hospitality, financial services, equine veterinary care,
        real estate, legal services, agriculture, and any business serving the Pass
        area or the broader racing community, the audience overlap is significant.
      </p>

      <h2 className="text-3xl font-serif font-bold italic text-[#F5F0E8] mt-12 mb-4">
        Sponsorship Levels at a Glance
      </h2>
      <p>
        Full package details, pricing, and benefit comparisons are available on our{" "}
        <Link href="/sponsorships" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">sponsorships page</Link>
        . At a high level, opportunities include:
      </p>

      <h3 className="text-2xl font-serif font-bold italic text-[#F5F0E8] mt-8 mb-3">Presenting Sponsor</h3>
      <p>
        The top-tier package. Your company name appears alongside the tournament
        title across all marketing, signage, and press, with premium on-course
        branding, multiple foursomes, and prominent recognition at the awards
        reception.
      </p>

      <h3 className="text-2xl font-serif font-bold italic text-[#F5F0E8] mt-8 mb-3">Hole and Tee Box Sponsorships</h3>
      <p>
        A cost-effective way to put your brand in front of every golfer in the field.
        Includes signage at your designated hole, recognition in the program, and the
        option to staff your hole with a representative or activation.
      </p>

      <h3 className="text-2xl font-serif font-bold italic text-[#F5F0E8] mt-8 mb-3">Beverage Cart and On-Course Sponsorships</h3>
      <p>
        High-visibility branding on mobile elements that touch every group on the
        course. Ideal for consumer brands, restaurants, and hospitality businesses
        looking for repeat impressions throughout the day.
      </p>

      <h3 className="text-2xl font-serif font-bold italic text-[#F5F0E8] mt-8 mb-3">Contest Sponsorships</h3>
      <p>
        Sponsor the longest drive, closest to the pin, or hole-in-one contests. Your
        brand becomes part of the highlight moments players talk about after the
        round.
      </p>

      <h3 className="text-2xl font-serif font-bold italic text-[#F5F0E8] mt-8 mb-3">In-Kind and Raffle Sponsorships</h3>
      <p>
        Donate products, services, or experiences for the silent auction and raffle.
        A great fit for businesses that prefer to contribute inventory or services
        rather than cash.
      </p>
      <p>
        <Link href="/sponsorships" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">
          View all sponsor packages and reserve your level
        </Link>{" "}
        before they fill — premium tiers are limited and typically commit early.
      </p>

      <h2 className="text-3xl font-serif font-bold italic text-[#F5F0E8] mt-12 mb-4">
        What Sponsors Are Actually Supporting
      </h2>
      <p>Every sponsorship dollar directly funds two California-based organizations:</p>
      <p>
        <strong className="text-[#F5F0E8]">CARMA — California Retirement Management Account.</strong> CARMA funds aftercare for thoroughbreds
        retiring from California racing, supporting accredited rehabilitation,
        retraining, and rehoming programs across the state. CARMA charity events are
        a critical funding source for the work of giving racehorses a dignified
        second career.
      </p>
      <p>
        <strong className="text-[#F5F0E8]">PDJF — Permanently Disabled Jockeys Fund.</strong> The PDJF provides ongoing financial assistance
        to jockeys who have been permanently disabled as a result of racing-related
        injuries. These are athletes who gave their careers to the sport and now
        need the racing community to give back.
      </p>
      <p>
        Together, these organizations represent the full arc of care that horse
        racing charity events in California should support — both the horses and the
        riders. Read more about both beneficiaries and Armen Zennedjian&apos;s connection
        to them on our{" "}
        <Link href="/the-cause" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">cause page</Link>.
      </p>

      <h2 className="text-3xl font-serif font-bold italic text-[#F5F0E8] mt-12 mb-4">
        The Audience You Are Reaching
      </h2>
      <p>
        Sponsoring an equestrian charity golf tournament puts your brand in front of
        an audience that is hard to reach through conventional advertising:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-200">
        <li>Inland Empire business owners and executives</li>
        <li>California horse racing owners, trainers, and industry professionals</li>
        <li>Equestrian community members and supporters</li>
        <li>Local civic leaders and philanthropists</li>
        <li>Golf and country club members from across Southern California</li>
      </ul>
      <p>This is a room — or rather, a course — where relationships get built and deals get started.</p>

      <h2 className="text-3xl font-serif font-bold italic text-[#F5F0E8] mt-12 mb-4">
        How to Become a Sponsor
      </h2>
      <p>Securing a sponsorship is straightforward:</p>
      <ol className="list-decimal pl-6 space-y-2 text-zinc-200">
        <li>Review the available packages on the <Link href="/sponsorships" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">sponsorships page</Link>.</li>
        <li>Submit the sponsor inquiry form with your preferred level.</li>
        <li>Our team will confirm availability, send the agreement and invoice, and collect your branding assets.</li>
        <li>Your logo and recognition begin appearing immediately across tournament marketing.</li>
      </ol>
      <p>
        To maximize pre-event exposure, we recommend committing by mid-May 2026 so
        your brand is included in the full run of email, social, and on-site
        materials leading up to June 22.
      </p>

      <h2 className="text-3xl font-serif font-bold italic text-[#F5F0E8] mt-12 mb-4">
        Build a Legacy with Us
      </h2>
      <p>
        The Armenz Legacy Charity Golf Tournament was created to honor a life and
        serve a community. Your sponsorship makes that possible — and positions your
        company as a founding partner in what we believe will become one of the most
        respected charity golf events in California.
      </p>
      <p>
        <Link href="/sponsorships" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">
          Reserve your sponsorship today
        </Link>
        , or{" "}
        <Link href="/register" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">
          register a team to play
        </Link>
        . For questions about custom packages or in-kind opportunities, reach out
        through the{" "}
        <Link href="/contact" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">contact form</Link>
        . We look forward to building this legacy together on June 22 at Morongo
        Golf Club.
      </p>
    </PostLayout>
  );
}
