# SOFT DESIGN website — contributor instructions

## Project overview

This repository contains a static multi-page site for Fidan Abdiu's independent C#/.NET software engineering practice in Pristina, Kosovo. GitHub Pages publishes the repository root. Preserve direct, factual positioning and keep all changes compatible with static hosting.

## Technology constraints

- Use semantic HTML5, CSS3 and vanilla JavaScript only. Do not add frameworks, dependencies, package managers, build steps, backends or third-party scripts.
- Keep content and core navigation available without JavaScript; scripts only enhance navigation, footer year and the email-draft form.
- There is no backend or configured form provider. The project inquiry form validates in the browser and opens a prefilled email draft; do not display submission success or claim messages were delivered.
- Preserve supplied logo artwork and portrait. Do not invent assets, client details, outcomes, credentials, availability, prices or guarantees.

## Important files

- `index.html`: homepage, metadata, JSON-LD and project inquiry form.
- `services/*.html`: six standalone service pages with unique metadata and canonical URLs.
- `404.html`: not-found page and path handling for direct-file, custom-domain and current GitHub project URLs.
- `css/styles.css`: design tokens, shared components and page layouts.
- `css/responsive.css`: tablet and mobile breakpoint rules.
- `js/main.js`: mobile navigation, copyright year and mailto draft enhancement.
- `assets/logos/`, `assets/images/`, `assets/icons/`: supplied branding and imagery.
- `robots.txt`, `sitemap.xml`, `CNAME`: crawler and GitHub Pages configuration.
- `docs/`: architecture, design system, SEO and development/testing documentation.

## Content and HTML

- Use one descriptive `<h1>` per page, logical heading order, landmarks, accessible labels, keyboard-operable controls and descriptive image alternatives.
- Keep each service page's title, description, canonical, Open Graph copy, JSON-LD and sitemap URL unique and aligned.
- Base professional claims on the existing site, CV or user-provided facts. Do not imply sole responsibility for collaborative projects; disclose that experience summaries are generalized.
- CV requests remain email requests unless an approved public PDF is added.
- Keep project form behavior honest: browser validation, email draft and manual sending. No success message may imply a server accepted the inquiry.

## Design and CSS

- Follow `docs/design-system.md`: modern technical identity using navy, purple/violet, lavender, off-white and neutral gray. Microsoft .NET is a visual reference only; do not imply affiliation or copy proprietary art.
- Use local system sans-serif and monospace stacks. Do not request remote fonts or use stock coding images.
- Keep shared tokens and component rules in `styles.css`; keep viewport overrides in `responsive.css`.
- Preserve visible focus, readable contrast, responsive layouts and reduced-motion support. Avoid adding motion or decorative gradients beyond the restrained existing treatment.
- Keep local resource paths relative. Preserve the 404 base-path handling and update it if the repository name or public domain changes.

## GitHub Pages and URLs

- Publish from the repository root. Keep `index.html`, `404.html`, `CNAME`, `robots.txt` and `sitemap.xml` at root.
- The canonical host is `https://www.softdesign-ks.com/`. Keep CNAME, canonical/social/JSON-LD URLs, robots and sitemap aligned if the public host changes.
- `index.html` and service pages use relative resource paths so they work at the root and under `/WebSite/`. The 404 page uses its small base-path script to resolve its relative assets for `file://`, the custom domain and the current `github.io/WebSite/` project URL.
- Do not change DNS, GitHub Pages settings, deployment branch or remote repository configuration without an explicit user request. No custom workflow is stored here; diagnose GitHub-managed build failures from their logs, not guesses.

## Verification and documentation

- There is no build, test runner, linter or type checker. Do not add them for routine changes.
- For broad edits, check HTML structure, IDs/fragments, all local paths, page metadata, JSON-LD, sitemap XML, mobile-menu behavior and form validation/draft wording.
- Serve over HTTP; inspect desktop/tablet/mobile, keyboard behavior and browser console when tools are available. Report limitations accurately and do not claim an external deployment test without doing one.
- Keep README and the relevant `docs/` guides synchronized with the implementation. Update these instructions when technology, paths or deployment conventions change.
