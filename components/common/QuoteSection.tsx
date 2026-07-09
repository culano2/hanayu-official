type QuoteSectionProps = {
  quote: string;
  subtitle?: string;
};

export default function QuoteSection({
  quote,
  subtitle,
}: QuoteSectionProps) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#031320] px-8 py-24 text-center">
      <div className="mx-auto max-w-5xl">

        <h2 className="whitespace-pre-line text-5xl font-light leading-tight tracking-[0.06em] text-white md:text-7xl">
          {quote}
        </h2>

        {subtitle && (
          <p className="mx-auto mt-12 max-w-2xl whitespace-pre-line text-xl leading-10 text-gray-300">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  );
}