import type { ReactNode } from "react";

import Reveal from "@/components/motion/Reveal";

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

export default function FadeUp({
  children,
  className = "",
  delay = 0,
  duration = 760,
}: FadeUpProps) {
  return (
    <Reveal
      variant="fade-up"
      delay={delay}
      duration={duration}
      threshold={0.18}
      className={className}
    >
      {children}
    </Reveal>
  );
}
