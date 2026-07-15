import AboutHero from "@/components/about/AboutHero";
import AboutWhyHuayu from "@/components/about/AboutWhyHuayu";
import BrandPromise from "@/components/about/BrandPromise";
import BrandValues from "@/components/about/BrandValues";
import CraftSection from "@/components/about/CraftSection";
import OriginStory from "@/components/about/OriginStory";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("about");

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
