# SOFT DESIGN website

The SOFT DESIGN website is a single-page business site for Fidan Abdiu's independent software development practice in Pristina, Kosovo. It describes C#/.NET services, selected experience, working approach and contact details.

## Technology and behavior

- Semantic HTML, CSS and dependency-free vanilla JavaScript.
- Static files served directly by GitHub Pages; no package manager, build step, server application or framework.
- The page and navigation remain available without JavaScript. JavaScript enhances the small-screen navigation and updates the footer year.
- Homepage resources use relative paths so they work from the site root and a repository subpath. The 404 page leaves paths relative for `file://` use, then sets a site base on HTTP(S) so its assets resolve from a nested missing URL on the custom domain or current `/WebSite/` GitHub Pages project path. Canonical and discovery metadata intentionally name the configured custom domain.

## Repository layout

```text
.
├── index.html                  # Homepage, metadata, structured data and page content
├── 404.html                    # GitHub Pages not-found page
├── CNAME                       # www.softdesign-ks.com
├── robots.txt                  # Crawler rules and sitemap location
├── sitemap.xml                 # Public canonical homepage URL
├── README.md
├── AGENTS.md                   # Contributor and coding-agent instructions
├── css/
│   ├── styles.css              # Tokens, shared components and base layouts
│   └── responsive.css          # Tablet and mobile rules
├── js/
│   └── main.js                 # Progressive navigation and year enhancements
└── assets/
    ├── icons/                  # Social and touch icon
    ├── images/                 # Optimized profile portrait
    └── logos/                  # Supplied SOFT DESIGN SVG marks and wordmarks
```

There are no GitHub Actions workflow files, `package.json`, `.gitignore`, test suite, source portrait, CV source or CV PDF in the current repository. The site does not currently link to a CV file; visitors can request it by email.

## Run locally

Serve the repository root over HTTP. With Python 3.7 or newer installed:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000/>. Stop the server with `Ctrl+C`. Any static file server that serves this directory without rewriting paths will work. Opening `index.html` directly is not a substitute for checking HTTP behavior; browsers may restrict requests from `file://` pages.

To simulate a repository project URL, stop the root server and restart it with the repository's parent as its document root:

```powershell
python -m http.server 8000 --directory ..
```

Then open `http://localhost:8000/WebSite/` (the current GitHub repository is named `WebSite`). The homepage's local resource URLs are relative to the page. Canonical, social, JSON-LD, robots and sitemap URLs stay on `https://www.softdesign-ks.com/` by design; update those together only if the public domain changes.

## Verify changes

There is no permanent test framework. For a site-wide change, check the HTML and JSON-LD, parse `sitemap.xml`, check local references and fragment links, and serve the site over HTTP. In a browser, inspect desktop and mobile widths, keyboard navigation, the mobile menu, the 404 page and the console/network panel. Do not report checks that were not run. No package installation is needed.

## GitHub Pages deployment

The publishing layout is the repository root: `index.html`, `404.html`, `CNAME`, and the static resources are all at the expected locations. To deploy, push the intended branch and check **Settings → Pages** for the repository's configured publishing source. The repository contains no custom Actions workflow; the notification alone does not identify why a Pages run failed. Inspect the failed run's logs and Pages settings in GitHub to diagnose an external startup failure.

The `CNAME` file specifies `www.softdesign-ks.com`. Keep it and the custom-domain metadata unless the domain is intentionally changed. Do not modify DNS, nameservers, repository settings or deployment configuration as part of local site edits. GitHub Pages UI, DNS resolution, certificate status and workflow logs cannot be verified from this checkout.

For a repository-based URL such as `https://OWNER.github.io/WebSite/`, keep homepage resources relative to the document. The 404 page sets `/WebSite/` as its base on GitHub Pages project URLs because Pages serves it at the missing request URL. If the repository name changes, update this base path in `404.html`. If changing the public deployment URL, update the canonical URL, Open Graph and JSON-LD values, `robots.txt`, and `sitemap.xml` as appropriate. The 404 page's home link returns to the configured custom domain.

## Content and asset conventions

- Edit page copy and structured data in `index.html`; keep structured data factual and consistent with visible content.
- Keep shared styles and design tokens in `css/styles.css`; put responsive breakpoint rules in `css/responsive.css`.
- Keep JavaScript small, dependency-free and optional for core content and navigation.
- Preserve the supplied artwork in `assets/logos/`; use dark wordmarks on light surfaces and the light wordmark in the footer.
- `assets/images/fidan-abdiu-profile.jpg` is the current web portrait. Provide intrinsic dimensions, eager-load the hero image and lazy-load the below-fold portrait.
- Do not add unverified clients, outcomes, credentials, availability or contact details. Generalize confidential project information.
- If an approved public CV PDF is later supplied, place it at `assets/documents/fidan-abdiu-cv.pdf` (create the directory then) and update the request links deliberately. Do not publish LaTeX or other private source material.

## Known limits

- The site has no backend, contact form, analytics, service worker or automated test suite.
- There is no CV PDF in the repository.
- This checkout cannot establish the cause of a GitHub Actions notification or validate the live Pages configuration; use the GitHub run logs and Pages settings for those checks.
