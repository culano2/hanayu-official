import DiningSection from "@/components/dining/DiningSection";

export default function JapaneseStyle() {
  return (
    <DiningSection
      image="/images/dining/01_Japanese_Style.png"
      imageAlt="Japanese-style swordtip squid"
      eyebrow="JAPANESE STYLE"
      title="最好的料理，來自最少的修飾。"
      paragraphs={[
        "保留劍尖槍鎖管最自然的鮮甜，以最簡單的調味，呈現花嶼海域最真實的風味。",
        "真正頂級的食材，不需要過度堆疊，只需要尊重它原本的樣貌。",
      ]}
    />
  );
}