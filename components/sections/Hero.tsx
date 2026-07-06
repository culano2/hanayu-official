import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
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
            className="object-cover object-center"
          />
        )}
      </div>

      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,19,32,0.96)_0%,rgba(3,19,32,0.78)_38%,rgba(3,19,32,0.22)_76%),linear-gradient(180deg,rgba(3,19,32,0.18)_0%,rgba(3,19,32,0.88)_100%)]"
        aria-hidden="true"
        data-hero-overlay
      />

      <Container className="flex min-h-screen flex-col justify-end pb-12 pt-32 sm:pb-16 lg:pb-20">
        <div className="max-w-4xl">
          <Badge>{brand.eyebrow}</Badge>
          <Heading as="h1" className="mt-6" size="hero">
            {hero.title}
          </Heading>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[#F7F6F3] sm:text-2xl sm:leading-10">
            {hero.body}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} size="lg" variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} size="lg" variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <dl className="mt-14 grid max-w-4xl grid-cols-1 border-y border-white/14 sm:grid-cols-3">
          {hero.metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-white/14 py-5 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <dt className="text-sm leading-6 text-white/62">{metric.label}</dt>
              <dd className="mt-2 text-2xl font-semibold tracking-[0.04em] text-white">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
