# Abdullah’s local portfolio update guide

This guide is for the existing Next.js portfolio. Most routine updates happen in `data/portfolio.ts`; you do not need to edit the card components.

## Open the project in VS Code

1. Extract the ZIP into a normal working folder. Open the inner `abdullah-javed-portfolio` folder in VS Code using **File → Open Folder**. You should see `package.json` at the top level.
2. Install Node.js if needed. `package.json` requires Node 20.9 or later. In **Terminal → New Terminal**, run `node --version` and `npm --version` to confirm they are available.
3. Run the following commands from the folder containing `package.json`:

```bash
npm install
npm run dev
```

`npm install` installs the packages recorded in the project and lockfile. `npm run dev` starts the local development server; open the address printed in the terminal. Saved edits refresh the page. Press **Ctrl+C** in the terminal to stop it.

## Where content lives

| What you want to change | Export in `data/portfolio.ts` |
| --- | --- |
| Name, headline, About, education, contact links, resume | `portfolio` |
| Navigation labels and destinations | `navigation` |
| Work experience and current roles | `experiences` |
| Fellowship summary and evaluation | `fellowship` |
| Featured Projects and Project Archive | `projects` |
| Filter labels | `projectCategories` and the `ProjectCategory` type |
| Skills | `skillGroups` |
| Certifications | `credentials` |
| Recommendation letters and appreciation | `recognition` |
| Competition awards | `awards` |

Keep commas between objects and quotation marks around text. VS Code and `npm run check` will flag invalid TypeScript. Keep a backup or a local source-control checkpoint before a substantial edit.

## Add a project

Find `export const projects: Project[] = [` and add one object before its closing `];`. Use a unique, stable `id` with lowercase words and hyphens. The following is an editing template: replace its example copy, and only uncomment optional fields after the real asset or URL exists.

```ts
{
  id: "my-new-project",
  title: "My Project Name",
  subtitle: "A short, specific subtitle",
  categories: ["Machine Learning", "Data Analytics"],
  discipline: "Machine Learning · Data Science",
  description: "One or two sentences explaining what the project does.",
  context: "The problem, intended users, and dataset or operating context.",
  highlights: [
    "An implemented feature or technical decision.",
    "Another feature supported by the actual project."
  ],
  outcome: "What was completed and how the result was evaluated.",
  stack: ["Python", "Pandas", "Scikit-learn"],
  featured: false,
  visual: "analytics",
  // organization: "The actual organization, if applicable",
  // year: "The actual completion year",
  // academic: true,
  // github: "YOUR_REAL_REPOSITORY_URL",
  // demo: "YOUR_VERIFIED_DEPLOYED_URL",
  // image: {
  //   src: "/projects/my-project.webp",
  //   alt: "What the real screenshot or result graphic shows."
  // },
  // metric: { value: "YOUR_VERIFIED_RESULT", label: "Evaluation scope" }
},
```

The commented values are placeholders for your edits, not working links or project claims. Delete unused fields. Keep the `context`, `highlights`, and `outcome` useful: these appear in the Explore dialog.

### Featured versus archive

- `featured: true` puts a project in the main visual grid. There are currently **10**.
- `featured: false` puts it in the compact Project Archive. There are currently **14**.
- `spotlight: true` gives a featured project the larger treatment used by KnowledgeVault and the billing service. Leave it omitted for normal featured cards and archive entries.
- Array order controls order within each group. Add the object once; do not duplicate it to make it appear under several filters.
- Counts and both groups update automatically from the same data.

Use any of these exact category strings: `AI / GenAI`, `Machine Learning`, `Backend`, `Computer Vision`, `Data Analytics`, `Robotics`. A project can belong to several. `All` is a filter option and must not be put in a project’s `categories`.

`visual` selects a fallback graphic. Available values are `rag`, `backend`, `talent`, `scam`, `vision`, `document`, `churn`, `analytics`, `mri`, and `robot`. `visualLabel` optionally customizes its small caption. Keep project-specific wording in the data file.

### Links and metrics

