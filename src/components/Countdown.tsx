"use client";

import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-06-22T07:00:00-07:00"); // June 22, 2026 7AM PST

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setIsMounted(true));
    const updateCountdown = () => {
      const now = new Date();
      const distance = EVENT_DATE.getTime() - now.getTime();

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return <div className="h-[60px] flex items-center justify-center opacity-0" />;

  return (
    <div className="flex gap-2 sm:gap-4 justify-center text-center mt-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <span className="text-xl sm:text-2xl font-bold text-[#C9A84C] mt-2">:</span>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <span className="text-xl sm:text-2xl font-bold text-[#C9A84C] mt-2">:</span>
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <span className="text-xl sm:text-2xl font-bold text-[#C9A84C] mt-2 hidden sm:block">:</span>
      <div className="hidden sm:block">
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[44px] sm:min-w-[50px]">
      <div className="bg-[#0A0A0A]/60 backdrop-blur-sm border border-[#C9A84C]/20 text-[#F5F0E8] font-serif text-xl sm:text-2xl font-bold py-2 px-3 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.4)] w-full">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider mt-2 opacity-80 text-[#F5F0E8] font-semibold">
        {label}
      </span>
    </div>
  );
}
