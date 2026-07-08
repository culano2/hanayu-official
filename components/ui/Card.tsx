import type { ComponentPropsWithoutRef, ReactNode } from "react";

type CardTone = "light" | "dark";

const toneClasses: Record<CardTone, string> = {
  light:
    "border-[#031320]/10 bg-white text-[#031320] shadow-[0_24px_70px_rgba(3,19,32,0.07)] hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(3,19,32,0.1)]",
  dark: "border-white/12 bg-white/[0.04] text-white hover:-translate-y-1 hover:bg-white/[0.07]",
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
      className={`rounded-lg border p-5 transition-all duration-300 ${toneClasses[tone]} ${className}`}
      {...props}
    >
      {children}
    </article>
  );
}
