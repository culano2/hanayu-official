import EditorialSection from "@/components/common/EditorialSection";
import FullWidthImage from "@/components/common/FullWidthImage";

export default function ButterSeared() {
  return (
    <>
      <FullWidthImage
        src="/images/dining/02_Butter_Seared.png"
        alt="Butter-seared swordtip squid"
        height="screen"
        overlay="light"
      />

      <EditorialSection
        eyebrow="BUTTER SEARED"
        title="奶油與海味，剛剛好的平衡。"
        center
      >
        <p>
          以高溫快速煎封表面，
          保留劍尖槍鎖管原有的彈性與鮮甜。
        </p>

        <p>
          奶油只負責襯托，
          不掩蓋來自花嶼海域的風味。
        </p>
      </EditorialSection>
    </>
  );
}