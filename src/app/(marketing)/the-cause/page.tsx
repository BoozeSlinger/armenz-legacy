import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";

export const metadata = {
  title: "The Cause | Armen Z Legacy on the Greens",
  description: "Learn about Armen Zennedjian's legacy, CARMA, and the Permanently Disabled Jockeys Fund.",
};

const slideData = [
  {
    title: "The Legacy",
    button: "Read More",
    src: "/images/armen/Untitled (3).png",
  },
  {
    title: "The Impact",
    button: "Our Causes",
    src: "/images/armen/Untitled (4).png",
  },
  {
    title: "The Community",
    button: "Join Us",
    src: "/images/armen/Untitled (5).png",
  },
];

export default function TheCausePage() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/page-bg/home-parallax.png')" }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-[2px]" />
      </div>

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] font-semibold tracking-[0.2em] uppercase text-sm">
              About the Mission
            </span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#F5F0E8] mb-6">
            Honoring a Legacy,<br />
            <span className="text-[#C9A84C] italic">Building a Future</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            The Armen Z Legacy on the Greens was born from love, loss, and a deep commitment to the sport of horse racing and the people and animals who make it possible.
          </p>
        </div>
      </section>

      {/* About Armen Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 md:p-12 lg:p-16 shadow-2xl relative mb-16">
            <div className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-[#C9A84C]" />
            <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-[#C9A84C]" />

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F5F0E8] mb-8">
              Remembering Armen Zennedjian
            </h2>
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                Armen Zennedjian was a beloved figure in the horse racing community whose passion for the sport was matched only by his generosity and warmth. A dedicated horseman, loyal friend, and tireless advocate for the welfare of both jockeys and Thoroughbreds, Armen left an indelible mark on everyone fortunate enough to know him.
              </p>
              <p>
                His love for the track was infectious. Whether at the rail on race day or gathered with friends at the barn, Armen lived for the thrill of competition and the deep bond between horse and rider. But more than the wins and the wagers, Armen cared about the people and animals behind the sport.
              </p>
              <p>
                This tournament is our way of keeping his spirit alive. Every swing on the course, every dollar raised, and every smile shared among friends carries forward the values Armen championed: community, compassion, and second chances.
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden w-full h-[80vmin] md:h-[90vmin] py-10 w-full">
            <Carousel slides={slideData} />
          </div>
        </div>
      </section>

      {/* The Causes */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F5F0E8] mb-4">
              Where Your Support Goes
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every dollar raised directly benefits two organizations close to Armen&apos;s heart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CARMA Card */}
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 md:p-10 shadow-2xl">
              <h3 className="text-[#C9A84C] text-2xl font-serif font-bold mb-4">CARMA</h3>
              <p className="text-sm text-[#C9A84C]/70 uppercase tracking-widest font-bold mb-6">
                California Retirement Management Account
              </p>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  CARMA is a 501(c)(3) nonprofit organization dedicated to funding the retirement, retraining, and rehoming of Thoroughbred racehorses that have competed in California.
                </p>
                <p>
                  Since its founding, CARMA has granted over <strong className="text-[#F5F0E8]">$6.3 million</strong> to accredited organizations and has helped more than <strong className="text-[#F5F0E8]">425 retired racing Thoroughbreds</strong> find second careers and loving homes.
                </p>
                <p>
                  Through programs like the CARMA Placement Program, aftercare funding, and owner education initiatives, they ensure that every horse that gives its all on the track gets the dignified retirement it deserves.
                </p>
              </div>
            </div>

            {/* PDJF Card */}
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 md:p-10 shadow-2xl">
              <h3 className="text-[#C9A84C] text-2xl font-serif font-bold mb-4">
                The Permanently Disabled Jockeys Fund
              </h3>
              <p className="text-sm text-[#C9A84C]/70 uppercase tracking-widest font-bold mb-6">
                Supporting Riders Who Risked It All
              </p>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  The PDJF provides financial assistance to jockeys who have suffered catastrophic, career-ending injuries during the course of competition.
                </p>
                <p>
                  Horse racing is one of the most dangerous sports in the world. Jockeys risk their lives every time they mount up, and when tragedy strikes, the PDJF is there to help with <strong className="text-[#F5F0E8]">medical expenses, living costs, and rehabilitation</strong>.
                </p>
                <p>
                  These brave athletes gave everything to the sport we love. Through your support, we ensure they are never forgotten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Deductible Notice */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-[#C9A84C]/10 backdrop-blur-xl border border-[#C9A84C]/30 p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-[#F5F0E8] mb-4">
              Your Donation Is Tax-Deductible
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Both CARMA and the PDJF are registered 501(c)(3) tax-exempt organizations. All contributions made through the Armen Z Legacy on the Greens are tax-deductible to the fullest extent allowed by law.
            </p>
            <p className="text-[#C9A84C] font-bold text-sm uppercase tracking-widest mb-8">
              Please consult your tax advisor for details regarding your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] font-bold px-8 py-6 rounded-none uppercase tracking-widest transition-all duration-300">
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] font-bold px-8 py-6 rounded-none bg-transparent backdrop-blur-sm uppercase tracking-widest transition-all duration-300">
                <Link href="/register">Register to Play</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
