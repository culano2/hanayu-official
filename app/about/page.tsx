import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutWhyHuayu from "@/components/about/AboutWhyHuayu";
import BrandPromise from "@/components/about/BrandPromise";
import BrandValues from "@/components/about/BrandValues";
import CraftSection from "@/components/about/CraftSection";
import OriginStory from "@/components/about/OriginStory";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
};

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