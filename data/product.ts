import { brandAssets, brandMessaging } from "@/data/brand";

export const productCatalog = {
  hero: {
    eyebrow: "HANAYU Product",
    headline: "劍尖槍鎖管",
    subheadline: brandMessaging.tagline,
    image: brandAssets.productHero,
    primaryCta: {
      href: "#seasonal-story",
      label: "了解季節",
    },
    secondaryCta: {
      href: "#giant-size",
      label: "查看尺寸",
    },
  },
  seasonalStory: {
    id: "seasonal-story",
    eyebrow: "Seasonal Story",
    title: "一年只有一季。",
    body: "六月至九月，是花嶼海域最珍貴的季節。每一尾都由職人手釣，每一年都值得等待。",
  },
  giantSize: {
    id: "giant-size",
    eyebrow: "Giant Size",
    headline: "超級大隻，來自花嶼海域。",
    body: "每尾約一公斤，完整保留天然鮮甜。",
    image: brandAssets.threeSquids,
  },
} as const;
