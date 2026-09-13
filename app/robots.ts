import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", ...(isIndexable ? { allow: "/" } : { disallow: "/" }) }, ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}) };
}
