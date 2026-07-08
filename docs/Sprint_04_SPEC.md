# Sprint 04 Spec - Real Brand Integration

## Objective

Transform the HANAYU Home page from a prototype into a premium brand experience by integrating the final visual asset path architecture.

## Scope

- Create stable public asset folders and final image filenames.
- Upgrade Hero to use real brand image paths with dark overlay support.
- Reorder the homepage into an image-led brand story.
- Introduce image-first reusable section components.
- Preserve the existing visual identity, content direction, App Router, and reusable UI foundation.

## Asset Folders

The following folders are required under `public/images/`:

- `huayu/`
- `harbor/`
- `night-fishing/`
- `product/`
- `packaging/`
- `ocean/`

## Asset Path Contract

Current Sprint 4 paths:

- `/images/huayu/01-02_Huayu_Sunset.png`
- `/images/huayu/01-03_Huayu_Cliffs.png`
- `/images/harbor/02-01_Fishing_Boat_Harbor.png`
- `/images/night-fishing/03-02_Night_Fishing_Boat.png`
- `/images/product/04-01_Product_Hero.png`
- `/images/product/04-03_Product_Detail.png`
- `/images/ocean/06-02_Ocean_Waves_On_Rocks.png`
- `/images/ocean/06-03_Underwater_Light_Beams.png`

If final files are not available yet, placeholders may be committed at these paths. Future asset replacement should preserve filenames to avoid code churn.

## Homepage Order

1. Hero
2. Why Huayu
3. Harbor Story
4. Night Fishing
5. Featured Product
6. Our Promise
7. Ocean Atmosphere
8. Footer

## Components

Sprint 4 introduces:

- `ImageHero`
- `StorySection`
- `ImageBanner`
- `OceanBanner`
- `ProductHighlight`

## Requirements

- Use `next/image`.
- Use responsive image sizes.
- Lazy load non-hero imagery by default.
- Preserve alt text.
- Preserve reduced-motion support.
- Keep strict TypeScript and avoid `any`.
- Do not add cart, checkout, CMS, API, authentication, or new pages.

## Verification

Run:

```bash
npm run lint
npm run build
```
