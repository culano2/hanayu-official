import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TodaysCatch from "@/components/sections/TodaysCatch";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <LiveCatch />

    </>
  );
}
