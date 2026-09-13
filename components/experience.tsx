import { ArrowDown, GraduationCap } from "lucide-react";
import { experiences, fellowship, type Experience } from "@/data/portfolio";
import { SectionHeading } from "./shared";

function ExperienceCard({ item }: { item: Experience }) {
  return <article className="experience-card"><div className="timeline-marker" /><div className="experience-date"><span>{item.dates}</span>{item.current && <span className="current-tag">Current</span>}</div><div className="experience-content"><div className="experience-top"><div><h3>{item.role}</h3><p className="organization">{item.organization}</p></div><span className="work-mode">{item.mode}</span></div><p>{item.summary}</p>{item.result && <span className="experience-result">{item.result}</span>}<details className="experience-details"><summary>More about this role <ArrowDown size={14} aria-hidden="true" /></summary><ul>{item.highlights.map((point) => <li key={point}>{point}</li>)}</ul></details></div></article>;
}
export function ExperienceTimeline() {
  return <section id="experience" className="section section-anchor section-tonal" aria-labelledby="experience-heading"><div className="container">
    <div id="experience-heading"><SectionHeading number="02" label="Experience" title="Learning through real work." description="Technical internships, collaborative projects, and community leadership." /></div>
    <div className="timeline"><p className="timeline-label eyebrow">Current roles</p>{experiences.filter((item) => item.current).map((item) => <ExperienceCard item={item} key={item.organization} />)}<p className="timeline-label eyebrow completed-label">Completed technical experience</p>{experiences.filter((item) => !item.current).map((item) => <ExperienceCard item={item} key={item.organization} />)}</div>
    <aside className="fellowship" aria-labelledby="fellowship-heading"><div className="fellowship-intro"><div className="fellowship-label"><GraduationCap size={20} /><span className="eyebrow">Fellowship</span></div><h3 id="fellowship-heading">{fellowship.program}</h3><p className="organization">{fellowship.organization} · {fellowship.role}</p><span className="small muted">{fellowship.dates}</span><p>{fellowship.summary}</p><p className="small muted">{fellowship.stack.join(" · ")}</p></div><div className="fellowship-evaluation"><div className="fellowship-stats">{fellowship.results.map((result) => <div key={result.label}><strong>{result.value}</strong><span>{result.label}</span></div>)}</div><p>{fellowship.note}</p></div></aside>
  </div></section>;
}
