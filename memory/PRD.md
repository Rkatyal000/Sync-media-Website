# SYNC Media Website — PRD

## Problem statement (latest iteration)
Strict-execution production build: preserve all approved text/typography verbatim; merge the older content depth with the current premium minimal design system; rebuild nav to Platform | Audience | About | Blog | Contact; add About, Audience, and IPL blog with exact supplied copy; convert credibility strip to monochrome equal-height infinite scroller; fix "Media is now cross-screen / Measurement should be too" single-line layout; default to Light Mode; disable incomplete sections from the nav.

## Architecture
- Frontend: React 18 + craco + Tailwind, custom CSS in `src/index.css`.
- Backend: FastAPI + motor (MongoDB), `/api/*`.

## Implemented (Apr 30, 2026 — session 2)
- **Navbar** reduced to Platform | Audience | About | Blog | Contact. Solutions/Methodology/Case Studies removed from nav (routes kept, pages live for backwards compatibility).
- **ThemeProvider** defaults to `light` (was `auto`).
- **Accent color** now `#0066cc` (locked brand accent).
- **Home hero**: title has no period; no "SYNC." eyebrow. Left-aligned. Typography untouched.
- **Philosophy section**: `.phi-line` → `white-space: nowrap` on desktop so "Media is now cross-screen." and "Measurement should be too." each fit on one line without any font-size change; wraps on ≤760px.
- **ClientMarquee**: rewritten as monochrome, strict equal-height (40px) infinite marquee with slow 90s/105s loops, Google s2 favicons → Clearbit → text fallback. No hover-lift, no chip pills, no animation gimmicks. Grayscale 100% + opacity 0.65 → full color on hover.
- **Footer**: logo 92px desktop / 72px mobile, links cleaned of Case Studies / Methodology.
- **/audience** page created with EXACT copy from the supplied docx: hero, 6 sections, propensity questions list, closing CTA. Includes the **Exposure → Behaviour → Propensity → Micro-Flights → Activation → Learning Loop** system-flow visual (thin #0066cc connectors, dashed dividers, responsive vertical stack on mobile).
- **/blog/ipl-2026-audience-creation-cross-media-measurement-india** published with verbatim body, GEO answer block at top (as quote), and the "Talk to Our Team" CTA paragraph at the bottom.
- **Blog categories** reduced to All / Learnings / Insights / Case Study. All legacy posts retagged.
- **Routes added**: `/audience`, `/platform` (alias of /products).

## Verified
- `/audience` → 200
- `/blog/ipl-2026-audience-creation-cross-media-measurement-india` → 200
- Bundle contains "Platform", "Audience", new marquee classes, and IPL slug.

## Deferred / next
- Swap still-referenced `CaseStudies` + `Solutions` + `Methodology` page files for 404-redirects if full removal is desired (currently reachable only via direct URL).
- Author profile photos & richer biography blocks for the leadership team on /about.
- Add "Learnings" / "Case Study" tag distribution to more posts once new pieces are written.
