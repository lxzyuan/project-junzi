# Project JUNZI / 君子计划 — Website

A bilingual research website based on the uploaded **November 2026 Project JUNZI overview Beamer**. The site's design adapts the original palette of paper, ink, gold, and cinnabar. The English and Chinese views cover the same research program.

## Contents

- `docs/index.html`: ready-to-publish single-page website, no framework or build dependencies
- `docs/assets/style.css`: responsive layout and typography
- `docs/assets/site.js`: bilingual toggle, mobile navigation, and section highlighting
- `docs/assets/favicon.svg`: minimalist seal-inspired icon
- `docs/.nojekyll`: publish the site without a Jekyll build
- `sources/Project_JUNZI_Overview_2026-11.tex`: supplied Beamer source, retained for traceability (not served by Pages when publishing only `/docs`)

## Preview locally

Open `docs/index.html` in a browser. No build step is necessary. Alternatively:

```bash
cd docs
python3 -m http.server 8000
# visit http://localhost:8000
```

## Publish via GitHub Pages

**Recommended:** Create a separate **public** repository named `project-junzi` rather than changing the existing private research repository `lxzyuan/JUNZI`.

1. Create `project-junzi` in the GitHub account `lxzyuan`, choosing **Public**.
2. Upload the files in this package to the repository root, preserving the `docs/` folder.
3. Open repository **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose branch `main` and folder `/docs`, then Save.
4. The expected URL format is `https://lxzyuan.github.io/project-junzi/` **after publication succeeds**. Check repository Actions/Pages for actual deployment status.

GitHub Pages documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Editorial notes

- The website distinguishes **published Stage I results** from the **proposed Stage II–VI roadmap**.
- The metrics (600 samples, Cramér's V=0.187, probe balanced accuracy=0.990, bag-of-words baseline=0.978, and exploratory 32/60 surface compromises) are from the Beamer and should be checked against the cited paper before major public revisions.
- The Beamer's May 2026 Vatican context was omitted from the landing page to keep the permanent homepage centered on JUNZI's research contribution. It remains in the source slide deck.
- No claims are made that LLMs have consciousness, virtue, or moral agency. All future milestones are explicitly marked as proposals, not completed outputs.
- Before publishing, review the contact email, author details, and public-release readiness of `sources/`.
- For future updates, edit the static HTML/CSS/JS directly; Codex can handle revisions from issues/PRs without introducing a frontend framework.

## License

No license has been selected. The author retains rights by default. If you intend to permit reuse, add an explicit `LICENSE` after deciding which terms apply to the website and research materials.
