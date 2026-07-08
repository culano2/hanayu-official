import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import GiantSize from "@/components/sections/product/GiantSize";
import ProductHero from "@/components/sections/product/ProductHero";
import SeasonalStory from "@/components/sections/product/SeasonalStory";
import { productCatalog } from "@/data/product";

export const metadata: Metadata = {
  title: "劍尖槍鎖管 | HANAYU Product",
  description:
    "HANAYU premium swordtip squid from the waters around Huayu Island, hand-caught from June to September.",
};

export default function ProductPage() {
  const { giantSize, hero, seasonalStory } = productCatalog;

  return (
    <>
      <Navbar />
      <main>
        <ProductHero
          eyebrow={hero.eyebrow}
          headline={hero.headline}
          image={hero.image}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
          subheadline={hero.subheadline}
        />
        <SeasonalStory
          body={seasonalStory.body}
          eyebrow={seasonalStory.eyebrow}
          id={seasonalStory.id}
          title={seasonalStory.title}
        />
        <GiantSize
          body={giantSize.body}
          eyebrow={giantSize.eyebrow}
          headline={giantSize.headline}
          id={giantSize.id}
          image={giantSize.image}
        />
      </main>
      <Footer />
    </>
  );
}
