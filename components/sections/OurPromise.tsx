import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { brand } from "@/data/brand";

export default function OurPromise() {
  const { promise } = brand.story;

  return (
    <Section id={promise.id} tone="light">
      <Container>
        <div className="max-w-2xl">
          <Badge tone="light">{promise.eyebrow}</Badge>
          <Heading as="h2" className="mt-5" tone="dark">
            {promise.title}
          </Heading>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promise.items.map((item, index) => (
            <Card key={item.title} className="min-h-56 p-6">
              <p className="text-sm font-semibold text-[#9B7333]">
                0{index + 1}
              </p>
              <Heading as="h3" className="mt-6" size="card" tone="dark">
                {item.title}
              </Heading>
              <p className="mt-4 text-sm leading-7 text-[#506474]">
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
