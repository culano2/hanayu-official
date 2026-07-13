import { ReactNode } from "react";

type EditorialSectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  compact?: boolean;
  center?: boolean;
};

export default function EditorialSection({
  eyebrow,
  title,
  children,
  compact = false,
  center = false,
}: EditorialSectionProps) {
  return (
    <section
      className={`bg-[#031320] ${
        compact ? "py-12 lg:py-16" : "py-28 lg:py-40"
      }`}
    >
      <div
        className={`mx-auto px-8 ${
          center ? "max-w-4xl text-center" : "max-w-5xl"
        }`}
      >
        {eyebrow && (
          <p className="mb-6 text-sm tracking-[0.35em] text-[#C89A4B]">
            {eyebrow}
          </p>
        )}

        <h2 className="max-w-4xl text-4xl font-light leading-tight text-white md:text-6xl">
          {title}
        </h2>

        <div className="mt-10 space-y-8 text-lg leading-10 text-gray-300 md:text-xl">
          {children}
        </div>
      </div>
    </section>
  );
}