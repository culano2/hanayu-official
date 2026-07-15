import PageHero from "@/components/common/PageHero";

export default function FishingHero() {
  return (
    <PageHero
      eyebrow="FISHING METHOD"
      title="職人手釣"
      description={`Every catch begins with patience.

每一尾劍尖槍鎖管，
都來自花嶼海域職人的專注與等待。`}
      image="/images/night-fishing/03-01_Artisan_Fisherman.png"
      imageAlt="花嶼海域職人夜間手釣劍尖槍鎖管"
      ctaText="探索產品"
      ctaHref="/product"
    />
  );
}