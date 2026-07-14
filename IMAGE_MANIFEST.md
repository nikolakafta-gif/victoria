# Image Manifest — Victoria

All assets downloaded from Figma (`hDa0E7jeD8CMpszfEXdf4j`) and stored in `public/assets/images/`.
Raster photos were downscaled + re-encoded to optimized JPG with `sharp` (quality 82). File types verified with `file` and extensions corrected where Figma mislabelled them.

| File | Section | Type | Dimensions | Size | Status |
|------|---------|------|-----------|------|--------|
| hero-portrait.jpg | Hero | JPG | 1200×1593 | ~111 KB | OK (was 6 MB PNG, optimized) |
| hero-avatar-1.png | Hero | PNG | 76×76 | ~10 KB | OK |
| hero-avatar-2.png | Hero | PNG | 76×76 | ~6 KB | OK |
| hero-avatar-3.png | Hero | PNG | 76×76 | ~10 KB | OK |
| work-bg.jpg | Work With Me | JPG | 816×1456 | ~133 KB | OK |
| work-card.jpg | Work With Me | JPG | 800×533 | ~31 KB | OK |
| benefit-icon-1.svg | Benefits | SVG | vector | ~3 KB | OK (renamed from .png) |
| benefit-icon-2.svg | Benefits | SVG | vector | ~2 KB | OK (renamed from .png) |
| benefit-icon-3.png | Benefits | PNG | 144×144 | ~5 KB | OK |
| benefit-icon-4.svg | Benefits | SVG | vector | ~1 KB | OK (renamed from .png) |
| coach-momentum.jpg | Meet the Coach | JPG | 900×600 | ~35 KB | OK |
| logo-a-mark.svg | Logos | SVG | vector | ~1 KB | OK |
| logo-a-type.svg | Logos | SVG | vector | ~8 KB | OK |
| logo-b.svg | Logos | SVG | vector | ~4 KB | OK |
| logo-c.svg | Logos | SVG | vector | ~7 KB | OK |
| logo-d.svg | Logos | SVG | vector | ~6 KB | OK |
| author-1.jpg | Testimonials | JPG | 200×200 | ~7 KB | OK |
| author-2.jpg | Testimonials | JPG | 200×200 | ~9 KB | OK |
| author-3.jpg | Testimonials | JPG | 200×200 | ~5 KB | OK |
| author-4.jpg | Testimonials | JPG | 200×200 | ~8 KB | OK |
| starter-guide.jpg | Starter Guide | JPG | 900×1195 | ~59 KB | OK |

## Notes

- **Icons recreated inline (not downloaded):** hero rating stars, navbar hamburger, Work-With-Me arrow, testimonial quote marks, footer social icons (YouTube/TikTok/Facebook/Instagram). Inlined as SVG so they scale crisply and inherit `currentColor`.
- **Logo SVGs** are Figma fragment exports with no intrinsic size (`width="100%"`), so their dimensions are set explicitly in CSS from the Figma bounds.
- No failed downloads.
