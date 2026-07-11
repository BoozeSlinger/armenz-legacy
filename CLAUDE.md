# CLAUDE.md — Armenz Legacy

## Commands

```bash
pnpm dev        # Dev server (localhost:3000)
pnpm build      # Production build — must pass before shipping
pnpm lint       # ESLint
```

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Vercel · Framer Motion (no GSAP)

## Structure

```
src/
├── app/
│   ├── (marketing)/        # All public-facing pages (incl. /gallery)
│   ├── api/register/       # Golf form → Supabase + Sheets + email (2026 — retired, route kept)
│   ├── api/inquiry/        # Sponsorship/contact → Supabase + Sheets
│   ├── api/interest/       # 2027 early-access signups → inquiries table + Sheets + email
│   ├── api/ping/           # Cron keep-alive (GET) — pings Supabase daily
│   ├── layout.tsx          # Root metadata + JSON-LD SportsEvent
│   ├── sitemap.ts          # Auto-generated; pulls slugs from posts.ts
│   └── robots.ts
├── content/news/posts.ts   # News registry — add entries here to publish
├── content/gallery/photos.ts  # Gallery registry — 97 Cloudinary photos, 3 categories
├── components/gallery/     # CldImage (Cloudinary next/image), GalleryClient, Lightbox
├── components/news/PostLayout.tsx  # Shared article layout + JSON-LD BlogPosting
└── lib/                    # cloudinary.ts holds the loader + URL helpers
```

## Post-Event State (since July 2026)

The 2026 tournament (June 22) is over; the site is a recap + 2027 lead-gen funnel.
Registration CTAs were removed site-wide — the primary CTA everywhere is the
`/#early-access` email capture, which posts to `/api/interest` (writes to the same
`inquiries` table with `sponsorship_tier` = "2027 Early Access — …"). `/register` stays
live as an "event concluded" page for saved links. `/sponsors` redirects to
`/sponsorships` (now a 2026 thank-you page). `RegisterForm`, `PricingCards`,
`SponsorshipList`, and `Countdown` are orphaned but kept for 2027 reuse.

## Gallery

- Photos live in Cloudinary (cloud `dqj3xyvey`), folders `golf` (players),
  `golf/sponsors`, `golf/other` (course & lifestyle) — mirrored in
  `src/content/gallery/photos.ts` (dupes already removed). To pull a photo, delete its
  entry; to add one, copy `public_id`/version/width/height from Cloudinary into a new
  entry — counts and filters update automatically.
- Images serve straight from Cloudinary via a custom `next/image` loader
  (`src/lib/cloudinary.ts`) with `f_auto,q_auto` — **zero Vercel image-optimization
  quota** and no `remotePatterns` needed. Don't switch these to the default loader.
- `/gallery?c=players|sponsors|course` deep-links a filter tab.

## Environment Variables

| Var | Purpose |
|-----|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side inserts (bypasses RLS) |
| `RESEND_API_KEY` | Email notifications (sends from `ryan@lastcall.marketing`) |
| `APPS_SCRIPT_GOLF_URL` | Sheets webhook (golf form) |
| `NEXT_PUBLIC_APPS_SCRIPT_URL` | Sheets webhook (inquiry + 2027 interest forms) |

> Env vars are baked in at build time — redeploy after any Vercel env change.

## Payment

Checkout runs through **Eventbrite** (event ID `1983383494423`), not Stripe. Stripe packages are in `package.json` but **unused** — don't build a Stripe flow without checking first. The 2026 register→Eventbrite modal flow is retired (see Post-Event State); the `EventbriteWidget` embed remains live only on `/dinner`. Reuse `RegisterForm.tsx` + `EventbriteWidget` when 2027 registration opens.

## Gotchas

**Await all side effects in API routes.** Vercel serverless freezes the moment the response returns — any un-awaited `fetch` is killed mid-flight. Both Sheets sync and Resend send in `register/route.ts` must be `await`-ed (each in a try/catch so they never fail the request).

**Supabase is on the FREE plan — it pauses after ~7 days of inactivity.** The Derby project is shared, but don't rely on that. `api/ping/route.ts` runs daily via `vercel.json` cron (`0 14 * * *`) to keep it warm. If forms suddenly 500 in production, check the Supabase dashboard for a paused project first.

**One `next build` at a time.** Parallel/background builds collide on `.next/lock` and kill each other's output (silent failures). If a build hangs or errors on the lock, `rm -rf .next` and run a single foreground build.

**Re-alias the domain after a fresh deploy** if `www.armenzlegacy.com` doesn't follow automatically:
```bash
vercel alias set <deployment-url> www.armenzlegacy.com
vercel alias set <deployment-url> armenzlegacy.com
```

**Email sends via Resend from `ryan@lastcall.marketing`** (`lastcall.marketing` is verified in Resend; DNS lives in Hostinger if DKIM/SPF ever need touching). Recipients are hardcoded in `NOTIFICATION_EMAILS` in **both** `api/register/route.ts` and `api/interest/route.ts` — change the list in both files or they drift.

## Infrastructure

| Resource | Detail |
|----------|--------|
| Vercel project | `ryans-projects-5a2c42c6/armenz` (Hobby plan — 2 crons/day max) |
| Supabase | Derby project (`zrncgoajwlisttvzvwdr`) — **free plan**, shared with Derby Room |
| DB tables | `public.registrations` (2026 golf), `public.inquiries` (sponsorship/contact + 2027 early-access signups) |
| Google Sheet | "Armenz Legacy — Form Submissions" — `ryanhustlesie@gmail.com` |
| Apps Script | Lives in Google only — open sheet → Extensions → Apps Script |
| Domain DNS | `lastcall.marketing` → Hostinger · `armenzlegacy.com` → GoDaddy |
| Payment | Eventbrite event `1983383494423` |
| GitHub | `BoozeSlinger/armenz-legacy` |

## Adding a News Post

1. Add entry to `src/content/news/posts.ts`
2. Create `src/app/(marketing)/news/<slug>/page.tsx` (copy existing post)
3. Sitemap + listing page update automatically on next build
