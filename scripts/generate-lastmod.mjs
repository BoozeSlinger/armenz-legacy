#!/usr/bin/env node
/**
 * Writes src/lib/lastmod.json: for each sitemap route, the date of the most
 * recent git commit that touched the route's own files (its page directory
 * plus the page-specific components/content it imports). Shared primitives
 * (Hero, Cta, motion) are ignored so a tweak to them doesn't bump every URL.
 *
 * Run `pnpm lastmod` after changing pages, or let `prebuild` do it locally.
 * With --if-git the script no-ops unless a full (non-shallow) git history is
 * available, so CI/Vercel builds keep the committed lastmod.json instead of
 * stamping the build date.
 */
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = "src/lib/lastmod.json";
const MARKETING = "src/app/(marketing)";
const SHARED = new Set(["Hero", "Cta", "motion"]);

const git = (...args) =>
  execFileSync("git", args, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();

if (process.argv.includes("--if-git")) {
  try {
    const usable =
      git("rev-parse", "--is-inside-work-tree") === "true" &&
      git("rev-parse", "--is-shallow-repository") !== "true";
    if (!usable) throw new Error("shallow");
  } catch {
    console.log("[lastmod] no full git history here; keeping committed src/lib/lastmod.json");
    process.exit(0);
  }
}

// route path -> source (file or directory) under src/app/(marketing)
const ROUTES = {
  "": "page.tsx",
  "/gallery": "gallery",
  "/the-cause": "the-cause",
  "/tournament": "tournament",
  "/sponsorships": "sponsorships",
  "/venue": "venue",
  "/contact": "contact",
  "/news": "news/page.tsx",
  "/donate": "donate",
};

function walk(target) {
  const abs = path.join(ROOT, target);
  if (!existsSync(abs)) return [];
  if (statSync(abs).isFile()) return [target];
  return readdirSync(abs, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(target, e.name)) : [path.join(target, e.name)]
  );
}

function resolveImport(spec) {
  const base = path.join("src", spec.replace(/^@\//, ""));
  for (const cand of [`${base}.tsx`, `${base}.ts`, path.join(base, "index.tsx"), path.join(base, "index.ts")]) {
    if (existsSync(path.join(ROOT, cand))) return cand;
  }
  return null;
}

function routeFiles(source) {
  const own = walk(path.join(MARKETING, source)).filter((f) => /\.(tsx?|json)$/.test(f));
  const imported = new Set();
  for (const f of own) {
    const src = readFileSync(path.join(ROOT, f), "utf8");
    for (const m of src.matchAll(/from\s+["'](@\/(?:components|content)\/[^"']+)["']/g)) {
      const name = m[1].split("/").pop();
      if (SHARED.has(name)) continue;
      const resolved = resolveImport(m[1]);
      if (resolved) imported.add(resolved);
    }
  }
  return [...new Set([...own, ...imported])];
}

const result = {};
for (const [route, source] of Object.entries(ROUTES)) {
  const files = routeFiles(source);
  const date = files.length ? git("log", "-1", "--format=%cI", "--", ...files) : "";
  if (!date) {
    console.warn(`[lastmod] no git history for ${route || "/"} — omitted`);
    continue;
  }
  result[route || "/"] = date;
}

writeFileSync(path.join(ROOT, OUT), JSON.stringify(result, null, 2) + "\n");
console.log(`[lastmod] wrote ${OUT}`);
