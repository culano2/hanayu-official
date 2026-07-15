import Image from "next/image";

export default function AboutWhyHuayu() {
  return (
    <section className="grid min-h-screen items-center gap-12 px-8 py-24 lg:grid-cols-2 lg:px-16">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[36px]">
        <Image
          src="/images/huayu/01-01_Huayu_Aerial.png"
          alt="花嶼空拍海域"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <p className="mb-6 text-sm tracking-[0.35em] text-[#C89A4B]">
          WHY HUAYU
        </p>

        <h2 className="text-4xl font-light md:text-6xl">
          為什麼是花嶼？
        </h2>

        <p className="mt-10 text-lg leading-10 text-gray-300 md:text-xl">
          花嶼位於澎湖群島西側，也是臺灣最西邊的有人島之一。
          遠離都市的海域環境，孕育出獨特的夜釣文化與海洋風味。
        </p>
      </div>
    </section>
  );
}
