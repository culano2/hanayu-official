# HANAYU Development Guide

HANAYU is a premium seafood brand website built for long-term commercial use. The codebase should stay simple, reusable, accessible, and ready for future sections, product pages, and content operations.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript with strict mode
- Tailwind CSS v4
- Server Components by default

## Architecture

- Keep route files in `app/`.
- Keep layout-level UI in `components/layout/`.
- Keep page sections in `components/sections/`.
- Keep reusable primitives in `components/ui/`.
- Keep static commercial copy, navigation, and section data in `data/`.
- Keep global design tokens and base styles in `app/globals.css`.

## Component Standards

- Prefer reusable UI primitives before adding section-specific markup.
- Keep primitives small and predictable.
- Use typed props and avoid broad `any`-style component APIs.
- Use semantic HTML first: `header`, `main`, `section`, `nav`, `footer`, `dl`, `article`.
- Use accessible names for icon-only controls and mobile navigation.
- Preserve visual consistency by reusing `Button`, `Container`, `Section`, `Heading`, `Badge`, `Card`, and `Stat`.

## Content Standards

- Commercial copy belongs in `data/` unless it is purely structural UI text.
- Navigation items belong in `data/navigation.ts`.
- Brand, hero, standard, and footer content belong in `data/brand.ts`.
- Catch availability and catch cards belong in `data/catch.ts`.

## Design Direction

- Premium seafood brand, restrained and editorial.
- Inspired by Apple clarity, Patagonia field authenticity, and National Geographic origin storytelling.
- Avoid decorative clutter, oversized marketing fluff, and duplicated visual systems.
- Favor strong imagery, precise typography, generous spacing, and high contrast.

## Verification

Before committing commercial UI work, run:

```bash
npm run lint
npm run build
```

If PowerShell blocks the npm shim on Windows, use:

```bash
npm.cmd run lint
npm.cmd run build
```
