import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.displayName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#031320",
    theme_color: "#031320",
    lang: siteConfig.language,
  };
}
