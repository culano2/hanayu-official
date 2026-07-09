const values = [
  {
    title: "Respect Ocean",
    text: "尊重海洋",
  },
  {
    title: "Craftsmanship",
    text: "職人精神",
  },
  {
    title: "Freshness",
    text: "鮮度管理",
  },
  {
    title: "Trust",
    text: "值得信任",
  },
];

export default function BrandValues() {
  return (
    <section className="px-8 py-28 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#C89A4B]">
          VALUES
        </p>

        <h2 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
          真正的精品，
          <br />
          來自每一個細節。
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8"
            >
              <h3 className="text-xl font-light text-white">
                {value.title}
              </h3>
              <p className="mt-4 text-gray-400">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}