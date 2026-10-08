# Founder Portfolio + Startup Showcase — Design blueprint

## Positioning

Hybrid Founder/Startup. Main navigation belongs to the startup; About makes the founder legible; product detail routes work as independent landing pages.

- Primary headline: "From first principles to real-world possibilities."
- Product pillars: AI Voice Agent and LifeTrail.
- Voice: considered, confident, grounded, no exaggerated claims.
- Main action: Explore projects; secondary: Meet the founder.

## Site map

Home → Projects → Project detail; Home → About; Home → Contact; optional Notes index.
Static bilingual paths at `/` and `/vi`.

## Page structure

- Home: Hero / featured products / capabilities / founder / contact CTA.
- Projects: category filter / 2 cards / roadmap-disclaimer.
- Detail: challenge / approach / key features / roadmap / technologies / next project.
- About: founder intro / narrative / focus areas / philosophy / CTA.
- Contact: collaboration areas / validated contact links (no fake form).
- Notes: technical topic cards without invented published dates.

## Tokens

| Token | Value | Role |
|---|---|---|
| Background | `#080c14` | Main canvas |
| Surface | `#0e1420` | Cards |
| Border | `#222d3c` | Delineation |
| Text | `#f4f7fc` | Primary |
| Muted | `#a2adbf` | Secondary |
| Accent blue | `#8daeff` | AI / focus |
| Accent green | `#74d5be` | GPS / IoT |
| Display | Space Grotesk | Headings |
| Body | DM Sans | Interface / copy |
| Mono | DM Mono | Status / metadata |

Responsive at ≤1100, ≤800, ≤590 and ≤380 pixels. Prefer reduced-motion when OS requests it. Contrast and focus states are explicit.

## Future development

Replace CSS/SVG conceptual drawings with real demos, add founder photo, ship detailed engineering posts, introduce analytics only with an explicit privacy strategy. Defer CMS, D1 and server functions until needed.
