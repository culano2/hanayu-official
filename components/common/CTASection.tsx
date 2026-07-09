import Link from "next/link";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  body: string;
  buttonText: string;
  href: string;
};

export default function CTASection({
  eyebrow,
  title,
  body,
  buttonText,
  href,
}: CTASectionProps) {
  return (
    <section className="bg-[#031320] px-8 py-32 text-center lg:px-16 lg:py-44">
      <div className="mx-auto max-w-4xl">

        {eyebrow && (
          <p className="mb-6 text-sm tracking-[0.35em] text-[#C89A4B]">
            {eyebrow}
          </p>
        )}

        <h2 className="text-5xl font-light leading-tight text-white md:text-7xl">
          {title}
        </h2>

        <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-gray-300 md:text-xl">
          {body}
        </p>

        <Link
          href={href}
          className="mt-12 inline-flex rounded-full border border-[#C89A4B] px-8 py-4 text-[#C89A4B] transition-all duration-300 hover:bg-[#C89A4B] hover:text-[#031320]"
        >
          {buttonText}
        </Link>

      </div>
    </section>
  );
}