/**
 * Single source of truth for values that are still being finalized.
 *
 * Anything set to `null` is TBD. Components must render their graceful
 * fallback when a value is null — never hardcode a guess.
 */
export const SITE_CONFIG = {
  /** Site / organization name. */
  name: "Armenz Legacy",
  /** Event name. */
  eventName: "Armenz Legacy Classic",
  /** Use only as the 2026 subtitle, e.g. "Armenz Legacy Classic — Legacy on the Greens". */
  eventSubtitle2026: "Legacy on the Greens",
  baseUrl: "https://www.armenzlegacy.com",

  /** TBD — total raised in 2026, as display text, e.g. "$00,000". */
  totalRaised2026: null as string | null,

  /** TBD — 2027 event date as an ISO date ("YYYY-MM-DD"). Event JSON-LD renders only when this is set. */
  nextEventDate: null as string | null,
  /** TBD — human-readable 2027 label, e.g. "Summer 2027". */
  nextEventLabel: null as string | null,

  /** TBD — 909 Market Foundation donation link. Donate nav item and button stay hidden until set. */
  donateUrl: null as string | null,

  /** TBD — domain address replacing armenzlegacy@gmail.com. */
  contactEmail: null as string | null,
} as const;

/** Donations are only offered once a real donation link exists. */
export const donationsOpen = SITE_CONFIG.donateUrl !== null;

/**
 * Display text for the next event's date. Prefers the label, then a formatted
 * ISO date, and falls back to a single generic line until one is set.
 */
export const nextEventText: string = (() => {
  if (SITE_CONFIG.nextEventLabel) return SITE_CONFIG.nextEventLabel;
  if (SITE_CONFIG.nextEventDate) {
    const d = new Date(`${SITE_CONFIG.nextEventDate}T12:00:00Z`);
    if (!Number.isNaN(d.getTime())) {
      return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
    }
  }
  return "Date announced soon";
})();

/**
 * Where "email us" links should go. Uses a mailto: once CONTACT_EMAIL is set,
 * otherwise falls back to the on-site contact form. Never a hardcoded address.
 */
export function contactHref(subject?: string): string {
  const email = SITE_CONFIG.contactEmail;
  if (!email) return "/contact";
  return subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
}

/** Social share image: 1200x630, used for both Open Graph and Twitter cards. */
export const OG_IMAGE = {
  url: "/og/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Armenz Legacy Classic: June 22, 2026 at Morongo Golf Club at Tukwet Canyon, Beaumont CA",
} as const;
