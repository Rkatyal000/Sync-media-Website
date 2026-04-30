# SYNC Media Website — PRD

## Original Problem Statement
Clone `Sync-media-Website-2` and add a clients/logos section where real brand logos load via Google's favicon service (Amazon, Zydus, GRT, Beam Suntory, Jockey, Yum!, LG, DS Group, Standard Chartered, Aditya Birla, etc.) — floating in two opposite-direction marquee rows with hover lift. Bump header logo to ~62px and footer logo to ~92px (72px on small screens). Insert clients section between value pillars and product showcase on the homepage.

## Architecture
- Frontend: React (CRA + craco), React Router, Tailwind, custom CSS in `index.css`/`App.css`.
- Backend: FastAPI, MongoDB (motor), endpoints at `/api/*`.
- Reverse proxy serves frontend on `:3000` and backend on `:8001`.

## What's been implemented (Apr 30, 2026)
- Replaced `/app` source with the user-provided `Sync-media-Website-2-main` project (preserved `.env` files).
- **ClientMarquee** (`/app/frontend/src/components/ClientMarquee.jsx`)
  - 51 brand chips, two opposing marquee rows (70s / 85s).
  - Logo source fallback chain: Google s2 favicons → Clearbit → initial-letter chip.
  - Each chip = 36px white rounded badge + brand wordmark.
  - Hover pauses scroll; individual chip hover-lift with accent shadow.
  - Cinematic `mask-image` edge fade plus absolute fade overlays.
- **Footer logo** bumped to 92px desktop / 72px mobile (inline 55px override removed, sizing moved to CSS).
- Header logo retained at 62px (already updated upstream).
- Section already wired into Home.jsx between hero and value pillars.

## Tech Stack
- React 18, Tailwind, lucide-react
- FastAPI, motor, pydantic
- MongoDB

## Backlog / Next
- P1: Real SVG/PNG logo overrides for brands whose Google favicon is low-res (Apple, LG, etc.) for crisper display.
- P2: Theme-aware logo invert for dark mode (currently white badge holds favicons regardless of theme).
- P2: Lazy-mount marquee via IntersectionObserver to defer 100+ image requests until in view.
