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
