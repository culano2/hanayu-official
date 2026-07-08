import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  return (
    <main className="bg-[#031320] text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src="/images/product/04-01_Product_Hero.png"
          alt="HANAYU 劍尖槍鎖管"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#031320]/65" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 lg:px-16">
          <p className="mb-4 text-sm tracking-[0.4em] text-[#C89A4B]">
            HANAYU PRODUCT
          </p>
          <h1 className="text-5xl font-light tracking-[0.14em] md:text-8xl">
            劍尖槍鎖管
          </h1>
          <p className="mt-8 max-w-xl text-2xl font-light leading-relaxed text-white">
            把海鮮，做成精品。
          </p>
          <Link
            href="/"
            className="mt-12 inline-flex rounded-full border border-[#C89A4B] px-8 py-4 text-[#C89A4B] transition hover:bg-[#C89A4B] hover:text-[#031320]"
          >
            返回首頁
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-8 py-28 lg:py-36">
        <p className="mb-4 text-sm tracking-[0.35em] text-[#C89A4B]">
          SEASONAL
        </p>
        <h2 className="text-4xl font-light md:text-6xl">一年只有一季。</h2>
        <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">
          六月至九月，是花嶼海域最珍貴的季節。每一尾都由職人手釣，
          每一年都值得等待。
        </p>
      </section>

      <section className="grid min-h-screen items-center gap-10 px-8 py-24 lg:grid-cols-2 lg:px-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/10">
          <Image
            src="/images/product/04-02_Three_Squids.png"
            alt="三尾劍尖槍鎖管"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-sm tracking-[0.35em] text-[#C89A4B]">
            HUAYU SIZE
          </p>
          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            超級大隻，
            <br />
            來自花嶼海域。
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">
            每尾約一公斤，完整保留天然鮮甜。從海域、漁法到急速冷凍，
            HANAYU 只為呈現花嶼海域最純粹的風味。
          </p>
        </div>
      </section>
    </main>
  );
}