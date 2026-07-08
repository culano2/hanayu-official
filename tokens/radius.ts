export const brandRadius = {
  none: "rounded-none",
  subtle: "rounded-sm",
  standard: "rounded",
  panel: "rounded-lg",
  full: "rounded-full",
} as const;

export type BrandRadius = keyof typeof brandRadius;
