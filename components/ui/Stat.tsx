type StatTone = "light" | "dark";
type StatSize = "sm" | "md";

const valueClasses: Record<StatSize, string> = {
  sm: "text-2xl",
  md: "text-3xl",
};

const labelClasses: Record<StatTone, string> = {
  light: "text-[#506474]",
  dark: "text-white/62",
};

type StatProps = {
  className?: string;
  label: string;
  size?: StatSize;
  tone?: StatTone;
  value: string;
};

export default function Stat({
  className = "",
  label,
  size = "md",
  tone = "light",
  value,
}: StatProps) {
  return (
    <div className={className}>
      <dt className={`text-sm leading-6 ${labelClasses[tone]}`}>{label}</dt>
      <dd className={`mt-2 font-semibold tracking-[0.04em] ${valueClasses[size]}`}>
        {value}
      </dd>
    </div>
  );
}
