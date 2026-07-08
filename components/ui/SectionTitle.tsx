import type { ReactNode } from "react";

type SectionTitleLevel = "h1" | "h2" | "h3";
type SectionTitleSize = "hero" | "page" | "section";
type SectionTitleTone = "light" | "dark";

const sizeClasses: Record<SectionTitleSize, string> = {
  hero:
    "text-6xl font-semibold leading-[0.88] tracking-[0.12em] sm:text-8xl lg:text-9xl",
  page:
    "text-5xl font-semibold leading-[0.95] tracking-[0.08em] sm:text-7xl lg:text-8xl",
  section: "text-[2rem] font-semibold leading-tight sm:text-5xl",
};

const toneClasses: Record<SectionTitleTone, string> = {
  light: "text-white",
  dark: "text-[#031320]",
};

type SectionTitleProps = {
  as?: SectionTitleLevel;
  children: ReactNode;
  className?: string;
  size?: SectionTitleSize;
  tone?: SectionTitleTone;
};

export default function SectionTitle({
  as: Tag = "h2",
  children,
  className = "",
  size = "section",
  tone = "light",
}: SectionTitleProps) {
  return (
    <Tag className={`${sizeClasses[size]} ${toneClasses[tone]} ${className}`}>
      {children}
    </Tag>
  );
}
