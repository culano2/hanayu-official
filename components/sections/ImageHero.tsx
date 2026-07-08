import Image from "next/image";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Eyebrow from "@/components/ui/Eyebrow";
import PremiumButton from "@/components/ui/PremiumButton";
import Stat from "@/components/ui/Stat";

type ImageHeroProps = {
  body: string;
  eyebrow: string;
  imageAlt: string;
  imageSrc: string;
  metrics: ReadonlyArray<{ label: string; value: string }>;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
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
            loop
            muted
            playsInline
            poster={imageSrc}
            className="h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center soft-reveal"
          />
        )}
      </div>

      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_34%,rgba(200,154,75,0.14),transparent_32%),linear-gradient(90deg,rgba(3,19,32,0.9)_0%,rgba(3,19,32,0.66)_43%,rgba(3,19,32,0.2)_78%),linear-gradient(180deg,rgba(3,19,32,0.08)_0%,rgba(3,19,32,0.8)_100%)]"
        aria-hidden="true"
        data-hero-overlay
      />

      <Container className="flex min-h-[100svh] flex-col justify-end pb-9 pt-32 sm:pb-12 lg:pb-14">
        <div className="fade-up max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-6xl font-semibold leading-[0.88] tracking-[0.12em] text-white sm:text-8xl lg:text-9xl">
            {title}
          </h1>
          <Divider className="mt-7 max-w-24 bg-[#C89A4B]" />
          <p className="mt-7 max-w-2xl text-2xl font-semibold leading-9 text-white sm:text-4xl sm:leading-tight">
            {tagline}
          </p>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-white/86 sm:text-2xl sm:leading-9">
            {subtitle}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#F7F6F3] sm:text-xl sm:leading-9">
            {body}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PremiumButton href={primaryCta.href} size="lg" variant="primary">
              {primaryCta.label}
            </PremiumButton>
            <PremiumButton href={secondaryCta.href} size="lg" variant="secondary">
              {secondaryCta.label}
            </PremiumButton>
          </div>
        </div>

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

        <a
          href="#story"
          className="mt-7 inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-white/60 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89A4B]"
          aria-label="Scroll to brand story"
        >
          <span className="h-8 w-px bg-[#C89A4B]/70" aria-hidden="true" />
          Scroll
        </a>
      </Container>
    </section>
  );
}
