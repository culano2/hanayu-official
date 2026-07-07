import type { ReactNode } from "react";

type EyebrowTone = "gold" | "light" | "muted";

const toneClasses: Record<EyebrowTone, string> = {
  gold: "text-[#C89A4B]",
  light: "text-[#9B7333]",
  muted: "text-white/56",
};

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: EyebrowTone;
};

export default function Eyebrow({
  children,
  className = "",
  tone = "gold",
}: EyebrowProps) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.38em] ${toneClasses[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
