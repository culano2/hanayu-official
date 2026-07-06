export default function LiveCatch() {
  return (
    <section className="bg-[#072842] py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16">
          <p className="text-sm tracking-[0.35em] text-[#C89A4B]">
            TODAY'S CATCH
          </p>

          <h2 className="mt-4 text-5xl font-light text-white">
            今日漁獲
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* 左邊 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />

              <span className="tracking-[0.25em] text-[#C89A4B]">
                LIVE
              </span>

            </div>

            <h3 className="mt-10 text-6xl font-light text-white">
              186 kg
            </h3>

            <p className="mt-6 text-xl text-gray-300">
              劍尖槍鎖管
            </p>

            <p className="mt-3 text-gray-400">
              更新時間 04:32
            </p>

          </div>

          {/* 右邊 */}

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B4A74] to-[#031320] p-10">

            <h3 className="text-3xl text-white">
              職人手釣
            </h3>

            <p className="mt-6 leading-9 text-gray-300">

              每一尾劍尖槍鎖管，

              都由職人於夜間海域

              採用人工手釣方式捕獲，

              全程低溫保鮮，

              保留最自然鮮甜的海味。

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
