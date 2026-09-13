"use client";

import Image from "next/image";
import { useState } from "react";
import { BrainCircuit, ChartNoAxesCombined, Cpu, FileSearch, FileUser, Layers3, Network, ScanLine, ShieldCheck } from "lucide-react";
import type { Project } from "@/data/portfolio";

const visualIcons = { rag: Layers3, backend: Network, talent: FileUser, scam: ShieldCheck, vision: ScanLine, document: FileSearch, churn: ChartNoAxesCombined, analytics: ChartNoAxesCombined, mri: BrainCircuit, robot: Cpu };
export function ProjectVisual({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const Icon = visualIcons[project.visual];
  return <div className={`project-visual visual-${project.visual} ${project.image && !failed ? "has-image" : ""}`}>
    {project.image && !failed ? <Image src={project.image.src} alt={project.image.alt} fill sizes={project.spotlight ? "(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 580px" : "(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 380px"} onError={() => setFailed(true)} className="project-image" /> : <div className="visual-fallback" aria-hidden="true"><div className="visual-grid" /><div className="visual-icon"><Icon size={project.spotlight ? 52 : 42} strokeWidth={1.25} /></div><span className="visual-label mono">{project.visualLabel || project.discipline.toUpperCase()}</span><span className="visual-index mono">{project.visual === "robot" ? `${project.title}${project.year ? ` / ${project.year}` : ""}` : "AJ / PROJECT"}</span></div>}
  </div>;
}
