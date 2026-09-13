# Portfolio refinement review — September 12, 2026

This records the completed checks before publication. Abdullah subsequently approved this version, and a separate portfolio repository was created. See README.md for the current GitHub and deployment workflow.

## Publication check — September 13, 2026

- Published the approved source in the separate [portfolio repository](https://github.com/Abdullah-Javed-01/abdullah-javed-portfolio), commit `642398eba339f54a687743e0ca87a62ecfc08b4d`.
- Verified all 60 source files against the local Git tree `32ebf07d4cc3b3c153924df619a6d6c62f3300cd` before publishing the branch.
- Deployed the same approved source to [the live portfolio](https://abdullah-javed-portfolio-gamma.vercel.app/). Vercel confirmed **Ready**, **Production / Current**, and a successful 24-second build for deployment `dpl_HASxc6YikNkwHmADnzAc6LLxvKP2`.
- Checked the actual production page: correct title and canonical origin, `index, follow`, 10 featured and 14 archive projects, shared category filtering, archive dialog opening and Escape closure, dark theme, successful project-image loading, and no document overflow at the inspected desktop size.
- The inspected production console showed no application errors; browser-extension metadata warnings were excluded.
- The first deployment used direct source upload. Automatic Git deployments remain pending approval to give Vercel access to only the new portfolio repository. GitHub pushes will not update the site until that connection is completed.

The earlier review below is preserved as a record of the pre-publication state. Later documentation updates record the live URL and maintenance workflow without changing application behavior.

## Pre-publication review record

The approved design is preserved. The portfolio now presents **10 Featured Projects + 14 archive projects = 24 total projects**, supported by one typed project array and shared category controls. Fifteen projects have genuine screenshots or evaluation graphics. The README, repository audit, evidence references, asset provenance, and practical local update guide are included.

All 19 GitHub-backed projects were inspected individually and read-only. No existing GitHub repository was modified, no portfolio repository was published, and no Vercel or other deployment was made. The local project has no external Git remote.

## Validation

| Area | Result |
| --- | --- |
| Static checks | `npm run check` passed: ESLint with zero warnings and TypeScript with no errors. |
| Production | `npm run build` passed; home, 404, robots, and sitemap routes prerendered successfully. |
| Review file | `npm run preview:file` passed. The self-contained HTML includes the updated data, both project groups, shared filters, dialogs, production CSS, font, and embedded project images. |
| Actual Next.js page | Confirmed 10 featured and 14 archive entries, correct page title and profile facts, disabled resume, and no application/hydration errors in the inspected console. |
| Responsive layout | Browser DOM/layout review at 1440, 1280, 768, 390, and 320 CSS pixels. No horizontal document overflow or off-edge headings, paragraphs, buttons, links, or cards across the page sections. Visual checks covered the desktop hero/archive, tablet archive, and narrow-phone project views/dialog. |
| Enlarged text | 200% root text size at 320 pixels had no horizontal overflow. This is text-reflow testing, not a claim of checking every browser zoom implementation. |
| Navigation | Section anchors resolve. Sticky header, mobile menu, Escape closure, destination selection, and Contact active-state tracking checked. |
| Both project groups | Each category updates featured and archive results together; counts are listed below. Robotics correctly has an empty archive state. |
| Project dialogs | Featured and archive dialog behavior checked; keyboard Enter opens, Escape closes, and direct-page testing confirmed focus returns to the Explore opener. The narrow-phone dialog fits without internal horizontal overflow. |
| Themes | Light, dark, and system selection checked; light choice persisted after reload. System matched the browser’s light preference. Existing color tokens and reduced-motion styles were preserved. |
| Visual assets | All fifteen local assets verified as decodable images/valid SVG, with matching data paths and provenance. Six initial-card images loaded in the responsive review; representative new archive screenshots and result graphics were reviewed in dialogs after loading. A deliberately broken image correctly changed to the category graphic. |
| Conditional links | No Live Demo button is shown because no deployed URL was verified. Isolated rendering fixtures confirmed that adding a demo displays the card/dialog links; fixtures did not alter portfolio data. Nineteen project GitHub hrefs match inspected repositories. Email and LinkedIn hrefs match the brief. No messages were sent. |
| THOR media | Optional image and video data supported. Isolated rendering verified video controls, poster, and caption without autoplay. Real THOR media was unavailable, so actual footage playback could not be tested. |
| Resume | No link appears with the flag disabled and PDF absent. The actual page checks both before rendering it. |
| Content integrity | 24 unique IDs; no duplicated project objects; 19 GitHub URLs, 15 images, and zero demo URLs. BS Robotics, 3.59/4.00 after four semesters, supplied dates, roles, and awards retained. |
| Accessibility | Semantic section/card heading hierarchy, descriptive alt text, visible focus, native dialogs, filter pressed states, live result count, skip link, and reduced-motion support preserved. Existing palette calculations met at least 4.60:1 for text tokens on primary light surfaces and 6.05:1 on dark surfaces. |
| SEO | Actual local page uses `noindex,nofollow` and has no invented canonical domain. Open Graph/Twitter metadata, robots, sitemap, and favicon configuration preserved. |
| Console | No application errors in the checked Next.js page. Browser-extension metadata warnings and the intentional missing-image test are excluded from application-error findings. |

### Filter counts

Categories overlap; these totals are not additive across rows.

| Filter | Featured | Archive | Total |
| --- | ---: | ---: | ---: |
| All | 10 | 14 | 24 |
| AI / GenAI | 3 | 4 | 7 |
| Machine Learning | 4 | 9 | 13 |
| Backend | 1 | 1 | 2 |
| Computer Vision | 3 | 4 | 7 |
| Data Analytics | 2 | 3 | 5 |
| Robotics | 1 | 0 | 1 |

## Content decisions requiring awareness

The GitHub audit is documented project-by-project in `PROJECT-AUDIT.md`, with source-file identifiers in `project-evidence.json`. Saved metrics were checked against repository evidence; the underlying pipelines were not independently rerun.

**Brain MRI remains model-neutral pending clarification:** the brief says ResNet18, README says EfficientNetB0, and actual training code uses Keras ResNet50. The card remains academic and makes no clinical claim. The audit also records ScamSleuth’s older comparison CSV versus final-threshold results and HisabDo’s stale root README versus implemented Day-13 code.

KnowledgeVault’s 85% → 100% belongs to its fixed twenty-case suite. Talent Review’s approximately 10,000 applications is the motivating pool, not processed volume. Billing uses simulated usage and test payment workflows. Synthetic-data and academic contexts are visible where relevant.

The profile repository, FlyRank weekly assignments, HisabDo daily exercises, and repeated capstone stages were intentionally excluded as separate cards. No other completed standalone project in the inspected inventory warranted an extra entry.

## Missing real material

Optional additions: portrait; `public/Abdullah-Javed-Resume.pdf`; THOR photo/video; credential verification URLs; architecture clarification/matching MRI source; and real visuals for billing, talent review, MRI, fraud detection, and the four academic archive entries. Appropriate category graphics remain available without these assets.

## Practical limits

Browser testing used Chromium in the available review environment. Safari, Firefox, physical devices, and Lighthouse were not measured. No score or universal accessibility certification is claimed.

Dependencies were already installed successfully from the available npm cache; a fresh network installation was not repeated. Versions remain pinned in the lockfile. The environment’s npm proxy-configuration warning did not prevent the checks or build.

The standalone HTML is a review artifact. It omits the resume link and does not embed future video files; test those through the local Next.js development/production server. The ZIP contains source, assets, lockfile, and documentation, with dependencies, build output, secrets, and temporary test pages excluded.

The project is ready for Abdullah’s final review before the separate VS Code → GitHub → Vercel setup stage.
