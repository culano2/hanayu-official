import Image from "next/image";

import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Eyebrow from "@/components/ui/Eyebrow";

type OceanBannerProps = {
  body: string;
  eyebrow: string;
  id: string;
  image: {
    alt: string;
    src: string;
  };
  secondaryImage: {
    alt: string;
    src: string;
  };
  title: string;
};

export default function OceanBanner({
  body,
  eyebrow,
  id,
  image,
  secondaryImage,
  title,
}: OceanBannerProps) {
  return (
    <section
      id={id}
      className="bg-[#020B12] py-20 text-white sm:py-28 lg:py-36"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                {title}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <p className="max-w-2xl text-lg leading-9 text-white/68">
              {body}
            </p>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <Divider className="my-12" />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal
            variant="scale"
            className="relative aspect-[16/9] overflow-hidden rounded-md bg-[#031320]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal
            variant="scale"
            delay={100}
            className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#031320]"
          >
            <Image
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
