# SOFT DESIGN website

SOFT DESIGN is Fidan Abdiu's independent software engineering practice in Pristina, Kosovo. This static website presents C#/.NET services, technical expertise, selected professional experience, ways of working and direct contact options. The positioning emphasizes experienced, direct engineering for business and enterprise software; it does not represent a staffed agency.

## Technology and features

- Semantic HTML5, CSS3 and dependency-free vanilla JavaScript.
- Static files published from the repository root through GitHub Pages. No framework, package manager, build step, backend, analytics, service worker or external runtime dependency is used.
- A responsive homepage plus six standalone service pages, a root-level 404 page, local SVG branding and a supplied profile portrait.
- The mobile navigation, footer year and project inquiry email-draft behavior are progressive enhancements. The core content and links remain available without JavaScript.
- The project form uses native required-field and email validation, then opens a prefilled email draft. It does not send data to a server; the visitor must review and send the draft in their email app.

## Pages

- `index.html` — homepage, service overview, expertise, selected experience, about, approach and contact.
- `services/custom-dotnet-development.html` — custom business applications.
- `services/aspnet-core-api-development.html` — backend, REST APIs and integrations.
- `services/legacy-dotnet-modernization.html` — modernization and refactoring of existing systems.
- `services/sql-server-database-development.html` — SQL Server, MariaDB and .NET data access.
- `services/enterprise-software-maintenance.html` — maintenance and ongoing engineering support.
- `services/dotnet-development-outsourcing.html` — direct independent .NET collaboration; no fixed package or availability claim.
- `404.html` — GitHub Pages not-found page.

## Repository structure

```text
.
├── index.html
├── 404.html
├── CNAME
├── robots.txt
├── sitemap.xml
├── README.md
├── AGENTS.md
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   └── main.js
├── services/
│   └── six standalone service pages
├── assets/
│   ├── icons/
│   ├── images/
│   └── logos/
└── docs/
    ├── architecture.md
    ├── design-system.md
    ├── development-testing.md
    └── seo.md
```

The supplied web portrait is `assets/images/fidan-abdiu-profile.jpg`. The current logo SVGs and social icon are in `assets/logos/` and `assets/icons/`. No source portrait, CV source, public CV PDF, application screenshots, `.gitignore`, package manifest, test suite, lint configuration, type-check configuration, or custom GitHub Actions workflow is present. CV links therefore open an email request.

## Local setup

No installation is required. With Python 3.7 or newer, start a static server from the repository root:

```powershell
python -m http.server 8000
```

Open <http://localhost:8000/> and stop the server with `Ctrl+C`. To simulate the repository project prefix, stop the first server and serve the repository's parent directory:

```powershell
python -m http.server 8000 --directory ..
```

Then open <http://localhost:8000/WebSite/>. Homepage and service page resource URLs are relative, so they resolve from the site root and under `/WebSite/`. `404.html` sets its base to `/` on the custom domain and `/WebSite/` on a `github.io` host; when opened as `file://`, it leaves relative paths intact. If the repository is renamed, update its `/WebSite/` base in `404.html`.

Opening a page directly from disk can be useful for visual checks, but use HTTP for the full path and hosting check. `index.html` has no manifest or network-loaded resources. The contact form's mailto behavior depends on the visitor's configured email application.

## Build, tests and configuration

There is no build command, test runner, linter, type checker, package install, environment variable, secret or server-side configuration. The deployed site is the checked-in static files. For the available manual validation steps, see [Development and testing](docs/development-testing.md).

## Documentation

- [Architecture](docs/architecture.md) describes the pages, routes, shared markup and behavior.
- [Design system](docs/design-system.md) records the palette, type, layout, components and breakpoints.
- [SEO](docs/seo.md) documents metadata, structured data, sitemap and URL conventions.
- [Development and testing](docs/development-testing.md) covers local serving, updates and verification.
- [AGENTS.md](AGENTS.md) contains concise instructions for future coding agents.

## GitHub Pages deployment

The publishing source is the repository root: `index.html`, `404.html`, and `CNAME` must remain there. The `CNAME` file contains `www.softdesign-ks.com`. Check **Settings → Pages** for the configured publishing source and inspect the GitHub Actions run logs if a Pages build fails. No workflow file is maintained in this repository, so a local audit cannot explain a GitHub-managed Pages startup failure.

Do not change DNS, nameservers, repository settings or publishing configuration as part of a content edit. The canonical URL, Open Graph URLs, JSON-LD, `robots.txt`, `sitemap.xml` and CNAME use the existing custom domain. GitHub settings, DNS, certificates and live deployment status require checking in GitHub or at the domain provider.

## Content and maintenance conventions

- Keep public facts grounded in the existing site, professional CV or details supplied by Fidan. Generalize confidential work and do not imply sole ownership of collaborative projects.
- Page titles, descriptions, social text and canonical URLs are unique on service pages; see [SEO](docs/seo.md).
- Use local assets and relative page links. Preserve supplied logo artwork and proportions; do not recolor or stretch it.
- The homepage and service pages use repeated static header/footer markup; update all page navigation consistently when changing it.
- The contact inquiry form opens an email draft only. Do not add a success claim or imply server submission unless an actual supported service is implemented and documented.
- If a public CV PDF is later supplied, place it at `assets/documents/fidan-abdiu-cv.pdf` and update the email-request links deliberately. Do not publish source material.
