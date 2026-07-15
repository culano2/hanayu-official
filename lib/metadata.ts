import type { Metadata } from "next";
import { pageSeo, type SeoPageKey } from "@/data/seo";

export function createPageMetadata(pageKey: SeoPageKey): Metadata {
  const page = pageSeo[pageKey];

  const title =
    pageKey === "home"
      ? {
          absolute: page.title,
        }
      : page.title;

  return {
    title,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
  };
}
