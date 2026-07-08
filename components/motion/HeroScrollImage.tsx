"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroScrollImageProps = {
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  src: string;
};

export default function HeroScrollImage({
  alt,
  className = "",
  imageClassName = "object-cover object-center",
  priority = true,
  sizes = "100vw",
  src,
}: HeroScrollImageProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    let frame = 0;

    const updateScale = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const viewportHeight = Math.max(window.innerHeight, 1);
        const progress = Math.min(window.scrollY / viewportHeight, 1);
        setScale(1 + progress * 0.06);
      });
    };

    updateScale();
    window.addEventListener("scroll", updateScale, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScale);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        alt={alt}
        className={`${imageClassName} motion-reduce:scale-100`}
        fill
        priority={priority}
        sizes={sizes}
        src={src}
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
}
