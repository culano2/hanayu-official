import StorySection from "@/components/sections/StorySection";
import { brand } from "@/data/brand";

export default function NightFishing() {
  const { nightFishing } = brand.story;

  return (
    <StorySection
      eyebrow={nightFishing.eyebrow}
      id={nightFishing.id}
      image={nightFishing.image}
      paragraphs={nightFishing.paragraphs}
      title={nightFishing.title}
      tone="dark"
    />
  );
}
