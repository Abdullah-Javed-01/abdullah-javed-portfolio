import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><span className="eyebrow">404 / Page not found</span><h1>Let’s get you back<br />to the portfolio.</h1><Link href="/" className="button primary">Back to home</Link></main>;
}
