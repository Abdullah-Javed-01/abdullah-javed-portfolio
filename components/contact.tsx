import { ArrowUp, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ExternalLink, SocialLinks } from "./shared";

export function ContactSection() {
  return <section id="contact" className="contact-section section-anchor"><div className="container"><p className="eyebrow"><span>07</span> / Get in touch</p><div className="contact-layout"><div><h2>Interested in<br />working together<span className="accent">?</span></h2><p>{portfolio.contact}</p><a className="button primary" href={`mailto:${portfolio.email}`}><Mail size={18} />Email Me <ArrowUpRight size={18} /></a><a className="contact-email" href={`mailto:${portfolio.email}`}>{portfolio.email}</a></div><div className="contact-aside"><span className="contact-monogram" aria-hidden="true">AJ<span>.</span></span><p><MapPin size={16} aria-hidden="true" />{portfolio.location}</p><div><ExternalLink href={portfolio.linkedin}>LinkedIn</ExternalLink><ExternalLink href={portfolio.github}>GitHub</ExternalLink></div></div></div></div></section>;
}
export function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><div><a className="footer-name" href="#home">{portfolio.name}</a><p>{portfolio.headline}</p></div><SocialLinks /></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {portfolio.name}</span><span>Built with Next.js</span><a href="#home">Back to top <ArrowUp size={15} /></a></div></div></footer>;
}
