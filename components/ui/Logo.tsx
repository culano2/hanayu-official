import Link from "next/link";
import type { MouseEventHandler } from "react";

type LogoTone = "light" | "dark";

const toneClasses: Record<LogoTone, { mark: string; origin: string }> = {
  light: {
    mark: "text-white",
    origin: "text-[#C89A4B]",
  },
  dark: {
    mark: "text-[#031320]",
    origin: "text-[#9B7333]",
  },
};

type LogoProps = {
  ariaLabel?: string;
  className?: string;
  href?: string;
  name: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  origin: string;
  tone?: LogoTone;
};

export default function Logo({
  ariaLabel,
  className = "",
  href,
  name,
  onClick,
  origin,
  tone = "light",
}: LogoProps) {
  const content = (
    <>
      <span
        className={`text-xl font-semibold tracking-[0.28em] sm:text-2xl ${toneClasses[tone].mark}`}
      >
        {name}
      </span>

      <span
        className={`mt-2 text-[0.65rem] font-medium uppercase tracking-[0.32em] ${toneClasses[tone].origin}`}
      >
        {origin}
      </span>
    </>
  );

  const baseClasses = `flex flex-col leading-none ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        onClick={onClick}
        className={`
          ${baseClasses}
          rounded-sm outline-none
          transition-opacity duration-300
          hover:opacity-85
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#C89A4B]
          motion-reduce:transition-none
        `}
      >
        {content}
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
