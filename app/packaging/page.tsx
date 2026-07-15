import CTASection from "@/components/common/CTASection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import GiftBoxOpen from "@/components/packaging/GiftBoxOpen";
import PackagingHero from "@/components/packaging/PackagingHero";
import PackagingPrinciples from "@/components/packaging/PackagingPrinciples";
import PremiumGiftBox from "@/components/packaging/PremiumGiftBox";
import VacuumPackage from "@/components/packaging/VacuumPackage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("packaging");

export default function PackagingPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#031320] text-white">
        <PackagingHero />
        <PremiumGiftBox />
        <VacuumPackage />
        <GiftBoxOpen />
        <PackagingPrinciples />

        <CTASection
          eyebrow="HANAYU PACKAGING"
          title="像收到精品禮物。"
          body="從真空包裝到三公斤以上精品禮盒，每一個細節都為了讓花嶼海域的鮮度與心意，被完整送達。"
          buttonText="了解產品"
          href="/product"
          secondaryButtonText="品牌故事"
          secondaryHref="/about"
        />
      </main>

      <Footer />
    </>
  );
}
