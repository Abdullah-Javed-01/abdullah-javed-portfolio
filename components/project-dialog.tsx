"use client";

import { GitFork, X } from "lucide-react";
import type { RefObject } from "react";
import type { Project } from "@/data/portfolio";
import { ExternalLink } from "./shared";
import { ProjectVisual } from "./project-visual";

export function ProjectDialog({ project, dialogRef, onClose }: {
  project: Project | null;
  dialogRef: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
}) {
  const close = () => dialogRef.current?.close();
  return (
    <dialog className="project-dialog" ref={dialogRef} aria-labelledby="project-detail-title" onClose={onClose} onClick={(event) => { if (event.target === dialogRef.current) close(); }}>
      <div className="dialog-shell">
        {project && <>
          <div className="dialog-top">
            <span className="eyebrow">Project notes</span>
            <button className="icon-button" aria-label="Close project details" onClick={close} autoFocus><X size={22} aria-hidden="true" /></button>
          </div>
          {project.video ? <figure className="project-video">
            <video controls preload="none" poster={project.video.poster} aria-label={project.video.caption}>
              <source src={project.video.src} />
              Your browser cannot play this video. <a href={project.video.src}>Open the video file</a>.
            </video>
            <figcaption>{project.video.caption}</figcaption>
          </figure> : <ProjectVisual key={project.id} project={project} />}
          <div className="dialog-content">
            <p className="project-discipline">{project.discipline}{project.academic && " · Academic Project"}</p>
            <h2 id="project-detail-title">{project.title}<span>{project.subtitle}</span></h2>
            {(project.organization || project.year) && <p className="detail-meta">{[project.organization, project.year].filter(Boolean).join(" · ")}</p>}
            <h3>Problem &amp; context</h3><p>{project.context}</p>
            <h3>Technical approach</h3>
            <ul className="detail-highlights">{project.highlights.map((point) => <li key={point}>{point}</li>)}</ul>
            <div className="outcome"><h3>Outcome</h3><p>{project.outcome}</p></div>
            <ul className="tech-tags" aria-label="Full technology stack">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
            {(project.github || project.demo) && <div className="dialog-actions">
              {project.github && <ExternalLink href={project.github} className="button primary"><GitFork size={17} aria-hidden="true" />View repository</ExternalLink>}
              {project.demo && <ExternalLink href={project.demo} className="button secondary">Live Demo</ExternalLink>}
            </div>}
          </div>
        </>}
      </div>
    </dialog>
  );
}
