import { spawn } from "node:child_process";
import { createRequire } from "node:module";

// Accept the host flags used by both Next.js and supervised preview environments.
const args = process.argv.slice(2).filter((arg) => arg !== "--strictPort")
  .map((arg) => arg === "--host" ? "--hostname" : arg);
if (!args.includes("--hostname")) args.push("--hostname", "0.0.0.0");
const require = createRequire(import.meta.url);
const child = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "dev", ...args], { stdio: "inherit" });
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => child.kill(signal));
child.on("error", (error) => { process.stderr.write(`${error.message}\n`); process.exitCode = 1; });
child.on("exit", (code) => { process.exitCode = code ?? 0; });
