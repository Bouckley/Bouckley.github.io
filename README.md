# Jordan Santos-Bouckley — Portfolio

Personal portfolio and resume site. Vite + React + TypeScript + Tailwind CSS,
deployed to GitHub Pages.

## Getting started

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build into dist/ (runs postbuild)
npm run preview  # serve the production build
npm run lint
```

## Routes

| Route     | Contents                                                        |
| --------- | --------------------------------------------------------------- |
| `/`       | Hero, About, featured Projects, Contact                          |
| `/resume` | Experience, all Projects, Skills, Education, Leadership          |

`/resume` is a shareable URL intended for job applications, and has its own
print stylesheet — `Ctrl+P` produces a clean black-on-white document with the
navigation stripped and links expanded to their full URLs.

## Editing content

All copy lives in `src/data/`, split by domain and re-exported from
`portfolio-data.ts`. No content is hard-coded into components.

| File             | Contents                                    |
| ---------------- | ------------------------------------------- |
| `personal.ts`    | Name, contact details, summary, hero metrics |
| `experience.ts`  | Work history and leadership roles            |
| `projects.ts`    | Projects (`featured: true` surfaces on `/`)  |
| `skills.ts`      | Skill groups and the sidebar's top skills    |
| `education.ts`   | Degree, coursework, awards                   |

Replace `public/resume.pdf` to update the downloadable CV.

## Design system

Tokens are defined as HSL triples in `src/index.css` and consumed through
Tailwind in `tailwind.config.ts`.

- **Colour** — near-black ink base, one cobalt accent for interaction, and an
  amber `--metric` token reserved exclusively for quantified results. Every
  foreground/background pair meets WCAG AA (4.5:1) in both themes.
- **Type** — Fraunces (display), Inter (UI and body), JetBrains Mono (dates,
  labels, tech chips). Fluid `clamp()` scale, so no breakpoint overrides.
- **Form** — borders rather than shadows; three radii; 150ms micro and 300ms
  entrance motion, all suppressed under `prefers-reduced-motion`.

`MetricText` (`src/components/primitives/`) emphasises quantified outcomes
inside a sentence. It matches only numbers carrying a magnitude marker — a
`+`, a percent sign, thousands grouping, or a unit noun — so standard names
like "ISO 27001" and "SOC 2" are left alone.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages.

GitHub Pages serves static files only, so a deep link to `/resume` would
otherwise 404. The `postbuild` script copies `dist/index.html` to
`dist/404.html`, letting Pages hand deep links back to the client router.
