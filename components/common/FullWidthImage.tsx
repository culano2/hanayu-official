import Image from "next/image";

type FullWidthImageProps = {
  src: string;
  alt: string;
  height?: "screen" | "large" | "medium";
  overlay?: "none" | "light" | "medium";
};

const heightClass = {
  screen: "min-h-screen",
  large: "min-h-[80vh]",
  medium: "min-h-[60vh]",
} as const;

const overlayClass = {
  none: "",
  light: "bg-[#031320]/15",
  medium: "bg-[#031320]/35",
} as const;

export default function FullWidthImage({
  src,
  alt,
  height = "large",
  overlay = "light",
}: FullWidthImageProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#031320] ${heightClass[height]}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />

      {overlay !== "none" ? (
        <div
          className={`absolute inset-0 ${overlayClass[overlay]}`}
          aria-hidden="true"
        />
      ) : null}
    </section>
  );
}
