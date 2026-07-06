import Image from "next/image";

const catchItems: ReadonlyArray<{
  name: string;
  detail: string;
  status: string;
}> = [
  {
    name: "Silver line fish",
    detail: "Firm, bright, sashimi-grade handling",
    status: "Limited",
  },
  {
    name: "Island shellfish",
    detail: "Clean brine, hand-sorted by size",
    status: "Fresh",
  },
  {
    name: "Rock coast catch",
    detail: "Small boat harvest, morning landed",
    status: "Chef hold",
  },
];

export default function TodaysCatch() {
  return (
    <section id="catch" className="bg-[#F7F6F3] py-20 text-[#031320] sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-[#9B7333]">
              Today&apos;s Catch
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              Landed early. Sorted cold. Released with restraint.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#314756]">
              HANAYU publishes the day by quality, not volume. Each lot is
              checked for clarity, temperature, and handling before it is made
              available to partner kitchens.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 border-y border-[#031320]/15 py-6">
            <div>
              <p className="text-3xl font-semibold">186 kg</p>
              <p className="mt-2 text-sm text-[#506474]">Morning allocation</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">11 lots</p>
              <p className="mt-2 text-sm text-[#506474]">Quality released</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#031320]">
            <Image
              src="/images/todays-catch.png"
              alt="Fresh fish and shellfish sorted on ice at the dock"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {catchItems.map((item) => (
              <article
                key={item.name}
                className="rounded-md border border-[#031320]/12 bg-white p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9B7333]">
                  {item.status}
                </p>
                <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#506474]">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
