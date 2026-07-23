import Reveal from "@/components/motion/Reveal";
import Divider from "@/components/ui/Divider";
import ImagePanel from "@/components/ui/ImagePanel";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SplitSection from "@/components/ui/SplitSection";

type ProductHighlightProps = {
  body: string;
  detailImage: {
    alt: string;
    src: string;
  };
  details: ReadonlyArray<{
    label: string;
    value: string;
  }>;
  eyebrow: string;
  id: string;
  image: {
    alt: string;
    src: string;
  };
  title: string;
};

export default function ProductHighlight({
  body,
  detailImage,
  details,
  eyebrow,
  id,
  image,
  title,
}: ProductHighlightProps) {
  return (
    <Section id={id} tone="deep">
      <SplitSection
        className="lg:grid-cols-[0.95fr_1.05fr]"
        media={
          <div className="grid gap-5">
            <Reveal variant="scale">
              <ImagePanel
                alt={image.alt}
                className="lg:aspect-[5/4]"
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={image.src}
              />
            </Reveal>

            <Reveal variant="scale" delay={100}>
              <ImagePanel
                alt={detailImage.alt}
                className="aspect-[16/9]"
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={detailImage.src}
              />
            </Reveal>
          </div>
        }
        text={
          <div>
            <Reveal>
              <SectionHeader
                body={<p>{body}</p>}
                eyebrow={eyebrow}
                heading={title}
              />
            </Reveal>

            <Reveal delay={100}>
              <Divider className="my-10" />
            </Reveal>

            <dl className="grid gap-x-7 gap-y-5 sm:grid-cols-2">
              {details.map((detail, index) => (
                <Reveal
                  key={detail.label}
                  as="div"
                  delay={index % 2 === 0 ? 200 : 300}
                  className="pt-1"
                >
                  <dt className="text-sm font-semibold text-[#C89A4B]">
                    {detail.label}
                  </dt>

                  <dd className="mt-2 text-sm leading-6 text-white/68">
                    {detail.value}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        }
      />
    </Section>
  );
}
