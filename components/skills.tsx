import { BrainCircuit, ChartNoAxesCombined, Code2, Layers3, ScanLine, Server, Sparkles } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./shared";

const icons = { code: Code2, brain: BrainCircuit, sparkles: Sparkles, scan: ScanLine, server: Server, chart: ChartNoAxesCombined, layers: Layers3 };
export function SkillsSection() {
  return <section id="skills" className="section section-anchor section-tonal"><div className="container skills-layout"><SectionHeading number="04" label="Technical toolkit" title="The tools behind the work." description="Connected skills, applied to the problem at hand." /><div className="skill-groups">{skillGroups.map((group) => { const Icon = icons[group.icon]; return <article className="skill-group" key={group.title}><Icon size={20} className="accent" aria-hidden="true" /><div><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div></article>; })}</div></div></section>;
}
