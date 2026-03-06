"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

export function RegisterForm() {
  const [entryType, setEntryType] = useState<"single" | "foursome">("single");
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const price = entryType === "single" ? 150 : 600;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      entry_type: entryType === "single" ? "Single" : "Foursome",
      handicap: formData.get("handicap") as string,
      shirt_size: formData.get("shirt") as string,
      additional_players: formData.get("additional_players") as string || "",
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!result.success) {
        alert(`Error: ${result.error || "Failed to submit registration"}`);
        setIsProcessing(false);
        return;
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert("Oops! There was a problem submitting your registration.");
      setIsProcessing(false);
      return;
    }

    setIsProcessing(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#0A0A0A]/90 backdrop-blur-md p-8 md:p-12 border-2 border-[#C9A84C]/20 shadow-xl text-center space-y-6">
        <div className="w-20 h-20 bg-[#C9A84C] text-[#0A0A0A] rounded-full flex items-center justify-center mx-auto text-4xl shadow-[0_0_30px_rgba(201,168,76,0.5)]">✓</div>
        <h3 className="text-3xl font-bold font-serif text-[#F5F0E8]">Registration Step 1 Complete</h3>
        <p className="text-zinc-300 font-medium text-lg leading-relaxed">
          Your information has been received. In a live environment, you would now be redirected to Stripe for payment of ${price}.
        </p>
        <div className="bg-[#111] p-6 border border-[#C9A84C]/30 mt-6 text-zinc-300">
          <p className="font-mono text-sm break-all text-left">
            [Stripe Checkout Flow Initiated]<br/>
            Amount: ${price}.00<br/>
            Items: {entryType === "single" ? "1x Deluxe Golf Entry" : "1x Foursome Entry"}<br/>
            Status: Pending Payment
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A]/90 backdrop-blur-md p-8 md:p-12 border border-[#C9A84C]/20 shadow-2xl">
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
              <Input id="name" name="name" required className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-none bg-[#111] text-zinc-200 placeholder:text-zinc-600" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#C9A84C] font-bold text-sm">Email Address</Label>
              <Input id="email" name="email" type="email" required className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-none bg-[#111] text-zinc-200 placeholder:text-zinc-600" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#C9A84C] font-bold text-sm">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" required className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-none bg-[#111] text-zinc-200 placeholder:text-zinc-600" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="handicap" className="text-[#C9A84C] font-bold text-sm">Handicap</Label>
                <Input id="handicap" name="handicap" placeholder="e.g. +12" className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-none bg-[#111] text-zinc-200 placeholder:text-zinc-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shirt" className="text-[#C9A84C] font-bold text-sm">Shirt Size</Label>
                <select id="shirt" className="flex h-10 w-full rounded-none border border-zinc-800 bg-[#111] px-3 py-2 text-sm text-zinc-200 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
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
              <Textarea id="additional_players" placeholder="Player 2: John Doe, M, +10&#10;Player 3: ..." className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-none bg-[#111] text-zinc-200 placeholder:text-zinc-600 min-h-[100px]" />
            </div>
          )}
        </div>

        {/* Legal Waiver Mock */}
        <div className="space-y-2 bg-[#111] p-4 border border-[#C9A84C]/20 text-sm overflow-y-auto max-h-32 text-zinc-400">
          <p className="font-bold mb-2 text-zinc-300">Liability Waiver</p>
          <p className="leading-relaxed mb-4">By completing this registration, I acknowledge that participation in the Armen Z Legacy on the Greens golf tournament involves inherent risks. I hereby release and hold harmless the tournament organizers, Morongo Golf Club at Tukwet Canyon, and all sponsors from any liabilities or claims arising from my participation in this event.</p>
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" id="waiver" required className="w-5 h-5 accent-[#C9A84C]" />
          <Label htmlFor="waiver" className="text-sm cursor-pointer font-medium text-zinc-300">I agree to the liability waiver and terms.</Label>
        </div>

        <Button type="submit" disabled={isProcessing} size="lg" className="w-full bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] font-bold py-6 text-xl rounded-none transition-colors duration-200 mt-8 shadow-[0_0_20px_rgba(201,168,76,0.3)]">
          {isProcessing ? "Processing..." : `Proceed to Payment ($${price})`}
        </Button>
      </form>
    </div>
  );
}
