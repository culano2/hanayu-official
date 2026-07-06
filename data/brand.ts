export const brand = {
  name: "HANAYU",
  origin: "Huayu Island",
  eyebrow: "From Huayu Island",
  homeHref: "/",
  hero: {
    title: "HANAYU",
    body: "Precision-handled seafood from a working island fishery, landed before sunrise and prepared for kitchens that care about origin.",
    primaryCta: {
      href: "#catch",
      label: "View Catch",
    },
    secondaryCta: {
      href: "#story",
      label: "Our Standard",
    },
    media: {
      imageSrc: "/images/hanayu-hero.png",
      imageAlt: "Fresh seafood on ice beside the Huayu Island coastline at dawn",
      videoSrc: undefined as string | undefined,
    },
    metrics: [
      { value: "04:20", label: "Harbor landing" },
      { value: "0-2 C", label: "Cold-chain target" },
      { value: "24h", label: "Island to chef" },
    ],
  },
  standard: {
    id: "story",
    anchorId: "standard",
    eyebrow: "The HANAYU Standard",
    title: "Ocean work, handled with the discipline of a design object.",
    body: "HANAYU is built for people who notice the difference between fresh and carefully protected. The brand keeps the working truth of an island fishery visible while raising the standard for hospitality, retail, and direct chef supply.",
    items: [
      {
        title: "Cold from first touch",
        body: "Every landing is iced and logged at the dock, keeping texture and shelf life protected from the first handoff.",
      },
      {
        title: "Small-boat selectivity",
        body: "We prioritize traceable, lower-volume catches that let chefs know where the fish came from and how it was handled.",
      },
      {
        title: "Kitchen-ready clarity",
        body: "Lots are sorted by use case, condition, and timing, giving buyers a clear picture before the order leaves the island.",
      },
    ],
  },
  footer: {
    id: "contact",
    description:
      "Premium seafood from Huayu Island for chefs, retailers, and guests who value origin, handling, and restraint.",
    company: [
      "HANAYU Seafood Co.",
      "Huayu Island, Penghu",
      "Taiwan",
    ],
    contactEmail: "hello@hanayu.example",
    social: [
      { label: "Instagram", href: "#" },
      { label: "Line", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
} as const;
