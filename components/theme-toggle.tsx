"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Theme = "system" | "dark" | "light";
const key = "aj-portfolio-theme";
let fallback: Theme = "system";
function readTheme(): Theme {
  try { const value = localStorage.getItem(key); return value === "light" || value === "dark" || value === "system" ? value : fallback; }
  catch { return fallback; }
}
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-theme", callback);
  return () => { window.removeEventListener("storage", callback); window.removeEventListener("portfolio-theme", callback); };
}
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "system" as Theme);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => { document.documentElement.dataset.theme = theme === "system" ? media.matches ? "dark" : "light" : theme; };
    apply(); media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [theme]);
  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;
  return <label className="theme-control"><Icon size={16} aria-hidden="true" /><span className="sr-only">Color theme</span>
    <select value={theme} onChange={(event) => {
      fallback = event.target.value as Theme;
      try { localStorage.setItem(key, fallback); } catch { /* Preferences remain usable for this session. */ }
      window.dispatchEvent(new Event("portfolio-theme"));
    }}><option value="system">System</option><option value="dark">Dark</option><option value="light">Light</option></select>
  </label>;
}
