import PageHero from "@/components/common/PageHero";

export default function FishingHero() {
  return (
    <PageHero
      eyebrow="FISHING METHOD"
      title={`職人手釣`}
      description={`Every squid is caught by hand.

從夜晚出港，
直到黎明返航，
每一尾都是職人的堅持。`}
      image="/images/night-fishing/03-02_Night_Fishing_Boat.png"
      ctaText="探索產品"
      ctaHref="/product"
    />
  );
}