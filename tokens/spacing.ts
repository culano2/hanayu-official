export const brandSpacing = {
  pageGutter: "px-6 sm:px-8 lg:px-12",
  container: "mx-auto w-full max-w-7xl",
  sectionY: "py-20 sm:py-28 lg:py-40",
  sectionGap: "gap-10 lg:gap-20",
  stackSm: "space-y-3",
  stackMd: "space-y-5",
  stackLg: "space-y-8",
} as const;

export type BrandSpacing = keyof typeof brandSpacing;
