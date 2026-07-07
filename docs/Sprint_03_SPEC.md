# Sprint 03 Spec - Home Story Experience

## Objective

Upgrade the HANAYU Home page from a basic landing page into a premium brand storytelling experience while preserving the existing Next.js App Router architecture, Tailwind CSS v4 setup, reusable UI components, and data-driven content model.

## Scope

Create a longer editorial Home page that communicates:

- Huayu Island as the brand origin.
- Night fishing as the craft story.
- HANAYU's handling promise.
- Seasonal line-caught swordtip squid as the featured product.
- Today's catch and brand standard as supporting commercial sections.

## Page Order

1. Navbar
2. Hero
3. WhyHuayu
4. NightFishing
5. OurPromise
6. TodaysCatch
7. FeaturedProduct
8. Brand
9. Footer

## Content Requirements

### Hero

- Eyebrow: `FROM HUAYU ISLAND`
- Title: `HANAYU`
- Subtitle: `花嶼海域．職人手釣．劍尖槍鎖管`
- Body: `一年只有一季，值得等待。每一尾，都由職人親手釣起。`
- CTAs:
  - `探索品牌故事`
  - `今日漁獲`

### WhyHuayu

Title: `為什麼是花嶼？`

Content should explain Huayu as more than origin: the starting point of HANAYU, shaped by currents, night fishing culture, seasonality, and respect for each catch.

### NightFishing

Title: `職人夜釣`

Content should communicate that work begins after nightfall, each catch is hand-line caught, and quality is prioritized over speed.

### OurPromise

Cards:

- `職人手釣`
- `船上立即處理`
- `真空急速冷凍`
- `一年僅有一季`

### FeaturedProduct

Title: `花嶼海域職人手釣劍尖槍鎖管`

Content should describe the seasonal product, 1kg vacuum frozen pack, and Premium Gift Box availability for 3kg+.

Details:

- 捕撈季節：每年 6 月至 9 月
- 產地：澎湖花嶼海域
- 漁法：職人手釣
- 包裝：1kg 真空急速冷凍
- 保存：-18°C 以下冷凍保存
- 保存期限：12 個月
- 最佳賞味期：1 個月內
- 食用建議：建議充分加熱後食用，不建議生食

## Design Rules

- Premium seafood brand.
- Apple-like whitespace.
- Patagonia storytelling.
- National Geographic documentary feeling.
- Japanese premium food brand restraint.
- Mobile-first responsive layout.
- Accessible semantic HTML.
- Reuse existing UI components.
- Avoid duplicate code.
- Strict TypeScript.
- No `any`.

## Out of Scope

- Shopping cart
- Checkout
- CMS
- API
- Authentication
