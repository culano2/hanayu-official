import FullWidthImage from "@/components/common/FullWidthImage";
import EditorialSection from "@/components/common/EditorialSection";

export default function VacuumPackage() {
  return (
    <>
      <FullWidthImage
        src="/images/packaging/05-02_Vacuum_Package.png"
        alt="HANAYU 真空包裝"
        height="medium"
        overlay="light"
      />

      <EditorialSection
        eyebrow="VACUUM SEALED"
        title="封存，不只是包裝。"
        center
      >
        <p>
          每一尾劍尖槍鎖管，
          都於船上完成處理後立即真空封裝。
        </p>

        <p>
          隔絕空氣、鎖住鮮甜，
          讓來自花嶼海域的品質，
          從出海那一刻延續到餐桌。
        </p>
      </EditorialSection>
    </>
  );
}