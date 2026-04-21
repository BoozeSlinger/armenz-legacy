import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Tournament Details & FAQ — Beaumont CA Charity Golf Scramble",
  description:
    "4-person scramble format, schedule, dress code, rules & FAQ for the Armenz Legacy charity golf tournament at Morongo Golf Club in Beaumont, CA — June 22, 2026.",
  keywords: [
    "Southern California golf scrambles",
    "Beaumont CA golf tournaments",
    "4-person scramble Inland Empire",
    "Morongo Golf Club events",
  ],
  alternates: { canonical: "/tournament" },
};

const schedule = [
  { time: "7:30 AM", event: "Gates Open", desc: "Arrive early to check in and warm up on the driving range." },
  { time: "8:00 AM", event: "Registration & Breakfast", desc: "Enjoy complimentary breakfast burritos and Bloody Marys provided by The Derby Room." },
  { time: "9:30 AM", event: "Opening Remarks", desc: "A brief welcome and tribute to the legacy of Armen Zennedjian." },
  { time: "10:00 AM", event: "Shotgun Start", desc: "All teams tee off simultaneously across the course." },
  { time: "4:00 PM", event: "Play Concludes", desc: "Foursomes finish up and head to the clubhouse." },
  { time: "Immediately Following", event: "Dinner, Auction, & Awards", desc: "Immediately following play." },
];

const contests = [
  { name: "Longest Drive", desc: "Test your power on a designated par-5 fairway." },
  { name: "Closest to the Pin", desc: "Precision counts on select par-3 holes." },
  { name: "Putting Contest", desc: "Sink your putt for a chance at bonus prizes." },
  { name: "Mulligans", desc: "Purchase extra chances to re-hit your shot (available at registration)." },
];

const faqs = [
  {
    question: "What is a Scramble format?",
    answer: "In a Scramble, all four players tee off, then the team selects the best shot. All players hit from that spot, and so on until the ball is holed. It's the most fun and beginner-friendly format in golf.",
  },
  {
    question: "What is the dress code?",
    answer: "Tukwet Canyon enforces a strict dress code. Collared shirts are required for all players. No denim, cargo shorts, or athletic wear is permitted on the course. Spikeless golf shoes are required.",
  },
  {
    question: "Do I need to bring my own clubs?",
    answer: "If you need to rent clubs, please contact the Morongo Golf Club pro shop directly at the time of your registration. Rental sets are available on a first-come, first-served basis.",
  },
  {
    question: "What happens if it rains?",
    answer: "The tournament will be played rain or shine. In the event of severe weather (lightning, etc.), the course marshal will suspend play. If the course becomes unplayable, a modified format or rescheduled date will be communicated to all registered players.",
  },
  {
    question: "Is breakfast and dinner included?",
    answer: "Yes! Every registered player receives a complimentary breakfast provided by The Derby Room before the round. Lunch will be served on the course during play, while Dinner is the formal post-tournament meal.",
  },
  {
    question: "Can I attend the dinner and auction without playing golf?",
    answer: "Yes! We offer Dinner & Auction tickets for non-golfers who want to join the post-tournament celebration. Visit our Dinner & Auction page for details.",
  },
  {
    question: "How do I register my full foursome?",
    answer: "You can register all four players at once through our registration page. If you don't have a full foursome, register as an individual and we'll pair you with other players.",
  },
  {
    question: "Are donations tax-deductible?",
    answer: "Yes. This tournament is run through 909 Market Foundation, a 501(c)(3) charitable organization (EIN: 92-0881763). All contributions are tax-deductible to the fullest extent allowed by law.",
  },
];

