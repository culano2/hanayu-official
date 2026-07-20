export const brandAssets = {
  huayuAerial: {
    src: "/images/huayu/01-01_Huayu_Aerial.png",
    alt: "Aerial view of Huayu Island and surrounding sea",
  },
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
  boatDeckSunrise: {
    src: "/images/harbor/02-02_Boat_Deck_Sunrise.png",
    alt: "Fishing boat deck at sunrise after returning to harbor",
  },
  nightPort: {
    src: "/images/harbor/02-03_Night_Port.png",
    alt: "Quiet fishing port at night before departure",
  },
  artisanFisherman: {
    src: "/images/night-fishing/03-01_Artisan_Fisherman.png",
    alt: "Artisan fisherman lifting a swordtip squid during night fishing",
  },
  nightFishingBoat: {
    src: "/images/night-fishing/03-02_Night_Fishing_Boat.png",
    alt: "Fishing boat working at night near Huayu Island",
  },
  squidOnLine: {
    src: "/images/night-fishing/03-03_Squid_On_Line.png",
    alt: "Swordtip squid caught by line during night fishing",
  },
  productHero: {
    src: "/images/product/04-01_Product_Hero.png",
    alt: "HANAYU swordtip squid product presented on ice",
  },
  threeSquids: {
    src: "/images/product/04-02_Three_Squids.png",
    alt: "Three premium swordtip squid arranged for product display",
  },
  productDetail: {
    src: "/images/product/04-03_Product_Detail.png",
    alt: "Close detail of premium seafood prepared for frozen packaging",
  },
  premiumGiftBox: {
    src: "/images/packaging/05-01_Premium_Gift_Box.png",
    alt: "HANAYU premium gift box packaging",
  },
  vacuumPackage: {
    src: "/images/packaging/05-02_Vacuum_Package.png",
    alt: "HANAYU vacuum frozen package",
  },
  giftBoxOpen: {
    src: "/images/packaging/05-03_Gift_Box_Open.png",
    alt: "Open HANAYU gift box packaging",
  },
  huayuSunriseSeascape: {
    src: "/images/ocean/06-01_Huayu_Sunrise_Seascape.png",
    alt: "Sunrise seascape around Huayu Island",
  },
  oceanRocks: {
    src: "/images/ocean/06-02_Ocean_Waves_On_Rocks.png",
    alt: "Ocean waves breaking over dark coastal rocks",
  },
  underwaterLight: {
    src: "/images/ocean/06-03_Underwater_Light_Beams.png",
    alt: "Soft underwater light beams in deep ocean water",
  },
  oceanSquidGlow: {
    src: "/images/ocean/06-04_Ocean_Squid_Glow.png",
    alt: "Glowing swordtip squid swimming in the deep blue ocean",
  },
  oceanCurrentLight: {
    src: "/images/ocean/06-05_Ocean_Current_Light.png",
    alt: "Deep ocean currents illuminated by sunlight beneath Huayu waters",
  },
  brandIdentityHero: {
    src: "/images/brand/Brand_Identity_Hero.png",
    alt: "HANAYU brand identity featuring the logo and premium seafood tagline",
  },
} as const;

export const brandMessaging = {
  tagline: "把海鮮，做成精品。",
  promise: "一年只有一季，值得等待。",
  craftMessage: "每一尾，都由職人親手釣起。",
  position: "台灣精品海鮮品牌，\n來自澎湖花嶼海域。",
} as const;

export const brand = {
  name: "HANAYU",
  origin: "Huayu Island",
  eyebrow: "FROM HUAYU ISLAND",
  homeHref: "/",

  hero: {
    title: "HANAYU",
    tagline: brandMessaging.tagline,
    subtitle: "花嶼海域．職人手釣．劍尖槍鎖管",
    body: brandMessaging.promise,

    primaryCta: {
      href: "#story",
      label: "探索品牌故事",
    },

    secondaryCta: {
      href: "#featured-product",
      label: "今日漁獲",
    },

    media: {
      imageSrc: brandAssets.huayuSunset.src,
      imageAlt: brandAssets.huayuSunset.alt,
      videoSrc: undefined as string | undefined,
    },

    metrics: [
      {
        value: "6-9 月",
        label: "捕撈季節",
      },
      {
        value: "手釣",
        label: "漁法",
      },
      {
        value: "-18°C",
        label: "保存溫度",
      },
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
      title: "從港口開始的等待",
      body: "清晨的港口，是 HANAYU 對品質承諾的第一個現場。船隻、漁具與時間都被謹慎準備，為的是讓每一批漁獲從出海之前，就被好好對待。",
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
      image: brandAssets.artisanFisherman,
    },

    promise: {
      id: "promise",
      eyebrow: "Promise",
      title: "我們的承諾",
      image: brandAssets.brandIdentityHero,
      items: [
        {
          title: "職人手釣",
          body: "由熟悉海況的漁人親手釣起，降低損傷，保留漁獲完整狀態。",
        },
        {
          title: "船上立即處理",
          body: "捕撈後立即整理與控溫，讓鮮度從第一時間開始被守住。",
        },
        {
          title: "真空急速冷凍",
          body: "以真空包裝與急速冷凍保存風味，讓產地品質穩定抵達餐桌。",
        },
        {
          title: "一年僅有一季",
          body: "尊重季節與海洋節奏，只在最適合的時間提供。",
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
        {
          label: "捕撈季節",
          value: "每年 6 月至 9 月",
        },
        {
          label: "產地",
          value: "澎湖花嶼海域",
        },
        {
          label: "漁法",
          value: "職人手釣",
        },
        {
          label: "包裝",
          value: "1kg 真空急速冷凍",
        },
        {
          label: "保存",
          value: "-18°C 以下冷凍保存",
        },
        {
          label: "保存期限",
          value: "12 個月",
        },
        {
          label: "最佳賞味期",
          value: "1 個月內",
        },
        {
          label: "食用建議",
          value: "建議充分加熱後食用，不建議生食",
        },
      ],
    },

    ocean: {
      id: "ocean",
      eyebrow: "Ocean Atmosphere",
      title: "海流留下的風味",
      body: "花嶼的海，不只是背景。它決定了季節、光線與漁獲的節奏，也讓劍尖槍鎖管擁有乾淨而鮮明的產地個性。",
      image: brandAssets.oceanSquidGlow,
      secondaryImage: brandAssets.oceanCurrentLight,
    },
  },

  footer: {
    id: "contact",
    description:
      "Premium seafood from Huayu Island for chefs, retailers, and guests who value origin, handling, and restraint.",

    company: [
      "HANAYU Seafood Co.",
      "Huayu Island, Penghu",
      "Taiwan",
    ],

    contactEmail: "hello@hanayu.example",

    social: [
      {
        label: "Instagram",
        href: "#",
      },
      {
        label: "Line",
        href: "#",
      },
      {
        label: "YouTube",
        href: "#",
      },
    ],
  },
} as const;
