# Imagine Fund — Project Structure

## Overview
VC fund landing page for **Imagine Fund**, a pre-seed fund by Paul Finney (Spacekayak founder). Built with Next.js 16, Tailwind CSS v4, Framer Motion, GSAP, and React Three Fiber.

## Tech Stack
| Tool | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework |
| TypeScript + React 19 | Language & UI |
| Tailwind CSS v4 | Styling (`@theme` syntax) |
| Framer Motion 12 | Component animations, scroll-linked transforms |
| GSAP + ScrollTrigger | Horizontal scroll, pinned sections, timeline sequences |
| Three.js + React Three Fiber | 3D wireframe globe in Hero |
| Lenis | Smooth scroll (lerp 0.1, duration 1.2) |
| pnpm | Package manager |

## Fonts
| Font | Role | Variable |
|---|---|---|
| TRJNDaVinci | Display/Heading | `--font-display` |
| Plus Jakarta Sans | Body | `--font-body` |
| Geist Mono | Mono/Accent | `--font-mono` |

## Color Palette
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#F9F8F5` | Warm cream background |
| `--color-surface` | `#FFFFFF` | Card surfaces |
| `--color-text` | `#1C1C19` | Primary text |
| `--color-text-secondary` | `#7A7A75` | Muted text |
| `--color-accent` | `#D94A38` | Brick red accent |
| `--color-border` | `rgba(28,28,25,0.15)` | Hairlines |

## Directory Structure

```
imaginefund/
├── public/
│   └── images/
│       ├── hero-bg.jpg              # Hero background (full-bleed)
│       ├── grid-1..4.jpg            # Founder section images
│       ├── card-1..4.jpg            # TheSystem horizontal scroll cards
│       └── sanctuary-bg.jpg         # Sanctuary full-bleed background
│
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout: font loading, LenisProvider
│   │   ├── page.tsx                 # Landing page: composes all 13 sections
│   │   ├── globals.css              # CSS vars, Tailwind @theme, utilities
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── animations/
│   │   │   ├── MagneticButton.tsx   # Cursor-tracked button translation
│   │   │   ├── Reveal.tsx           # Scroll-triggered fade-up reveal
│   │   │   └── StaggerGroup.tsx     # Variant-based stagger container
│   │   │
│   │   ├── layout/
│   │   │   ├── Navigation.tsx       # Site navigation
│   │   │   ├── Footer.tsx           # Site footer
│   │   │   └── LenisProvider.tsx    # Smooth scroll provider
│   │   │
│   │   ├── sections/               # Page sections (in order)
│   │   │   ├── Hero.tsx            # Fixed hero, 3D globe, thesis one-liner
│   │   │   ├── Founder.tsx         # Paul Finney background, stats, images
│   │   │   ├── TheSystem.tsx       # GSAP horizontal scroll, 4 photo cards
│   │   │   ├── Fund.tsx            # Stats as hero, sticky scroll, prose columns
│   │   │   ├── Sanctuary.tsx       # Full-bleed image, Build/Design/Launch pillars
│   │   │   ├── Renaissance.tsx     # 120-day incubation, 4 phases
│   │   │   ├── AttnCo.tsx          # Distribution arm, attention stack
│   │   │   ├── Vision.tsx          # India-SF corridor thesis
│   │   │   ├── FounderRadar.tsx    # Stealth pipeline founders
│   │   │   ├── Deployment.tsx      # Timeline roadmap
│   │   │   ├── ReturnModel.tsx     # Return tiers (3×, 5–8×, 15×+)
│   │   │   ├── HonestRisks.tsx     # Risk acknowledgments
│   │   │   └── CloseCTA.tsx        # Contact CTA
│   │   │
│   │   ├── three/
│   │   │   └── Globe.tsx           # R3F wireframe globe (lazy loaded)
│   │   │
│   │   └── ui/
│   │       ├── BattleCardProvider.tsx  # Modal overlay for footnote cards
│   │       ├── CiteMark.tsx           # Superscript citation marks
│   │       ├── ContourLines.tsx       # Animated SVG path background
│   │       ├── DataViz.tsx            # SVG chart components
│   │       ├── GreenRule.tsx          # Decorative rule
│   │       ├── MagneticButton.tsx     # UI magnetic button variant
│   │       ├── SectionEyebrow.tsx     # Section label component
│   │       ├── StatCounter.tsx        # Animated stat counter
│   │       └── WireframeShapes.tsx    # Decorative SVG geometries
│   │
│   ├── hooks/
│   │   ├── useCountUp.ts           # Scroll-triggered number animation
│   │   └── useReducedMotion.ts     # prefers-reduced-motion check
│   │
│   ├── lib/
│   │   ├── battleCards.ts           # 12 footnote card definitions
│   │   ├── brand.ts                 # Brand config (name, social, colors)
│   │   └── easings.ts              # Custom easing curves
│   │
│   └── fonts/                       # TRJNDaVinci OTF files (14 variants)
│
├── CLAUDE.md                        # AI design system instructions
├── CHANGELOG.md                     # Version history
├── PROJECT_STRUCTURE.md             # This file
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

## Section Scroll Behaviors

| Section | Behavior |
|---|---|
| Hero | `fixed` positioning, Founder scrolls over it |
| TheSystem | GSAP `pin: true`, horizontal scroll with card expansion |
| Fund | `sticky` with dynamic negative `top`, scrolls fully then sticks |
| Sanctuary | `relative z-10`, slides over sticky Fund on scroll |

## Design Patterns
- **12-col grid**: Used in Founder, older sections
- **Section eyebrow**: Mono caps label ("03 — The Capital")
- **Hairline dividers**: `border-t border-black/[0.12]`
- **Italic emphasis**: `<em>` in headings uses secondary color
- **Noise overlay**: SVG noise at 2.5% opacity on `<main>`
- **Battle cards**: Superscript cite marks → modal footnote overlays
