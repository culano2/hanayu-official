import type { MetadataRoute } from "next";
import { pageSeo, siteConfig } from "@/data/seo";

const sitemapSettings = {
  home: {
    changeFrequency: "weekly",
    priority: 1,
  },
  about: {
    changeFrequency: "monthly",
    priority: 0.8,
  },
  product: {
    changeFrequency: "weekly",
    priority: 0.9,
  },
  fishing: {
    changeFrequency: "monthly",
    priority: 0.8,
  },
  packaging: {
    changeFrequency: "monthly",
    priority: 0.7,
  },
  dining: {
    changeFrequency: "monthly",
    priority: 0.8,
  },
} as const satisfies Record<
  keyof typeof pageSeo,
  {
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }
>;

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(pageSeo).map(([pageKey, page]) => {
    const key = pageKey as keyof typeof pageSeo;
    const settings = sitemapSettings[key];

    return {
      url: new URL(page.path, siteConfig.url).toString(),
      changeFrequency: settings.changeFrequency,
      priority: settings.priority,
    };
  });
}
