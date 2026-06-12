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
│   ├── (marketing)/        # All public-facing pages
│   ├── api/register/       # Golf form → Supabase + Sheets + email
│   ├── api/inquiry/        # Sponsorship/contact → Supabase + Sheets
│   ├── api/ping/           # Cron keep-alive (GET) — pings Supabase daily
│   ├── layout.tsx          # Root metadata + JSON-LD SportsEvent
│   ├── sitemap.ts          # Auto-generated; pulls slugs from posts.ts
│   └── robots.ts
├── content/news/posts.ts   # News registry — add entries here to publish
├── components/news/PostLayout.tsx  # Shared article layout + JSON-LD BlogPosting
└── lib/
```

## Environment Variables

| Var | Purpose |
|-----|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side inserts (bypasses RLS) |
| `RESEND_API_KEY` | Email notifications (sends from `ryan@lastcall.marketing`) |
| `APPS_SCRIPT_GOLF_URL` | Sheets webhook (golf form) |
| `NEXT_PUBLIC_APPS_SCRIPT_URL` | Sheets webhook (inquiry form) |

> Env vars are baked in at build time — redeploy after any Vercel env change.

## Payment

Checkout runs through **Eventbrite**, not Stripe. The register form (`RegisterForm.tsx`) saves to Supabase, then opens a modal embedding `EventbriteWidget` (event ID `1983383494423`) for payment. Stripe packages are in `package.json` but **unused** — don't build a Stripe flow without checking first.

## Gotchas

**Await all side effects in API routes.** Vercel serverless freezes the moment the response returns — any un-awaited `fetch` is killed mid-flight. Both Sheets sync and Resend send in `register/route.ts` must be `await`-ed (each in a try/catch so they never fail the request).

**Supabase is on the FREE plan — it pauses after ~7 days of inactivity.** The Derby project is shared, but don't rely on that. `api/ping/route.ts` runs daily via `vercel.json` cron (`0 14 * * *`) to keep it warm. If forms suddenly 500 in production, check the Supabase dashboard for a paused project first.

**One `next build` at a time.** Parallel/background builds collide on `.next/lock` and kill each other's output (silent failures). If a build hangs or errors on the lock, `rm -rf .next` and run a single foreground build.

**Re-alias the domain after a fresh deploy** if `www.armenzlegacy.com` doesn't follow automatically:
```bash
vercel alias set <deployment-url> www.armenzlegacy.com
vercel alias set <deployment-url> armenzlegacy.com
```

**Email notifications need `lastcall.marketing` verified in Resend.** The `from` is `ryan@lastcall.marketing`; Resend won't send to arbitrary recipients until the domain is verified. DNS records (DKIM/SPF) go in **Hostinger** (where `lastcall.marketing` DNS lives) → click Verify in Resend → emails go live automatically, no redeploy. Recipients are hardcoded in `NOTIFICATION_EMAILS` in `register/route.ts`.

## Infrastructure

| Resource | Detail |
|----------|--------|
| Vercel project | `ryans-projects-5a2c42c6/armenz` (Hobby plan — 2 crons/day max) |
| Supabase | Derby project (`zrncgoajwlisttvzvwdr`) — **free plan**, shared with Derby Room |
| DB tables | `public.registrations` (golf), `public.inquiries` (sponsorship/contact) |
| Google Sheet | "Armenz Legacy — Form Submissions" — `ryanhustlesie@gmail.com` |
| Apps Script | Lives in Google only — open sheet → Extensions → Apps Script |
| Domain DNS | `lastcall.marketing` → Hostinger · `armenzlegacy.com` → GoDaddy |
| Payment | Eventbrite event `1983383494423` |
| GitHub | `BoozeSlinger/armenz-legacy` |

## Adding a News Post

1. Add entry to `src/content/news/posts.ts`
2. Create `src/app/(marketing)/news/<slug>/page.tsx` (copy existing post)
3. Sitemap + listing page update automatically on next build
