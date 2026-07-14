import DiningSection from "@/components/dining/DiningSection";

export default function SeafoodPasta() {
  return (
    <DiningSection
      image="/images/dining/04_Seafood_Pasta.png"
      imageAlt="Seafood pasta with swordtip squid"
      eyebrow="SEAFOOD PASTA"
      title="讓海洋，成為整道料理的靈魂。"
      paragraphs={[
        "新鮮的劍尖槍鎖管，與橄欖油、蒜香及義大利麵完美融合，展現自然鮮甜與細緻口感。",
        "每一道料理，都值得最好的食材。",
      ]}
    />
  );
}