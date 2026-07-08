export const brandTypography = {
  hero: {
    name: "Hero",
    className:
      "text-6xl font-semibold leading-[0.88] tracking-[0.12em] sm:text-8xl lg:text-9xl",
  },
  pageTitle: {
    name: "Page Title",
    className:
      "text-5xl font-semibold leading-[0.95] tracking-[0.08em] sm:text-7xl lg:text-8xl",
  },
  sectionTitle: {
    name: "Section Title",
    className: "text-[2rem] font-semibold leading-tight sm:text-5xl",
  },
  body: {
    name: "Body",
    className: "text-base leading-8 sm:text-lg sm:leading-9",
  },
  caption: {
    name: "Caption",
    className: "text-xs font-bold uppercase tracking-[0.22em]",
  },
} as const;

export type BrandTypographyScale = keyof typeof brandTypography;
