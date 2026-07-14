import DiningSection from "@/components/dining/DiningSection";

export default function CharcoalGrill() {
  return (
    <DiningSection
      image="/images/dining/03_Charcoal_Grill.png"
      imageAlt="Charcoal-grilled swordtip squid"
      eyebrow="CHARCOAL GRILL"
      title="炭火，讓海味更有層次。"
      paragraphs={[
        "以炭火直烤，讓表面微微焦香，內裡仍保留柔嫩與彈性。",
        "不需要複雜醬料，一點海鹽，就足以讓風味完整展開。",
      ]}
    />
  );
}