import Image from "next/image";
import Link from "next/link";

const metrics: ReadonlyArray<{ value: string; label: string }> = [
  { value: "04:20", label: "Harbor landing" },
  { value: "0-2 C", label: "Cold-chain target" },
  { value: "24h", label: "Island to chef" },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#031320]">
      <Image
        src="/images/hanayu-hero.png"
        alt="Fresh seafood on ice beside the Huayu Island coastline at dawn"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,19,32,0.95)_0%,rgba(3,19,32,0.78)_36%,rgba(3,19,32,0.2)_72%),linear-gradient(180deg,rgba(3,19,32,0.2)_0%,rgba(3,19,32,0.82)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end px-5 pb-12 pt-32 sm:px-8 lg:px-10 lg:pb-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#C89A4B]">
            From Huayu Island
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[0.1em] text-white sm:text-7xl lg:text-8xl">
            HANAYU
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[#F7F6F3] sm:text-2xl sm:leading-10">
            Precision-handled seafood from a working island fishery, landed
            before sunrise and prepared for kitchens that care about origin.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#catch"
              className="inline-flex justify-center bg-[#C89A4B] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#031320] transition-colors duration-200 hover:bg-[#F7F6F3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7F6F3]"
            >
              View Catch
            </Link>
            <Link
              href="#story"
              className="inline-flex justify-center border border-white/35 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-[#031320] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7F6F3]"
            >
              Our Standard
            </Link>
          </div>
        </div>

        <dl className="mt-14 grid max-w-3xl grid-cols-1 border-y border-white/14 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-white/14 py-5 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <dt className="text-sm leading-6 text-white/62">{metric.label}</dt>
              <dd className="mt-2 text-2xl font-semibold tracking-[0.04em] text-white">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
