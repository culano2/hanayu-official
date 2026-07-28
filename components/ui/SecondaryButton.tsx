import Button, {
  type ButtonProps,
} from "@/components/ui/Button";

export default function SecondaryButton({
  className = "",
  ...props
}: Omit<ButtonProps, "variant">) {
  return (
    <Button
      className={`min-h-12 ${className}`}
      variant="secondary"
      {...props}
    />
  );
}
