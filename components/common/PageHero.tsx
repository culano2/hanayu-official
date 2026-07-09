import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  ctaText,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#031320]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#031320]/70" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 lg:px-16">
        <p className="mb-6 text-sm tracking-[0.4em] text-[#C89A4B]">
          {eyebrow}
        </p>

        <h1 className="max-w-4xl text-5xl font-light leading-tight tracking-[0.08em] text-white md:text-7xl">
          {title}
        </h1>

        <p className="mt-10 max-w-2xl whitespace-pre-line text-lg leading-9 text-gray-200 md:text-xl">
          {description}
        </p>

        {ctaText && ctaHref ? (
          <Link
            href={ctaHref}
            className="mt-12 inline-flex rounded-full border border-[#C89A4B] px-8 py-4 text-[#C89A4B] transition duration-300 hover:bg-[#C89A4B] hover:text-[#031320]"
          >
            {ctaText}
          </Link>
        ) : null}
      </div>
    </section>
  );
}