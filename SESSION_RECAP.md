# Session Recap — SEO + News Section

**Date:** 2026-04-20
**Session goal:** Implement the SEO/keyword strategy from the digital marketing report and stand up a blog/news section.

---

## ✅ Shipped

### SEO foundation
- **Root metadata rebuilt** ([src/app/layout.tsx](src/app/layout.tsx)) — keyword-rich title, description, `keywords`, `metadataBase`, canonical, OpenGraph, Twitter card, robots directives.
- **Per-page metadata** for all 8 marketing pages — each targets one of the 3 keyword categories from the report (Local Golfer / Cause-Based / Sponsorship).
- **Schema.org `SportsEvent` JSON-LD** in root layout — date, venue address, organizer, registration offer. Powers Google's event-rich-results card.
- **`sitemap.ts` + `robots.ts`** — auto-generated, includes news posts dynamically.
- **Home page H1** — added keyword-rich `sr-only` H1 ("Armenz Legacy Charity Golf Tournament in Beaumont, CA…").
- **Hero subtitle** on home rewritten to include "Beaumont, CA", "Morongo Golf Club", "CARMA", "PDJF".
- **Morongo logo alt text** expanded with target keywords.

### News/blog section (zero new dependencies)
- Routes: `/news` (listing) and `/news/[slug]` (post).
- Architecture: TSX-per-post under `src/app/(marketing)/news/<slug>/page.tsx`, registry in `src/content/news/posts.ts`, shared layout in `src/components/news/PostLayout.tsx`.
- **2 publish-ready posts (~900 words each):**
  1. `/news/beaumont-ca-charity-golf-tournament-june-2026` — local-golfer launch piece
  2. `/news/corporate-sponsorship-charity-golf-inland-empire-2026` — sponsorship package walkthrough
- Each post has OpenGraph `article` metadata, internal links, CTA footer.

### Verified
- `npx tsc --noEmit` passes clean.

---

## 🟡 Pending

### High priority (do before/at deploy)
- [ ] Add **"News" link to Navbar** — section is currently orphaned in nav (`src/components/Navbar.tsx`).
- [ ] **Confirm production domain** — `metadataBase` is `https://armenzlegacy.com`. If wrong, every canonical/OG URL breaks.
- [ ] Add **OG image** (1200×630 PNG at `/public/og/og-image.png`) and reference in root `metadata.openGraph.images`.
- [ ] **Submit sitemap to Google Search Console** post-deploy; request indexing for the 2 news posts.
- [ ] **Validate Event JSON-LD** at <https://search.google.com/test/rich-results> after deploy (check timezones, consider adding `Offer.price`).

### Medium priority
- [ ] Per-page H1s on Hero pages (sponsorships, register, venue, contact) — currently inherit Hero's brand H1; consider passing custom `title` props for keyword targeting.
- [ ] **Image alt audit** — only Morongo logo updated. Hit Hero, CauseSection, VenueSection, sponsorship cards, `the-cause` slider images.

### Ongoing / low priority
- [ ] **News cadence** — target 1 post / 2–3 weeks until June 22. Suggested topics: sponsor spotlight, CARMA/PDJF Q&A, "what to expect" preview (~2 weeks pre-event), recap post within 48 hrs after the tournament.
- [ ] **Local SEO** — Google Business Profile for the event organizer; list event on Eventbrite, AllEvents, Inland Empire community calendars.
- [ ] **Backlinks** — outreach to Morongo, CARMA, PDJF requesting links from their sites.

---

## 📁 File changes

**Created (8):**
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/content/news/posts.ts`
- `src/components/news/PostLayout.tsx`
- `src/app/(marketing)/news/page.tsx`
- `src/app/(marketing)/news/beaumont-ca-charity-golf-tournament-june-2026/page.tsx`
- `src/app/(marketing)/news/corporate-sponsorship-charity-golf-inland-empire-2026/page.tsx`
- `SEO_HANDOFF.md`

**Modified (10):**
- `src/app/layout.tsx`
- `src/app/(marketing)/page.tsx`
- `src/app/(marketing)/{sponsorships,the-cause,register,venue,contact,tournament,donate,dinner}/page.tsx`

---

## ➕ How to add a future news post

1. Append to `posts` array in [src/content/news/posts.ts](src/content/news/posts.ts).
2. Create `src/app/(marketing)/news/<slug>/page.tsx` — copy an existing post as the template.
3. Done. Sitemap + listing page auto-update.

---

See [SEO_HANDOFF.md](SEO_HANDOFF.md) for the deeper technical handoff with rationale.
