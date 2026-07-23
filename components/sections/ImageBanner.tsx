import Image from "next/image";

import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

type ImageBannerProps = {
  body: string;
  eyebrow: string;
  id: string;
  image: {
    alt: string;
    src: string;
  };
  title: string;
};

export default function ImageBanner({
  body,
  eyebrow,
  id,
  image,
  title,
}: ImageBannerProps) {
  return (
    <section
      id={id}
      className="relative isolate overflow-hidden bg-[#031320] py-28 text-white sm:py-36 lg:py-44"
    >
      <Reveal
        variant="scale"
        className="absolute inset-0 -z-20 overflow-hidden"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </Reveal>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,19,32,0.92),rgba(3,19,32,0.48)),linear-gradient(180deg,rgba(3,19,32,0.38),rgba(3,19,32,0.84))]"
      />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-lg leading-9 text-white/72">
              {body}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
