"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, portfolio } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [active, setActive] = useState("home");
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    let scheduled = false;
    function update() {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section[id]"));
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      const current = atBottom ? sections.at(-1) : sections.filter((section) => section.getBoundingClientRect().top <= 160).at(-1);
      setActive(current?.id ?? "home"); scheduled = false;
    }
    const onScroll = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } };
    update(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const close = () => { dialog.current?.close(); document.body.style.overflow = ""; };
  return <header className="site-header">
    <div className="container nav-inner">
      <a className="wordmark" href="#home" aria-label={`${portfolio.name}, home`}>AJ<span className="accent">.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) =>
        <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}>{item.label}</a>
      )}</nav>
      <div className="nav-actions"><ThemeToggle /><button className="icon-button menu-button" aria-label="Open navigation" aria-haspopup="dialog" onClick={() => { dialog.current?.showModal(); document.body.style.overflow = "hidden"; }}><Menu size={21} /></button></div>
    </div>
    <dialog ref={dialog} className="mobile-drawer" aria-labelledby="mobile-nav-title" onClose={() => { document.body.style.overflow = ""; }} onClick={(event) => { if (event.target === dialog.current) close(); }}>
      <div className="drawer-top"><span className="eyebrow" id="mobile-nav-title">Explore the portfolio</span><button className="icon-button" aria-label="Close navigation" onClick={close}><X /></button></div>
      <nav aria-label="Mobile navigation">{navigation.map((item, index) => <a href={`#${item.id}`} key={item.id} onClick={close} aria-current={active === item.id ? "location" : undefined}><span className="mono muted" aria-hidden="true">0{index + 1}</span>{item.label}<ArrowUpRight size={20} aria-hidden="true" /></a>)}</nav>
      <p className="drawer-location">{portfolio.location}</p>
    </dialog>
  </header>;
}
