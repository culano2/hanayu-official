const standards: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Cold from first touch",
    body: "Every landing is iced and logged at the dock, keeping texture and shelf life protected from the first handoff.",
  },
  {
    title: "Small-boat selectivity",
    body: "We prioritize traceable, lower-volume catches that let chefs know where the fish came from and how it was handled.",
  },
  {
    title: "Kitchen-ready clarity",
    body: "Lots are sorted by use case, condition, and timing, giving buyers a clear picture before the order leaves the island.",
  },
];

export default function Brand() {
  return (
    <section id="story" className="bg-[#031320] py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-[#C89A4B]">
              The HANAYU Standard
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Ocean work, handled with the discipline of a design object.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/68">
            HANAYU is built for people who notice the difference between fresh
            and carefully protected. The brand keeps the working truth of an
            island fishery visible while raising the standard for hospitality,
            retail, and direct chef supply.
          </p>
        </div>

        <div
          id="standard"
          className="mt-14 grid gap-5 md:grid-cols-3"
          aria-label="HANAYU quality standards"
        >
          {standards.map((standard, index) => (
            <article
              key={standard.title}
              className="rounded-md border border-white/12 bg-white/[0.04] p-6"
            >
              <p className="text-sm font-semibold text-[#C89A4B]">
                0{index + 1}
              </p>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {standard.title}
              </h3>
              <p className="mt-4 leading-7 text-white/62">{standard.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
