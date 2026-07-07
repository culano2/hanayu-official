import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import ImagePanel from "@/components/ui/ImagePanel";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Stat from "@/components/ui/Stat";
import { todaysCatch } from "@/data/catch";

export default function TodaysCatch() {
  return (
    <Section id={todaysCatch.id} tone="light">
      <Container className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            body={<p>{todaysCatch.body}</p>}
            eyebrow={todaysCatch.eyebrow}
            heading={todaysCatch.title}
            tone="dark"
          />

          <dl className="mt-10 grid grid-cols-2 gap-4 border-y border-[#031320]/12 py-6">
            {todaysCatch.stats.map((stat) => (
              <Stat key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </dl>
        </div>

        <div className="grid gap-5">
          <ImagePanel
            alt={todaysCatch.image.alt}
            className="soft-reveal"
            overlay={false}
            sizes="(min-width: 1024px) 56vw, 100vw"
            src={todaysCatch.image.src}
            tone="light"
          />

          <div className="grid gap-3 md:grid-cols-3">
            {todaysCatch.items.map((item) => (
              <Card key={item.name} className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9B7333]">
                  {item.status}
                </p>
                <Heading as="h3" className="mt-5" size="card" tone="dark">
                  {item.name}
                </Heading>
                <p className="mt-4 text-sm leading-7 text-[#506474]">
                  {item.detail}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
