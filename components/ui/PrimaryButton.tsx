import Button, {
  type ButtonProps,
} from "@/components/ui/Button";

export default function PrimaryButton({
  className = "",
  ...props
}: Omit<ButtonProps, "variant">) {
  return (
    <Button
      className={[
        "min-h-12",
        "shadow-[0_18px_50px_rgba(200,154,75,0.16)]",
        "hover:shadow-[0_24px_64px_rgba(200,154,75,0.24)]",
        "motion-reduce:hover:shadow-[0_18px_50px_rgba(200,154,75,0.16)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      variant="primary"
      {...props}
    />
  );
}
