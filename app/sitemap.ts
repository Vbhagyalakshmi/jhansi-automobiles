import { siteConfig } from "@/lib/site-config";

export default function sitemap() {
  const lastModified = new Date("2026-10-11T00:00:00.000Z");

  return ["/", "/about", "/services", "/workshop", "/gallery", "/contact"].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
  }));
}
