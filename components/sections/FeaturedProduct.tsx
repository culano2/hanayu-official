import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { brand } from "@/data/brand";

export default function FeaturedProduct() {
  const { featuredProduct } = brand.story;

  return (
    <Section id={featuredProduct.id} tone="deep">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Badge>{featuredProduct.eyebrow}</Badge>
          <Heading as="h2" className="mt-5 max-w-2xl">
            {featuredProduct.title}
          </Heading>
          <p className="mt-6 max-w-xl text-lg leading-9 text-white/68">
            {featuredProduct.body}
          </p>

          <dl className="mt-10 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {featuredProduct.details.map((detail) => (
              <div
                key={detail.label}
                className="border-t border-white/12 pt-4"
              >
                <dt className="text-sm font-semibold text-[#C89A4B]">
                  {detail.label}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-white/68">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Card className="p-0" tone="dark">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#031320]">
            <Image
              src={featuredProduct.image.src}
              alt={featuredProduct.image.alt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        </Card>
      </Container>
    </Section>
  );
}
