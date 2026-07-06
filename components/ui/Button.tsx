import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center border font-bold uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[#C89A4B] bg-[#C89A4B] text-[#031320] hover:border-[#F7F6F3] hover:bg-[#F7F6F3] focus-visible:outline-[#F7F6F3]",
  secondary:
    "border-white/35 bg-transparent text-white hover:border-white hover:bg-white hover:text-[#031320] focus-visible:outline-[#F7F6F3]",
  ghost:
    "border-transparent bg-transparent text-white/72 hover:text-white focus-visible:outline-[#C89A4B]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-xs",
  lg: "px-6 py-4 text-sm",
};

type SharedButtonProps = {
  "aria-label"?: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedButtonProps & {
  href: string;
  rel?: string;
  target?: string;
};

type NativeButtonProps = SharedButtonProps & {
  disabled?: boolean;
  href?: never;
  type?: "button" | "submit" | "reset";
};

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return typeof props.href === "string";
}

export default function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    size = "md",
    variant = "primary",
  } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (isLinkButton(props)) {
    return (
      <Link
        aria-label={props["aria-label"]}
        className={classes}
        href={props.href}
        onClick={props.onClick}
        rel={props.rel}
        target={props.target}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props;

  return (
    <button
      aria-label={buttonProps["aria-label"]}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      type={buttonProps.type ?? "button"}
    >
      {children}
    </button>
  );
}
