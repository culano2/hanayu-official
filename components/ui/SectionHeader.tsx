import type { ReactNode } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";

type SectionHeaderTone = "dark" | "light";

type SectionHeaderProps = {
  body?: ReactNode;
  className?: string;
  eyebrow: string;
  heading: string;
  tone?: SectionHeaderTone;
};

export default function SectionHeader({
  body,
  className = "",
  eyebrow,
  heading,
  tone = "light",
}: SectionHeaderProps) {
  const isDarkText = tone === "dark";

  return (
    <div className={className}>
      <Eyebrow tone={isDarkText ? "light" : "gold"}>{eyebrow}</Eyebrow>
      <SectionTitle
        as="h2"
        className="mt-5 max-w-2xl"
        size="section"
        tone={isDarkText ? "dark" : "light"}
      >
        {heading}
      </SectionTitle>
      {body ? (
        <div
          className={`mt-7 max-w-2xl text-base leading-8 sm:text-lg sm:leading-9 ${
            isDarkText ? "text-[#314756]" : "text-white/68"
          }`}
        >
          {body}
        </div>
      ) : null}
    </div>
  );
}
