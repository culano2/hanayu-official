import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { brand } from "@/data/brand";

export default function NightFishing() {
  const { nightFishing } = brand.story;

  return (
    <Section id={nightFishing.id} tone="dark">
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#020B12] lg:order-last">
          <Image
            src={brand.hero.media.imageSrc}
            alt="Fishing boat near the Huayu Island coastline at dawn"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,19,32,0.08)_0%,rgba(3,19,32,0.42)_100%)]"
            aria-hidden="true"
          />
        </div>

        <div>
          <Badge>{nightFishing.eyebrow}</Badge>
          <Heading as="h2" className="mt-5 max-w-xl">
            {nightFishing.title}
          </Heading>
          <div className="mt-7 max-w-xl space-y-5 text-lg leading-9 text-white/68">
            {nightFishing.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
