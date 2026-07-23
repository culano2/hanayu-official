import Reveal from "@/components/motion/Reveal";
import ImagePanel from "@/components/ui/ImagePanel";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SplitSection from "@/components/ui/SplitSection";

type StorySectionProps = {
  eyebrow: string;
  id: string;
  image: {
    alt: string;
    src: string;
  };
  imageFirst?: boolean;
  paragraphs: ReadonlyArray<string>;
  tone?: "dark" | "light";
  title: string;
};

export default function StorySection({
  eyebrow,
  id,
  image,
  imageFirst = false,
  paragraphs,
  tone = "light",
  title,
}: StorySectionProps) {
  const isLight = tone === "light";

  return (
    <Section id={id} tone={tone}>
      <SplitSection
        media={
          <Reveal variant="scale">
            <ImagePanel
              alt={image.alt}
              sizes="(min-width: 1024px) 48vw, 100vw"
              src={image.src}
              tone={isLight ? "light" : "dark"}
            />
          </Reveal>
        }
        mediaFirst={imageFirst}
        text={
          <Reveal delay={100}>
            <SectionHeader
              body={
                <div className="space-y-6">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              }
              eyebrow={eyebrow}
              heading={title}
              tone={isLight ? "dark" : "light"}
            />
          </Reveal>
        }
      />
    </Section>
  );
}

