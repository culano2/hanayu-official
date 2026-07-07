type DividerTone = "dark" | "light";

const toneClasses: Record<DividerTone, string> = {
  dark: "bg-white/12",
  light: "bg-[#031320]/12",
};

type DividerProps = {
  className?: string;
  tone?: DividerTone;
};

export default function Divider({
  className = "",
  tone = "dark",
}: DividerProps) {
  return (
    <div className={`h-px w-full ${toneClasses[tone]} ${className}`} aria-hidden="true" />
  );
}
