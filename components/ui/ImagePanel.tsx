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
      className={`group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 shadow-[0_18px_50px_rgba(3,19,32,0.14)] transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_30px_90px_rgba(3,19,32,0.24)] ${toneClasses[tone]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      {overlay ? (
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,19,32,0.02)_0%,rgba(3,19,32,0.24)_100%)]"
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
