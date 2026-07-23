import type { ReactNode } from "react";

import Reveal from "@/components/motion/Reveal";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 820,
}: FadeInProps) {
  return (
    <Reveal
      variant="fade"
      delay={delay}
      duration={duration}
      threshold={0.16}
      className={className}
    >
      {children}
    </Reveal>
  );
}
