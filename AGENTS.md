# SOFT DESIGN website — contributor instructions

## Project overview

This repository is the static, single-page English website for Fidan Abdiu's independent software development practice, SOFT DESIGN, based in Pristina, Kosovo. It is published from the repository root through GitHub Pages. Keep the existing editorial design and factual business content intact.

## Technology constraints

- Use semantic HTML5, CSS3 and vanilla JavaScript only.
- Do not introduce a framework, TypeScript, dependencies, package manager, build step, backend or external scripts.
- Keep visible content and core navigation usable with JavaScript disabled. JavaScript is progressive enhancement only.
- Preserve the supplied logo artwork and the current local asset set. Do not invent missing source files.

## Important files

- `index.html`: homepage content, SEO metadata and JSON-LD.
- `404.html`: GitHub Pages not-found page.
- `css/styles.css`: design tokens, shared rules and base layouts.
- `css/responsive.css`: tablet and mobile adaptations.
- `js/main.js`: mobile navigation and copyright year enhancements.
- `assets/logos/`, `assets/images/`, `assets/icons/`: supplied display assets.
- `robots.txt`, `sitemap.xml`, `CNAME`: static hosting and discovery configuration.
- `README.md`: setup, repository layout and deployment guidance.

## Editing conventions

### HTML and content

- Keep one descriptive `<h1>`, logical heading order, landmarks, accessible link names and correct control semantics.
- Preserve `lang="en"`, viewport metadata, canonical and social metadata, and icon references.
- Keep JSON-LD valid and aligned with visible, verified details. Do not add invented clients, metrics, testimonials, credentials, dates, guarantees or contact information. Generalize confidential project details.
- Use descriptive alt text for meaningful portraits and empty alt text for decorative images.
- Keep the CV request links as email requests while no approved public PDF exists. Never link private source material.

### CSS

- Keep shared tokens and desktop/component rules in `styles.css`; keep responsive breakpoint rules in `responsive.css`.
- Reuse the existing custom properties and `.section-shell` convention. Preserve the warm paper and evergreen editorial identity.
- Keep visible focus indicators, readable contrast and usable small-screen layouts. Respect `prefers-reduced-motion`.
- Avoid inline styles, unnecessary duplication, decorative motion and broad visual rewrites.

### JavaScript

- Keep scripts small, dependency-free and isolated. Guard DOM access and do not make content depend on script execution.
- Keep the navigation button's `aria-expanded` state synchronized with its menu; support Escape and closing after an in-page link is chosen.
- Use semantic controls and avoid inline event handlers or unnecessary listeners.

## GitHub Pages and paths

- Publish the repository root, with `index.html` and `404.html` at root. Do not add server-side assumptions.
- Use relative paths for local HTML resources. Keep homepage resources compatible with repository subpaths and direct file opening. Preserve the 404 page's base-path logic: it leaves relative URLs intact on `file://`, and resolves assets from `/` on the custom domain or `/WebSite/` on GitHub Pages project URLs. Update the project base if the repository name changes.
- The configured public host is `https://www.softdesign-ks.com/`; `CNAME`, canonical/social/JSON-LD metadata, `robots.txt` and `sitemap.xml` must agree. Update them together only when the public domain changes.
- The 404 page returns visitors to the configured canonical custom domain.
- Do not change DNS, GitHub Pages settings, deployment branch or workflow configuration without an explicit user request. No custom Actions workflow is present in this repository; diagnose failed runs from GitHub logs/settings rather than guessing.
- Preserve case-sensitive paths and supplied files. Do not add a workflow, build process or dependency without explicit direction.

## Verification and documentation

- For broad changes, check HTML structure, unique IDs and fragment links, local resource references, JSON-LD and sitemap XML.
- Serve the site over HTTP and check resources at the root and a repository subpath where practical. Inspect desktop/mobile layouts, keyboard behavior, browser console and network requests when browser tools are available.
- Report only checks actually performed. Do not claim external Pages, DNS, certificate or deployment validation without access to those systems.
- Do not add a permanent test framework for routine changes. Keep `README.md` and these instructions synchronized with the files that exist and how they are actually served.
