import Link from "next/link";
import { PostLayout } from "@/components/news/PostLayout";
import { getPost } from "@/content/news/posts";

const post = getPost("beaumont-ca-charity-golf-tournament-june-2026")!;

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
        On Monday, June 22, 2026, the inaugural Armenz Legacy Charity Golf Tournament
        — Legacy on the Greens: The Armen Zennedjian Classic — tees off at Morongo
        Golf Club at Tukwet Canyon in Beaumont, California. This 4-person scramble
        brings together golfers, horsemen, and community members from across the
        Inland Empire and Southern California for a day of competition with a
        purpose: honoring the memory of Armen Zennedjian and supporting two
        organizations close to his heart.
      </p>
      <p>
        If you have been searching for meaningful Beaumont CA golf tournaments or
        Inland Empire charity golf events this summer, this is the one to put on your
        calendar.
      </p>

      <h2 className="text-3xl font-serif font-bold italic text-[#F5F0E8] mt-12 mb-4">
        A Day of Golf at One of Southern California&apos;s Premier Venues
      </h2>
      <p>
        Morongo Golf Club at Tukwet Canyon sits in the rolling foothills of the San
        Gorgonio Pass, just off the I-10 between Los Angeles and Palm Springs. The
        Champions Course offers the kind of layout that rewards strategy and teamwork
        — perfect terrain for a Southern California golf scramble where every player
        on your team contributes to the score.
      </p>
      <p>
        The 4-person scramble format keeps the day moving and welcoming for golfers
        of every skill level. Whether your foursome is stacked with low handicappers
        or you are bringing colleagues out for their first tournament, scramble play
        means everyone hits, everyone matters, and everyone has a shot at the
        leaderboard.
      </p>
      <p>
        Learn more about the course, directions, and on-site amenities on our{" "}
        <Link href="/venue" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">
          venue page
        </Link>
        .
      </p>

      <h2 className="text-3xl font-serif font-bold italic text-[#F5F0E8] mt-12 mb-4">
        What to Expect on Tournament Day
      </h2>
      <p>The day is built around three things: great golf, great company, and a great cause. Registered teams can expect:</p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-200">
        <li><strong className="text-[#F5F0E8]">Shotgun start</strong> on the Champions Course at Morongo Golf Club</li>
        <li><strong className="text-[#F5F0E8]">4-person scramble format</strong> — bring your own foursome or be paired up</li>
        <li><strong className="text-[#F5F0E8]">On-course contests</strong> including longest drive, closest to the pin, and hole-in-one challenges</li>
        <li><strong className="text-[#F5F0E8]">Awards reception</strong> following play, with food, drinks, and recognition for the winning teams</li>
        <li><strong className="text-[#F5F0E8]">Silent auction and raffle</strong> featuring items donated by local businesses and the racing community</li>
      </ul>
      <p>
        Spots are limited by the course&apos;s capacity, and based on early interest from
        the Inland Empire business community, we expect to fill the field well before
        tee time.{" "}
        <Link href="/register" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">
          Register your team here
        </Link>{" "}
        to lock in your place.
      </p>

      <h2 className="text-3xl font-serif font-bold italic text-[#F5F0E8] mt-12 mb-4">
        Why Beaumont, Why Now
      </h2>
      <p>
        Beaumont and the surrounding Pass area have grown into one of the most active
        corridors in Southern California, but quality charity events that bring the
        local business community together with a regional cause are still rare.
        Morongo Golf Club&apos;s location makes it easy for participants from Riverside,
        San Bernardino, Redlands, Yucaipa, Palm Springs, and the greater Los Angeles
        area to all converge for a single, well-organized day.
      </p>
      <p>
        For companies and individuals looking for Inland Empire charity golf
        opportunities that produce real impact rather than just a logo on a banner,
        the Armenz Legacy Tournament was designed with you in mind.
      </p>

      <h2 className="text-3xl font-serif font-bold italic text-[#F5F0E8] mt-12 mb-4">
        Honoring Armen Zennedjian
      </h2>
      <p>
        This tournament exists because of one man&apos;s life and the people he touched.
        Armen Zennedjian was deeply connected to the horse racing community, and the
        causes this event supports — CARMA (California Retirement Management Account)
        and the PDJF (Permanently Disabled Jockeys Fund) — reflect what mattered most
        to him: the horses that gave their all on the track, and the jockeys whose
        careers ended too soon.
      </p>
      <p>
        Every entry fee, every sponsorship, every raffle ticket directly supports the
        aftercare of retired racehorses and the ongoing care of jockeys living with
        permanent racing-related injuries. You can read more about both organizations
        and Armen&apos;s story on our{" "}
        <Link href="/the-cause" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">
          cause page
        </Link>
        .
      </p>

      <h2 className="text-3xl font-serif font-bold italic text-[#F5F0E8] mt-12 mb-4">
        How to Get Involved
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-zinc-200">
        <li>
          <strong className="text-[#F5F0E8]">Play.</strong> Register a foursome or sign up as an individual at{" "}
          <Link href="/register" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">/register</Link>.
        </li>
        <li>
          <strong className="text-[#F5F0E8]">Sponsor.</strong> Tee box, hole, beverage cart, and presenting sponsorships are available — view packages at{" "}
          <Link href="/sponsorships" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">/sponsorships</Link>.
        </li>
        <li>
          <strong className="text-[#F5F0E8]">Donate.</strong> If you cannot attend, you can still contribute directly to the tournament&apos;s beneficiary funds through our{" "}
          <Link href="/donate" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">donate page</Link>.
        </li>
      </ol>

      <h2 className="text-3xl font-serif font-bold italic text-[#F5F0E8] mt-12 mb-4">
        Save the Date
      </h2>
      <ul className="list-none pl-0 space-y-1 text-zinc-200">
        <li><strong className="text-[#F5F0E8]">What:</strong> Armenz Legacy Charity Golf Tournament — The Armen Zennedjian Classic</li>
        <li><strong className="text-[#F5F0E8]">When:</strong> Monday, June 22, 2026</li>
        <li><strong className="text-[#F5F0E8]">Where:</strong> Morongo Golf Club at Tukwet Canyon, Beaumont, CA</li>
        <li><strong className="text-[#F5F0E8]">Format:</strong> 4-person scramble</li>
        <li><strong className="text-[#F5F0E8]">Beneficiaries:</strong> CARMA and the PDJF</li>
      </ul>
      <p>
        The Inland Empire has a chance to start a tradition this June. Bring your
        team, bring your A-game, and help us build a legacy worth remembering.{" "}
        <Link href="/register" className="text-[#C9A84C] underline hover:text-[#F5F0E8]">
          Reserve your spot today
        </Link>{" "}
        — we will see you on the first tee.
      </p>
    </PostLayout>
  );
}
