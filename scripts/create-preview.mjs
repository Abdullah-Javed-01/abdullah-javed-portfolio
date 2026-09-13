import { build } from "esbuild";
import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { transform } from "esbuild";

// The offline review uses the site's actual components and production CSS.
// Only Next's network image optimizer is replaced with embedded original assets.
const root = process.cwd();
const destination = path.resolve(process.argv[2] || "preview/abdullah-javed-portfolio.html");
const assets = {};
const mime = { ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".pdf": "application/pdf" };
for (const name of await fs.readdir(path.join(root, "public/projects"))) {
  const type = mime[path.extname(name)];
  if (type) assets[`/projects/${name}`] = `data:${type};base64,${(await fs.readFile(path.join(root, "public/projects", name))).toString("base64")}`;
}
const imagePlugin = {
  name: "offline-images",
  setup(builder) {
    builder.onResolve({ filter: /^next\/image$/ }, () => ({ path: "offline-image", namespace: "offline" }));
    builder.onLoad({ filter: /.*/, namespace: "offline" }, () => ({
      loader: "jsx", resolveDir: root,
      contents: `import React from 'react'; const assets=${JSON.stringify(assets)}; export default function Image({src,alt,className,onError}) { return <img src={assets[src] || src} alt={alt} className={className} onError={onError} loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}/>; }`,
    }));
  },
};
const common = { absWorkingDir: root, bundle: true, write: false, jsx: "automatic", plugins: [imagePlugin], logLevel: "error", define: { "process.env.NODE_ENV": '"production"' } };
const server = await build({ ...common, platform: "node", format: "cjs", packages: "external", stdin: { contents: `import React from 'react'; import {renderToString} from 'react-dom/server'; import {PortfolioPage} from './components/portfolio-page'; export const markup=renderToString(<PortfolioPage/>);`, loader: "tsx", resolveDir: root } });
const require = createRequire(import.meta.url);
const mod = { exports: {} };
new Function("require", "module", "exports", server.outputFiles[0].text)(require, mod, mod.exports);
const client = await build({ ...common, platform: "browser", format: "iife", minify: true, stdin: { contents: `import React from 'react'; import {hydrateRoot} from 'react-dom/client'; import {PortfolioPage} from './components/portfolio-page'; hydrateRoot(document.getElementById('portfolio-preview'), <PortfolioPage/>);`, loader: "tsx", resolveDir: root } });
const chunkRoot = path.join(root, ".next/static/chunks");
const stylesheets = (await fs.readdir(chunkRoot)).filter((name) => name.endsWith(".css"));
if (!stylesheets.length) throw new Error("Run npm run build before creating the preview.");
let css = (await Promise.all(stylesheets.map((name) => fs.readFile(path.join(chunkRoot, name), "utf8")))).join("\n");
css = css.replace(/@font-face\s*\{[^}]*\}/g, "");
const font = (await fs.readFile(path.join(root, "public/fonts/geist-latin.woff2"))).toString("base64");
css += `@font-face{font-family:PreviewGeist;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900;font-display:swap}body{--font-geist:PreviewGeist}`;
const scriptModule = await transform(await fs.readFile(path.join(root, "lib/theme-script.ts"), "utf8"), { loader: "ts", format: "cjs" });
const themeModule = { exports: {} }; new Function("module", "exports", scriptModule.code)(themeModule, themeModule.exports);
const favicon = (await fs.readFile(path.join(root, "public/favicon.svg"))).toString("base64");
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Abdullah Javed | Portfolio preview</title><link rel="icon" href="data:image/svg+xml;base64,${favicon}"><script>${themeModule.exports.themeScript}</script><style>${css}</style></head><body><div id="portfolio-preview">${mod.exports.markup}</div><script>${client.outputFiles[0].text.replaceAll("</script", "<\\/script")}</script></body></html>`;
await fs.mkdir(path.dirname(destination), { recursive: true });
await fs.writeFile(destination, html);
process.stdout.write(`Interactive preview written: ${destination} (${Math.round(Buffer.byteLength(html) / 1024)} KB)\n`);
