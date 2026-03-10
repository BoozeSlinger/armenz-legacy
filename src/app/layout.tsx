import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legacy on the Greens: The Armen Zennedjian Classic | June 22, 2026",
  description: "Join us for Legacy on the Greens: The Armen Zennedjian Classic charity golf tournament at Morongo Golf Club at Tukwet Canyon on June 22, 2026.",
  openGraph: {
    title: "Legacy on the Greens: The Armen Zennedjian Classic",
    description: "Charity golf tournament at Morongo Golf Club at Tukwet Canyon on June 22, 2026.",
    url: "https://armenzlegacy.com",
    siteName: "Legacy on the Greens: The Armen Zennedjian Classic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legacy on the Greens: The Armen Zennedjian Classic",
    description: "Charity golf tournament at Morongo Golf Club on June 22, 2026.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
