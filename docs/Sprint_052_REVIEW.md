# Sprint 5.2 - Review

## Completed

- Added reusable motion primitives:
  - `FadeUp`
  - `FadeIn`
  - `HeroScrollImage`
- Added subtle hero image scaling from 100% to 106% during scroll.
- Improved hero text reveal timing with staggered fade-up and fade-in layers.
- Updated the navbar to start transparent and transition to a glass treatment after scroll.
- Added one-time section fade-up behavior through the shared `Section` component.
- Updated shared image panels with 1.03 hover scale and a softer shadow increase.
- Refined button transitions with consistent easing and a gold fill layer.
- Increased shared section vertical rhythm.

## Notes

- Reduced-motion preferences are respected by the motion components and global CSS.
- Existing routes and content structure remain unchanged.
- The Home page and Product page both reuse the new hero scroll image behavior.

## Verification

- `npm run lint`
- `npm run build`
