import { PortfolioPage } from "@/components/portfolio-page";
import { getResumeHref } from "@/lib/site-config";

export default function Home() { return <PortfolioPage resumeHref={getResumeHref()} />; }
