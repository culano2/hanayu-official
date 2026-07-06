export const todaysCatch = {
  id: "catch",
  eyebrow: "Today's Catch",
  title: "Landed early. Sorted cold. Released with restraint.",
  body: "HANAYU publishes the day by quality, not volume. Each lot is checked for clarity, temperature, and handling before it is made available to partner kitchens.",
  image: {
    src: "/images/todays-catch.png",
    alt: "Fresh fish and shellfish sorted on ice at the dock",
  },
  stats: [
    { value: "186 kg", label: "Morning allocation" },
    { value: "11 lots", label: "Quality released" },
  ],
  items: [
    {
      name: "Silver line fish",
      detail: "Firm, bright, sashimi-grade handling",
      status: "Limited",
    },
    {
      name: "Island shellfish",
      detail: "Clean brine, hand-sorted by size",
      status: "Fresh",
    },
    {
      name: "Rock coast catch",
      detail: "Small boat harvest, morning landed",
      status: "Chef hold",
    },
  ],
} as const;
