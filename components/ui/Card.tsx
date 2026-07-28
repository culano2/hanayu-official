import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

type CardTone = "light" | "dark";

const toneClasses: Record<CardTone, string> = {
  light: [
    "border-[#031320]/10",
    "bg-white",
    "text-[#031320]",
    "shadow-[0_24px_70px_rgba(3,19,32,0.07)]",
    "hover:shadow-[0_34px_96px_rgba(3,19,32,0.12)]",
  ].join(" "),

  dark: [
    "border-white/12",
    "bg-white/[0.04]",
    "text-white",
    "hover:border-white/18",
    "hover:bg-white/[0.07]",
  ].join(" "),
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
  const cardClassName = [
    "rounded-lg border p-5",
    "transition-[transform,box-shadow,background-color,border-color]",
    "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "hover:-translate-y-1",
    "active:translate-y-0 active:scale-[0.995]",
    "motion-reduce:transform-none",
    "motion-reduce:transition-none",
    "motion-reduce:hover:transform-none",
    "motion-reduce:active:transform-none",
    toneClasses[tone],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={cardClassName}
      {...props}
    >
      {children}
    </article>
  );
}
