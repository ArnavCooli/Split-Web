# Split — Marketing Site

> Shared expenses, settled effortlessly.

A premium, production-quality landing page for **Split**, an app that helps
roommates, couples, and friends track shared expenses without spreadsheets or
awkward payment requests. Pure marketing site — no app functionality.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + strict **TypeScript**
- **Tailwind CSS v4** (CSS-first tokens in `app/globals.css`)
- **GSAP + ScrollTrigger** — scroll reveals, parallax, looping mockup timelines
- **Framer Motion** — micro-interactions (theme toggle, nav)
- **Lenis** — smooth scrolling, wired into the GSAP ticker
- **next-themes** — dark/light mode (defaults to dark)
- **lucide-react**, **react-wrap-balancer**, **sonner**, **cva**

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender static)
npm run lint
```

## Structure

```
app/
  layout.tsx          # SEO + Open Graph + Twitter metadata, fonts, providers
  page.tsx            # composes the sections in order
  globals.css         # design tokens, utilities, keyframes
  loading.tsx         # branded loading state
  opengraph-image.tsx # dynamic 1200×630 OG/Twitter image
  icon.svg            # favicon / app icon
components/
  anim/               # Reveal, Stagger, CountUp (GSAP helpers)
  mockups/            # fake app UI: receipt scan, item assign, settlement,
                      # split donut, net-settlement graph, phone screens
  providers/          # ThemeProvider, SmoothScroll (Lenis)
  sections/           # hero, social-proof, problem, features, how-it-works,
                      # ai, testimonials, comparison, cta
  site/               # navbar, footer
  ui/                 # button, badge, section, logo, theme-toggle, toaster
lib/                  # utils (cn, currency), gsap registration, site copy
```

## Design system

Tokens live as CSS variables in `app/globals.css` and are mapped into Tailwind
via `@theme inline`. Edit colors there — everything else inherits.

| Token | Light | Dark |
| --- | --- | --- |
| `background` | `#F8F8F6` | `#0C0C0D` |
| `surface` | `#FFFFFF` | `#131314` |
| `foreground` | `#111111` | `#F7F7F7` |
| `muted-foreground` | `#666666` | `#A1A1A1` |
| `border` | `#E7E7E7` | `#242424` |
| `accent` (buttons) | `#1A1A1A` | `#F7F7F7` |
| `brand` (emerald accent) | `#0C7A53` | `#34C98B` |

Accessibility: semantic landmarks, an `sr-only` headline mirror for the animated
hero, focus-visible rings, and `prefers-reduced-motion` disables all motion and
falls back to fully-visible content (reveals never trap content hidden).

## Branding suggestions

- **Wordmark:** "Split" in Geist Semibold, `-0.02em` tracking. The mark is three
  stacked bars (emerald / foreground / emerald) in a near-black rounded tile —
  see `components/ui/logo.tsx` and `app/icon.svg`.
- **Accent:** deep emerald used sparingly (checks, the logo bars, the highlighted
  comparison column). Keep surfaces neutral; let emerald do small, confident work.
- **Voice:** calm and plainspoken. "Stop doing roommate math," not "Revolutionize
  your finances." Avoid AI buzzwords.
- **Favicon:** `app/icon.svg` is SVG (crisp at any size). For full coverage,
  export 32×32 and 180×180 PNGs and a 512×512 maskable PWA icon from the same art.
- **OG image:** generated at build time by `app/opengraph-image.tsx`; restyle there.

## Notes

This is a landing page only. The waitlist form (`components/waitlist-form.tsx`)
simulates submission and confirms with a toast — wire it to a real endpoint
(Resend, Loops, a Route Handler, etc.) before launch.
