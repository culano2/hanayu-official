import PageHero from "@/components/common/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="ABOUT HANAYU"
      title={`來自花嶼，
忠於海洋。`}
      description={`HANAYU 誕生於一次花嶼夜釣的旅程。
我們希望把花嶼海域、職人手釣與精品海鮮的價值，
帶到每一張餐桌。`}
      image="/images/huayu/01-02_Huayu_Sunset.png"
      imageAlt="花嶼海域夕陽"
      overlayClassName="bg-[#031320]/70"
    />
  );
}