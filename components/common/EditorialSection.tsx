import { ReactNode } from "react";

type EditorialSectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export default function EditorialSection({
  eyebrow,
  title,
  children,
}: EditorialSectionProps) {
  return (
    <section className="bg-[#031320] py-28 lg:py-40">
      <div className="mx-auto max-w-5xl px-8">

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