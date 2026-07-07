import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Brand from "@/components/sections/Brand";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import Hero from "@/components/sections/Hero";
import NightFishing from "@/components/sections/NightFishing";
import OurPromise from "@/components/sections/OurPromise";
import TodaysCatch from "@/components/sections/TodaysCatch";
import WhyHuayu from "@/components/sections/WhyHuayu";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyHuayu />
        <NightFishing />
        <OurPromise />
        <TodaysCatch />
        <FeaturedProduct />
        <Brand />
      </main>
      <Footer />
    </>
  );
}
