type TimelineItem = {
  title: string;
  description?: string;
};

type TimelineSectionProps = {
  eyebrow?: string;
  title: string;
  items: TimelineItem[];
};

export default function TimelineSection({
  eyebrow,
  title,
  items,
}: TimelineSectionProps) {
  return (
    <section className="bg-[#08233A] px-8 py-28 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-7xl">

        {eyebrow && (
          <p className="mb-6 text-sm tracking-[0.35em] text-[#C89A4B]">
            {eyebrow}
          </p>
        )}

        <h2 className="max-w-4xl text-4xl font-light leading-tight text-white md:text-6xl">
          {title}
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {items.map((item, index) => (
            <div key={item.title} className="relative">
              <p className="mb-6 text-sm tracking-[0.3em] text-[#C89A4B]">
                0{index + 1}
              </p>

              <h3 className="text-2xl font-light text-white">
                {item.title}
              </h3>

              {item.description && (
                <p className="mt-5 leading-8 text-gray-300">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}