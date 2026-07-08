export const brandAssets = {
  huayuSunset: {
    src: "/images/huayu/01-02_Huayu_Sunset.png",
    alt: "Huayu Island coastline at sunset with deep ocean color",
  },
  huayuCliffs: {
    src: "/images/huayu/01-03_Huayu_Cliffs.png",
    alt: "Rock cliffs and ocean around Huayu Island",
  },
  harborBoat: {
    src: "/images/harbor/02-01_Fishing_Boat_Harbor.png",
    alt: "Fishing boat resting in a quiet island harbor",
  },
  nightFishingBoat: {
    src: "/images/night-fishing/03-02_Night_Fishing_Boat.png",
    alt: "Fishing boat working at night near Huayu Island",
  },
  productHero: {
    src: "/images/product/04-01_Product_Hero.png",
    alt: "HANAYU swordtip squid product presented on ice",
  },
  productDetail: {
    src: "/images/product/04-03_Product_Detail.png",
    alt: "Close detail of premium seafood prepared for frozen packaging",
  },
  oceanRocks: {
    src: "/images/ocean/06-02_Ocean_Waves_On_Rocks.png",
    alt: "Ocean waves breaking over dark coastal rocks",
  },
  underwaterLight: {
    src: "/images/ocean/06-03_Underwater_Light_Beams.png",
    alt: "Soft underwater light beams in deep ocean water",
  },
} as const;

export const brand = {
  name: "HANAYU",
  origin: "Huayu Island",
  eyebrow: "FROM HUAYU ISLAND",
  homeHref: "/",
  hero: {
    title: "HANAYU",
    subtitle: "花嶼海域．職人手釣．劍尖槍鎖管",
    body: "一年只有一季，值得等待。每一尾，都由職人親手釣起。",
    primaryCta: {
      href: "#story",
      label: "探索品牌故事",
    },
    secondaryCta: {
      href: "#featured-product",
      label: "產品介紹",
    },
    media: {
      imageSrc: brandAssets.huayuSunset.src,
      imageAlt: brandAssets.huayuSunset.alt,
      videoSrc: undefined as string | undefined,
    },
    metrics: [
      { value: "6-9 月", label: "捕撈季節" },
      { value: "手釣", label: "漁法" },
      { value: "-18°C", label: "冷凍保存" },
    ],
  },
  story: {
    whyHuayu: {
      id: "story",
      eyebrow: "Origin",
      title: "為什麼是花嶼？",
      paragraphs: [
        "花嶼，不只是產地，更是 HANAYU 品牌開始的地方。",
        "特殊海流與夜釣文化，孕育出一年僅一季的劍尖槍鎖管。",
        "對 HANAYU 而言，真正的品質，來自對海洋的理解，也來自對每一尾漁獲的尊重。",
      ],
      image: brandAssets.huayuCliffs,
    },
    harbor: {
      id: "harbor",
      eyebrow: "Harbor Story",
      title: "從港口開始的風味",
      body: "清晨的港口，是 HANAYU 與花嶼海域相遇的第一站。船隻、海風與等待，都讓一季的漁獲有了清楚的時間感。",
      image: brandAssets.harborBoat,
    },
    nightFishing: {
      id: "night-fishing",
      eyebrow: "Night Fishing",
      title: "職人夜釣",
      paragraphs: [
        "夜幕降臨，真正的工作才開始。",
        "一尾一尾親手釣起，不追求速度，而是專注於品質。",
        "每一次出海，都承載著對海洋的尊重。",
      ],
      image: brandAssets.nightFishingBoat,
    },
    promise: {
      id: "promise",
      eyebrow: "Promise",
      title: "我們的承諾",
      items: [
        {
          title: "職人手釣",
          body: "以人工手釣方式選擇漁獲，保留每一尾的完整狀態。",
        },
        {
          title: "船上立即處理",
          body: "捕撈後即時整理與低溫控管，縮短品質流失的時間。",
        },
        {
          title: "真空急速冷凍",
          body: "以真空包裝與急速冷凍保存花嶼海域的風味。",
        },
        {
          title: "一年僅有一季",
          body: "尊重季節與海況，不以全年供應稀釋產地價值。",
        },
      ],
    },
    featuredProduct: {
      id: "featured-product",
      eyebrow: "Featured Product",
      title: "花嶼海域職人手釣劍尖槍鎖管",
      body: "一年只有一季，只為保留花嶼海域最好的風味。1kg 真空急速冷凍包裝。3kg 以上提供 Premium Gift Box 禮盒包裝。",
      image: brandAssets.productHero,
      detailImage: brandAssets.productDetail,
      details: [
        { label: "捕撈季節", value: "每年 6 月至 9 月" },
        { label: "產地", value: "澎湖花嶼海域" },
        { label: "漁法", value: "職人手釣" },
        { label: "包裝", value: "1kg 真空急速冷凍" },
        { label: "保存", value: "-18°C 以下冷凍保存" },
        { label: "保存期限", value: "12 個月" },
        { label: "最佳賞味期", value: "1 個月內" },
        {
          label: "食用建議",
          value: "建議充分加熱後食用，不建議生食",
        },
      ],
    },
    ocean: {
      id: "ocean",
      eyebrow: "Ocean Atmosphere",
      title: "海流、岩岸與光",
      body: "花嶼的風味不是被製造出來的，而是由海流、岩岸、季節與職人的等待共同形成。",
      image: brandAssets.oceanRocks,
      secondaryImage: brandAssets.underwaterLight,
    },
  },
  footer: {
    id: "contact",
    description:
      "Premium seafood from Huayu Island for chefs, retailers, and guests who value origin, handling, and restraint.",
    company: ["HANAYU Seafood Co.", "Huayu Island, Penghu", "Taiwan"],
    contactEmail: "hello@hanayu.example",
    social: [
      { label: "Instagram", href: "#" },
      { label: "Line", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
} as const;
