type BrandDividerTone = "gold" | "light" | "dark";

const toneClasses: Record<BrandDividerTone, string> = {
  gold: "bg-[#C89A4B]",
  light: "bg-white/16",
  dark: "bg-[#031320]/12",
};

type BrandDividerProps = {
  className?: string;
  tone?: BrandDividerTone;
};

export default function BrandDivider({
  className = "",
  tone = "gold",
}: BrandDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`h-px w-24 ${toneClasses[tone]} ${className}`}
    />
  );
}
