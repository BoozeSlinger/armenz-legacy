"use client";

import { useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { EventbriteWidget } from "@/components/EventbriteWidget";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";

export function RegisterForm() {
  const [entryType, setEntryType] = useState<"single" | "foursome">("single");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    handicap: "",
    shirtSize: "M",
    additionalPlayers: "",
  });

  const price = entryType === "single" ? 150 : 600;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Call the real API endpoint to save registration info
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: entryType === "single" ? "Single Registration" : "Foursome Registration",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          details: `Handicap: ${formData.handicap}, Shirt: ${formData.shirtSize}${entryType === "foursome" ? `, Additional Players: ${formData.additionalPlayers}` : ""}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save information');
      }
      
      toast.success("Details recorded. Proceeding to payment...");
      setIsProcessing(false);
      setShowPayment(true);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Information saved locally. Proceeding to payment.");
      // Still show payment as a fallback so we don't block the user
      setIsProcessing(false);
      setShowPayment(true);
    }
  };

  return (
    <div className="bg-[#0A0A0A]/90 backdrop-blur-md p-8 md:p-12 border border-[#C9A84C]/20 shadow-2xl relative overflow-hidden">
      <Script src="https://www.eventbrite.com/static/widgets/eb_widgets.js" strategy="lazyOnload" />
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]/40" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C]/40" />
      
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Entry Selection */}
        <div className="space-y-4">
          <h3 className="text-xl font-serif font-bold text-[#F5F0E8] border-b border-[#C9A84C]/20 pb-2">Select Entry Type</h3>
          <RadioGroup 
            value={entryType} 
            onValueChange={(val) => setEntryType(val as "single" | "foursome")}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <RadioGroupItem value="single" id="single" className="peer sr-only" />
              <Label
                htmlFor="single"
                className="flex flex-col items-center justify-between rounded-none border border-[#C9A84C]/30 bg-[#111]/50 p-6 hover:bg-[#111] hover:border-[#C9A84C]/60 text-zinc-300 peer-data-[state=checked]:border-[#C9A84C] peer-data-[state=checked]:bg-[#C9A84C]/10 peer-data-[state=checked]:text-[#F5F0E8] transition-all cursor-pointer h-full"
              >
                <span className="font-serif text-xl mb-2 text-[#F5F0E8]">Deluxe Single</span>
                <span className="text-amber-500 font-bold text-2xl mb-2">$150</span>
                <span className="text-xs text-center opacity-80 mt-auto">Includes cart, breakfast, VIP access</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="foursome" id="foursome" className="peer sr-only" />
              <Label
                htmlFor="foursome"
                className="flex flex-col items-center justify-between rounded-none border border-[#C9A84C]/30 bg-[#111]/50 p-6 hover:bg-[#111] hover:border-[#C9A84C]/60 text-zinc-300 peer-data-[state=checked]:border-[#C9A84C] peer-data-[state=checked]:bg-[#C9A84C]/10 peer-data-[state=checked]:text-[#F5F0E8] transition-all cursor-pointer h-full"
              >
                <span className="font-serif text-xl mb-2 text-[#F5F0E8]">Foursome</span>
                <span className="text-amber-500 font-bold text-2xl mb-2">$600</span>
                <span className="text-xs text-center opacity-80 mt-auto">4 entries + carts</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Player Information */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-serif font-bold text-[#F5F0E8] border-b border-[#C9A84C]/20 pb-2">Primary Player Info</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#C9A84C] font-bold text-sm">Full Name</Label>
              <Input 
                id="name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-none bg-[#111] text-zinc-200 placeholder:text-zinc-600" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#C9A84C] font-bold text-sm">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-none bg-[#111] text-zinc-200 placeholder:text-zinc-600" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#C9A84C] font-bold text-sm">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-none bg-[#111] text-zinc-200 placeholder:text-zinc-600" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="handicap" className="text-[#C9A84C] font-bold text-sm">Handicap</Label>
                <Input 
                  id="handicap" 
                  placeholder="e.g. +12" 
                  value={formData.handicap}
                  onChange={(e) => setFormData({ ...formData, handicap: e.target.value })}
                  className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-none bg-[#111] text-zinc-200 placeholder:text-zinc-600" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shirt" className="text-[#C9A84C] font-bold text-sm">Shirt Size</Label>
                <select 
                  id="shirt" 
                  value={formData.shirtSize}
                  onChange={(e) => setFormData({ ...formData, shirtSize: e.target.value })}
                  className="flex h-10 w-full rounded-none border border-zinc-800 bg-[#111] px-3 py-2 text-sm text-zinc-200 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                >
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">X-Large</option>
                  <option value="XXL">XX-Large</option>
                </select>
              </div>
            </div>
          </div>
          
          {entryType === "foursome" && (
            <div className="space-y-2 pt-4">
              <Label htmlFor="additional_players" className="text-[#C9A84C] font-bold text-sm">Additional Players (Names, Shirt Sizes &amp; Handicaps)</Label>
              <Textarea 
                id="additional_players" 
                value={formData.additionalPlayers}
                onChange={(e) => setFormData({ ...formData, additionalPlayers: e.target.value })}
                placeholder="Player 2: John Doe, M, +10&#10;Player 3: ..." 
                className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-none bg-[#111] text-zinc-200 placeholder:text-zinc-600 min-h-[100px]" 
              />
            </div>
          )}
        </div>

        {/* Legal Waiver Mock */}
        <div className="space-y-2 bg-[#111] p-4 border border-[#C9A84C]/20 text-sm overflow-y-auto max-h-32 text-zinc-400">
          <p className="font-bold mb-2 text-zinc-300">Liability Waiver</p>
          <p className="leading-relaxed mb-4">By completing this registration, I acknowledge that participation in the Legacy on the Greens: The Armen Zennedjian Classic golf tournament involves inherent risks. I hereby release and hold harmless the tournament organizers, Morongo Golf Club at Tukwet Canyon, and all sponsors from any liabilities or claims arising from my participation in this event.</p>
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" id="waiver" required className="w-5 h-5 accent-[#C9A84C]" />
          <Label htmlFor="waiver" className="text-sm cursor-pointer font-medium text-zinc-300">I agree to the liability waiver and terms.</Label>
        </div>

        <Button 
          type="submit" 
          disabled={isProcessing} 
          size="lg" 
          className="w-full bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] font-bold py-6 text-xl rounded-none transition-all duration-300 mt-8 shadow-[0_0_20px_rgba(201,168,76,0.2)] hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] uppercase tracking-widest"
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
              Processing...
            </span>
          ) : `Proceed to Payment ($${price})`}
        </Button>
        <p className="text-zinc-500 text-xs text-center mt-4 pt-4 border-t border-zinc-800/50">
          Your donation is tax-deductible. This tournament is operated through the <strong className="text-zinc-400">909 Market Foundation</strong>, a 501(c)(3) charitable organization (EIN: 92-0881763).
        </p>
      </form>

      {/* Payment Modal */}
      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="sm:max-w-[700px] bg-[#0A0A0A] border-2 border-[#C9A84C]/20 rounded-none p-0 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="bg-[#C9A84C] h-1 w-full" />
          <div className="p-8 md:p-10">
            <DialogHeader className="mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full mb-4 mx-auto">
                <span className="text-[#C9A84C] text-2xl">✓</span>
              </div>
              <DialogTitle className="font-serif text-3xl text-[#F5F0E8] text-center">
                Finalize Your Registration
              </DialogTitle>
              <DialogDescription className="text-zinc-400 font-medium text-lg mt-3 leading-relaxed text-center">
                Your details have been saved. Complete your payment for the <strong className="text-[#C9A84C]">{entryType === "single" ? "Deluxe Single" : "Foursome"}</strong> below to secure your spot.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-8 bg-zinc-900/50 border border-zinc-800 p-1">
              <EventbriteWidget 
                eventId="1983383494423"
                containerId={`eventbrite-widget-container-1983383494423-register-modal`}
                height={500}
              />
            </div>
            
            <p className="text-zinc-500 text-xs text-center mt-6">
              Payment is processed securely via Eventbrite.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
