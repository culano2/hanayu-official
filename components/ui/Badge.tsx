import type { ReactNode } from "react";

type BadgeTone = "gold" | "light" | "dark";

const toneClasses: Record<BadgeTone, string> = {
  gold: "text-[#C89A4B]",
  light: "text-[#9B7333]",
  dark: "text-white/64",
};

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: BadgeTone;
};

export default function Badge({
  children,
  className = "",
  tone = "gold",
}: BadgeProps) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.36em] ${toneClasses[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
