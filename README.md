# Portfolio — React

A responsive React version of the Figma "Portfolio" design (About, Education,
Projects, Skills, Contact). Built with [Vite](https://vitejs.dev/).

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build for deployment:

```bash
npm run build
```

The output goes to `dist/`. You can deploy that folder to Vercel, Netlify,
GitHub Pages, or any static host.

## 2. Add your own links

Open **`src/config.js`** — every external link on the site (resume, email,
LinkedIn, GitHub, Behance, project links) is a single value in that one
file. Nothing else needs to change.

| Button / element        | Edit this in `config.js`          |
| ------------------------ | ---------------------------------- |
| Resume button             | `resumeUrl`                        |
| Contact Me button + mail icon | `email`                        |
| LinkedIn / GitHub / Behance icons | `social.linkedin` / `social.github` / `social.behance` |
| "View in Figma" / "View in GitHub" (per project) | `projectLinks.figma` / `projectLinks.github`, or set `figmaUrl` / `githubUrl` directly on a project in `src/components/Projects.jsx` |
| Contact form             | `contactFormEndpoint` (optional — see below) |

## 3. Add your real images

The design uses your profile photo and four project thumbnails. These
couldn't be downloaded automatically in this session (see note at the end),
so placeholders are shown instead. To add the real ones:

1. Export the images from Figma (select the layer → right panel → **Export**).
2. Drop the files into `src/assets/images/`.
3. In `src/components/Hero.jsx`, replace the placeholder `<div className="hero__photo">` with an `<img src={...} alt="..." />` pointing at your photo.
4. Do the same for the project thumbnails in `src/components/Projects.jsx` if you'd like real screenshots behind each card.

## 4. Contact form

The form works two ways:

- **No backend** (default): clicking Submit opens the visitor's email app
  with the message pre-filled, addressed to the `email` in `config.js`.
- **With a form service**: sign up for a free plan on something like
  [Formspree](https://formspree.io) or [Getform](https://getform.io), paste
  the endpoint URL into `contactFormEndpoint` in `config.js`, and submissions
  will POST there instead.

## 5. Responsive breakpoints

The layout is fluid at every width and adjusts at three points:

- **900px** — two-column sections (hero, contact) stack into one column.
- **800px** — the header collapses into a hamburger menu; the education
  timeline switches from alternating cards to a single left-aligned column.
- Everything else (font sizes, spacing, the project grid) uses fluid units
  (`clamp()`, `%`, `auto-fit`) so it scales smoothly between those points.

## A note on this build

This sandbox's network can't reach Figma's asset-download servers, so the
photo and project thumbnails are placeholders and the icons use the
open-source **react-icons** library instead of the exact SVGs from the
Figma file. Everything else — layout, structure, colors, fonts, spacing,
and the five interactive elements you asked for (Resume, Contact, social
Media icons, Figma, GitHub) — is built and working.
