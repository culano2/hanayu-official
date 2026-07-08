"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      const timeout = window.setTimeout(() => setIsVisible(true), 0);
      return () => window.clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:opacity-100 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}
