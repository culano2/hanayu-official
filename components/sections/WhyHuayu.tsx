import StorySection from "@/components/sections/StorySection";
import { brand } from "@/data/brand";

export default function WhyHuayu() {
  const { whyHuayu } = brand.story;

  return (
    <StorySection
      eyebrow={whyHuayu.eyebrow}
      id={whyHuayu.id}
      image={whyHuayu.image}
      imageFirst
      paragraphs={whyHuayu.paragraphs}
      title={whyHuayu.title}
      tone="light"
    />
  );
}
