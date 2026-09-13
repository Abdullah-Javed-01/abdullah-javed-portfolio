import { ArrowDown, ArrowDownRight, ArrowUpRight, BrainCircuit, Braces, ChartNoAxesCombined, Cpu, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ExternalLink } from "./shared";

function TechnicalMark() {
  return <div className="technical-mark" aria-hidden="true">
    <div className="mark-caption mono">CONNECTED DISCIPLINES</div>
    <div className="mark-grid"><div className="mark-orbit orbit-one" /><div className="mark-orbit orbit-two" /><div className="mark-axis horizontal" /><div className="mark-axis vertical" />
      <div className="monogram">AJ<span>.</span></div>
      <div className="discipline node-ai"><BrainCircuit size={20} /><span>AI / ML</span></div>
      <div className="discipline node-backend"><Braces size={20} /><span>BACKEND</span></div>
      <div className="discipline node-data"><ChartNoAxesCombined size={20} /><span>DATA</span></div>
      <div className="discipline node-robotics"><Cpu size={20} /><span>ROBOTICS</span></div>
    </div>
    <div className="mark-bottom mono"><span>IDEA → IMPLEMENTATION</span><span>AJ / 01</span></div>
  </div>;
}
export function Hero({ resumeHref }: { resumeHref?: string }) {
  return <section id="home" className="hero section-anchor" aria-labelledby="hero-name">
    <div className="container">
      <div className="hero-topline"><span className="eyebrow">Portfolio / <span>{new Date().getFullYear()}</span></span><span className="location"><MapPin size={14} aria-hidden="true" />{portfolio.location}</span></div>
      <div className="hero-main">
        <div className="hero-copy"><div className="availability"><span />Open to opportunities</div>
          <h1 id="hero-name">Abdullah<br />Javed<span className="accent">.</span></h1>
          <p className="hero-headline">{portfolio.headline}</p>
          <p className="hero-statement">{portfolio.statement}</p>
          <div className="hero-buttons"><a className="button primary" href="#projects">View Projects <ArrowDownRight size={18} /></a><a className="button secondary" href="#contact">Contact Me <ArrowUpRight size={17} /></a></div>
          <div className="hero-links"><ExternalLink href={portfolio.github}>GitHub</ExternalLink><ExternalLink href={portfolio.linkedin}>LinkedIn</ExternalLink>{resumeHref && <a href={resumeHref} download>Résumé PDF <ArrowDown size={15} /></a>}</div>
        </div>
        <TechnicalMark />
      </div>
      <div className="hero-proof">
        <div><span className="proof-title">BS Robotics</span><span>Superior University Lahore</span></div>
        <div><span className="proof-title">3.59 <span className="muted">/ 4.00</span></span><span>CGPA · after 4 semesters</span></div>
        <div><span className="proof-title">Applied experience</span><span>Multiple technical internships</span></div>
        <a className="explore-work" href="#about"><span>Meet the person<br />behind the projects</span><ArrowDown size={22} /></a>
      </div>
    </div>
  </section>;
}
