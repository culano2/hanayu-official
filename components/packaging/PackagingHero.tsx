import PageHero from "@/components/common/PageHero";

export default function PackagingHero() {
  return (
    <PageHero
      eyebrow="PACKAGING"
      title="像收到精品禮物。"
      description={`不只是保鮮與包裝。

我們希望每一次收到 HANAYU，
都像收到一份值得期待的禮物。`}
      image="/images/packaging/05-01_Premium_Gift_Box.png"
      imageAlt="HANAYU 精品海鮮禮盒包裝"
      ctaText="了解產品"
      ctaHref="/product"
      overlay="dark"
    />
  );
}