Copy the exact repository URL into `github` after opening it. If there is no repository, omit the field. Add `demo` only after verifying that its URL opens a working deployed application. A README link, Google Drive recording, or local `localhost` address is not a live demo. The site conditionally displays **Live Demo** on the card and in its dialog; it does not automatically validate a supplied URL.

Only add a metric supported by saved evaluation evidence. Identify the model, split, dataset, or test suite in its label and dialog. Keep dataset scale separate from model quality or business impact. For example, KnowledgeVault’s 100% is a result on a defined 20-case suite; retail revenue is the scope of the analyzed dataset. Consult `docs/PROJECT-AUDIT.md` before changing existing results.

## Update experience

Edit an object in `experiences`. Its fields are `organization`, `initials`, `role`, `dates`, `mode`, `summary`, `highlights`, and optional `current` and `result`.

When a role ends, change `dates` from `Sep 2026 – Present` to the real completed range and set `current: false` (or remove `current`). The About section’s Currently cards derive from `current: true`, so the role disappears there automatically while remaining in Experience.

To add a role, copy the structure of an existing object, replace all facts, and put it in the desired timeline order. Edit `summary` for its short description and `highlights` for actual responsibilities or completed work. Use `result` only for an evidenced outcome.

The separate fellowship panel is in `fellowship`, including its dates, description, stack, results, and certificate note. Keep its Spam Message Detector results consistent with the corresponding project entry.

## Add a certification

Add an object to `credentials`:

```ts
{
  title: "Exact certification title",
  issuer: "Actual issuing organization",
  date: "Month YYYY",
  // url: "YOUR_REAL_VERIFICATION_URL"
},
```

`date` and `url` are optional. A verification link appears only when `url` is provided. Do not use an issuer homepage as if it verifies your credential. Keep certifications compact and secondary to projects.

## Add an award or professional recognition

For a competition result, add to `awards` using `year`, `place`, `title`, and `description`. Copy an existing object and replace it with the exact event and placement.

For a recommendation letter or appreciation, add to `recognition` using `organization`, `title`, and `description`. Summarize the real document; add no invented quotes.

## Update About, headline, and education

- Edit `portfolio.about` to change the About paragraphs.
- Edit `portfolio.headline` to change the line below your name.
- Edit `portfolio.statement` to change the hero introduction.
- Edit `portfolio.description` for the metadata description used by search and sharing.
- Edit `portfolio.education` to update dates, degree, or the CGPA detail as your studies progress. The current degree is **BS Robotics**.

The Connected Disciplines illustration is part of the approved design in `components/hero.tsx`; ordinary biography edits do not require changing it.

## Update contact links

Edit `portfolio.email`, `portfolio.github`, `portfolio.linkedin`, and `portfolio.location`. Enter the email address alone; the component adds `mailto:`. These shared values update the relevant hero, contact, and footer links. Project repository links remain individual `github` fields in `projects`.

## Add or replace a project image

1. Save a real screenshot, photo, or evaluation graphic in `public/projects/`, preferably as a compressed WebP, JPG, or PNG. Use a short filename without spaces. A width around 1200–1600 pixels is usually sufficient for this layout.
2. Add or update the project’s `image`:

```ts
image: {
  src: "/projects/my-project.webp",
  alt: "A specific description of the visible interface or result.",
  // source: "The actual original source URL, if available"
},
```

3. Record the source in `docs/asset-sources.json`. For your own photograph, note that it is your original asset. Do not fabricate a repository blob ID.
4. Open the card and its Explore dialog. Images use a contained layout so charts remain readable. Missing images fall back to the project graphic automatically.

The archive stays compact: its images appear in Explore dialogs rather than on every list item. The standalone review generator embeds supported images directly inside `public/projects/`; keep their filenames there rather than nesting them in another folder.

## Add a THOR photo or video

Find the object whose `id` is `thor`. Add a real photo through the `image` field above, for example with `src: "/projects/thor.webp"`. The card then uses the photo automatically.

For a real video, place the file at `public/projects/thor.mp4` and add:

