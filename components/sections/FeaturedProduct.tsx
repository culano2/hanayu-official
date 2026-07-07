import Divider from "@/components/ui/Divider";
import ImagePanel from "@/components/ui/ImagePanel";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SplitSection from "@/components/ui/SplitSection";
import { brand } from "@/data/brand";

export default function FeaturedProduct() {
  const { featuredProduct } = brand.story;

  return (
    <Section id={featuredProduct.id} tone="deep">
      <SplitSection
        className="lg:grid-cols-[0.95fr_1.05fr]"
        media={
          <ImagePanel
            alt={featuredProduct.image.alt}
            className="soft-reveal lg:aspect-[5/4]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={featuredProduct.image.src}
          />
        }
        text={
          <div>
            <SectionHeader
              body={<p>{featuredProduct.body}</p>}
              eyebrow={featuredProduct.eyebrow}
              heading={featuredProduct.title}
            />

            <Divider className="my-10" />

            <dl className="grid gap-x-7 gap-y-5 sm:grid-cols-2">
              {featuredProduct.details.map((detail) => (
                <div key={detail.label} className="pt-1">
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
        }
      />
    </Section>
  );
}
