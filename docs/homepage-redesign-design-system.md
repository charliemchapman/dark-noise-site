# Dark Noise Homepage Redesign

## Goals

1. Convert first-time visitors to App Store downloads.
2. Make Dark Noise feel legitimate without losing the indie brand.
3. Support press and reviewers through direct links.
4. Keep Help as the markdown-backed FAQ/support hub.

## Direction

The homepage should feel like a polished dark Apple product page: simple, premium, calm, and product-led. Avoid feature-tour density and corporate SaaS language. The page should make the App Store badge obvious, make the app look real and trusted, and keep copy compact.

## Homepage Structure

1. Minimal nav: Dark Noise, Download, Press, Help.
2. Visual-first hero:
   - App name.
   - Existing tagline: "Simple. Fast. White noise, refined."
   - Platform eyebrow: "On iPhone, iPad, and Mac."
   - App Store badge.
   - Small trust line: "Independent since 2019."
   - Existing transparent multi-device hero image.
3. Clean credibility strip:
   - App Store App of the Day.
   - 4.8 stars from 3.5K App Store ratings.
   - Built independently since 2019.
4. "What people are saying" section:
   - Use an editorial layout with pull quotes and thin dividers, not boxed cards.
   - Lead with a larger press quote, then support it with podcast quotes and App Store reviews.
   - "I think it's easy to say it's probably the best white noise app on the store right now." attributed to CGP Grey, linking to https://www.relay.fm/cortex/94.
   - "One of my favorite new apps of the last year or so. And it's the best white noise app I've ever used." attributed to Stephen Hackett, linking to https://www.relay.fm/mpu/565.
   - Include the MacStories quote about Dark Noise's design pushing it over the edge as the clear best ambient noise app.
   - Keep App Store snippets short and scannable.
   - Favor sleep, travel, interface, widgets, sound quality, and customization proof.
5. Bottom video embed:
   - Keep the current YouTube video as a simple full-width embed near the bottom.
   - Do not include companion copy next to the video.
6. Existing footer routes can remain.

No pricing copy on the homepage. No FAQ preview on the homepage.

Note: as of May 4, 2026, WWDC 2026 is scheduled for June 8, 2026. Do not ship "Featured in the 2026 WWDC Keynote" until that event has happened or there is approved wording for the claim.

## Palette

- `--bg`: `#17121f`
- `--bg-2`: `#21172f`
- `--panel`: `rgba(255, 255, 255, 0.07)`
- `--panel-strong`: `rgba(255, 255, 255, 0.11)`
- `--line`: `rgba(255, 255, 255, 0.14)`
- `--text`: `#f8f4ff`
- `--muted`: `#c7b8dd`
- `--dim`: `#907fa8`
- `--violet`: `#8f52ff`
- `--violet-soft`: `#c4a5ff`
- `--plum`: `#321263`
- `--gold`: `#d2b56d`

Use purple as atmosphere and accent, not as the only readable color. Gold is reserved for credibility/award accents.

## Typography

Use the system Apple stack:

`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`

Rules:

- No negative letter spacing.
- Keep hero type large but simple.
- Keep supporting copy short and below 18px except section headings.
- Avoid oversized text in cards or proof blocks.

## Components

### Nav

Shared nav should expose only:

- Download
- Press
- Help

The app icon plus Dark Noise wordmark is the home link.

### Hero

Use the existing multi-device transparent hero asset:

`assets/images/dark-noise-hero-v3-transparent.png`

The hero should be centered on desktop and mobile, with the App Store badge near the headline. The product image can overflow slightly on mobile to preserve visual impact.

### App Store CTA

Use the existing white App Store badge:

`assets/images/app-store-button-white.svg`

Do not replace it with a custom button.

### Credibility Strip

Use restrained text stats with thin dividers, not ornate badges or heavy cards. Each item should include a small kicker and one short claim. Keep them readable and calm.

### Video

Keep the current YouTube video near the bottom of the homepage as a simple full-width embed. On implementation, use the real iframe from the current homepage:

`https://www.youtube.com/embed/D4dbuYqoHmA`

### Help / FAQ

The Help page remains markdown-backed via:

- `_support/*.md`
- `_data/support.yaml`
- `help.html`

No homepage FAQ preview.

## Route Constraints

Existing routes should continue to work:

- `/`
- `/press`
- `/help`
- `/releases`
- `/privacy-policy`
- existing `_support` collection routes
- existing `spatial` pages unless separately redesigned later
