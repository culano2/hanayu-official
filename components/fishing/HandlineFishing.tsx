import Image from "next/image";
import EditorialSection from "@/components/common/EditorialSection";

export default function HandlineFishing() {
  return (
    <section className="bg-[#031320] py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2 lg:px-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
          <Image
            src="/images/night-fishing/03-01_Artisan_Fisherman.png"
            alt="職人手釣劍尖槍鎖管"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <EditorialSection
          eyebrow="HANDLINE FISHING"
          title={`一尾一尾。
親手釣起。`}
        >
          <p>沒有拖網。</p>

          <p>沒有大量捕撈。</p>

          <p>
            只有一支釣竿，
            與多年累積的經驗。
          </p>

          <p>
            每一次收線，
            都是對品質的堅持。
          </p>
        </EditorialSection>
      </div>
    </section>
  );
}
