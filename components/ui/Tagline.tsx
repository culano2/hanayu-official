import type { ReactNode } from "react";

type TaglineTone = "light" | "dark" | "gold";
type TaglineSize = "md" | "lg";

const toneClasses: Record<TaglineTone, string> = {
  light: "text-white",
  dark: "text-[#031320]",
  gold: "text-[#C89A4B]",
};

const sizeClasses: Record<TaglineSize, string> = {
  md: "text-xl leading-8 sm:text-2xl sm:leading-9",
  lg: "text-2xl leading-9 sm:text-4xl sm:leading-tight",
};

type TaglineProps = {
  children: ReactNode;
  className?: string;
  size?: TaglineSize;
  tone?: TaglineTone;
};

export default function Tagline({
  children,
  className = "",
  size = "md",
  tone = "light",
}: TaglineProps) {
  return (
    <p className={`font-semibold ${sizeClasses[size]} ${toneClasses[tone]} ${className}`}>
      {children}
    </p>
  );
}
