import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import OriginStory from "@/components/about/OriginStory";
import AboutWhyHuayu from "@/components/about/AboutWhyHuayu";
import CraftSection from "@/components/about/CraftSection";
import BrandValues from "@/components/about/BrandValues";
import BrandPromise from "@/components/about/BrandPromise";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#031320] text-white">
        <AboutHero />
        <OriginStory />
        <AboutWhyHuayu />
        <CraftSection />
        <BrandValues />
        <BrandPromise />
      </main>
      <Footer />
    </>
  );
}