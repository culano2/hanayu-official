import Link from "next/link";

export default function BrandPromise() {
  return (
    <section className="px-8 py-32 text-center lg:px-16 lg:py-44">
      <div className="mx-auto max-w-4xl">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#C89A4B]">
          BRAND PROMISE
        </p>

        <h2 className="text-5xl font-light leading-tight md:text-7xl">
          把海鮮，
          <br />
          做成精品。
        </h2>

        <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-gray-300 md:text-xl">
          我們相信，真正的精品不是昂貴，
          而是每一個細節都值得信任。
        </p>

        <Link
          href="/product"
          className="mt-12 inline-flex rounded-full border border-[#C89A4B] px-8 py-4 text-[#C89A4B] transition duration-300 hover:bg-[#C89A4B] hover:text-[#031320]"
        >
          了解產品
        </Link>
      </div>
    </section>
  );
}