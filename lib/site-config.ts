import { existsSync } from "node:fs";
import path from "node:path";
import { portfolio } from "@/data/portfolio";

function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const origin = configured || (vercel ? `https://${vercel}` : undefined);
  if (!origin) return undefined;
  try { const url = new URL(origin); return ["https:", "http:"].includes(url.protocol) ? url.origin : undefined; }
  catch { return undefined; }
}
export const siteUrl = getSiteUrl();
export const isIndexable = Boolean(siteUrl) && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
export function getResumeHref(): string | undefined {
  return portfolio.resume.enabled && existsSync(path.join(process.cwd(), "public", portfolio.resume.path)) ? portfolio.resume.path : undefined;
}
