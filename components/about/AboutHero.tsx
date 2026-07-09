import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/images/huayu/01-02_Huayu_Sunset.png"
        alt="花嶼海域夕陽"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#031320]/70" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 lg:px-16">
        <p className="mb-6 text-sm tracking-[0.4em] text-[#C89A4B]">
          ABOUT HANAYU
        </p>

        <h1 className="max-w-4xl text-5xl font-light leading-tight tracking-[0.08em] md:text-7xl">
          來自花嶼，
          <br />
          忠於海洋。
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-9 text-gray-200 md:text-xl">
          HANAYU 誕生於一次花嶼夜釣的旅程。
          <br />
          我們希望把花嶼海域、職人手釣與精品海鮮的價值，
          帶到每一張餐桌。
        </p>
      </div>
    </section>
  );
}