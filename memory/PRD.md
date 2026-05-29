# Timberline Custom Homes — PRD

## Original Problem
Build a multi-page luxury custom home builder website for "Timberline Custom Homes" (Kawartha Lakes, ON) — Architectural Digest meets cottage country craftsmanship. Pages: Home, Our Process, About Us, Contact Us. Brand: #01261d navy, #231f20 charcoal, #00a34f forest green. Playfair Display + Montserrat. Contact form submissions emailed to rajsoni48879@gmail.com via Resend.

## Architecture
- **Frontend**: React 19 + React Router 7 + Tailwind, lucide-react icons, Intersection Observer for reveal animations
- **Backend**: FastAPI + Resend SDK (async via asyncio.to_thread)
- **Email**: Resend, sender `onboarding@resend.dev`, recipient configurable via `RECIPIENT_EMAIL`

## Pages Implemented (2026-02)
- `/` Home: Hero (user cottage photo), Foundation two-column, Services 12-card dark grid, Magazine gallery (6 tiles), 30 Years experience banner, Memories mission, Testimonials (3 cards)
- `/our-process` Process: PageHero + 6 numbered steps + CTA
- `/about` About: PageHero + History (3 paragraphs) + Stats bar (4) + Values (4) + Office Team (8) + Field Teams (4)
- `/contact` Contact: PageHero + Contact info + Floating-label form with 11 fields, conditional Other inputs, Resend submission, success/error states

## User Personas
- **Prospective client**: Cottage/home seeker browsing trust signals, work, and finally submitting inquiry
- **Office admin (rajsoni48879@gmail.com)**: Receives formatted inquiry emails with all fields

## Core Requirements
- Multi-page navigation with sticky scroll-aware header
- Floating-label form with conditional fields
- Email delivery via Resend
- Premium editorial aesthetic, fade-up reveal animations
- Fully responsive (mobile hamburger overlay)

## Status — 2026-02
- [x] All pages built and routed
- [x] Header / Footer persistent with sticky behaviour
- [x] Contact form posts to /api/contact
- [x] Backend Resend integration coded; returns 503 with clear message until RESEND_API_KEY supplied
- [x] Testing agent: 100% pass on backend (9/9) and frontend
- [ ] User must paste RESEND_API_KEY in /app/backend/.env to enable live email delivery

## Backlog (P1)
- Domain verification on Resend for custom sender (e.g. inquiries@timberlinecustomhomes.ca)
- Real project case-study pages behind gallery tiles
- Google Analytics / Search Console
- CMS for non-dev edits to project gallery

## Backlog (P2)
- Multi-language (EN/FR)
- Newsletter signup
- Instagram feed embed
