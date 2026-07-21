# Timberline Custom Homes — PRD

## Original Problem
Build a multi-page luxury custom home builder website for "Timberline Custom Homes" (Peterborough & the Kawarthas). Architectural Digest editorial feel married to the client's warm, nature-inspired brand (forest green, water ripples). Pages: Home, About, Our Process, What We Offer, Portfolio, Contact. Brand: #01261d deep forest / #1a9647 kelly green accent / #c9a96e warm gold / #f5f0e6 cream. Playfair Display (headings) + Inter (body). Contact form submissions delivered via Resend.

## Architecture
- **Frontend**: React 19 + React Router 7 + Tailwind, lucide-react icons, Intersection Observer for reveal + gold-rule animations, marquee & Ken Burns effects
- **Backend**: FastAPI + Resend SDK (async via `asyncio.to_thread`)
- **Email**: Resend, sender configurable, recipient `rajsoni48879@gmail.com` by default
- **Shared components**: `Header` (announcement strip + logo + Since-1989 badge), `Footer`, `PageHero`, `Reveal` + `GoldRule`

## Pages Implemented (2026-02)
- `/` Home: Ken-Burns hero slider (4 slides + water-ripple SVG), Complete Service intro, "Every Discipline. One Roof." offering grid (7 disciplines), Our Promise dark banner, "Craftsmanship in Every Detail" scrolling marquee, Testimonials, Design·Build closing banner
- `/about`: PageHero, Our History (3 paragraphs, photo), Stats (4), Office Team (8) + Field Team (4), Awards & Memberships (4), Testimonials
- `/our-process`: PageHero, 6 alternating numbered steps with script numerals, CTA band
- `/what-we-offer`: PageHero, Complete Service intro, 7 alternating discipline blocks with bullet highlights, CTA band
- `/portfolio`: PageHero, category filter (6 categories), 10-project editorial grid, CTA band
- `/contact`: PageHero, contact info block + floating-label inquiry form (11 fields, conditional "Other"), Resend submission with success/error states

## User Personas
- **Prospective client**: Cottage / custom-home seeker browsing trust signals, portfolio and process before submitting an inquiry
- **Office admin (rajsoni48879@gmail.com)**: Receives formatted inquiry emails from the /api/contact route

## Core Requirements
- Multi-page navigation with sticky, scroll-aware header (green announcement strip + main header)
- Floating-label form with conditional "Other" fields and full validation
- Email delivery via Resend (503 fallback if key missing)
- Premium editorial aesthetic with hybrid nature-inspired brand cues (water ripple, Since-1989 leaf badge, gold rule)
- Fully responsive with mobile hamburger overlay

## Status — 2026-02 (Current)
- [x] All 6 pages built and routed
- [x] Header / Footer persistent, scroll-aware with sticky white transformation
- [x] Announcement strip (green) on top of every page
- [x] Logo (LOGO_FINAL-02) with white contrast plate; "Since 1989" baked into logo
- [x] Hero slider (7 user photos, 4 s auto-advance) with subtle wave divider at bottom
- [x] Playfair Display + Inter font stack
- [x] Scrolling project marquee on Home
- [x] Contact form posts to `/api/contact` and Resend delivery is live
- [x] `RESEND_API_KEY` configured in `/app/backend/.env`
- [x] Home.jsx refactored into `HeroSlider`, `ServiceCards`, `ScrollingGallery` components
- [x] What We Offer cards show titles only (icon + name)
- [x] "We create memories in the Kawarthas..." tagline + paragraph as What-We-Offer intro

## What's Been Implemented — Timeline
- **2026-02 (initial)**: Multi-page skeleton, Resend integration, floating-label form
- **2026-02 (iteration 2)**: Gilbert+Burke cream/champagne aesthetic
- **2026-02 (iteration 3)**: Multi-million dollar pure-white editorial refactor
- **2026-02 (iteration 4)**: Hybrid restructure — green announcement strip, hero carousel, Since-1989 badge, water-ripple, scrolling marquee, `WhatWeOffer` page, removed AskRay widget, Playfair + Inter typography
- **2026-02 (iteration 5)**: New client logo (LOGO_FINAL-02) with white backing plate; removed redundant Since-1989 text
- **2026-02 (iteration 6)**: 7-image hero slider (user-supplied assets, 4 s cadence), Home.jsx refactored into `HeroSlider` / `ServiceCards` / `ScrollingGallery` components, What We Offer cards title-only, memories tagline promoted as brand statement above services
- **2026-02 (iteration 7)**: Dedicated card image for Custom Design, Planning & Permitting service card image, dropdown mega-nav (About → History/Team/Awards/Testimonials; What We Offer → 6 disciplines), hash-anchor smart scrolling with fixed-header offset, mobile accordion nav, `pt-28/32` fix for PageHero to prevent announcement-strip overlap

## Backlog

### P1
- Real project case-study pages behind portfolio tiles
- Replace placeholder Unsplash tiles with client-supplied project photography
- Domain verification on Resend for custom sender (`inquiries@timberlinecustomhomes.ca`)

### P2
- Google Analytics / Search Console
- CMS for non-dev edits to project gallery
- Multi-language (EN/FR)
- Newsletter signup
- Instagram feed embed
