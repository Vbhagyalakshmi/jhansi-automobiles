import { siteConfig, navLinks } from "@/lib/site-config";

export default function sitemap() {
  return navLinks.map(({ href }) => ({ url: `${siteConfig.url}${href === "/" ? "" : href}`, lastModified: new Date() }));
}
