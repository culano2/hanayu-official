# Sprint 3.5 Spec - Premium UI Upgrade

## Objective

Upgrade the HANAYU Home page visual quality from functional layout to premium brand website quality while preserving the Sprint 3 content, section order, App Router architecture, and dark navy / gold identity.

## Scope

- Improve reusable premium UI primitives.
- Upgrade Hero into a stronger full-viewport brand moment.
- Improve homepage section layout and spacing.
- Refine Navbar glass treatment and hover behavior.
- Add subtle CSS-only motion with reduced-motion support.
- Keep the existing content and brand direction.

## New Or Improved UI Components

- `Section`
- `SectionHeader`
- `SplitSection`
- `ImagePanel`
- `PremiumButton`
- `Eyebrow`
- `Divider`

## Homepage Layout Upgrades

### Hero

- Full viewport image background.
- Dark gradient overlay architecture.
- Stronger HANAYU hierarchy.
- Improved CTA treatment.
- Scroll indicator.
- Future-ready image/video media layer remains intact.

### WhyHuayu

- Image and text split layout.
- Documentary origin-story pacing.

### NightFishing

- Text and image split layout.
- Dark editorial presentation.

### OurPromise

- Premium four-card grid.
- Subtle hover lift.

### TodaysCatch

- Cleaner stat layout.
- Larger image panel.
- Product cards retained with improved spacing.

### FeaturedProduct

- Apple-like product feature layout.
- Product details remain semantic as a definition list.

### Brand

- Refined spacing and typography.

## Design Direction

- Apple whitespace.
- Patagonia storytelling layout.
- National Geographic documentary feel.
- Japanese premium food brand restraint.
- Luxury seafood brand.
- No exaggerated marketing copy.
- No cartoon or playful style.

## Out Of Scope

- Shopping cart
- Checkout
- CMS
- API
- Authentication
- New pages

## Verification

Run:

```bash
npm run lint
npm run build
```

On Windows, `npm.cmd` may be used when the PowerShell npm shim is blocked.
