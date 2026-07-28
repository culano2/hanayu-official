import Link from "next/link";
import type {
  MouseEventHandler,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const baseClasses = [
  "group relative isolate inline-flex items-center justify-center overflow-hidden",
  "border font-bold uppercase tracking-[0.18em]",
  "transition-[transform,border-color,background-color,color,box-shadow,opacity]",
  "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "before:absolute before:inset-0 before:-z-10",
  "before:origin-left before:scale-x-0",
  "before:transition-transform before:duration-500",
  "before:ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:before:scale-x-100",
  "active:translate-y-0 active:scale-[0.985]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
  "disabled:pointer-events-none disabled:opacity-50",
  "motion-reduce:transform-none motion-reduce:transition-none",
  "motion-reduce:before:transition-none",
  "motion-reduce:hover:transform-none motion-reduce:active:transform-none",
].join(" ");

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "border-[#C89A4B] bg-[#C89A4B] text-[#031320]",
    "hover:border-[#F7F6F3]",
    "focus-visible:outline-[#F7F6F3]",
    "before:bg-[#F7F6F3]",
  ].join(" "),

  secondary: [
    "border-white/35 bg-transparent text-white",
    "hover:border-[#C89A4B] hover:text-[#031320]",
    "focus-visible:outline-[#F7F6F3]",
    "before:bg-[#C89A4B]",
  ].join(" "),

  ghost: [
    "border-transparent bg-transparent text-white/72",
    "hover:text-white",
    "focus-visible:outline-[#C89A4B]",
    "before:hidden",
  ].join(" "),
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
  onClick?: MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement
  >;
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

export type ButtonProps =
  | LinkButtonProps
  | NativeButtonProps;

function isLinkButton(
  props: ButtonProps,
): props is LinkButtonProps {
  return typeof props.href === "string";
}

export default function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    size = "md",
    variant = "primary",
  } = props;

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

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
        <span className="relative z-10">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button
      aria-label={props["aria-label"]}
      className={classes}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type ?? "button"}
    >
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}
