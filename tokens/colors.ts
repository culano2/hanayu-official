export const brandColors = {
  deepOcean: {
    name: "Deep Ocean",
    hex: "#031320",
    usage: "Primary background, hero overlays, premium dark surfaces",
  },
  midnightBlue: {
    name: "Midnight Blue",
    hex: "#0A2438",
    usage: "Secondary dark surfaces and navigation glass",
  },
  oceanSlate: {
    name: "Ocean Slate",
    hex: "#506474",
    usage: "Body copy, secondary text, restrained UI details",
  },
  premiumGold: {
    name: "Premium Gold",
    hex: "#C89A4B",
    usage: "Primary accents, focus states, premium CTA treatment",
  },
  pearlWhite: {
    name: "Pearl White",
    hex: "#F7F6F3",
    usage: "Light backgrounds and text on dark imagery",
  },
  mistGray: {
    name: "Mist Gray",
    hex: "#D8DEE2",
    usage: "Borders, quiet dividers, secondary light surfaces",
  },
} as const;

export type BrandColor = keyof typeof brandColors;
