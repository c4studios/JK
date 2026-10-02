# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** homeowners and tenants in Campbelltown, Macarthur and South West Sydney with something going wrong right now: a blocked drain or toilet, water backing up, a leak, a tap that won't stop, no hot water. Usually on a phone, often mid-problem, sometimes standing in the wet bathroom or laundry.
- **Secondary:** builders, renovators, property managers and businesses booking planned work: rough-ins and fit-offs, bathroom and kitchen renovations, new builds, gas fitting, commercial maintenance.
- **Evaluators of this concept:** the business owner, who will judge whether it looks like his own business rather than a template, and C4 Studios, which shows it on the Concepts showcase at c4studios.com.au.

## Product Purpose

A concept lead-generation site for JK Plumbing Solutions Pty Ltd, a licensed plumbing business based in Campbelltown and servicing Sydney. C4 Studios built it before any brief existed, to show what C4 ships for a local trade.

Success: a visitor with an active problem calls 0447 798 126 within seconds; a visitor with planned work sends the job details; the owner recognises his own vans, tools and finished jobs on the page.

## Positioning

The business's own evidence is what a neighbouring plumber cannot copy: their drain camera and jetter ("CCTV inspections identify the problem before we jet it", flyer 3 in `public/images`), their signwritten ute, their finished bathrooms with real tapware, Plumbing Licence 477160C, ABN 99 681 661 834, and a Campbelltown base.

## Operating Context

- Phone first. `tel:0447798126`. Email info@jkplumbingsolutions.com.au (listed on the business's own site, checked 2 Oct 2026). Instagram @jk_plumbingsolutionss. Facebook "JK plumbing solutions pty Ltd".
- The quote form is a `mailto:` (concept stage) and is meant for planned work, not emergencies.
- The concept lives at jk-plumbing-tau.vercel.app (Vercel project `jk-plumbing`). It must stay noindex and must never claim jkplumbingsolutions.com.au as its canonical, sitemap or metadata base.

## Capabilities and Constraints

- **Services** (from `src/lib/site.ts` and the business's flyers in `public/images`): blocked drains; jet blasting and CCTV drain inspection; pipe locating; hot water systems; gas fitting and LPG installation; leak detection; leaking taps and pipes; general plumbing and maintenance; bathroom, kitchen and laundry renovations; new builds (rough-in and fit-off); commercial plumbing and maintenance; emergency repairs (listed as a service, with no hours or response time promised).
- **Service area:** Campbelltown base; Macarthur region; South West Sydney; Liverpool area; Camden and Narellan; Greater Sydney.
- **Banned without the client's written confirmation:** 24/7, same-day, guarantees or warranties, reviews, star ratings, review counts, insurance, years in business, prices, specials or discounts, association memberships. The business's own ute wrap and flyers print several of these ("24/7 Emergency", "Fully licensed & insured", "$300 jet blasting special", "Competitive pricing"); crop or omit them wherever that material is shown.
- **Stack:** Next 16.2.6 App Router, React 19, Tailwind v4, TypeScript, GSAP, framer-motion, lucide-react.

## Brand Commitments

- Name: JK Plumbing Solutions; legal name JK PLUMBING SOLUTIONS PTY LTD; director James Khouri (stated as a business detail only).
- **Voice is the business, not James personally** (Caleb, 2 Oct 2026). Use "we" and "JK Plumbing". No "Call James" framing. Plain, specific, Australian English.
- Logo: red roofline with crossed pipe wrenches, a blue water drop, and the "JK PLUMBING SOLUTIONS" wordmark (`public/brand/`). The business's own colours are red and blue, shown on black (ute canopy) or white (flyers).
- Lines the business already uses on its own material: "Solutions you can trust!" (flyers), "When you need a solution, we deliver" (ute). Available, not required.
- The "Designed by C4 Studios" footer credit stays on the concept.

## Evidence on Hand

- **Photos** (`public/images`): finished bathrooms (`bathroom.jpg`, `bathroom 2.JPEG`, `double sink.JPEG`, `toilet and sink.JPEG`, `shower head.JPEG`, `bathtub.jpg`), kitchen sink (`sink and tap.jpg`), outdoor tap repair (`tap.JPEG`), toilet jetting in progress (`process toilet.JPEG`), the drain camera unit with live pipe footage (`tech.JPEG`, `IMG_7557.JPEG`), a commercial urinal install (`urinal.PNG`), the signwritten ute (`car side 3.JPG`, `IMG_7698.PNG`), three flyers and logo files.
- **Video:** phone clips of finished jobs, the ute, drain camera footage and a gas cooktop.
- **Absent, never to be fabricated:** testimonials, reviews, ratings, job counts, years trading, prices, response times, team size, photos of James.

## Product Principles

1. The phone number is the product. It is always within reach and never competes with a form for urgent jobs.
2. Show the business's own evidence before making any claim.
3. Name real plumbing situations instead of values.
4. Urgency comes from the situation (water spreading, a drain backing up), never from promises about hours or speed.
5. It should read as a working, licensed local trade: neither agency-slick nor rough or cheap (Caleb, 2 Oct 2026).

## Accessibility & Inclusion

WCAG 2.2 AA (C4 standard). Visitors are often stressed and on a phone, sometimes in poor light: large tap targets, strong contrast, and nothing animated between them and the phone number.
