import { ArrowUpRight, BadgeCheck, FileBadge } from "lucide-react";
import { credentials, recognition } from "@/data/portfolio";
import { SectionHeading } from "./shared";

export function RecognitionSection() {
  return <div className="recognition"><div className="recognition-intro"><FileBadge size={22} className="accent" aria-hidden="true" /><h3>Professional recognition</h3></div><div className="recognition-list">{recognition.map((item) => <article key={`${item.organization}-${item.title}`}><p className="recognition-org">{item.organization}</p><h4>{item.title}</h4><p>{item.description}</p></article>)}</div></div>;
}
export function CredentialsSection() {
  return <section id="credentials" className="section section-anchor"><div className="container"><SectionHeading number="05" label="Credentials" title="A foundation to keep building on." /><div className="credential-list">{credentials.map((item) => <article className="credential" key={`${item.issuer}-${item.title}`}><BadgeCheck size={19} className="accent" aria-hidden="true" /><div><h3>{item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}<ArrowUpRight size={14} /><span className="sr-only"> (opens in a new tab)</span></a> : item.title}</h3><p>{item.issuer}</p></div>{item.date && <span className="credential-date">{item.date}</span>}</article>)}</div><RecognitionSection /></div></section>;
}
