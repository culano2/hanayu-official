import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { brand } from "@/data/brand";

export default function WhyHuayu() {
  const { whyHuayu } = brand.story;

  return (
    <Section id={whyHuayu.id} tone="light">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <Badge tone="light">{whyHuayu.eyebrow}</Badge>
          <Heading as="h2" className="mt-5 max-w-xl" tone="dark">
            {whyHuayu.title}
          </Heading>
        </div>

        <div className="max-w-2xl space-y-6 text-lg leading-9 text-[#314756]">
          {whyHuayu.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
