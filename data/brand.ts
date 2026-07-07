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
      href: "#catch",
      label: "今日漁獲",
    },
    media: {
      imageSrc: "/images/hanayu-hero.png",
      imageAlt: "Fresh seafood on ice beside the Huayu Island coastline at dawn",
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
      image: {
        src: "/images/todays-catch.png",
        alt: "Fresh line-caught seafood on ice prepared for premium packaging",
      },
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
  },
  standard: {
    id: "brand",
    anchorId: "standard",
    eyebrow: "The HANAYU Standard",
    title: "以產地、季節與職人手感，建立 HANAYU 的品質標準。",
    body: "HANAYU 保留花嶼漁獲最真實的風味，也保留每一次出海背後的時間、判斷與耐心。這不是大量供應的品牌，而是對一季風味的專注。",
    items: [
      {
        title: "理解海域",
        body: "從花嶼海流、季節與夜釣節奏出發，讓產地成為品質判斷的一部分。",
      },
      {
        title: "尊重漁法",
        body: "以職人手釣保留漁獲完整度，不追求速度，而是追求穩定風味。",
      },
      {
        title: "清楚交付",
        body: "產品資訊、保存方式與食用建議保持透明，讓每一次選購都有依據。",
      },
    ],
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
