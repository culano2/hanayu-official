import ImagePanel from "@/components/ui/ImagePanel";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SplitSection from "@/components/ui/SplitSection";
import { brand } from "@/data/brand";

export default function WhyHuayu() {
  const { whyHuayu } = brand.story;

  return (
    <Section id={whyHuayu.id} tone="light">
      <SplitSection
        media={
          <ImagePanel
            alt="Huayu Island coastline and fresh seafood at dawn"
            className="soft-reveal"
            sizes="(min-width: 1024px) 48vw, 100vw"
            src={brand.hero.media.imageSrc}
            tone="light"
          />
        }
        mediaFirst
        text={
          <SectionHeader
            body={
              <div className="space-y-6">
                {whyHuayu.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            }
            eyebrow={whyHuayu.eyebrow}
            heading={whyHuayu.title}
            tone="dark"
          />
        }
      />
    </Section>
  );
}
