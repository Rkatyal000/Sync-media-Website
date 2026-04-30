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
- **ClientMarquee**: rich-chip layout (white rounded pill, 36px badge + wordmark) across **three opposing-direction floating rows** (72s / 86s / 64s, middle row reversed). Logo source chain: **Clearbit → Google s2 favicon → monochrome letter fallback**. Cinematic mask-image edge fade + absolute fade overlays. Hover pauses scroll; individual chips lift with accent-tinted shadow.
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

## Iteration — About + Audience verbatim rewrite (Apr 30, 2026)
- **About page** rewritten with verbatim copy from `SYNC About Page Research and Final Copy.pdf`. Strong H2 hierarchy, text-first layout, no clutter.
  - Sections: hero, The problem (3 cards), Our approach (6 cards), Mission (philosophy band), Who we serve (3 cards), Data → Measurement → Action (3 step cards), SYNC Artificial Society + 3 sub-cards, 4-column dashed-line roadmap timeline (2026 Q2 → 2027 H1), Leadership (4 people with mono initial badges), Investor lines (2 cards), Why teams trust SYNC + JioStar proof line, final CTA band.
  - Reveal scroll-in animations only; no fancy effects.
- **Audience page** eyebrow labels updated from "Section N" → thematic labels (The shift / Approach / Layer 1 / Layer 2 / Continuous learning / Scale) so on-page copy reads as the verbatim docx content.

## Iteration — Stock photos replaced + alignment fixes (Apr 30, 2026)
- Removed all Unsplash / Pexels stock imagery from `posts.js` (12 image URLs deleted).
- Created `components/PostDiagram.jsx` — 5 clean SVG system-diagram variants (Converge / Chart / Overlap / Loop / Grid). Variant chosen deterministically per post slug + tag.
- `Blog.jsx` and `BlogPost.jsx` now render `<PostDiagram>` inside `.post-cover--diagram` (and `.article-hero--diagram` on post pages). Each post-cover shows a calm accent-tinted background, dotted grid mask, and the topic-appropriate system diagram. Tag pill retained.
- Per-tone diagram styling for accents (amber, violet, teal, rose, emerald, sky, slate, indigo) — the diagram automatically picks up accent color and a subtle tinted background.
- Image safety pass: `img.post-cover-img` / `img.article-hero-img` get `width:100%; height:100%; object-fit: cover` so any future imagery cannot overflow or distort. Global `img { max-width:100%; height:auto; }`.
- Alignment pass: `.about-cards` re-locked to 3-col → 2-col → 1-col responsive grid; `.aud-flow--rich` uses 6-col → 3-col → 2-col grid; `.aud-shift-side { min-height:100% }` keeps the From/To pair equal height; `.about-hero--rich .about-hero-diagram-wrap { overflow:hidden }` so diagrams cannot overflow on narrow screens.
