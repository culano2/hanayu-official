import DiningSection from "@/components/dining/DiningSection";

export default function ButterSeared() {
  return (
    <DiningSection
      image="/images/dining/02_Butter_Seared.png"
      imageAlt="Butter-seared swordtip squid"
      eyebrow="BUTTER SEARED"
      title="奶油與海味，剛剛好的平衡。"
      paragraphs={[
        "以高溫快速煎封表面，保留劍尖槍鎖管原有的彈性與鮮甜。",
        "奶油只負責襯托，不掩蓋來自花嶼海域的風味。",
      ]}
    />
  );
}