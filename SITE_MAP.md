# Site Map — Victoria

**Figma File Key:** `hDa0E7jeD8CMpszfEXdf4j`
**Source URL:** https://www.figma.com/design/hDa0E7jeD8CMpszfEXdf4j/victoria?node-id=2132-1813
**Container Max-Width:** `1440px` (inner content 1312px @ 64px side padding)

## Pages

### Page: Home
Node ID: `2132:1813` (frame "Home Page", 1440 × 6923)

#### Sections (in document order)

| # | Section | Node ID | Component | Background | Notes |
|---|---------|---------|-----------|------------|-------|
| 1 | Hero | `2132:1814` | Hero | soft cream (right) / image (left) | 50/50 split, navbar overlaps top |
| 2 | Marquee — Values | `2132:1848` | ValuesMarquee | dark `#220603` | Scrolling text band, 88px tall |
| 3 | Philosophy | `2132:1859` | Philosophy | soft cream | Eyebrow + big heading + description (2-col) |
| 4 | Work With Me | `2132:1866` | WorkWithMe | TBD | Inspect in Phase 2 (940px tall) |
| 5 | Benefits | `2132:1882` | Benefits | TBD | Heading + 4 icon items |
| 6 | Meet the Coach | `2132:1920` | MeetTheCoach | TBD | Profile + momentum stat w/ image |
| 7 | Logos Marquee | `2132:1934` | LogosMarquee | TBD | 8 client logos, scrolling, 90px tall |
| 8 | Testimonials | `2132:2000` | Testimonials | TBD | Heading + testimonial card grid |
| 9 | Starter Guide | `2132:2056` | StarterGuide | image (left) / content (right) | 50/50 split, opt-in form |
| 10 | Footer | `2132:2079` | Footer | dark (likely) | Shared component instance, 589px tall |

## Shared Components

| Component | Node ID | Description |
|-----------|---------|-------------|
| Navbar | `2002:35` | Logo "Victoria" + nav links (About, Work With Me, Podcast, Blog, Contact) + red "Book a free" CTA + menu icon |
| Button | `2002:3` (primary) / `2002:17` (secondary) | Primary red / secondary cream, uppercase Inter, sharp corners |
| Footer | `2132:2079` | Shared instance |

## Layout notes

- Every section: full-width background + inner content constrained to 1440px with 4em (64px) side padding.
- Hero and Starter Guide are 50/50 splits with a full-bleed image half.
- Marquee bands (Values text, Logos) scroll horizontally — the only animations in the design.

## Images to download (resolved per-section in Phase 2 via get_design_context)

| Planned filename | Section | Type | Notes |
|------------------|---------|------|-------|
| `hero-portrait.*` | Hero | raster | Woman in chair, 720×853 |
| `hero-avatar-1/2/3.*` | Hero | raster | 38×38 circle avatars |
| `coach-momentum.*` | Meet the Coach | raster | 755×428 |
| `coach-profile.*` | Meet the Coach | raster | if present |
| `testimonial-author-1..4.*` | Testimonials | raster | 80×80 |
| `starter-guide.*` | Starter Guide | raster | 720×799 |
| `logo-1..8.*` | Logos Marquee | svg | client logos |
| icons (stars, quote, menu, benefit marks) | various | svg | inline where practical |
