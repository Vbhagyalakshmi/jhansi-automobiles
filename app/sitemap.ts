import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const publicRoutes = ["/", "/about", "/services", "/workshop", "/gallery", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
  }));
}
