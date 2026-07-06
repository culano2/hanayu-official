import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3";
type HeadingTone = "dark" | "light";
type HeadingSize = "hero" | "section" | "card";

const sizeClasses: Record<HeadingSize, string> = {
  hero:
    "text-5xl font-semibold leading-[0.92] tracking-[0.08em] sm:text-7xl lg:text-8xl",
  section: "text-4xl font-semibold leading-tight sm:text-5xl",
  card: "text-xl font-semibold leading-snug",
};

const toneClasses: Record<HeadingTone, string> = {
  dark: "text-[#031320]",
  light: "text-white",
};

type HeadingProps = {
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
  size?: HeadingSize;
  tone?: HeadingTone;
};

export default function Heading({
  as: Tag = "h2",
  children,
  className = "",
  size = "section",
  tone = "light",
}: HeadingProps) {
  return (
    <Tag className={`${sizeClasses[size]} ${toneClasses[tone]} ${className}`}>
      {children}
    </Tag>
  );
}
