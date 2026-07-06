import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Brand from "@/components/sections/Brand";
import Hero from "@/components/sections/Hero";
import TodaysCatch from "@/components/sections/TodaysCatch";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TodaysCatch />
        <Brand />
      </main>
      <Footer />
    </>
  );
}
