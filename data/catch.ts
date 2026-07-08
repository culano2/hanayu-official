import { brandAssets } from "@/data/brand";

export const todaysCatch = {
  id: "catch",
  eyebrow: "Today's Catch",
  title: "今日漁獲",
  body: "一年僅有一季的花嶼海域劍尖槍鎖管，以職人手釣、船上即時處理與真空急速冷凍，保留最接近產地的風味。",
  image: brandAssets.productDetail,
  stats: [
    { value: "6-9 月", label: "捕撈季節" },
    { value: "1kg", label: "真空冷凍包裝" },
  ],
  items: [
    {
      name: "劍尖槍鎖管",
      detail: "花嶼海域職人手釣，肉質細緻，適合充分加熱料理。",
      status: "Seasonal",
    },
    {
      name: "Premium Gift Box",
      detail: "3kg 以上提供禮盒包裝，適合作為季節性贈禮。",
      status: "Gift",
    },
    {
      name: "急速冷凍保存",
      detail: "-18°C 以下冷凍保存，最佳賞味期建議 1 個月內。",
      status: "Frozen",
    },
  ],
} as const;
