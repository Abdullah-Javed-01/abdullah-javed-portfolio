import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { ExperienceTimeline } from "./experience";
import { ProjectGrid } from "./projects";
import { SkillsSection } from "./skills";
import { CredentialsSection } from "./credentials";
import { AwardsSection } from "./awards";
import { ContactSection, Footer } from "./contact";

export function PortfolioPage({ resumeHref }: { resumeHref?: string }) {
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero resumeHref={resumeHref} /><About /><ExperienceTimeline /><ProjectGrid /><SkillsSection /><CredentialsSection /><AwardsSection /><ContactSection /></main><Footer /></>;
}