```ts
video: {
  src: "/projects/thor.mp4",
  poster: "/projects/thor.webp",
  caption: "THOR in the Sumo War competition at Taakra 2025."
},
```

Use a caption that accurately describes the supplied footage. `poster` is optional; omit it until the photo exists. The card keeps using `image`, while Explore shows the video with playback controls and a visible caption. Nothing autoplays. Use a browser-compatible MP4 or WebM and test it locally. Include a transcript or captions when speech conveys information.

Video files are not embedded in the standalone HTML review file. Review future video additions using `npm run dev` or the production server, where files in `public/` are served normally.

## Add the resume

1. Put the real PDF at **`public/Abdullah-Javed-Resume.pdf`**.
2. In `portfolio.resume`, keep `path: "/Abdullah-Javed-Resume.pdf"` and change `enabled` to `true`.
3. Restart development if necessary, then rebuild and check that the resume opens.

The Next.js page shows the link only when both the flag and the actual PDF are present. It is currently disabled. The standalone HTML intentionally omits the resume link; verify it on the local Next.js site.

## Test before sharing an update

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies after first extraction or dependency changes. |
| `npm run dev` | Preview edits locally with automatic refresh. |
| `npm run check` | Run ESLint and TypeScript checks. |
| `npm run build` | Create and validate the production build. |
| `npm start` | Serve the completed production build locally. Stop the development server first if it uses the same port. |
| `npm run preview:file` | After building, generate `preview/abdullah-javed-portfolio.html` for an offline review. |

Run `npm run check`, then `npm run build`, then `npm run preview:file`. Regenerate the preview after every source change; it does not update itself. The ZIP excludes installed dependencies and build output, so a newly extracted copy needs `npm install` first.

In your browser’s responsive device tools, inspect approximately **1440, 1280, 768, 390, and 320 pixels**. Check the full page for horizontal scrolling, then try both project groups, every filter, an archive dialog, the mobile menu, and the three themes. Use Tab and Enter to open a dialog and Escape to close it. Verify real GitHub/demo/contact links and any new assets.

`docs/review-notes.md` records the current checks and limits. Update it and `docs/portfolio-preview.jpg` after a substantial visual or content change.

## GitHub and Vercel workflow

The source is at [Abdullah-Javed-01/abdullah-javed-portfolio](https://github.com/Abdullah-Javed-01/abdullah-javed-portfolio), and the live site is [abdullah-javed-portfolio-gamma.vercel.app](https://abdullah-javed-portfolio-gamma.vercel.app/).

For a fresh local working copy, use **VS Code → Source Control → Clone Repository**, paste the GitHub URL above, and open the cloned folder. Alternatively:

```bash
git clone https://github.com/Abdullah-Javed-01/abdullah-javed-portfolio.git
cd abdullah-javed-portfolio
npm ci
npm run dev
```

The initial Vercel deployment used the approved source files directly. **GitHub-to-Vercel automatic deployments are not connected yet; repository-access approval is pending.** In the existing Vercel project `abdullah-javed-portfolio`, go to **Settings → Git**, authorize the Vercel GitHub app for **only this portfolio repository**, and connect it. Use `main` as the production branch, the Next.js framework, `npm ci` for installation, and `npm run build` for the build. Do not create a duplicate Vercel project.

After that connection is complete, the normal update flow is:

1. Edit `data/portfolio.ts` and any corresponding assets.
2. Run `npm run check` and `npm run build`, then review the changed behavior locally.
3. Review the changed files in VS Code Source Control, commit with a meaningful message, and push to `main`.
4. Wait for the Vercel production deployment to show **Ready**, then open the live URL and check the changed content.

Until the Git connection is completed, GitHub pushes save the source only; they do not update the live site automatically. The other project repositories remain separate.

Leave production-domain configuration unset during local review. Vercel supplies the live production origin automatically, while unconfigured local reviews and Vercel preview deployments are `noindex`. `.gitignore` excludes dependencies, build output, local review output, environment files, and temporary platform directories. Never put credentials in `data/portfolio.ts` or anything under `public/`.
