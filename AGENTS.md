# SOFT DESIGN website — engineering instructions

These instructions are the permanent project guidance for every contributor and future Codex session. Follow them alongside the user's current request. The website is a real business presence for Fidan Abdiu's independent software engineering practice.

## Business and positioning

- SOFT DESIGN is Fidan Abdiu's individual software development business in Pristina, Kosovo.
- Position the business as experienced, hands-on and directly accountable. The homepage message is: **Welcome to SOFT DESIGN. C#/.NET software development services.**
- Primary specialization: C#, .NET, ASP.NET Core, backend and REST API engineering, integrations, databases, custom business software, modernization, architecture, consulting, maintenance and support.
- The current public site is a single-page English website for prospective clients in Kosovo, the wider Balkan region and international markets.
- Use a confident, concise and natural voice. Explain the work and its business value without inflated claims or generic agency language.
- Treat the supplied CV and assets as the factual record. Do not invent clients, dates, skills, credentials, testimonials, metrics, project outcomes, service guarantees, availability or contact details. Generalize confidential project details when appropriate.
- Where a detail is not verified in the CV or supplied by the user, omit it or mark it clearly as needing confirmation.

## Technology restrictions

- Use only semantic HTML5, CSS3 and vanilla JavaScript (ES6+).
- Never introduce React, Next.js, Vue, Angular, Svelte, TypeScript, Tailwind, Bootstrap, jQuery, a frontend framework, Node.js application runtime, a package manager, or a build/bundling process.
- Never add dependencies or external scripts for functionality that can be implemented with the platform.
- Do not add a build step without explicit user approval. The site must work by opening `index.html` directly and when served from GitHub Pages.
- Keep content and core navigation available without JavaScript. JavaScript is progressive enhancement only.

## Project structure

- `index.html`: complete single-page site, SEO metadata and verified JSON-LD.
- `404.html`: GitHub Pages not-found experience.
- `css/styles.css`: design tokens, global rules and desktop/component styling.
- `css/responsive.css`: tablet and mobile adaptations.
- `js/main.js`: small progressive enhancements only.
- `assets/images/`: optimized web imagery. Current portrait derivative: `fidan-abdiu-profile.jpg`.
- `assets/logos/`: supplied SOFT DESIGN SVG marks and wordmarks. Preserve their artwork and proportions.
- `assets/icons/`: supplied brand icon imagery.
- `assets/documents/`: approved public documents such as the CV PDF.
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, and `CNAME`: static hosting and discovery configuration.
- The original supplied files at repository root and in `logos/` are source assets. Preserve them; use copies or optimized derivatives in `assets/` rather than overwriting sources.

## Design system

- Use the established editorial identity: warm paper `#f4f1e9`, pale neutral `#e8e5db`, deep evergreen `#183a32`, green `#285d4c`, sage `#a9c8ad`, restrained clay accent `#99472f`, and readable muted body text.
- Typography pairs a system sans-serif for navigation/body copy with a restrained system serif for display headings. Avoid remote font requests.
- Maintain generous whitespace, crisp rules, asymmetrical editorial layouts, circular profile portraits and clear type hierarchy. The hero and Services sections use distinct full-width neutral backgrounds; concise uppercase section headings are part of the current page style. Reuse CSS custom properties and the `.section-shell` layout convention.
- Avoid generic SaaS templates, gradient backgrounds, glass effects, excessive rounded cards, abstract decoration, stock coding imagery, fake dashboards, excessive motion/icons, carousels and buzzwords.
- Do not introduce a competing visual language. If you materially change tokens or the visual system, update this section and the README.

## Coding conventions

### HTML

- Use valid HTML5, a single descriptive `<h1>`, logical heading order, landmarks, meaningful link labels, and correct button/link semantics.
- Set `lang="en"`, responsive viewport metadata, descriptive title and description, canonical URL, social metadata, icon/manifest references, and appropriate image alt text.
- Keep structured data factual and consistent with visible page content. Validate JSON syntax after changing JSON-LD.
- Escape special characters where required and keep content readable in source.

### CSS

- Use the existing two-file split: shared tokens/components and desktop styling in `styles.css`, breakpoint rules in `responsive.css`.
- Prefer custom properties, mobile-first overrides, fluid sizing with `clamp()`, reusable classes and semantic component names. Avoid inline styles and `!important` except for accessibility behavior such as reduced motion.
- Check all viewport widths for wrapping and horizontal overflow. Preserve visible focus rings and adequate contrast.
- Respect `prefers-reduced-motion`; keep transitions short and purposeful.

