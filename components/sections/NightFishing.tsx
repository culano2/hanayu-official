import ImagePanel from "@/components/ui/ImagePanel";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SplitSection from "@/components/ui/SplitSection";
import { brand } from "@/data/brand";

export default function NightFishing() {
  const { nightFishing } = brand.story;

  return (
    <Section id={nightFishing.id} tone="dark">
      <SplitSection
        media={
          <ImagePanel
            alt="Fishing boat near the Huayu Island coastline at dawn"
            className="soft-reveal"
            sizes="(min-width: 1024px) 48vw, 100vw"
            src={brand.hero.media.imageSrc}
          />
        }
        text={
          <SectionHeader
            body={
              <div className="space-y-5">
                {nightFishing.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            }
            eyebrow={nightFishing.eyebrow}
            heading={nightFishing.title}
          />
        }
      />
    </Section>
  );
}
