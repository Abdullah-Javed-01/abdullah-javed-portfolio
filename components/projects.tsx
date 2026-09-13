"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, GitFork } from "lucide-react";
import { portfolio, projectCategories, projects, type Project } from "@/data/portfolio";
import { SectionHeading, ExternalLink } from "./shared";
import { ProjectVisual } from "./project-visual";
import { ProjectDialog } from "./project-dialog";

function TechnologyList({ project, limit }: { project: Project; limit: number }) {
  const remaining = project.stack.length - limit;
  return (
    <ul className="tech-tags" aria-label="Technology stack">
      {project.stack.slice(0, limit).map((item) => <li key={item}>{item}</li>)}
      {remaining > 0 && <li className="more-tech" aria-label={`${remaining} more technologies in project details`}>+{remaining}</li>}
    </ul>
  );
}

function ProjectActions({ project, onOpen, compact = false }: { project: Project; onOpen: () => void; compact?: boolean }) {
  return (
    <div className="project-actions">
      <button className="text-button" onClick={onOpen} aria-label={`Explore ${project.title}`}>
        {compact ? "Explore" : "Explore project"} <ArrowRight size={16} aria-hidden="true" />
      </button>
      <div className="project-external-links">
        {project.demo && <ExternalLink href={project.demo} className="demo-link" label={`Live Demo of ${project.title} (opens in a new tab)`}>Live Demo</ExternalLink>}
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub (opens in a new tab)`}><GitFork size={19} aria-hidden="true" /></a>}
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className={`project-card ${project.spotlight ? "featured-project" : ""}`}>
      <button className="project-visual-button" onClick={onOpen} aria-label={`View details of ${project.title}`}>
        <ProjectVisual project={project} />
        {project.spotlight && <span className="featured-label">Featured project</span>}
      </button>
      <div className="project-body">
        <p className="project-discipline">{project.discipline}{project.academic && " · Academic Project"}</p>
        <h3>{project.title}<span>{project.subtitle}</span></h3>
        <p className="project-description">{project.description}</p>
        {project.metric && <p className="project-metric"><strong>{project.metric.value}</strong><span>{project.metric.label}</span></p>}
        <TechnologyList project={project} limit={project.spotlight ? 5 : 3} />
        <ProjectActions project={project} onOpen={onOpen} />
      </div>
    </article>
  );
}

function ArchiveCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="archive-card">
      <div className="archive-meta">
        <span>{project.academic ? "Academic Project" : project.organization || project.discipline}</span>
        {project.year && <span>{project.year}</span>}
      </div>
      <h4>{project.title}</h4>
      <p className="archive-subtitle">{project.subtitle}</p>
      <p className="archive-description">{project.description}</p>
      {project.metric && <p className="archive-metric"><strong>{project.metric.value}</strong><span>{project.metric.label}</span></p>}
      <TechnologyList project={project} limit={4} />
      <ProjectActions project={project} onOpen={onOpen} compact />
    </article>
  );
}

export function ProjectGrid() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const filtered = projects.filter((project) => category === "All" || project.categories.includes(category));
  const featured = filtered.filter((project) => project.featured);
  const archive = filtered.filter((project) => !project.featured);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);

  return (
    <section id="projects" className="section section-anchor" aria-labelledby="projects-heading">
      <div className="container">
        <div className="projects-heading-row">
          <SectionHeading id="projects-heading" number="03" label="Featured Projects" title="Built. Tested. Improved." description="A closer look at the systems, experiments, and dashboards I’ve built." />
          <ExternalLink href={portfolio.github} className="all-repositories">All repositories</ExternalLink>
        </div>
        <div className="project-filter" role="group" aria-label="Filter featured and archive projects by category">
          {projectCategories.map((item) => <button key={item} aria-pressed={category === item} aria-controls="featured-projects project-archive" onClick={() => setCategory(item)}>{item}{item === "All" && <span>{projects.length}</span>}</button>)}
        </div>
        <p className="project-results" role="status">
          {featured.length} featured {featured.length === 1 ? "project" : "projects"} · {archive.length} archive {archive.length === 1 ? "project" : "projects"}{category !== "All" && ` in ${category}`}
        </p>
        <div id="featured-projects" className={`project-grid ${category !== "All" ? "filtered-grid" : ""}`}>
          {featured.map((project) => <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />)}
        </div>
        {!featured.length && <p className="project-empty">No featured projects in this category.</p>}
        <section id="project-archive" className="project-archive" aria-labelledby="archive-heading">
          <div className="archive-heading">
            <h3 id="archive-heading">Project Archive</h3>
            <p>A broader collection of applications, experiments, analytics projects, coursework, and internship work.</p>
          </div>
          {archive.length ? <div className="archive-grid">{archive.map((project) => <ArchiveCard key={project.id} project={project} onOpen={() => setSelected(project)} />)}</div> : <p className="project-empty">No archive projects in this category.</p>}
        </section>
        <ProjectDialog project={selected} dialogRef={dialog} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}
