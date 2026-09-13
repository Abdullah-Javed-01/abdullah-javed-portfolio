import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { portfolio } from "@/data/portfolio";
import { isIndexable, siteUrl } from "@/lib/site-config";
import { themeScript } from "@/lib/theme-script";
import "./globals.css";

const title = "Abdullah Javed | AI/ML, Backend, Data Science & Robotics";
const geist = localFont({ src: "../public/fonts/geist-latin.woff2", variable: "--font-geist", weight: "100 900", display: "swap" });
export const metadata: Metadata = {
  title, description: portfolio.description,
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  authors: [{ name: portfolio.name }],
  openGraph: { title, description: portfolio.description, type: "website", locale: "en_US", siteName: `${portfolio.name} — Portfolio`, ...(siteUrl ? { url: siteUrl } : {}) },
  twitter: { card: "summary", title, description: portfolio.description },
  robots: { index: isIndexable, follow: isIndexable },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0c1117" }, { media: "(prefers-color-scheme: light)", color: "#f8fafc" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body className={geist.variable}>{children}</body></html>;
}
