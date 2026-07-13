import FullWidthImage from "@/components/common/FullWidthImage";
import EditorialSection from "@/components/common/EditorialSection";

export default function PremiumGiftBox() {
  return (
    <>
      <FullWidthImage
        src="/images/packaging/05-01_Premium_Gift_Box.png"
        alt="HANAYU 精品禮盒"
        height="large"
        overlay="light"
      />

      <EditorialSection
        eyebrow="PREMIUM GIFT BOX"
        title="每一次收到，都是一份儀式感。"
        center
      >
        <p>
          HANAYU 不只是販售海鮮，
          更希望每一次打開禮盒，
          都像收到一份值得珍藏的禮物。
        </p>

        <p>
          從外盒設計、材質選擇，
          到內部包裝，
          每一個細節都希望傳遞花嶼海域的價值。
        </p>
      </EditorialSection>
    </>
  );
}