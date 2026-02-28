import { Hero } from "@/components/Hero";

export const metadata = {
  title: "Event Venue | Armen Z Legacy",
  description: "Location details for the Armen Z Legacy charity golf tournament at Morongo Golf Club at Tukwet Canyon.",
};

export default function VenuePage() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/page-bg/venue-parallax.png')" }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/85 backdrop-blur-[2px]" />
      </div>
      <Hero title="THE VENUE" subtitle="Morongo Golf Club at Tukwet Canyon" showCountdown={false} compact={true} transparentBg={true} />
      <section className="py-24 bg-transparent text-zinc-200">
        <div className="container mx-auto px-4 md:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F5F0E8] mb-6 leading-tight">Legendary Golf in a Breathtaking Setting</h2>
               <p className="text-lg leading-relaxed font-medium mb-6 opacity-90">
                 Set against the breathtaking backdrop of the San Gorgonio Mountains, Tukwet Canyon offers 36 holes of world-class golf. Our event will take place on the legendary courses designed to provide a challenging yet rewarding experience for golfers of all skill levels.
               </p>
               <ul className="space-y-4 text-lg font-medium bg-[#0A0A0A]/60 backdrop-blur-md p-6 md:p-8 border-l-4 border-[#C9A84C] shadow-2xl">
                 <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                    <strong className="text-[#C9A84C] min-w-[100px] uppercase text-sm tracking-wider mt-1">Location</strong>
                    <span className="opacity-90">Morongo Golf Club at Tukwet Canyon<br/>36211 Champion Dr, Beaumont, CA 92223</span>
                 </li>
                 <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                    <strong className="text-[#C9A84C] min-w-[100px] uppercase text-sm tracking-wider mt-1">Parking</strong>
                    <span className="opacity-90">Complimentary valet parking available for all sponsors and deluxe pass holders.</span>
                 </li>
                 <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                    <strong className="text-[#C9A84C] min-w-[100px] uppercase text-sm tracking-wider mt-1">Attire</strong>
                    <span className="opacity-90">Traditional golf attire. Collared shirts required. No denim or cargo pants. Soft spikes only.</span>
                 </li>
               </ul>
             </div>
             <div className="h-[400px] md:h-[500px] w-full bg-[#0A0A0A]/60 backdrop-blur-md p-2 md:p-3 border-2 border-white/10 shadow-2xl">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.196564619424!2d-117.00902672365287!3d33.91032482110696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db454ee6cae389%3A0xe5a3de711bc32c66!2sMorongo%20Golf%20Club%20at%20Tukwet%20Canyon!5e0!3m2!1sen!2sus!4v1709289299482!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
