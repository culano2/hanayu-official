import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/motion/FadeIn";
import FadeUp from "@/components/motion/FadeUp";
import HeroScrollImage from "@/components/motion/HeroScrollImage";
import BrandDivider from "@/components/ui/BrandDivider";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Tagline from "@/components/ui/Tagline";
import { createPageMetadata } from "@/lib/metadata";

const productHeroImage = {
  src: "/images/product/04-01_Product_Hero.png",
  alt: "HANAYU 劍尖槍鎖管置於碎冰上的產品展示",
} as const;

const giantSizeImage = {
  src: "/images/product/04-02_Three_Squids.png",
  alt: "三尾 HANAYU 劍尖槍鎖管產品展示",
} as const;

export const metadata = createPageMetadata("product");

export default function ProductPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#031320]">
          <HeroScrollImage
            alt={productHeroImage.alt}
            priority
            sizes="100vw"
            src={productHeroImage.src}
            imageClassName="object-cover object-[58%_center]"
            className="-z-20"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_30%,rgba(200,154,75,0.13),transparent_31%),linear-gradient(90deg,rgba(3,19,32,0.93)_0%,rgba(3,19,32,0.76)_42%,rgba(3,19,32,0.28)_78%),linear-gradient(180deg,rgba(3,19,32,0.2)_0%,rgba(3,19,32,0.86)_100%)]"
          />

          <Container className="flex min-h-[100svh] flex-col justify-end px-7 pb-14 pt-36 sm:px-10 sm:pb-18 lg:px-20 lg:pb-24 xl:px-24">
            <div className="max-w-3xl">
              <FadeUp duration={820}>
                <Eyebrow>HANAYU PRODUCT</Eyebrow>
              </FadeUp>

              <FadeUp delay={120} duration={860}>
                <SectionTitle
                  as="h1"
                  className="mt-9 max-w-4xl"
                  size="page"
                  tone="light"
                >
                  劍尖槍鎖管
                </SectionTitle>
              </FadeUp>

              <FadeIn delay={220} duration={820}>
                <BrandDivider className="mt-9" />
              </FadeIn>

              <FadeUp delay={280} duration={860}>
                <Tagline className="mt-9 max-w-2xl" size="lg" tone="light">
                  把海鮮，做成精品。
                </Tagline>
              </FadeUp>

              <FadeUp delay={420} duration={780}>
                <div className="mt-12">
                  <PrimaryButton href="/" size="lg">
                    返回首頁
                  </PrimaryButton>
                </div>
              </FadeUp>
            </div>
          </Container>
        </section>

        <Section id="seasonal-story" tone="dark">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Seasonal Story</Eyebrow>

              <SectionTitle className="mt-6" size="section" tone="light">
                一年只有一季。
              </SectionTitle>

              <BrandDivider className="mx-auto mt-8" />

              <p className="mt-8 text-base leading-8 text-white/72 sm:text-lg sm:leading-9">
                六月至九月，是花嶼海域最珍貴的季節。
                每一尾都由職人手釣，每一年都值得等待。
              </p>
            </div>
          </Container>
        </Section>

        <Section id="giant-size" tone="light">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-[#031320]/10 bg-[#F7F6F3] shadow-[0_28px_90px_rgba(3,19,32,0.18)] transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_34px_100px_rgba(3,19,32,0.26)] sm:aspect-[16/11] lg:aspect-[4/5]">
                <div className="absolute inset-0 flex items-center justify-center bg-[#F7F6F3] px-8 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#506474]">
                  Product image loading
                </div>

                <Image
                  alt={giantSizeImage.alt}
                  className="relative z-10 h-full w-full object-contain object-center p-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:p-10"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  src={giantSizeImage.src}
                />
              </div>

              <div className="max-w-xl">
                <Eyebrow tone="light">Giant Size</Eyebrow>

                <SectionTitle
                  className="mt-6"
                  size="section"
                  tone="dark"
                >
                  超級大隻，來自花嶼海域。
                </SectionTitle>

                <BrandDivider className="mt-8" />

                <p className="mt-8 text-base leading-8 text-[#314756] sm:text-lg sm:leading-9">
                  每尾約一公斤，完整保留天然鮮甜。
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
