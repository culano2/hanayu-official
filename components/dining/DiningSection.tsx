import EditorialSection from "@/components/common/EditorialSection";
import FullWidthImage from "@/components/common/FullWidthImage";

type DiningSectionProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export default function DiningSection({
  image,
  imageAlt,
  eyebrow,
  title,
  paragraphs,
}: DiningSectionProps) {
  return (
    <>
      <FullWidthImage
        src={image}
        alt={imageAlt}
        height="screen"
        overlay="light"
      />

      <EditorialSection eyebrow={eyebrow} title={title} center>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </EditorialSection>
    </>
  );
}