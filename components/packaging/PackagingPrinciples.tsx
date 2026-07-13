import TimelineSection from "@/components/common/TimelineSection";

export default function PackagingPrinciples() {
  return (
    <TimelineSection
      eyebrow="PACKAGING PRINCIPLES"
      title="每一層包裝，都有它存在的理由。"
      variant="dark"
      items={[
        {
          title: "Protect",
          description: "保護整尾劍尖槍鎖管的完整與品質。",
        },
        {
          title: "Preserve",
          description: "真空封裝與急速冷凍，延續鮮度。",
        },
        {
          title: "Present",
          description: "以精品禮盒呈現花嶼海域的價值。",
        },
        {
          title: "Share",
          description: "讓每一次送禮，都成為值得記住的體驗。",
        },
      ]}
    />
  );
}