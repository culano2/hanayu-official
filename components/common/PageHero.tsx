import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
  overlay?: "light" | "medium" | "dark";
  align?: "left" | "center";
};

const overlayClass = {
  light: "bg-[#031320]/50",
  medium: "bg-[#031320]/65",
  dark: "bg-[#031320]/78",
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  ctaText,
  ctaHref,
  overlay = "medium",
  align = "left",
}: PageHeroProps) {
  const isCenter = align === "center";

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

      <div className={`absolute inset-0 ${overlayClass[overlay]}`} />

      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-8 lg:px-16 ${
          isCenter ? "text-center" : ""
        }`}
      >
        <p className="mb-6 text-sm tracking-[0.4em] text-[#C89A4B]">
          {eyebrow}
        </p>

        <h1
          className={`text-5xl font-light leading-tight tracking-[0.08em] text-white md:text-7xl ${
            isCenter ? "mx-auto max-w-5xl" : "max-w-4xl"
          }`}
        >
          {title}
        </h1>

        <p
          className={`mt-10 whitespace-pre-line text-lg leading-9 text-gray-200 md:text-xl ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
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