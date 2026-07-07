import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

type SplitSectionProps = {
  className?: string;
  media: ReactNode;
  mediaFirst?: boolean;
  text: ReactNode;
};

export default function SplitSection({
  className = "",
  media,
  mediaFirst = false,
  text,
}: SplitSectionProps) {
  return (
    <Container
      className={`grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 ${className}`}
    >
      <div className={mediaFirst ? "lg:order-first" : "lg:order-last"}>{media}</div>
      <div>{text}</div>
    </Container>
  );
}
