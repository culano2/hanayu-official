const fallbackSiteUrl = "http://localhost:3000";

function resolveSiteUrl() {
  const configuredSiteUrl = process.env.SITE_URL?.trim();

  if (configuredSiteUrl) {
    return configuredSiteUrl.replace(/\/+$/, "");
  }

  const vercelProductionUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

  if (vercelProductionUrl) {
    return `https://${vercelProductionUrl.replace(/\/+$/, "")}`;
  }

  return fallbackSiteUrl;
}

export const siteConfig = {
  name: "HANAYU",
  displayName: "HANAYU 花嶼海洋",
  url: resolveSiteUrl(),
  locale: "zh_TW",
  language: "zh-Hant",
  defaultTitle: "HANAYU｜來自花嶼海域的精品海鮮",
  titleTemplate: "%s｜HANAYU",
  description:
    "HANAYU 專注於花嶼海域職人手釣劍尖槍鎖管，從上船處理、急速冷凍到精品包裝，完整呈現來自海洋的鮮度與價值。",
} as const;

export const pageSeo = {
  home: {
    path: "/",
    title: "HANAYU｜來自花嶼海域的精品海鮮",
    description:
      "HANAYU 專注於花嶼海域職人手釣劍尖槍鎖管，從上船處理、急速冷凍到精品包裝，完整呈現來自海洋的鮮度與價值。",
  },

  about: {
    path: "/about",
    title: "品牌故事",
    description:
      "認識 HANAYU 的品牌起源，以及我們對花嶼海域、職人手釣、海洋價值與精品海鮮品質的堅持。",
  },

  product: {
    path: "/product",
    title: "劍尖槍鎖管",
    description:
      "探索 HANAYU 花嶼海域劍尖槍鎖管。每年六月至九月由職人手釣，上船後立即處理並急速冷凍，完整保留天然鮮甜。",
  },

  fishing: {
    path: "/fishing",
    title: "職人手釣",
    description:
      "從花嶼夜釣、職人手釣到上船即時處理，了解 HANAYU 如何以尊重海洋的方式守護每一尾劍尖槍鎖管的鮮度。",
  },

  packaging: {
    path: "/packaging",
    title: "精品包裝",
    description:
      "了解 HANAYU 從真空急凍包裝到精品禮盒的設計理念，讓花嶼海域的鮮度與心意被完整送達。",
  },

  dining: {
    path: "/dining",
    title: "料理體驗",
    description:
      "探索劍尖槍鎖管的多元料理方式，從日式割烹、奶油香煎、炭火直烤到義式海鮮料理，呈現花嶼海域的天然鮮甜。",
  },
} as const;

export type SeoPageKey = keyof typeof pageSeo;