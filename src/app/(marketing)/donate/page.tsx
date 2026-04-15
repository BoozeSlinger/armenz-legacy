import { EventbriteWidget } from "@/components/EventbriteWidget";

export const metadata = {
  title: "Donate | Legacy on the Greens: The Armen Zennedjian Classic",
  description: "Support Legacy on the Greens: The Armen Zennedjian Classic with a tax-deductible donation. Every dollar counts.",
};

export default function DonatePage() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/page-bg/home-parallax.png')" }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-[2px]" />
      </div>

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] font-semibold tracking-[0.2em] uppercase text-sm">
              Support the Legacy
            </span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#F5F0E8] mb-6">
            Make a <span className="text-[#C9A84C] italic">Donation</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            You don&apos;t have to play golf to make a difference. Every contribution, no matter the size, goes directly to supporting retired Thoroughbreds and injured jockeys.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 md:p-12 shadow-2xl relative">
            <div className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-[#C9A84C]" />
            <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-[#C9A84C]" />

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F5F0E8] mb-2 text-center">
                Complete Your Donation
              </h2>
              <p className="text-zinc-400 text-center mb-10">
                Please use the secure Eventbrite checkout below to complete your contribution.
              </p>
              
              <EventbriteWidget 
                eventId="1983383494423"
                containerId="eventbrite-widget-container-1983383494423-donate"
              />
              
              <p className="text-zinc-500 text-xs text-center mt-8">
                Your donation is tax deductible - this tournament is run through <strong className="text-zinc-400">909 Market Foundation</strong>, a 501(c)(3) charitable organization. EIN: 92-0881763.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Note */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <div className="border-y border-zinc-800/50 py-10">
            <p className="text-[#F5F0E8] font-serif text-2xl md:text-3xl italic leading-relaxed">
              &ldquo;Thank you for keeping Armen&apos;s spirit alive. Your generosity gives second chances to the horses and riders who give everything to the sport we love.&rdquo;
            </p>
            <p className="text-[#C9A84C] text-sm uppercase tracking-widest font-bold mt-6">
              The Armen Z Legacy Family
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
