import TimelineSection from "@/components/common/TimelineSection";

export default function FreshnessTimeline() {
  return (
    <TimelineSection
      eyebrow="FRESHNESS PROCESS"
      title="從海洋到冷凍，只為保留最純粹的鮮甜。"
      items={[
        {
          title: "Night Fishing",
          description: "夜間職人手釣。",
        },
        {
          title: "On-board Processing",
          description: "捕撈後於船上立即處理。",
        },
        {
          title: "Vacuum Sealed",
          description: "整尾真空封裝。",
        },
        {
          title: "Flash Frozen",
          description: "急速冷凍，保留鮮度。",
        },
      ]}
    />
  );
}