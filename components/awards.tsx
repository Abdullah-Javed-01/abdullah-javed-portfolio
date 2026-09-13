import { Trophy } from "lucide-react";
import { awards } from "@/data/portfolio";
import { SectionHeading } from "./shared";

export function AwardsSection() {
  return <section id="achievements" className="section section-anchor section-tonal"><div className="container"><SectionHeading number="06" label="Achievements" title="From the workbench to the arena." /><div className="awards-grid">{awards.map((award) => <article className="award" key={award.year}><div className="award-top"><Trophy size={25} className="accent" aria-hidden="true" /><span className="mono muted">{award.year}</span></div><p className="award-place">{award.place}</p><h3>{award.title}</h3><p>{award.description}</p></article>)}</div></div></section>;
}
