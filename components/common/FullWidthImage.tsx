import Image from "next/image";

type FullWidthImageProps = {
  src: string;
  alt: string;
  height?: "screen" | "large" | "medium";
};

const heightClass = {
  screen: "min-h-screen",
  large: "min-h-[80vh]",
  medium: "min-h-[60vh]",
};

export default function FullWidthImage({
  src,
  alt,
  height = "large",
}: FullWidthImageProps) {
  return (
    <section className={`relative overflow-hidden bg-[#031320] ${heightClass[height]}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#031320]/20" />
    </section>
  );
}