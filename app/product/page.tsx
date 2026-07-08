import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BrandDivider from "@/components/ui/BrandDivider";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
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
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center soft-reveal"
            fill
            priority
            sizes="100vw"
            src={productHeroImage.src}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_30%,rgba(200,154,75,0.16),transparent_30%),linear-gradient(90deg,rgba(3,19,32,0.92)_0%,rgba(3,19,32,0.68)_42%,rgba(3,19,32,0.2)_82%),linear-gradient(180deg,rgba(3,19,32,0.06)_0%,rgba(3,19,32,0.78)_100%)]"
          />

          <Container className="flex min-h-[100svh] flex-col justify-end pb-12 pt-32 sm:pb-16 lg:pb-20">
            <div className="fade-up max-w-3xl">
              <Eyebrow>HANAYU Product</Eyebrow>
              <SectionTitle
                as="h1"
                className="mt-7 max-w-4xl"
                size="page"
                tone="light"
              >
                劍尖槍鎖管
              </SectionTitle>
              <BrandDivider className="mt-8" />
              <Tagline className="mt-8 max-w-2xl" size="lg" tone="light">
                把海鮮，做成精品。
              </Tagline>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="#seasonal-story" size="lg">
                  了解季節
                </PrimaryButton>
                <SecondaryButton href="#giant-size" size="lg">
                  查看尺寸
                </SecondaryButton>
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
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[#031320]/10 bg-[#D8DEE2] shadow-[0_28px_90px_rgba(3,19,32,0.18)] sm:aspect-[16/11] lg:aspect-[4/5]">
                <Image
                  alt={giantSizeImage.alt}
                  className="h-full w-full object-cover object-center soft-reveal transition-transform duration-700 hover:scale-[1.025]"
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
