import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import ImagePanel from "@/components/ui/ImagePanel";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { brand } from "@/data/brand";

export default function OurPromise() {
  const { promise } = brand.story;

  return (
    <Section id={promise.id} tone="light">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader
            className="max-w-2xl"
            eyebrow={promise.eyebrow}
            heading={promise.title}
            tone="dark"
          />
          <ImagePanel
            alt={promise.image.alt}
            className="soft-reveal aspect-[16/9]"
            overlay={false}
            sizes="(min-width: 1024px) 58vw, 100vw"
            src={promise.image.src}
            tone="light"
          />
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promise.items.map((item, index) => (
            <Card key={item.title} className="min-h-64 p-7">
              <p className="text-sm font-semibold text-[#9B7333]">
                0{index + 1}
              </p>
              <Heading as="h3" className="mt-8" size="card" tone="dark">
                {item.title}
              </Heading>
              <p className="mt-5 text-sm leading-7 text-[#506474]">
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
