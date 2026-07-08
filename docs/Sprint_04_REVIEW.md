# Sprint 04 Review - Real Brand Integration

## Summary

Sprint 4 integrates the HANAYU visual asset library contract into the Home page. The implementation uses placeholder image files at the final production paths so the final asset drop can replace files directly without changing component code.

## Implemented

- Created public asset folders:
  - `public/images/huayu/`
  - `public/images/harbor/`
  - `public/images/night-fishing/`
  - `public/images/product/`
  - `public/images/packaging/`
  - `public/images/ocean/`
- Added placeholder files using the final naming convention.
- Added `brandAssets` in `data/brand.ts`.
- Updated hero, story, product, and ocean content to reference final asset paths.
- Reordered Home page:
  - Hero
  - Why Huayu
  - Harbor Story
  - Night Fishing
  - Featured Product
  - Our Promise
  - Ocean Atmosphere
  - Footer
- Added image-driven components:
  - `ImageHero`
  - `StorySection`
  - `ImageBanner`
  - `OceanBanner`
  - `ProductHighlight`

## Accessibility

- Hero and all image sections include alt text.
- Product details remain semantic definition lists.
- Non-hero images use `next/image` lazy loading by default.
- Existing reduced-motion CSS remains in place.

## Notes

The committed image files are placeholders copied from the existing local image set. Replace the files in-place with final brand assets while preserving paths and filenames.

## Verification

Run before completion:

```bash
npm run lint
npm run build
```
