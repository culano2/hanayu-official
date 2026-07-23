"use client";

import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
} from "react";

type RevealVariant =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "blur";

type RevealProps<T extends ElementType = "div"> = {
  children: ReactNode;
  as?: T;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
  style?: CSSProperties;
} & Omit<
  ComponentPropsWithoutRef<T>,
  | "as"
  | "children"
  | "className"
  | "style"
>;

const DEFAULT_ROOT_MARGIN = "0px 0px -12% 0px";
const DEFAULT_THRESHOLD = 0.12;

export default function Reveal<T extends ElementType = "div">({
  children,
  as,
  variant = "fade-up",
  delay = 0,
  duration,
  className = "",
  once = true,
  rootMargin = DEFAULT_ROOT_MARGIN,
  threshold = DEFAULT_THRESHOLD,
  style,
  ...rest
}: RevealProps<T>) {
  const Component = as ?? "div";
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const documentElement = document.documentElement;
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    documentElement.classList.add("motion-ready");

    const showElement = () => {
      element.dataset.revealVisible = "true";
    };

    const hideElement = () => {
      element.dataset.revealVisible = "false";
    };

    if (
      reducedMotionQuery.matches ||
      !("IntersectionObserver" in window)
    ) {
      showElement();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          showElement();

          if (once) {
            observer.unobserve(entry.target);
          }

          return;
        }

        if (!once) {
          hideElement();
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  const motionStyle: CSSProperties = {
    ...style,
    ...(delay > 0
      ? {
          transitionDelay: `${delay}ms`,
        }
      : {}),
    ...(duration
      ? {
          transitionDuration: `${duration}ms`,
        }
      : {}),
  };

  return (
    <Component
      ref={elementRef as never}
      className={className}
      data-reveal={variant}
      data-reveal-visible="false"
      style={motionStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}
