import EditorialSection from "@/components/common/EditorialSection";
import FullWidthImage from "@/components/common/FullWidthImage";

export default function CharcoalGrill() {
  return (
    <>
      <FullWidthImage
        src="/images/dining/03_Charcoal_Grill.png"
        alt="Charcoal-grilled swordtip squid"
        height="screen"
        overlay="light"
      />

      <EditorialSection
        eyebrow="CHARCOAL GRILL"
        title="炭火，讓海味更有層次。"
        center
      >
        <p>
          以炭火直烤，
          讓表面微微焦香，
          內裡仍保留柔嫩與彈性。
        </p>

        <p>
          不需要複雜醬料，
          一點海鹽，
          就足以讓風味完整展開。
        </p>
      </EditorialSection>
    </>
  );
}