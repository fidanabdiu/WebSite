# Development and testing

## Requirements and environment

The site needs only a static HTTP server for local work. There are no environment variables, secrets, API keys, database setup, dependency install or compilation steps. Python 3.7+ is an optional local server, not a site runtime dependency.

## Run locally

From the repository root:

```powershell
python -m http.server 8000
```

Browse to `http://localhost:8000/`; use `Ctrl+C` to stop the server. To simulate the current repository project path, serve the parent directory instead:

```powershell
python -m http.server 8000 --directory ..
```

Then browse to `http://localhost:8000/WebSite/`. Each service page is available under `/services/`.

## Build, tests, lint and type checking

There is no build command, automated test suite, linter, type checker or permanent test framework. GitHub Pages publishes the static files directly. Do not document or run a fabricated build/test command.

The JavaScript syntax can be checked when Node.js is available:

```powershell
node --check js/main.js
```

This checks syntax only; it is not the website runtime or a behavioral test.

## Manual verification before publishing

1. Check every HTML file for one `<h1>`, sensible heading order, unique IDs, valid fragments, labels and accessible names.
2. Resolve every local `href`, `src`, stylesheet, script and CSS `url()` from each document's directory. Check all six service pages as well as the homepage and 404 page.
3. Parse the homepage and service-page JSON-LD as JSON, and parse all SVGs and `sitemap.xml` as XML.
4. Serve over HTTP from `/` and `/WebSite/`. Confirm HTML, CSS, JavaScript and image responses and verify the `404.html` asset base on the custom domain and the current project path.
5. Test the navigation with keyboard, including menu open/close, Escape, in-page link close and focus restoration. Disable JavaScript and confirm links remain visible.
6. Test the contact fields' required/email validation and inspect the generated email draft without sending it. Confirm the page never indicates a sent or accepted inquiry.
7. Inspect desktop, tablet and small mobile widths for overflow and wrapping. Check visible focus and reduced-motion behavior.
8. Check browser console/network requests and confirm there are no unintended remote assets.
9. Review title, description, canonical, social tags, structured data, sitemap and robots entries.
10. Check documentation against the final files and inspect `git diff --check` and `git status`.

Browser, contrast, accessibility, live HTTPS, GitHub Pages settings and deployment checks should only be reported when actually performed. A local HTTP test cannot establish GitHub Actions startup behavior or external DNS/certificate state.

## Adding or changing pages and content

- **New page:** add a standalone HTML document, shared relative CSS/logo links, unique title/description/canonical/social values, one `<h1>`, descriptive alt text and a JSON-LD `WebPage` block. Link to it from relevant pages and add its canonical URL to `sitemap.xml`.
- **Service:** update the homepage service card and add/update its dedicated detail page. Avoid copied boilerplate and unsupported promises.
- **Experience:** use the existing organization/industry/description/technology pattern. Keep attribution factual and generalized where needed.
- **Design:** change tokens and shared components in `css/styles.css`; put responsive changes in `css/responsive.css`. Update [Design system](design-system.md) when the palette or conventions change.
- **SEO:** follow [SEO](seo.md) and update sitemap/robots/canonical references together when URLs or domain change.

## Contact form limitation

The homepage inquiry form has no remote endpoint. Browser constraint validation checks required fields and email syntax. The enhancement opens a `mailto:` draft containing the fields; the visitor must send it using their email application. Email-client support varies. Do not imply the site has stored or transmitted the inquiry.
