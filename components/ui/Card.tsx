import type { ComponentPropsWithoutRef, ReactNode } from "react";

type CardTone = "light" | "dark";

const toneClasses: Record<CardTone, string> = {
  light:
    "border-[#031320]/12 bg-white text-[#031320] shadow-[0_18px_50px_rgba(3,19,32,0.06)]",
  dark: "border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.07]",
};

type CardProps = ComponentPropsWithoutRef<"article"> & {
  children: ReactNode;
  tone?: CardTone;
};

export default function Card({
  children,
  className = "",
  tone = "light",
  ...props
}: CardProps) {
  return (
    <article
      className={`rounded-md border p-5 transition-colors duration-300 ${toneClasses[tone]} ${className}`}
      {...props}
    >
      {children}
    </article>
  );
}
