# Changelog

## [Unreleased] — 2026-03-07

### Section 3: TheSystem — Full Redesign
- Replaced static grid layout with **horizontal scroll section** using GSAP ScrollTrigger
- 4 photo-backed cards (Structure, Check Size, Focus Areas, Location) scroll horizontally
- Cards have **domino width expansion** animation (622→780px for first card, 320→480px for others)
- Fixed heading pinned on the left ("Designed for the earliest stages of conviction")
- Cards are 599px tall with 8px border-radius, vertically centered
- Dark background (#181818), 10px gap between cards
- Section stays pinned until all 4 cards are visible, then unpins for next section

### Section 4: Fund (The Capital) — Full Redesign
- Redesigned from 12-col grid layout to **"Stats as Hero"** full-width design
- Eyebrow label in neutral gray (#8D8D8D) instead of accent red
- Two-column editorial prose (495px each, 104px gap) with 14px body text
- 3 massive stat rows spanning full width: $9M, 100%, ~20
  - Display font at 88px max (fluid clamp from 56px)
  - Right-aligned descriptors in muted text
  - Hairline dividers between rows (no top border on first, bottom border on last)
- **Sticky scroll behavior**: section scrolls fully through content, then sticks in place
  - Dynamic negative `top` value calculated from content height vs viewport
  - Section 5 (Sanctuary) slides over it with `z-index: 10`

### Section 5: Sanctuary — Full Redesign
- Replaced two-panel (gray placeholder + black data panel) with **full-bleed cinematic image**
- Background: misty hillside photograph (`sanctuary-bg.jpg`)
- Top-left: "A Building in Kormangala" heading (32px) + description
- Bottom: "Build", "Design", "Launch" at 144px display font with descriptors
  - **Scroll-driven horizontal motion**: pillars translate right-to-left on scroll
  - Motion starts only after section is fully in viewport (`offset: "start start"`)
  - 192px gap between pillar groups
- Overlaps Section 4 on scroll via `relative z-10` stacking

### Global
- Changed `<main>` overflow from `overflow-x-hidden` to `overflow-x-clip` to support sticky positioning without breaking scroll context

### New Assets
- `public/images/card-1.jpg` — People walking in field (TheSystem card)
- `public/images/card-2.jpg` — Cows in a field (TheSystem card)
- `public/images/card-3.jpg` — Person walks up hill (TheSystem card)
- `public/images/card-4.jpg` — Blue stone with tree design (TheSystem card)
- `public/images/sanctuary-bg.jpg` — Misty hillside with wildflowers

---

## [a5cf6c7] — 2026-03-06

### Hero & Founder — Redesign from Paper designs
- Rebuilt Hero and Founder sections based on Paper design compositions

## [56474e8] — 2026-03-06

### Bug Fix
- Fixed bufferAttribute TypeScript error in Globe component

## [14c74db] — 2026-03-06

### Initial Commit
- Full landing page scaffold with 13 sections
- Navigation, Footer, LenisProvider
- Battle card system (CiteMark + BattleCardProvider)
- Animation components (Reveal, MagneticButton, StaggerGroup)
- 3D wireframe globe (React Three Fiber)
- TRJNDaVinci display font (14 weight variants)
- Design system: CSS variables, Tailwind @theme, utility classes
