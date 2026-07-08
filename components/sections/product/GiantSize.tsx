import Image from "next/image";
import BrandDivider from "@/components/ui/BrandDivider";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

type GiantSizeProps = {
  body: string;
  eyebrow: string;
  headline: string;
  id: string;
  image: {
    alt: string;
    src: string;
  };
};

export default function GiantSize({
  body,
  eyebrow,
  headline,
  id,
  image,
}: GiantSizeProps) {
  return (
    <Section id={id} tone="light">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[#031320]/10 bg-[#D8DEE2] shadow-[0_28px_90px_rgba(3,19,32,0.18)] sm:aspect-[16/11] lg:aspect-[4/5]">
            <Image
              alt={image.alt}
              className="h-full w-full object-cover object-center soft-reveal transition-transform duration-700 hover:scale-[1.025]"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              src={image.src}
            />
          </div>

          <div className="max-w-xl">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <SectionTitle className="mt-6" size="section" tone="dark">
              {headline}
            </SectionTitle>
            <BrandDivider className="mt-8" tone="gold" />
            <p className="mt-8 text-base leading-8 text-[#314756] sm:text-lg sm:leading-9">
              {body}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
