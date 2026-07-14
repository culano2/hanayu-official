import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/common/CTASection";

import DiningHero from "@/components/dining/DiningHero";
import JapaneseStyle from "@/components/dining/JapaneseStyle";
import ButterSeared from "@/components/dining/ButterSeared";
import CharcoalGrill from "@/components/dining/CharcoalGrill";
import SeafoodPasta from "@/components/dining/SeafoodPasta";
import EndingQuote from "@/components/dining/EndingQuote";

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
          title={`讓花嶼海域，\n成為餐桌上的主角。`}
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