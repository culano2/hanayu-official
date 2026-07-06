export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#031320]">
      {/* 背景漸層 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#041a2e] via-[#072842] to-[#031320]" />

      {/* Hero 內容 */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-8 lg:px-16">

        <p className="mb-4 text-sm tracking-[0.4em] text-[#C89A4B]">
          FROM HUAYU ISLAND
        </p>

        <h1 className="text-6xl font-light tracking-[0.18em] text-white md:text-8xl">
          HANAYU
        </h1>

        <h2 className="mt-12 text-3xl font-light text-white md:text-5xl">
          職人手釣・劍尖槍鎖管
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">
          一尾一尾，只為留下最好的鮮甜。
        </p>

        <button className="mt-12 w-fit rounded-full border border-[#C89A4B] px-8 py-4 text-[#C89A4B] transition-all duration-300 hover:bg-[#C89A4B] hover:text-[#031320]">
          Explore Story →
        </button>
      </div>

      {/* 底部漸層 */}
      <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-[#031320] to-transparent" />
    </section>
  );
}
