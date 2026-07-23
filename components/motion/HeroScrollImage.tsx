"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type HeroScrollImageProps = {
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  src: string;
};

const MAX_SCALE_INCREASE = 0.06;

export default function HeroScrollImage({
  alt,
  className = "",
  imageClassName = "object-cover object-center",
  priority = true,
  sizes = "100vw",
  src,
}: HeroScrollImageProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const image = imageRef.current;

    if (!image) {
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotionQuery.matches) {
      image.style.transform = "scale(1)";
      return;
    }

    let frameId: number | null = null;

    const renderScale = () => {
      frameId = null;

      const viewportHeight = Math.max(window.innerHeight, 1);
      const progress = Math.min(
        Math.max(window.scrollY / viewportHeight, 0),
        1,
      );
      const scale = 1 + progress * MAX_SCALE_INCREASE;

      image.style.transform = `scale(${scale})`;
    };

    const requestScaleUpdate = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(renderScale);
    };

    requestScaleUpdate();

    window.addEventListener("scroll", requestScaleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", requestScaleUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestScaleUpdate);
      window.removeEventListener("resize", requestScaleUpdate);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        ref={imageRef}
        alt={alt}
        className={`${imageClassName} will-change-transform motion-reduce:scale-100`}
        fill
        preload={priority}
        sizes={sizes}
        src={src}
        style={{
          transform: "scale(1)",
          transformOrigin: "center center",
        }}
      />
    </div>
  );
}
