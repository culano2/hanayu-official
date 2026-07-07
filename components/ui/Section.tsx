import type { ComponentPropsWithoutRef, ReactNode } from "react";

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
      className={`${toneClasses[tone]} py-20 sm:py-28 lg:py-36 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
