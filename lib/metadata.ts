import type { Metadata } from "next";
import {
  pageSeo,
  siteConfig,
  type SeoPageKey,
} from "@/data/seo";

function resolveMetadataTitle(pageKey: SeoPageKey) {
  const page = pageSeo[pageKey];

  return pageKey === "home"
    ? page.title
    : `${page.title}｜${siteConfig.name}`;
}

export function createPageMetadata(pageKey: SeoPageKey): Metadata {
  const page = pageSeo[pageKey];
  const resolvedTitle = resolveMetadataTitle(pageKey);

  return {
    title:
      pageKey === "home"
        ? {
            absolute: page.title,
          }
        : page.title,

    description: page.description,

    alternates: {
      canonical: page.path,
    },

    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: page.path,
      title: resolvedTitle,
      description: page.description,
      images: [
        {
          url: page.image,
          alt: page.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: page.description,
      images: [page.image],
    },
  };
}