export default function TournamentPage() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <Image 
          src="/images/page-bg/home-parallax.png" 
          alt="Tournament Details Background - Beaumont Charity Golf Scramble" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-[2px]" />
      </div>

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] font-semibold tracking-[0.2em] uppercase text-sm">
              Everything You Need to Know
            </span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#F5F0E8] mb-6">
            Tournament Details & FAQ <br/><span className="text-[#C9A84C] italic text-3xl md:text-5xl">Beaumont Charity Golf Scramble</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            June 22, 2026 at Morongo Golf Club at Tukwet Canyon. Here&apos;s everything you need to know before teeing off.
          </p>
        </div>
      </section>

      {/* Full Schedule */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 md:p-12 shadow-2xl relative">
            <div className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-[#C9A84C]" />
            <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-[#C9A84C]" />

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F5F0E8] mb-10">
              Full Day Schedule
            </h2>

            <div className="space-y-0">
              {schedule.map((item, i) => (
                <div key={i} className="flex gap-6 py-6 border-b border-zinc-800/50 last:border-b-0">
                  <span className="text-[#C9A84C] font-black text-sm tabular-nums whitespace-nowrap pt-1 min-w-[80px]">
                    {item.time}
                  </span>
                  <div className="space-y-1">
                    <p className="text-[#F5F0E8] font-bold uppercase tracking-wide text-sm">
                      {item.event}
                    </p>
                    <p className="text-zinc-500 text-sm italic">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Format & Contests */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Format */}
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 md:p-10 shadow-2xl">
              <h3 className="text-[#C9A84C] text-sm uppercase tracking-widest font-black mb-3">Tournament Format</h3>
              <h2 className="text-3xl font-serif font-bold text-[#F5F0E8] mb-6 italic">
                4-Person Scramble
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  The Scramble is the most popular and accessible team format in charity golf. All four players tee off, the team picks the best drive, and everyone plays from that spot.
                </p>
                <p>
                  This continues until the ball is holed. It&apos;s fast, it&apos;s fun, and it means every player, regardless of skill level, contributes to their team&apos;s score.
                </p>
              </div>
            </div>

            {/* On-Course Contests */}
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 md:p-10 shadow-2xl">
              <h3 className="text-[#C9A84C] text-sm uppercase tracking-widest font-black mb-3">On-Course Contests</h3>
              <h2 className="text-3xl font-serif font-bold text-[#F5F0E8] mb-6 italic">
                Win Big on the Course
              </h2>
              <div className="space-y-4">
                {contests.map((contest, i) => (
                  <div key={i} className="border-l-2 border-[#C9A84C]/40 pl-4">
                    <p className="text-[#F5F0E8] font-bold text-sm uppercase tracking-wide">{contest.name}</p>
                    <p className="text-zinc-500 text-sm">{contest.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code & Important Info */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 shadow-2xl text-center">
              <h3 className="text-[#C9A84C] text-sm uppercase tracking-widest font-black mb-4">Dress Code</h3>
              <div className="text-zinc-300 text-sm space-y-2">
                <p className="text-[#F5F0E8] font-bold">Collared shirts required</p>
                <p>No denim or cargo shorts</p>
                <p>No athletic wear</p>
                <p>Spikeless golf shoes required</p>
                <p className="text-zinc-500 italic text-xs mt-4">Strictly enforced by the clubhouse</p>
              </div>
            </div>

            <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 shadow-2xl text-center">
              <h3 className="text-[#C9A84C] text-sm uppercase tracking-widest font-black mb-4">Club Rentals</h3>
              <div className="text-zinc-300 text-sm space-y-2">
                <p>Rental sets available from the Morongo Golf Club pro shop</p>
                <p className="text-[#F5F0E8] font-bold mt-2">First-come, first-served</p>
                <p className="text-zinc-500 italic text-xs mt-4">Contact the pro shop when you register to reserve</p>
              </div>
            </div>

            <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 shadow-2xl text-center">
              <h3 className="text-[#C9A84C] text-sm uppercase tracking-widest font-black mb-4">Weather Policy</h3>
              <div className="text-zinc-300 text-sm space-y-2">
                <p>Tournament is <strong className="text-[#F5F0E8]">rain or shine</strong></p>
                <p>Play suspended only for severe weather (lightning)</p>
                <p className="text-zinc-500 italic text-xs mt-4">Modified format or reschedule if unplayable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F5F0E8] mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 p-6 md:p-8">
                <h3 className="text-[#F5F0E8] font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F5F0E8] mb-6">
            Ready to Tee Off?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Secure your spot in Legacy on the Greens: The Armen Zennedjian Classic. Every registration supports a cause worth fighting for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] font-bold px-8 py-6 rounded-none uppercase tracking-widest transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(201,168,76,0.3)]">
              <Link href="/register">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] font-bold px-8 py-6 rounded-none bg-transparent backdrop-blur-sm uppercase tracking-widest transition-all duration-300">
              <Link href="/sponsorships">View Sponsorships</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
