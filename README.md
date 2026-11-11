# SOFT DESIGN website

A lightweight, single-page website for SOFT DESIGN, Fidan Abdiu's individual software development business in Pristina, Kosovo. The homepage leads with “Welcome to SOFT DESIGN. C#/.NET software development services.” and presents Services, Technical Expertise, Selected Experience, About, Working Approach and Contact sections.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Static hosting on GitHub Pages; no backend, framework, package manager or build step

The page works without JavaScript. JavaScript only improves the small-screen navigation and copyright year.

## Project files

```text
.
├── AGENTS.md
├── README.md
├── index.html
├── 404.html
├── CNAME
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── assets/
│   ├── documents/
│   ├── icons/
│   ├── images/
│   └── logos/
├── css/
│   ├── responsive.css
│   └── styles.css
└── js/
    └── main.js
```

The original supplied logo files under `logos/`, profile photo `fidan_abdiu_linkedin_profile_image.png`, and CV source `fidan_abdiu_resume.txt` are retained as source materials. Optimized copies used by the website are in `assets/`.

## Run locally

The site uses relative local assets and can be opened directly by opening `index.html` in a browser. To check it over HTTP, use any static file server, for example Python's built-in server if Python is installed:

```text
python -m http.server 8000
```

Then visit `http://localhost:8000/`. No package install or compilation is needed.

## Updating content

- Edit visible page copy and section structure in `index.html`.
- Keep the English heading order, semantic sections and concise editorial tone.
- Update the title, description, canonical URL, Open Graph/Twitter values and JSON-LD in the `<head>` when the public identity or domain changes.
- Update `sitemap.xml` and `robots.txt` if the canonical host changes.
- Keep project descriptions limited to verified CV or user-provided details. Generalize confidential projects and never add invented outcomes or metrics.
- The footer year updates from `js/main.js`; its 2026 fallback in HTML is available if JavaScript is disabled.

### Current page presentation

- The hero and Services sections have distinct full-width neutral backgrounds.
- The profile portrait appears as a smaller circular image in both the hero and About sections. The hero caption is centered below the photo; the About photo has no caption.
- The Selected Experience entries identify Kosovo Agency of Statistics, Vodafone Albania, FOM University and Banka Ekonomike. Keep these labels and descriptions consistent with the supplied CV and any confidentiality requirements.
- The footer's lower row contains only the copyright year and the “Back to top” link.

## Replacing the profile picture

1. Place the approved source in `assets/images/`.
2. Create a web-sized derivative (the current image is a 720 px wide JPEG) and preserve the source separately.
3. Update the image paths in `index.html`, keeping intrinsic `width` and `height`, descriptive alt text, and lazy loading for the below-fold portrait.
4. Keep the hero portrait eager-loaded so it can render promptly.

Current image: `assets/images/fidan-abdiu-profile.jpg`, a 720 px wide JPEG derivative of the supplied portrait.

## Replacing the logo

Use the supplied official SVGs in `assets/logos/`. The dark wordmark is used on light surfaces; the light wordmark is used in the footer. Preserve the SVG viewBox and proportions. Update `index.html` and `404.html` references if filenames change. Use the symbol mark for the favicon.

## Updating the CV

The current supplied `fidan_abdiu_resume.txt` contains LaTeX source, not a ready-to-publish PDF. There is no CV PDF in the project. Add the approved public PDF at:

```text
assets/documents/fidan-abdiu-cv.pdf
```

After adding it, change the two “Request my CV” links in `index.html` from the mailto request to a direct download link such as:

```html
<a href="assets/documents/fidan-abdiu-cv.pdf" download>Download my CV</a>
```

Check the PDF opens and downloads after deployment. Until then, the site invites visitors to request the CV by email and does not expose the LaTeX source.

## Adding case studies

Add one `<article class="case-row">` in the selected experience list in `index.html`. Use the same metadata and description structure. Include only approved facts: industry/context, engineering challenge, your contribution and verified outcome where available. Anonymize clients when details are confidential. Do not invent metrics, endorsements or results.

## SEO metadata

Edit the title, description, canonical, Open Graph and Twitter tags in `index.html`. The current title targets C#/.NET development services in Kosovo; keep social titles and descriptions aligned with the visible “Welcome to SOFT DESIGN. C#/.NET software development services.” hero message. Keep the canonical URL consistent with the active domain in `CNAME`, `sitemap.xml`, and `robots.txt`. JSON-LD is in the `application/ld+json` block; update only with verified information and valid JSON. Keep image alt text descriptive and heading order logical.

## GitHub Pages deployment

1. Push the static site files to the GitHub repository. Keep `index.html`, `404.html`, `CNAME`, and the other root configuration files at the published root.
2. In the repository's **Settings → Pages**, select the intended branch and root folder (or the existing publishing source if one is already configured). Do not replace an existing workflow or deployment setting without reviewing it.
3. Keep the custom domain set to `www.softdesign-ks.com`. The repository `CNAME` file contains that hostname.
4. Confirm that the Pages deployment succeeds and that the domain resolves to the repository's GitHub Pages site. This project does not change DNS or GoDaddy configuration.
5. In GitHub Pages settings, enable **Enforce HTTPS** when GitHub indicates the certificate is ready.
6. Open `https://www.softdesign-ks.com/`, test the navigation and contact links on desktop and mobile, request a missing path to verify `404.html`, and check the browser console for errors.

### GoDaddy domain and HTTPS

The existing custom domain is `www.softdesign-ks.com`. The `CNAME` file records the hostname for GitHub Pages; it does not modify GoDaddy DNS. Preserve existing DNS records and do not change nameservers based on this README. If Pages reports a DNS or certificate problem, inspect the current GitHub Pages and GoDaddy configuration before making changes.

GitHub Pages provisions and renews an HTTPS certificate after its custom-domain and DNS checks pass. HTTPS cannot be enabled until that process is complete. Keep the canonical URL, social URLs and sitemap on HTTPS.

## Deployment validation checklist

- Root page loads over HTTPS and canonical URL points to `https://www.softdesign-ks.com/`.
- Logo, favicon, profile image and CSS load successfully.
- Navigation links reach the intended sections; keyboard focus and mobile menu work.
- Email, telephone, LinkedIn and GitHub links open correctly.
- Current CV PDF is added and downloadable once supplied.
- `robots.txt`, `sitemap.xml`, `site.webmanifest` and `404.html` are served from the site root.
- JSON-LD parses and matches visible facts; check for browser console errors.
- Review desktop, tablet and phone widths for readable text and no horizontal overflow.

## Content and asset still needed

- **CV PDF:** add the approved file as `assets/documents/fidan-abdiu-cv.pdf` to enable a direct download. Current website CTAs request it by email.
- The original site could not be retrieved with the available browser/web tools during setup. Current copy and project descriptions therefore use the supplied CV and user-provided brief; review against any additional approved public information before launch.
