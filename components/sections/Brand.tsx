import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { brand } from "@/data/brand";

export default function Brand() {
  const { standard } = brand;

  return (
    <Section id={standard.id} className="border-t border-white/10" tone="dark">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Badge>{standard.eyebrow}</Badge>
            <Heading as="h2" className="mt-5 max-w-2xl">
              {standard.title}
            </Heading>
          </div>
          <p className="max-w-2xl text-lg leading-9 text-white/68">
            {standard.body}
          </p>
        </div>

        <div
          id={standard.anchorId}
          className="mt-16 grid gap-5 md:grid-cols-3"
          aria-label={`${brand.name} quality standards`}
        >
          {standard.items.map((item, index) => (
            <Card key={item.title} className="p-6" tone="dark">
              <p className="text-sm font-semibold text-[#C89A4B]">
                0{index + 1}
              </p>
              <Heading as="h3" className="mt-6" size="card">
                {item.title}
              </Heading>
              <p className="mt-4 leading-7 text-white/62">{item.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
