import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import Hero from "@/components/sections/Hero";
import ImageBanner from "@/components/sections/ImageBanner";
import NightFishing from "@/components/sections/NightFishing";
import OceanBanner from "@/components/sections/OceanBanner";
import OurPromise from "@/components/sections/OurPromise";
import WhyHuayu from "@/components/sections/WhyHuayu";
import { brand } from "@/data/brand";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("home");

export default function Home() {
  const { harbor, ocean } = brand.story;

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhyHuayu />

        <ImageBanner
          body={harbor.body}
          eyebrow={harbor.eyebrow}
          id={harbor.id}
          image={harbor.image}
          title={harbor.title}
        />

        <NightFishing />
        <FeaturedProduct />
        <OurPromise />

        <OceanBanner
          body={ocean.body}
          eyebrow={ocean.eyebrow}
          id={ocean.id}
          image={ocean.image}
          secondaryImage={ocean.secondaryImage}
          title={ocean.title}
        />
      </main>

      <Footer />
    </>
  );
}
