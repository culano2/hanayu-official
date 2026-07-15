import CTASection from "@/components/common/CTASection";
import ButterSeared from "@/components/dining/ButterSeared";
import CharcoalGrill from "@/components/dining/CharcoalGrill";
import DiningHero from "@/components/dining/DiningHero";
import EndingQuote from "@/components/dining/EndingQuote";
import JapaneseStyle from "@/components/dining/JapaneseStyle";
import SeafoodPasta from "@/components/dining/SeafoodPasta";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("dining");

export default function DiningPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#031320] text-white">
        <DiningHero />
        <JapaneseStyle />
        <ButterSeared />
        <CharcoalGrill />
        <SeafoodPasta />
        <EndingQuote />

        <CTASection
          eyebrow="HANAYU DINING"
          title={`讓花嶼海域，
成為餐桌上的主角。`}
          body="真正好的食材，不需要複雜堆疊。只需要尊重它原本的風味。"
          buttonText="探索產品"
          href="/product"
          secondaryButtonText="了解職人手釣"
          secondaryHref="/fishing"
        />
      </main>

      <Footer />
    </>
  );
}
