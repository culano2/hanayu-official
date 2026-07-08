export const brandShadows = {
  none: "shadow-none",
  glass: "shadow-[0_18px_70px_rgba(0,0,0,0.22)]",
  goldGlow: "shadow-[0_18px_50px_rgba(200,154,75,0.16)]",
  imageLift: "shadow-[0_28px_90px_rgba(3,19,32,0.18)]",
} as const;

export type BrandShadow = keyof typeof brandShadows;
