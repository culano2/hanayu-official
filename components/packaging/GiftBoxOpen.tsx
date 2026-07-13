import FullWidthImage from "@/components/common/FullWidthImage";
import QuoteSection from "@/components/common/QuoteSection";

export default function GiftBoxOpen() {
  return (
    <>
      <FullWidthImage
        src="/images/packaging/05-03_Gift_Box_Open.png"
        alt="HANAYU 精品禮盒開箱"
        height="screen"
        overlay="medium"
      />

      <QuoteSection
        quote={`打開的瞬間，

看見的不只是海鮮。`}
        subtitle={`是一份來自花嶼海域的心意，

也是 HANAYU 對品質與細節的承諾。`}
      />
    </>
  );
}