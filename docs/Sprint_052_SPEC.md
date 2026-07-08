# Sprint 5.2 - Premium Motion Experience

## Objective

Create a calm, premium motion system for HANAYU inspired by Apple, Patagonia, and Aesop.

## Motion Principles

- Motion should clarify hierarchy, not call attention to itself.
- Timing should feel slow enough to be premium and fast enough to stay responsive.
- Reduced-motion preferences must be respected.
- Scroll and hover effects should remain subtle.

## Deliverables

- Reusable `FadeUp` component.
- Reusable `FadeIn` component.
- Reusable `HeroScrollImage` component for subtle hero image scale on scroll.
- Transparent navbar at top with glass, blur, and shadow after scrolling.
- Section fade-up on first viewport entry.
- Shared image hover scale and soft shadow lift.
- Button easing and gold fill motion.

## Timing

- Section entry: 600-900ms.
- Hero text reveal: staggered 780-900ms.
- Image hover: 700ms.
- Navbar state change: 500ms.

## Accessibility

- Motion components check `prefers-reduced-motion`.
- Global CSS keeps reduced-motion transitions and animations effectively disabled.
- Content remains present and semantic without requiring motion.

## Verification

- `npm run lint`
- `npm run build`
