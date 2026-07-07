import Image from "next/image";

type ImagePanelTone = "dark" | "light";

type ImagePanelProps = {
  alt: string;
  className?: string;
  overlay?: boolean;
  priority?: boolean;
  sizes?: string;
  src: string;
  tone?: ImagePanelTone;
};

const toneClasses: Record<ImagePanelTone, string> = {
  dark: "bg-[#020B12]",
  light: "bg-[#F7F6F3]",
};

export default function ImagePanel({
  alt,
  className = "",
  overlay = true,
  priority = false,
  sizes = "100vw",
  src,
  tone = "dark",
}: ImagePanelProps) {
  return (
    <div
      className={`group relative aspect-[4/3] overflow-hidden rounded-md ${toneClasses[tone]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
      />
      {overlay ? (
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,19,32,0.04)_0%,rgba(3,19,32,0.34)_100%)]"
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
