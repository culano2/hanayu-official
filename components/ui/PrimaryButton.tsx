import Button, { type ButtonProps } from "@/components/ui/Button";

export default function PrimaryButton({
  className = "",
  ...props
}: Omit<ButtonProps, "variant">) {
  return (
    <Button
      className={`min-h-12 shadow-[0_18px_50px_rgba(200,154,75,0.16)] hover:-translate-y-0.5 ${className}`}
      variant="primary"
      {...props}
    />
  );
}
