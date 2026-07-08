import Image from "next/image";
import BrandDivider from "@/components/ui/BrandDivider";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import SectionTitle from "@/components/ui/SectionTitle";
import Tagline from "@/components/ui/Tagline";

type ProductHeroProps = {
  eyebrow: string;
  headline: string;
  image: {
    alt: string;
    src: string;
  };
  primaryCta: {
    href: string;
    label: string;
  };
  secondaryCta: {
    href: string;
    label: string;
  };
  subheadline: string;
};

export default function ProductHero({
  eyebrow,
  headline,
  image,
  primaryCta,
  secondaryCta,
  subheadline,
}: ProductHeroProps) {
  return (
    <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#031320]">
      <Image
        alt={image.alt}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center soft-reveal"
        fill
        priority
        sizes="100vw"
        src={image.src}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_30%,rgba(200,154,75,0.16),transparent_30%),linear-gradient(90deg,rgba(3,19,32,0.92)_0%,rgba(3,19,32,0.68)_42%,rgba(3,19,32,0.2)_82%),linear-gradient(180deg,rgba(3,19,32,0.06)_0%,rgba(3,19,32,0.78)_100%)]"
      />

      <Container className="flex min-h-[100svh] flex-col justify-end pb-12 pt-32 sm:pb-16 lg:pb-20">
        <div className="fade-up max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle as="h1" className="mt-7 max-w-4xl" size="page" tone="light">
            {headline}
          </SectionTitle>
          <BrandDivider className="mt-8" />
          <Tagline className="mt-8 max-w-2xl" size="lg" tone="light">
            {subheadline}
          </Tagline>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={primaryCta.href} size="lg">
              {primaryCta.label}
            </PrimaryButton>
            <SecondaryButton href={secondaryCta.href} size="lg">
              {secondaryCta.label}
            </SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
