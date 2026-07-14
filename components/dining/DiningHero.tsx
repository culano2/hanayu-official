import PageHero from "@/components/common/PageHero";

export default function DiningHero() {
  return (
    <PageHero
      eyebrow="DINING EXPERIENCE"
      title={`Every meal
deserves
the finest catch.`}
      description={`來自花嶼海域的劍尖槍鎖管，

值得成為每一道料理的主角。`}
      image="/images/product/04-03_Product_Detail.png"
      imageAlt="HANAYU 劍尖槍鎖管料理特寫"
      ctaText="探索產品"
      ctaHref="/product"
      overlay="dark"
      align="left"
    />
  );
}