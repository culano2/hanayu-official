import ImageHero from "@/components/sections/ImageHero";
import { brand } from "@/data/brand";

export default function Hero() {
  const { hero } = brand;

  return (
    <ImageHero
      body={hero.body}
      eyebrow={brand.eyebrow}
      imageAlt={hero.media.imageAlt}
      imageSrc={hero.media.imageSrc}
      metrics={hero.metrics}
      primaryCta={hero.primaryCta}
      secondaryCta={hero.secondaryCta}
      subtitle={hero.subtitle}
      tagline={hero.tagline}
      title={hero.title}
      videoSrc={hero.media.videoSrc}
    />
  );
}
