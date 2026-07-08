import type { ComponentPropsWithoutRef, ReactNode } from "react";
import FadeUp from "@/components/motion/FadeUp";

type SectionTone = "dark" | "light" | "deep";

const toneClasses: Record<SectionTone, string> = {
  dark: "bg-[#031320] text-white",
  light: "bg-[#F7F6F3] text-[#031320]",
  deep: "bg-[#020B12] text-white",
};

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  tone?: SectionTone;
};

export default function Section({
  children,
  className = "",
  tone = "dark",
  ...props
}: SectionProps) {
  return (
    <section
      className={`${toneClasses[tone]} py-24 sm:py-32 lg:py-44 ${className}`}
      {...props}
    >
      <FadeUp>{children}</FadeUp>
    </section>
  );
}
