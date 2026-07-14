import FullWidthImage from "@/components/common/FullWidthImage";
import EditorialSection from "@/components/common/EditorialSection";

export default function JapaneseStyle() {
  return (
    <>
      <FullWidthImage
        src="/images/dining/01_Japanese_Style.png"
        alt="Japanese Style Squid"
        height="screen"
        overlay="light"
      />

      <EditorialSection
        eyebrow="JAPANESE STYLE"
        title="最好的料理，來自最少的修飾。"
        center
      >
        <p>
          保留劍尖槍鎖管最自然的鮮甜，
          以最簡單的調味，
          呈現花嶼海域最真實的風味。
        </p>

        <p>
          真正頂級的食材，
          不需要過度堆疊，
          只需要尊重它原本的樣貌。
        </p>
      </EditorialSection>
    </>
  );
}