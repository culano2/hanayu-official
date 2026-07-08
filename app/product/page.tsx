import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BrandDivider from "@/components/ui/BrandDivider";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Tagline from "@/components/ui/Tagline";

const productHeroImage = {
  src: "/images/product/04-01_Product_Hero.png",
  alt: "HANAYU swordtip squid product presented on ice",
} as const;

const giantSizeImage = {
  src: "/images/product/04-02_Three_Squids.png",
  alt: "Three premium swordtip squid arranged for product display",
} as const;

export const metadata: Metadata = {
  title: "劍尖槍鎖管 | HANAYU Product",
  description:
    "HANAYU premium swordtip squid from the waters around Huayu Island, hand-caught from June to September.",
};

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#031320]">
          <Image
            alt={productHeroImage.alt}
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]"
            fill
            priority
            sizes="100vw"
            src={productHeroImage.src}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_30%,rgba(200,154,75,0.13),transparent_31%),linear-gradient(90deg,rgba(3,19,32,0.93)_0%,rgba(3,19,32,0.76)_42%,rgba(3,19,32,0.28)_78%),linear-gradient(180deg,rgba(3,19,32,0.2)_0%,rgba(3,19,32,0.86)_100%)]"
          />

          <Container className="flex min-h-[100svh] flex-col justify-end px-7 pb-14 pt-36 sm:px-10 sm:pb-18 lg:px-20 lg:pb-24 xl:px-24">
            <div className="max-w-3xl">
              <Eyebrow>HANAYU PRODUCT</Eyebrow>
              <SectionTitle
                as="h1"
                className="mt-9 max-w-4xl"
                size="page"
                tone="light"
              >
                劍尖槍鎖管
              </SectionTitle>
              <BrandDivider className="mt-9" />
              <Tagline className="mt-9 max-w-2xl" size="lg" tone="light">
                把海鮮，做成精品。
              </Tagline>
              <div className="mt-12">
                <PrimaryButton href="/" size="lg">
                  返回首頁
                </PrimaryButton>
              </div>
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
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[#031320]/10 bg-[#F7F6F3] shadow-[0_28px_90px_rgba(3,19,32,0.18)] sm:aspect-[16/11] lg:aspect-[4/5]">
                <div className="absolute inset-0 flex items-center justify-center bg-[#F7F6F3] px-8 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#506474]">
                  Product image loading
                </div>
                <Image
                  alt={giantSizeImage.alt}
                  className="relative z-10 h-full w-full object-contain object-center p-6 sm:p-10"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  src={giantSizeImage.src}
                />
              </div>

              <div className="max-w-xl">
                <Eyebrow tone="light">Giant Size</Eyebrow>
                <SectionTitle className="mt-6" size="section" tone="dark">
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
