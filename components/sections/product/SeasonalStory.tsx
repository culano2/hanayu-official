import BrandDivider from "@/components/ui/BrandDivider";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

type SeasonalStoryProps = {
  body: string;
  eyebrow: string;
  id: string;
  title: string;
};

export default function SeasonalStory({
  body,
  eyebrow,
  id,
  title,
}: SeasonalStoryProps) {
  return (
    <Section id={id} tone="dark">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle className="mt-6" size="section" tone="light">
            {title}
          </SectionTitle>
          <BrandDivider className="mx-auto mt-8" />
          <p className="mt-8 text-base leading-8 text-white/72 sm:text-lg sm:leading-9">
            {body}
          </p>
        </div>
      </Container>
    </Section>
  );
}
