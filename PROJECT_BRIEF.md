# Project Brief — Victoria

> Auto-generated from Figma (Phase 0). Source of truth for design tokens.

**Figma File Key:** `hDa0E7jeD8CMpszfEXdf4j`
**Source URL:** https://www.figma.com/design/hDa0E7jeD8CMpszfEXdf4j/victoria?node-id=2132-1813
**Home Page node:** `2132:1813`
**Design frame width:** `1440px` → `--size-container-ideal: 1440`
**Content max-width:** `1440px` (inner content 1312px with 64px side padding)

## Project

**Victoria** — a personal-brand / business-coaching landing page for a coach serving women entrepreneurs. Warm, editorial, elegant. Cream backgrounds, a single confident red accent, refined serif headings paired with clean sans body copy.

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Accent / Primary red | `#e8001d` | Buttons, accent words, red backgrounds |
| Logo red | `#c72836` | Logo wordmark (slightly muted red) |
| Text title dark | `#000000` | Headings |
| Text body dark | `#2f2f2f` | Body copy |
| Text title white | `#ffffff` | Headings on dark |
| Text body white | `#bfbebe` | Body copy on dark |
| Bg soft cream | `#fffcf4` | Navbar, hero content bg (default page bg) |
| Bg cream | `#f3edd9` | Secondary button, cream sections |
| Bg white | `#ffffff` | White sections |
| Bg dark | `#220603` | Dark sections (near-black warm brown) |

## Typography

**Heading font:** `ZT Formom` (Regular / 400) — a premium elegant serif. Not freely licensable, so the stack falls back to **Fraunces** (Google Fonts variable serif, close match), then Georgia/serif.
Stack: `"ZT Formom", "Fraunces", Georgia, serif`

**Body font:** `Inter` (Light 300 / Regular 400 / Medium 500) — Google Fonts.
Stack: `"Inter", system-ui, sans-serif`

| Style | Font | Size | Weight | Line-height | Letter-spacing |
|-------|------|------|--------|-------------|----------------|
| Heading 9xl | ZT Formom | 80px | 400 | 1 | -4% (≈ -3.2px @80) |
| Heading 8xl | ZT Formom | 72px | 400 | 1 | -4% |
| Heading 7xl | ZT Formom | 64px | 400 | 1 | -4% |
| Heading 2xl | ZT Formom | 24px | 400 | 1 | -4% |
| Body 2lg | Inter Light | 32px | 300 | 1.125 (36/32) | -1 (≈ -1px) |
| Body links | Inter Light | 28px | 300 | 1.428 (40/28) | -1 |
| Body base | Inter Light | 18px | 300 | 1.333 (24/18) | -2% (≈ -0.36px) |
| Eyebrow / label | ZT Formom | 16px | 400 | 1 | uppercase |

Note: per project rules, letter-spacing stays in **px** (never em) and line-height stays **unitless**.

## Spacing scale (observed)

`12px` `16px` `24px` `40px` `64px` (container side padding) `120px` (section vertical padding).

## Border radius

Design is largely sharp-cornered: buttons and image blocks have **0** radius. Avatars are full circles (`50%`). Author images are 80×80 (checked per section). Small `8px` bullets are circular.

## Shadows

None observed in the base sections (flat, editorial style). Verified per section in Phase 2.

## Layout

- Full-width backgrounds; inner content constrained to 1440px with 64px (4em) side padding.
- Hero & Starter Guide use a 50/50 split (image half + content half), image is full-bleed to the viewport edge.
- Section vertical rhythm ≈ 120px top padding.

## Special interactions

- **Marquee bands** (Values text, client logos) scroll horizontally. These are marquee animations present in the design → implement as continuous scroll. No other animations, hover effects, or scroll effects were in the design.

## Component patterns

Navbar, Button (primary red / secondary cream), Eyebrow label (`//UPPERCASE`), Avatar group + rating, Marquee, Benefit item (icon + title + description), Testimonial card (quote + author), Logo strip, Opt-in form, Footer.
