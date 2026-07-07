import Image from "next/image";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Eyebrow from "@/components/ui/Eyebrow";
import Stat from "@/components/ui/Stat";
import PremiumButton from "@/components/ui/PremiumButton";
import { brand } from "@/data/brand";

export default function Hero() {
  const { hero } = brand;

  return (
    <section className="relative isolate flex min-h-screen overflow-hidden bg-[#031320]">
      <div className="absolute inset-0 -z-20" data-hero-media>
        {hero.media.videoSrc ? (
          <video
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            poster={hero.media.imageSrc}
            className="h-full w-full object-cover"
          >
            <source src={hero.media.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={hero.media.imageSrc}
            alt={hero.media.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center soft-reveal"
          />
        )}
      </div>

      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_34%,rgba(200,154,75,0.18),transparent_30%),linear-gradient(90deg,rgba(3,19,32,0.98)_0%,rgba(3,19,32,0.82)_42%,rgba(3,19,32,0.24)_78%),linear-gradient(180deg,rgba(3,19,32,0.12)_0%,rgba(3,19,32,0.92)_100%)]"
        aria-hidden="true"
        data-hero-overlay
      />

      <Container className="flex min-h-screen flex-col justify-end pb-10 pt-32 sm:pb-14 lg:pb-16">
        <div className="fade-up max-w-4xl">
          <Eyebrow>{brand.eyebrow}</Eyebrow>
          <h1 className="mt-6 text-6xl font-semibold leading-[0.88] tracking-[0.12em] text-white sm:text-8xl lg:text-9xl">
            {hero.title}
          </h1>
          <Divider className="mt-7 max-w-24 bg-[#C89A4B]" />
          <p className="mt-7 max-w-3xl text-2xl font-semibold leading-9 text-white sm:text-4xl sm:leading-tight">
            {hero.subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-[#F7F6F3] sm:text-2xl sm:leading-10">
            {hero.body}
          </p>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <PremiumButton href={hero.primaryCta.href} size="lg" variant="primary">
              {hero.primaryCta.label}
            </PremiumButton>
            <PremiumButton
              href={hero.secondaryCta.href}
              size="lg"
              variant="secondary"
            >
              {hero.secondaryCta.label}
            </PremiumButton>
          </div>
        </div>

        <dl className="mt-14 grid max-w-4xl grid-cols-1 border-y border-white/14 sm:grid-cols-3">
          {hero.metrics.map((metric) => (
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
          className="mt-8 inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-white/56 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89A4B]"
          aria-label="Scroll to brand story"
        >
          <span className="h-8 w-px bg-[#C89A4B]/70" aria-hidden="true" />
          Scroll
        </a>
      </Container>
    </section>
  );
}
