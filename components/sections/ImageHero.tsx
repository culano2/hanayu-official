import FadeIn from "@/components/motion/FadeIn";
import FadeUp from "@/components/motion/FadeUp";
import HeroScrollImage from "@/components/motion/HeroScrollImage";
import BrandDivider from "@/components/ui/BrandDivider";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import SectionTitle from "@/components/ui/SectionTitle";
import Stat from "@/components/ui/Stat";
import Tagline from "@/components/ui/Tagline";

type ImageHeroProps = {
  body: string;
  eyebrow: string;
  imageAlt: string;
  imageSrc: string;
  metrics: ReadonlyArray<{
    label: string;
    value: string;
  }>;
  primaryCta: {
    href: string;
    label: string;
  };
  secondaryCta: {
    href: string;
    label: string;
  };
  subtitle: string;
  tagline: string;
  title: string;
  videoSrc?: string;
};

export default function ImageHero({
  body,
  eyebrow,
  imageAlt,
  imageSrc,
  metrics,
  primaryCta,
  secondaryCta,
  subtitle,
  tagline,
  title,
  videoSrc,
}: ImageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#031320]">
      <div className="absolute inset-0 -z-20" data-hero-media>
        {videoSrc ? (
          <video
            aria-hidden="true"
            autoPlay
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
            poster={imageSrc}
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <HeroScrollImage
            src={imageSrc}
            alt={imageAlt}
            priority
            sizes="100vw"
            imageClassName="object-cover object-center"
          />
        )}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_34%,rgba(200,154,75,0.14),transparent_32%),linear-gradient(90deg,rgba(3,19,32,0.9)_0%,rgba(3,19,32,0.66)_43%,rgba(3,19,32,0.2)_78%),linear-gradient(180deg,rgba(3,19,32,0.08)_0%,rgba(3,19,32,0.8)_100%)]"
        data-hero-overlay
      />

      <Container className="flex min-h-[100svh] flex-col justify-end pb-9 pt-32 sm:pb-12 lg:pb-14">
        <div className="max-w-3xl">
          <FadeUp duration={820}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </FadeUp>

          <FadeUp delay={120} duration={860}>
            <SectionTitle
              as="h1"
              className="mt-6"
              size="hero"
              tone="light"
            >
              {title}
            </SectionTitle>
          </FadeUp>

          <FadeIn delay={220} duration={820}>
            <BrandDivider className="mt-7" />
          </FadeIn>

          <FadeUp delay={260} duration={860}>
            <Tagline className="mt-7 max-w-2xl" size="lg" tone="light">
              {tagline}
            </Tagline>
          </FadeUp>

          <FadeUp delay={340} duration={820}>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-white/86 sm:text-2xl sm:leading-9">
              {subtitle}
            </p>
          </FadeUp>

          <FadeUp delay={420} duration={820}>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#F7F6F3] sm:text-xl sm:leading-9">
              {body}
            </p>
          </FadeUp>

          <FadeUp delay={520} duration={780}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={primaryCta.href} size="lg">
                {primaryCta.label}
              </PrimaryButton>

              <SecondaryButton href={secondaryCta.href} size="lg">
                {secondaryCta.label}
              </SecondaryButton>
            </div>
          </FadeUp>
        </div>

        <FadeIn delay={620} duration={900}>
          <dl className="mt-12 grid max-w-3xl grid-cols-1 border-y border-white/14 sm:grid-cols-3">
            {metrics.map((metric) => (
              <Stat
                key={metric.label}
                className="border-white/14 py-5 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
                label={metric.label}
                size="sm"
                tone="dark"
                value={metric.value}
              />
            ))}
          </dl>
        </FadeIn>

        <a
          href="#story"
          className="mt-7 inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-white/60 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89A4B]"
          aria-label="Scroll to brand story"
        >
          <span
            className="h-8 w-px bg-[#C89A4B]/70"
            aria-hidden="true"
          />

          Scroll
        </a>
      </Container>
    </section>
  );
}
