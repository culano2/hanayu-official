type QuoteSectionProps = {
  quote: string;
  subtitle?: string;
  align?: "left" | "center";
  size?: "normal" | "large";
};

export default function QuoteSection({
  quote,
  subtitle,
  align = "center",
  size = "large",
}: QuoteSectionProps) {
  const isCenter = align === "center";

  return (
    <section className="flex min-h-screen items-center bg-[#031320] px-8 py-24">
      <div
        className={`mx-auto w-full max-w-5xl ${
          isCenter ? "text-center" : "text-left"
        }`}
      >
        <h2
          className={`whitespace-pre-line font-light leading-tight tracking-[0.06em] text-white ${
            size === "large"
              ? "text-5xl md:text-7xl"
              : "text-4xl md:text-6xl"
          }`}
        >
          {quote}
        </h2>

        {subtitle && (
          <p
            className={`mt-12 whitespace-pre-line text-xl leading-10 text-gray-300 ${
              isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}