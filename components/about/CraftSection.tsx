import Image from "next/image";

export default function CraftSection() {
  return (
    <section className="grid min-h-screen items-center gap-12 px-8 py-24 lg:grid-cols-2 lg:px-16">
      <div className="order-2 lg:order-1">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#C89A4B]">
          CRAFT
        </p>

        <h2 className="text-4xl font-light md:text-6xl">
          職人手釣
        </h2>

        <p className="mt-10 text-lg leading-10 text-gray-300 md:text-xl">
          HANAYU 堅持一尾一尾由職人親手釣起。
          不是為了大量捕撈，而是為了保留每一尾劍尖槍鎖管最真實的品質。
        </p>
      </div>

      <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-[36px] lg:order-2">
        <Image
          src="/images/night-fishing/03-01_Artisan_Fisherman.png"
          alt="職人夜釣劍尖槍鎖管"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
