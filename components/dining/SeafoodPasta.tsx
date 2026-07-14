import EditorialSection from "@/components/common/EditorialSection";
import FullWidthImage from "@/components/common/FullWidthImage";

export default function SeafoodPasta() {
  return (
    <>
      <FullWidthImage
        src="/images/dining/04_Seafood_Pasta.png"
        alt="Seafood Pasta"
        height="screen"
        overlay="light"
      />

      <EditorialSection
        eyebrow="SEAFOOD PASTA"
        title="讓海洋，成為整道料理的靈魂。"
        center
      >
        <p>
          新鮮的劍尖槍鎖管，
          與橄欖油、蒜香及義大利麵完美融合，
          展現自然鮮甜與細緻口感。
        </p>

        <p>
          每一道料理，
          都值得最好的食材。
        </p>
      </EditorialSection>
    </>
  );
}