### JavaScript

- Keep scripts dependency-free, small, deferred, and isolated from the global scope.
- Guard DOM access; do not assume script execution is required for visible content.
- Use semantic controls, update ARIA state with UI state, support Escape and keyboard use, and avoid unnecessary listeners or inline handlers.
- Do not add animations, scroll effects or active-section tracking unless they measurably improve usability.

## Accessibility and responsive behavior

- All navigation and actions must work by keyboard with clearly visible focus indicators.
- Retain a skip link, landmarks, accessible names, sufficient contrast, descriptive alt text for meaningful photos, and empty alt text for decorative images.
- The mobile navigation must expose its expanded state, support Escape, close after choosing an in-page link and leave all links available without JavaScript.
- Use usable touch targets and readable line lengths from small phones through large desktop displays. Avoid horizontal overflow.
- Honor reduced motion and do not communicate meaning through color alone.

## SEO and performance

- Preserve the canonical host `https://www.softdesign-ks.com/` unless the user explicitly changes the domain.
- Keep title, meta description, Open Graph and Twitter copy aligned with the current homepage message: “Welcome to SOFT DESIGN. C#/.NET software development services.”
- Keep target terms natural: .NET developer Kosovo, C# developer Kosovo, .NET software development, ASP.NET Core development, backend/API development, modernization, architecture consulting and remote engineering.
- Keep `robots.txt`, sitemap URLs, canonical metadata and JSON-LD aligned with the custom domain and actual content.
- Use only verified Person, ProfessionalService and WebSite structured data. Do not add fabricated reviews, ratings, prices, opening hours or claims.
- Keep requests local and minimal. Use supplied logos, optimize image derivatives, provide intrinsic image dimensions, eager-load only the hero portrait, and lazy-load below-fold imagery.
- Do not publish Lighthouse or performance scores unless a real run produced them.

## Assets and content accuracy

- Preserve supplied originals. Do not invent filenames for missing source assets and do not replace the real logo or portrait with generated content.
- Use the supplied dark wordmark on light backgrounds and its light variant on dark backgrounds. Never stretch, recolor or distort the artwork.
- The source portrait is `fidan_abdiu_linkedin_profile_image.png`; the current optimized web derivative is `assets/images/fidan-abdiu-profile.jpg`.
- A current CV PDF is not present. The supplied `fidan_abdiu_resume.txt` contains LaTeX source. Until an approved PDF is added as `assets/documents/fidan-abdiu-cv.pdf`, point CV requests to Fidan's email; do not link the source file or claim it is a PDF.
- Do not publish private or confidential client information. The current selected project summaries are generalized from the supplied CV.

## GitHub Pages and domain preservation

- This repository is a static site published directly from GitHub Pages; keep root-relative structure and avoid server-side assumptions.
- `CNAME` contains `www.softdesign-ks.com`. Preserve the custom domain and this file unless the user directs otherwise.
- Never change GoDaddy DNS, nameservers, redirects, GitHub repository settings, deployment branch or workflow configuration without an explicit request. Inspect existing configuration before proposing changes.
- Do not assume DNS needs reconfiguration. GitHub Pages handles the certificate after the custom domain is configured and DNS resolves correctly; explain any GitHub Pages UI step rather than changing DNS.
- Keep paths case-correct for Linux hosting. `404.html` must remain at the published root.

## Testing expectations

- Before declaring a change complete, perform checks appropriate to the change. For site-wide edits, inspect HTML structure and metadata, parse JSON-LD and XML, verify all local references exist, verify the mobile menu state logic, and inspect representative desktop/mobile rendering when a browser is available.
- Check that the website works from local files or a simple static server and that it contains no broken asset links, dead controls or console errors when browser tools are available.
- Do not claim a browser, accessibility, Lighthouse or deployment test that was not actually performed. Report tool limitations accurately.
- Do not add a permanent test framework, install packages or introduce a build process for routine checks.

## Documentation maintenance

- Keep `README.md` accurate when paths, asset requirements, SEO setup or deployment steps change.
- Document every missing required public asset and the exact path where it belongs.
- Keep the project understandable for someone maintaining a static site without frontend build tools.
