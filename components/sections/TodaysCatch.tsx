import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Stat from "@/components/ui/Stat";
import { todaysCatch } from "@/data/catch";

export default function TodaysCatch() {
  return (
    <Section id={todaysCatch.id} tone="light">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <Badge tone="light">{todaysCatch.eyebrow}</Badge>
            <Heading as="h2" className="mt-5 max-w-xl" tone="dark">
              {todaysCatch.title}
            </Heading>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#314756]">
              {todaysCatch.body}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-4 border-y border-[#031320]/15 py-6">
            {todaysCatch.stats.map((stat) => (
              <Stat key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </dl>
        </div>

        <div className="grid gap-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#031320]">
            <Image
              src={todaysCatch.image.src}
              alt={todaysCatch.image.alt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {todaysCatch.items.map((item) => (
              <Card key={item.name}>
                <Badge className="tracking-[0.22em]" tone="light">
                  {item.status}
                </Badge>
                <Heading as="h3" className="mt-4" size="card" tone="dark">
                  {item.name}
                </Heading>
                <p className="mt-3 text-sm leading-6 text-[#506474]">
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
