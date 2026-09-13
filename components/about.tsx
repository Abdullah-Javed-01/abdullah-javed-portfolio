import { ArrowUpRight, GraduationCap } from "lucide-react";
import { experiences, portfolio } from "@/data/portfolio";
import { SectionHeading } from "./shared";

export function About() {
  return <section id="about" className="section section-anchor" aria-labelledby="about-title"><div className="container">
    <SectionHeading id="about-title" number="01" label="About" title="Different disciplines. A practical mindset." />
    <div className="about-layout"><div className="about-copy">{portfolio.about.map((text) => <p key={text}>{text}</p>)}
      <div className="education"><GraduationCap className="accent" size={22} aria-hidden="true" /><div><h3>Education</h3>{portfolio.education.map((item) => <div className="education-item" key={item.degree}><strong>{item.degree}</strong><span>{item.institution}</span><span className="small muted">{item.dates}</span>{"detail" in item && <span className="education-detail">{item.detail}</span>}</div>)}</div></div>
    </div><aside className="currently" aria-labelledby="currently-heading"><div className="currently-header"><h3 id="currently-heading">Currently</h3><span className="mono">IN PROGRESS</span></div>{experiences.filter((item) => item.current).map((item) => <a href="#experience" className="current-role" key={item.organization}><span className="company-mark">{item.initials}</span><span><strong>{item.role}</strong><span>{item.organization}</span></span><ArrowUpRight size={17} aria-hidden="true" /></a>)}</aside></div>
  </div></section>;
}
