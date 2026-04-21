# SEO Implementation Handoff

**Date:** 2026-04-20
**Scope:** SEO + keyword strategy from "Legacy on the Greens" digital marketing report

---

## ✅ Done

### 1. Metadata overhaul (all pages)
Target keywords from the report (Local Golfer / Cause-Based / Sponsorship categories) are now embedded in titles, descriptions, and `keywords` arrays.

| File | What changed |
|---|---|
| `src/app/layout.tsx` | Root title/description rewritten per report's recommendation. Added `metadataBase`, canonical, `keywords`, OpenGraph, Twitter card, robots directives |
| `src/app/(marketing)/sponsorships/page.tsx` | Sponsorship-category keywords |
| `src/app/(marketing)/the-cause/page.tsx` | Cause-category keywords (CARMA, PDJF, equestrian) |
| `src/app/(marketing)/register/page.tsx` | Local-golfer keywords |
| `src/app/(marketing)/venue/page.tsx` | Morongo / Tukwet / Inland Empire keywords |
| `src/app/(marketing)/tournament/page.tsx` | Scramble + Beaumont keywords |
| `src/app/(marketing)/contact/page.tsx` | Localized contact title |
| `src/app/(marketing)/donate/page.tsx` | Cause-category keywords |
| `src/app/(marketing)/dinner/page.tsx` | Inland Empire charity event keywords |

Each page also has a unique `alternates.canonical`.

### 2. Structured data (Schema.org)
- `SportsEvent` JSON-LD injected in `src/app/layout.tsx` body. Includes `startDate`, `endDate`, full venue `PostalAddress`, organizer, and an `Offer` pointing at `/register`. This is what powers Google's event-rich-results card.

### 3. Crawler files
- `src/app/sitemap.ts` — generates `sitemap.xml` for all marketing routes + every news post (auto-includes new posts as you add them to the registry)
- `src/app/robots.ts` — generates `robots.txt`, references the sitemap

### 4. On-page H1/headings/alt text
- Home page: added a keyword-rich `sr-only` H1 ("Armenz Legacy Charity Golf Tournament in Beaumont, CA — Morongo Golf Club at Tukwet Canyon, June 22, 2026") above the visual hero
- Home Hero subtitle now includes "Beaumont, CA", "Morongo Golf Club", "CARMA", and "PDJF" naturally
- Morongo logo `alt` text expanded with keywords

### 5. News/blog section (in-repo, zero deps)
- Route: `/news` (listing) + `/news/[slug]` (post)
- Storage: each post is a TSX file under `src/app/(marketing)/news/<slug>/page.tsx`. Metadata registry lives in `src/content/news/posts.ts`. Shared layout in `src/components/news/PostLayout.tsx`.
- **Two posts published (publish-ready, ~900 words each):**
  1. `/news/beaumont-ca-charity-golf-tournament-june-2026` — local-golfer-targeted launch announcement
  2. `/news/corporate-sponsorship-charity-golf-inland-empire-2026` — sponsorship-targeted package walkthrough
- Both posts include OpenGraph `article` metadata, internal links to `/register`, `/sponsorships`, `/the-cause`, `/venue`, `/contact`, `/donate`, and CTA footers.

### 6. Verification
- `npx tsc --noEmit` passes clean.

---

## ✅ Wrap-up pass (2026-04-20)

- **News added to navbar** — `src/components/Navbar.tsx` now includes `/news` in desktop + mobile nav.
- **Triple Crown sponsor link fixed** — `src/app/(marketing)/page.tsx` Morongo logo anchor now points at `https://tukwetcanyon.com/` (confirmed by user).
- **BlogPosting JSON-LD** — `src/components/news/PostLayout.tsx` now emits `application/ld+json` (schema.org `BlogPosting`) for every news post.
- `npx tsc --noEmit` passes clean.

## 🟡 To Do (requires external input / assets)

### High priority — blocked on user
1. **Verify `metadataBase` URL** — currently `https://armenzlegacy.com`. Confirm production domain (`.com` vs `.org`, `www`). If wrong, every canonical/OG URL is wrong.
2. **Submit sitemap to Google Search Console** — once deployed, add `https://armenzlegacy.com/sitemap.xml` to GSC and request indexing.
3. **Add OG image** — root `openGraph` declares no `images`. Drop a 1200×630 PNG at `/public/og/og-image.png` and reference it from `metadata.openGraph.images` in `src/app/layout.tsx`.
4. **Validate Event JSON-LD** — after deploy, run the prod URL through <https://search.google.com/test/rich-results>. Check `startDate`/`endDate` timezones and consider adding `Offer.price`.

### Medium priority
5. **Per-page H1s on Hero pages** — pages using `<Hero />` (sponsorships, register, venue, contact) inherit Hero's brand H1. Consider a custom `title` prop or a keyword-rich H1 below Hero for better targeting.
6. **Image alt audit** — only the Morongo logo was updated. Audit `src/components/Hero.tsx`, `CauseSection.tsx`, `VenueSection.tsx`, sponsorship cards, and `the-cause/page.tsx` slider images.

### Low priority / ongoing
7. **Cadence for news posts** — aim for 1 post / 2–3 weeks until June. Suggested next topics:
   - Sponsor spotlight (once the Morongo "Triple Crown" arrangement is finalized)
   - Q&A with someone from CARMA or PDJF
   - "What to expect on tournament day" preview piece (~2 weeks before event)
   - Recap post within 48 hrs after June 22 (huge for next-year SEO)
8. **Local SEO** — create a Google Business Profile for the event organizer + claim/optimize the venue listing. Get the event listed on Eventbrite, Bandsintown, AllEvents, and Inland Empire community calendars.
9. **Backlinks** — outreach to Morongo, CARMA, PDJF asking them to link the event from their sites.

---

## How to add a new news post

1. Add an entry to the `posts` array in `src/content/news/posts.ts` (slug, title, description, date `YYYY-MM-DD`, author, keywords).
2. Create `src/app/(marketing)/news/<slug>/page.tsx` — copy one of the existing posts as a template. Imports `getPost(slug)`, exports `metadata`, returns `<PostLayout post={post}>...</PostLayout>`.
3. That's it — sitemap auto-updates, listing page auto-includes it.

---

## Files created

```
src/app/sitemap.ts
src/app/robots.ts
src/content/news/posts.ts
src/components/news/PostLayout.tsx
src/app/(marketing)/news/page.tsx
src/app/(marketing)/news/beaumont-ca-charity-golf-tournament-june-2026/page.tsx
src/app/(marketing)/news/corporate-sponsorship-charity-golf-inland-empire-2026/page.tsx
SEO_HANDOFF.md  (this file)
```

## Files modified

```
src/app/layout.tsx                                       (metadata + JSON-LD)
src/app/(marketing)/page.tsx                             (sr-only H1, hero subtitle, alt text)
src/app/(marketing)/sponsorships/page.tsx                (metadata)
src/app/(marketing)/the-cause/page.tsx                   (metadata)
src/app/(marketing)/register/page.tsx                    (metadata)
src/app/(marketing)/venue/page.tsx                       (metadata)
src/app/(marketing)/contact/page.tsx                     (metadata)
src/app/(marketing)/tournament/page.tsx                  (metadata)
src/app/(marketing)/donate/page.tsx                      (metadata)
src/app/(marketing)/dinner/page.tsx                      (metadata)
```
