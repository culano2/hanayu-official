import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FishingHero from "@/components/fishing/FishingHero";
import NightBegins from "@/components/fishing/NightBegins";
import HuayuWaters from "@/components/fishing/HuayuWaters";
import HandlineFishing from "@/components/fishing/HandlineFishing";
import FreshnessTimeline from "@/components/fishing/FreshnessTimeline";
import RespectOcean from "@/components/fishing/RespectOcean";
import CTASection from "@/components/common/CTASection";

export default function FishingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#031320] text-white">
        <FishingHero />
        <NightBegins />
        <HuayuWaters />
        <HandlineFishing />
        <FreshnessTimeline />
        <RespectOcean />
        <CTASection
          eyebrow="HANAYU PROMISE"
          title={`把海鮮，\n做成精品。`}
          body="真正的精品不是昂貴，而是每一個細節都值得信任。"
          buttonText="了解產品"
          href="/product"
        />
      </main>
      <Footer />
    </>
  );
}