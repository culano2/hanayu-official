import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

type ImageBannerProps = {
  body: string;
  eyebrow: string;
  id: string;
  image: { alt: string; src: string };
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
    <section id={id} className="relative isolate overflow-hidden bg-[#031320] py-28 text-white sm:py-36 lg:py-44">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center soft-reveal"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,19,32,0.92),rgba(3,19,32,0.48)),linear-gradient(180deg,rgba(3,19,32,0.38),rgba(3,19,32,0.84))]"
        aria-hidden="true"
      />
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-9 text-white/72">{body}</p>
        </div>
      </Container>
    </section>
  );
}
