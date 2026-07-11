# Armenz Legacy Site Refresh — Post-Event Update

## Context
armenzlegacy.com was built to drive registration/sponsorship for "Legacy on the Greens: The Armen Zennedjian Classic," held June 22, 2026 at Morongo Golf Club at Tukwet Canyon. The event is over. The site now needs to shift from a registration funnel into a recap/lead-gen site that builds momentum for the 2027 event.

Client entity: 909 Market Foundation (501c3). Beneficiaries: CARMA and the Permanently Disabled Jockeys Fund (PDJF). Triple Crown sponsor: Morongo Band of Mission Indians.

Brand: deep forest green, metallic silver, gold. Golf (crossed silver clubs, white ball on yellow tee) blended with horse racing heritage (brown racehorse, white blaze). Tone: memorial + prestige + community, not somber — a celebration of Armen's legacy.

## Photo Assets
100 edited event photos are ready to organize into a gallery. Categories to sort them into:
- Groups & Foursomes
- Sponsor Tents
- Awards & After-Party (Derby Room Perris)
- Course & Scenery

Photo files are located at: [FILL IN PATH — e.g. ./assets/gallery-2026/ or wherever you've placed the exported photos]

## Goals for This Session

1. **Remove the registration funnel for the 2026 event.**
   - Remove/hide the player registration form, foursome/singles pricing ($150/$600), and any "Register Now" CTAs tied to the completed event.
   - Do not delete the sponsorship tier content outright — repurpose it (see #4).

2. **Build a Gallery page.**
   - Route: `/gallery`
   - Responsive grid/masonry layout with lightbox (click to enlarge, arrow-key/swipe navigation).
   - Group photos by the four categories above, either as filterable tabs or as labeled sections.
   - Lazy-load images; compress/optimize for web (WebP where possible) without visible quality loss.
   - Add subtle alt text per category for SEO/accessibility (e.g. "Foursome tees off at Tukwet Canyon, Armenz Legacy Classic 2026").

3. **Build a Sponsor Recap / Thank-You page.**
   - Route: `/sponsors` (repurpose existing sponsorship tier page if one exists)
   - Headline: thank-you framing, not a pitch — e.g. "Thank You to Our 2026 Sponsors."
   - List sponsors by tier (Triple Crown → Kentucky Derby → Preakness → Tee Box), Morongo Band of Mission Indians featured prominently as Triple Crown.
   - Include sponsor logos + 2-3 photos of sponsor tents/signage from the gallery.
   - End with a soft CTA: interest form for 2027 sponsorship (see #4).

4. **Convert the homepage into a lead-gen recap for 2027.**
   - Replace the registration hero with a recap hero: best event photo or short video, headline along the lines of "2026 was unforgettable. 2027 is bigger."
   - Single primary CTA: email capture for "Get early access to 2027 registration & sponsorship" (name + email, maybe a checkbox for player vs. sponsor interest).
   - Add an Impact section with real numbers if available (funds raised, CARMA/PDJF outcomes) — placeholder copy if numbers aren't finalized yet, flagged clearly as `[NEEDS FINAL NUMBER]`.
   - Link prominently to the new Gallery and Sponsor Recap pages from the homepage nav and hero area.
   - Keep the CARMA/PDJF cause storytelling sections intact — that's core to the brand, not just conversion copy.

5. **Nav/IA updates.**
   - Update primary navigation to: Home, Gallery, Sponsors, About/Cause, [2027 signup].
   - Remove any nav links to registration/pricing pages that no longer apply.
   - Keep armenzlegacy.com as the CTA anchor per brand convention — end pages with a clear path back to the email signup.

## Constraints & Style
- Match existing site's tech stack, component patterns, and design tokens — don't introduce a new framework or restyle existing pages that aren't in scope.
- Reuse existing brand colors/fonts already defined in the codebase (check for a theme file, tailwind config, or CSS variables file before hardcoding new values).
- Keep copy conversion-focused and direct, per brand voice — not a soft "in memoriam" tribute feed. Equal weight to cause, golf experience, and Armen's legacy.
- No placeholder lorem ipsum in shipped copy — write real copy. Only use `[NEEDS INPUT]` markers for things that genuinely require client data (final fundraising totals, specific sponsor names/logos not yet supplied).

## Suggested Execution Order
1. Audit current site structure/routes/components first — report back what exists before touching anything.
2. Build Gallery page + image pipeline (this is the highest-value, most self-contained piece).
3. Build Sponsor Recap page.
4. Update homepage hero + nav + add email capture (confirm which email/CRM tool to wire the signup to before building the form backend).
5. Remove/retire old registration routes and CTAs last, once replacements are live.

## Open Questions for Ryan Before/During Build
- Where should the 2027 email signups go (Mailchimp, Supabase table, Google Sheet, etc.)?
- Do you have final fundraising/impact numbers yet, or should the Impact section ship with placeholders?
- Any photos that should be excluded/flagged (bad shots, people who didn't consent to being posted, etc.)?
- Keep the old registration page live but unlinked (for anyone with a saved link) or hard-delete it?
