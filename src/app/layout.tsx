import type { Metadata, Viewport } from "next";
import { Playfair_Display, Hanken_Grotesk, Cinzel } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG, OG_IMAGE } from "@/lib/site-config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow pinch zoom for accessibility
  themeColor: "#0A0D0B",
  colorScheme: "dark",
};

const playfair = Playfair_Display({
  variable: "--font-display-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.armenzlegacy.com"),
  title: {
    default: "Armenz Legacy Classic | Beaumont, CA",
    template: "%s | Armenz Legacy",
  },
  description:
    "The inaugural Armenz Legacy Classic raised funds for CARMA's retired racehorses and the Permanently Disabled Jockeys Fund at Morongo Golf Club at Tukwet Canyon, Beaumont CA — June 22, 2026. View 97 photos & join the 2027 early-access list.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Armenz Legacy Classic | Beaumont, CA",
    description:
      "The inaugural charity golf scramble at Morongo Golf Club at Tukwet Canyon benefited CARMA and the Permanently Disabled Jockeys Fund. Relive 2026 — and join the 2027 early-access list.",
    url: "https://www.armenzlegacy.com",
    siteName: "Armenz Legacy",
    locale: "en_US",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armenz Legacy Classic | Beaumont, CA",
    description:
      "97 photos from the inaugural Classic at Morongo Golf Club. Raised real money for CARMA & PDJF. 2027 is next — join the list.",
    images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1, "max-snippet": -1 },
  },
  category: "sports",
};

const ORG_ID = `${SITE_CONFIG.baseUrl}/#organization`;
const FOUNDATION_ID = `${SITE_CONFIG.baseUrl}/#909-market-foundation`;

const structuredData: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Armenz Legacy Classic — Legacy on the Greens",
    description: "Inaugural four-person scramble charity golf tournament in Beaumont, CA benefiting CARMA (retired racehorses) and the Permanently Disabled Jockeys Fund (PDJF).",
    startDate: "2026-06-22T08:00-07:00",
    endDate: "2026-06-22T21:00-07:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    sport: "Golf",
    url: "https://www.armenzlegacy.com",
    image: [`${SITE_CONFIG.baseUrl}${OG_IMAGE.url}`, `${SITE_CONFIG.baseUrl}/images/hero/logo.png`],
    location: {
      "@type": "Place",
      name: "Morongo Golf Club at Tukwet Canyon",
      url: "https://tukwetcanyon.com/",
      address: {
        "@type": "PostalAddress",
        streetAddress: "36400 Champions Dr",
        addressLocality: "Beaumont",
        addressRegion: "CA",
        postalCode: "92223",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 33.9244, longitude: -116.9897 },
    },
    organizer: { "@type": "Organization", name: "Armenz Legacy", url: "https://www.armenzlegacy.com" },
    funder: [
      { "@type": "Organization", name: "CARMA", url: "https://www.carma4horses.org" },
      { "@type": "Organization", name: "Permanently Disabled Jockeys Fund", url: "https://pdjf.org" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "Armenz Legacy",
        url: SITE_CONFIG.baseUrl,
        logo: `${SITE_CONFIG.baseUrl}/images/hero/logo.png`,
        description: "Charity golf tournament organization honoring Armen Zennedjian and raising funds for CARMA and the PDJF. The tournament is presented by, and donations are processed through, the 909 Market Foundation.",
        sponsor: { "@id": FOUNDATION_ID },
      },
      {
        "@type": "NGO",
        "@id": FOUNDATION_ID,
        name: "909 Market Foundation",
        url: "https://909marketfoundation.org",
        description: "501(c)(3) charitable organization through which the Armenz Legacy Classic runs and its tax-deductible donations are processed.",
        nonprofitStatus: "https://schema.org/Nonprofit501c3",
        taxID: "92-0881763",
      },
    ],
  },
];

// 2027 Event: emitted only when NEXT_EVENT_DATE is a real date in site-config.
// `location` is deliberately omitted until the 2027 venue is confirmed.
if (SITE_CONFIG.nextEventDate && !Number.isNaN(Date.parse(SITE_CONFIG.nextEventDate))) {
  structuredData.push({
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${SITE_CONFIG.eventName} 2027`,
    description: "The 2027 Armenz Legacy Classic charity golf tournament, presented by the 909 Market Foundation.",
    startDate: SITE_CONFIG.nextEventDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    sport: "Golf",
    url: SITE_CONFIG.baseUrl,
    image: [`${SITE_CONFIG.baseUrl}${OG_IMAGE.url}`],
    organizer: { "@id": ORG_ID },
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to Cloudinary for gallery images */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        {/* Mobile browser chrome color */}
        <meta name="theme-color" content="#0A0D0B" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${playfair.variable} ${hanken.variable} ${cinzel.variable} antialiased font-sans bg-background text-foreground`}
      >
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
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

