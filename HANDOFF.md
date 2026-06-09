# Armenz Legacy — Dev Handoff

**Session Date:** June 9, 2026
**Scope:** Registration pipeline — Supabase logging, Google Sheets sync, email notifications, production deployment fix
**Status:** ✅ Live and capturing real registrations on [www.armenzlegacy.com](https://www.armenzlegacy.com)
**Commits:** `b30957c`, `c38faaf` on `main`

---

## TL;DR

The registration form is **fully working in production** — verified end-to-end and already
receiving real player registrations. Data flows: **form → Supabase → Google Sheet**.
The **only** thing not yet live is **email notification delivery**, which is blocked on a
Resend plan upgrade (see Pending). No data is ever lost — everything lands in Supabase + the Sheet.

---

## What Was Fixed / Built

### 1. The core problem
The live form appeared to not be logging players. Root causes found:

1. **No environment variables on Vercel.** The newer deployments had zero env vars; the live
   domain was being served by a **45-day-old deployment** with credentials baked in at build
   time. Real registrations *were* saving to Supabase all along — what was missing was email
   and the Google Sheet.
2. **Fire-and-forget async calls.** The Google Sheets sync and Resend email were called without
   `await`. On Vercel serverless, the function freezes once the response returns, killing those
   in-flight requests. Fixed by `await`-ing both (wrapped in try/catch so they never fail the
   request). See `src/app/api/register/route.ts`.
3. **Stale domain alias.** `www.armenzlegacy.com` / `armenzlegacy.com` were pinned to the old
   deployment. Re-aliased to the current Git production deployment.

### 2. Supabase (database of record)
- Project: **Derby** (`zrncgoajwlisttvzvwdr`) — shared infra (notification emails use the Derby domain).
- Table: `public.registrations` (already existed, correct schema). Golf form writes here.
- Table: `public.inquiries` — sponsorship/contact form writes here.
- Server-side inserts use `SUPABASE_SERVICE_ROLE_KEY` (a `sb_secret_...` key) to bypass RLS.

### 3. Google Sheets sync (NEW)
- Sheet: **"Armenz Legacy — Form Submissions"** (owned by `ryanhustlesie@gmail.com`).
- A bound **Apps Script Web App** receives POSTs and appends rows. It auto-creates two tabs:
  - **Registrations** — golf form (`entry_type` present)
  - **Sponsorships** — inquiry form (no `entry_type`)
- Headers are written + frozen on first write. Deployment access = **Anyone**, execute as **Me**.
- Webhook URL is stored in env vars `APPS_SCRIPT_GOLF_URL` and `NEXT_PUBLIC_APPS_SCRIPT_URL`.
- The Apps Script source lives only in Google (not in this repo). To edit: open the sheet →
  Extensions → Apps Script.

### 4. Email notifications (code ready, delivery NOT live — see Pending)
- Provider: **Resend** (`RESEND_API_KEY` set).
- Recipients (`NOTIFICATION_EMAILS` in `route.ts`):
  `events@thederbyroom.com`, `909openmarket@gmail.com`, `armenzlegacy@gmail.com`, `ryan@lastcall.marketing`
- **Blocker:** the `from` address is still `onboarding@resend.dev` (Resend's test sender), which
  only delivers to the account owner (`ryanhustlesie@gmail.com`). To send to the real recipients,
  a sending domain must be verified in Resend (see Pending).

---

## Environment Variables (set on Vercel: Production + Development; also in local `.env.local`)

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Derby Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | `sb_secret_...` — server-side inserts |
| `RESEND_API_KEY` | Email sending |
| `APPS_SCRIPT_GOLF_URL` | Google Sheets webhook (golf form) |
| `NEXT_PUBLIC_APPS_SCRIPT_URL` | Google Sheets webhook (inquiry form) |

> ⚠️ **Preview env** was NOT populated (older Vercel CLI couldn't set it non-interactively).
> Only affects PR preview deploys, not the live site. Add via the Vercel dashboard if needed.

> ⚠️ Vercel bakes env vars into each deployment at build time. After adding/changing an env var,
> you must **redeploy** for it to take effect.

---

## Verified End-to-End

- Live POST to `www.armenzlegacy.com/api/register` → row in Supabase ✅ + row in Google Sheet ✅
- Two **real** registrations (Timothy Minniea single, Eric Smith foursome) came through on Jun 9
  and synced to the Sheet correctly.
- A real sponsorship inquiry created the Sponsorships tab.
- `pnpm build` clean, no type errors.

---

## Pending Items

### 🔴 Email delivery (only remaining gap)
Emails won't actually send to the real recipients until a sending domain is verified in Resend.
- Resend **free plan allows only 1 domain**, currently occupied by `lastcall.marketing` (unverified).
- Decision (per Ryan): the sender should be the **client's own domain `armenzlegacy.com`**, NOT
  `lastcall.marketing`. That requires **Resend Pro ($20/mo)**.
- Once upgraded:
  1. Add `armenzlegacy.com` in Resend → it gives DNS records.
  2. Add those records in **GoDaddy** (where `armenzlegacy.com` DNS lives — nameservers `domaincontrol.com`). No existing MX, so no conflict.
  3. Wait for verification/propagation.
  4. Change the `from` in `src/app/api/register/route.ts` from `onboarding@resend.dev` to e.g.
     `registrations@armenzlegacy.com`, then commit + push.

### 🟡 Nice to have
- Populate **Preview** env vars on Vercel (dashboard) for PR preview parity.
- Consider moving the Apps Script source into the repo (e.g. `scripts/`) for version control,
  even though Apps Script is deployed separately.

---

## Tech Notes for Next Dev

- **Hosting:** Vercel, project `ryans-projects-5a2c42c6/armenz`. Auto-deploys on push to `main`.
- **Custom domains** were manually aliased to the latest deployment this session. If a future
  Git deploy doesn't auto-update `www`, re-alias with:
  `vercel alias set <deployment-url> www.armenzlegacy.com` (and `armenzlegacy.com`).
- **GitHub repo:** `BoozeSlinger/armenz-legacy`.
- **Supabase project:** Derby (`zrncgoajwlisttvzvwdr`) — shared with the Derby Room app.
- **Google Sheet** is the human-friendly view; **Supabase is the system of record.**
- Routes: `src/app/api/register/route.ts` (golf), `src/app/api/inquiry/route.ts` (sponsorship/contact).
  Both await their Sheets sync; only the register route sends email.

---
---

# Armenz Legacy — Dev Handoff (Prior Session)
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

## Pending Items (SEO session)

### 🔴 Do Before/At Next Deploy
- [ ] **Submit sitemap to Google Search Console** — `https://www.armenzlegacy.com/sitemap.xml` — then request indexing on both news post URLs
- [ ] **Validate Event JSON-LD** at [search.google.com/test/rich-results](https://search.google.com/test/rich-results) with the production URL

### 🟢 Ongoing
- [ ] **News cadence** — target 1 post every 2–3 weeks until the event
- [ ] **Local SEO** — Google Business Profile; list on Eventbrite, AllEvents, IE community calendars
- [ ] **Backlinks** — outreach to Morongo Golf Club, CARMA, and PDJF

---

## Tech Notes (SEO session)

- **No new npm dependencies were added** — sitemap, robots, and JSON-LD all use Next.js built-ins
- **Hosting:** Vercel, auto-deploys on push to `main`. Primary domain: `www.armenzlegacy.com`
- **GitHub repo:** `BoozeSlinger/armenz-legacy`
