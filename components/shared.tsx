import { ArrowUpRight, GitFork, ContactRound, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import type { ReactNode } from "react";

export function SectionHeading({ number, label, title, description, id }: { number: string; label: string; title: string; description?: string; id?: string }) {
  return <div className="section-heading"><p className="eyebrow"><span>{number}</span> / {label}</p><h2 id={id}>{title}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
export function ExternalLink({ href, children, className = "", label }: { href: string; children: ReactNode; className?: string; label?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>{children}<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>;
}
export function SocialLinks({ withLabels = false }: { withLabels?: boolean }) {
  return <div className={`social-links ${withLabels ? "with-labels" : ""}`}>
    <a href={portfolio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><GitFork size={19} />{withLabels && "GitHub"}</a>
    <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><ContactRound size={19} />{withLabels && "LinkedIn"}</a>
    <a href={`mailto:${portfolio.email}`} aria-label="Email Abdullah"><Mail size={19} />{withLabels && "Email"}</a>
  </div>;
}
