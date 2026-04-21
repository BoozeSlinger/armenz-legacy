# Armenz Legacy — Dev Handoff
**Session Date:** April 20, 2026  
**Scope:** News/Blog section + Full SEO overhaul  
**Status:** ✅ Live on [www.armenzlegacy.com](https://www.armenzlegacy.com)  
**Commits:** `fd56d62` → `234afaa` on `main`

---

## What Was Built

### 1. News / Blog Section

A zero-dependency news section built entirely with Next.js App Router conventions — no CMS, no external services.

**Architecture:**
```
src/
├── content/news/posts.ts                         # Content registry (source of truth)
├── components/news/PostLayout.tsx                # Shared article layout + JSON-LD
└── app/(marketing)/news/
    ├── page.tsx                                  # /news — listing page
    ├── beaumont-ca-charity-golf-tournament-june-2026/page.tsx
    └── corporate-sponsorship-charity-golf-inland-empire-2026/page.tsx
```

**Two publish-ready posts (~900 words each):**
| Slug | Keyword Target | URL |
|---|---|---|
| `beaumont-ca-charity-golf-tournament-june-2026` | Local Golfer | `/news/beaumont-ca-charity-golf-tournament-june-2026` |
| `corporate-sponsorship-charity-golf-inland-empire-2026` | Sponsorship | `/news/corporate-sponsorship-charity-golf-inland-empire-2026` |

**How to add a future post:**
1. Add an entry to `src/content/news/posts.ts` (slug, title, description, date, author, keywords)
2. Create `src/app/(marketing)/news/<slug>/page.tsx` — copy an existing post as template
3. Done — sitemap and listing page update automatically

**News listing page enhancements:**
- Left gold accent bar animates in on hover
- Author byline in card header
- Animated `→` arrow on "Read Article" CTA
- Gold separator rule under H1
- "Back to Home" breadcrumb at bottom

---

### 2. SEO Foundation

#### Root Metadata (`src/app/layout.tsx`)
- `metadataBase: www.armenzlegacy.com`
- Keyword-rich default title + `%s` template for all pages
- 12 target keywords across 3 clusters (Local Golfer / Cause-Based / Sponsorship)
- OpenGraph: title, description, url, siteName, locale, type, **og-image**
- Twitter Card: `summary_large_image` + **og-image**
- `robots` directives with `max-image-preview: large`

#### Per-Page Metadata (all 8 marketing pages)
Each page targets one keyword cluster with a unique title, description, canonical, and keywords array:

| Page | Keyword Cluster |
|---|---|
| `/` | Local Golfer + Cause |
| `/the-cause` | Cause-Based |
| `/sponsorships` | Sponsorship |
| `/tournament` | Local Golfer |
| `/register` | Local Golfer |
| `/venue` | Local Golfer |
| `/donate` | Cause-Based |
| `/dinner` | Cause-Based |
| `/contact` | All |
| `/news` | All three |

#### Schema.org JSON-LD
- **`SportsEvent`** in root layout — date, venue address, organizer, registration offer. Powers Google event rich-results.
- **`BlogPosting`** in `PostLayout.tsx` — headline, dates, author, publisher with logo, `mainEntityOfPage` per post.

#### Sitemap + Robots
- `src/app/sitemap.ts` — auto-generated, dynamically includes all news slugs from `posts.ts`
- `src/app/robots.ts` — allows all, points to `www.armenzlegacy.com/sitemap.xml`

---

### 3. OpenGraph Image

Generated and committed a branded 1200×630 OG image at `public/og/og-image.png`.

- Dark charcoal background with gold bokeh
- Typography: "ARMENZ LEGACY / CHARITY GOLF TOURNAMENT / Benefiting CARMA & PDJF / JUNE 22, 2026 · BEAUMONT, CA / MORONGO GOLF CLUB AT TUKWET CANYON"
- Referenced in both `openGraph.images` and `twitter.images` in root metadata

---

### 4. Navbar

"News" link was added to `src/components/Navbar.tsx` routes array — appears in both desktop nav and mobile hamburger menu with active-state gold highlight matching the existing pattern.

---

### 5. Home Page SEO Copy

- Added `sr-only` H1: *"Armenz Legacy Charity Golf Tournament in Beaumont, CA — Legacy on the Greens"* (invisible visually, full keyword signal for crawlers)
- Hero subtitle rewritten to include: "Beaumont, CA", "Morongo Golf Club", "CARMA", "PDJF"
- Morongo logo `alt` text expanded with target keywords

---

### 6. Domain Fix (Critical)

Vercel's primary domain is `www.armenzlegacy.com`. Every SEO URL in every file was updated to use `www` to prevent redirect chains from breaking canonical signals. Files updated:

- `src/app/layout.tsx` — `metadataBase`, OG url, JSON-LD urls
- `src/app/sitemap.ts` — `BASE` constant
- `src/app/robots.ts` — `sitemap` + `host`
- `src/components/news/PostLayout.tsx` — publisher logo url + `mainEntityOfPage @id`

---

## File Change Summary

**Created (10 files):**
```
SEO_HANDOFF.md
SESSION_RECAP.md
public/og/og-image.png
src/app/robots.ts
src/app/sitemap.ts
src/content/news/posts.ts
src/components/news/PostLayout.tsx
src/app/(marketing)/news/page.tsx
src/app/(marketing)/news/beaumont-ca-charity-golf-tournament-june-2026/page.tsx
src/app/(marketing)/news/corporate-sponsorship-charity-golf-inland-empire-2026/page.tsx
```

**Modified (11 files):**
```
src/app/layout.tsx
src/components/Navbar.tsx
src/app/(marketing)/page.tsx
src/app/(marketing)/the-cause/page.tsx
src/app/(marketing)/sponsorships/page.tsx
src/app/(marketing)/tournament/page.tsx
src/app/(marketing)/register/page.tsx
src/app/(marketing)/venue/page.tsx
src/app/(marketing)/donate/page.tsx
src/app/(marketing)/dinner/page.tsx
src/app/(marketing)/contact/page.tsx
```

---

## Pending Items

### 🔴 Do Before/At Next Deploy
- [ ] **Submit sitemap to Google Search Console** — `https://www.armenzlegacy.com/sitemap.xml` — then request indexing on both news post URLs
- [ ] **Validate Event JSON-LD** at [search.google.com/test/rich-results](https://search.google.com/test/rich-results) with the production URL

### 🟡 Medium Priority
- [ ] **Per-page H1s** on hero pages (sponsorships, register, venue, contact) — currently inheriting brand H1; pass keyword-targeted `title` prop to Hero component
- [ ] **Image alt audit** — Morongo logo updated, but Hero, CauseSection, VenueSection, sponsorship cards, and the-cause slider images still need keyword-enriched alt text

### 🟢 Ongoing
- [ ] **News cadence** — target 1 post every 2–3 weeks until June 22. Suggested topics:
  - Sponsor spotlight (name a confirmed sponsor + their story)
  - CARMA/PDJF Q&A (interview-style, humanizes the cause)
  - "What to Expect on Tournament Day" preview (~2 weeks out)
  - Post-event recap within 48 hrs
- [ ] **Local SEO** — create Google Business Profile for the event organizer; list on Eventbrite, AllEvents, Inland Empire community calendars
- [ ] **Backlinks** — outreach to Morongo Golf Club, CARMA, and PDJF requesting links from their sites to the tournament page

---

## Tech Notes for Next Dev

- **No new npm dependencies were added** — sitemap, robots, and JSON-LD all use Next.js built-ins
- **TypeScript is clean** — `npx tsc --noEmit` passed before push
- **Hosting:** Vercel, auto-deploys on push to `main`. Primary domain: `www.armenzlegacy.com`
- **GitHub repo:** `BoozeSlinger/armenz-legacy`
