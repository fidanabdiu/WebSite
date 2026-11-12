# Architecture

## Runtime model

The site is a collection of static HTML documents, shared stylesheets, one small vanilla JavaScript file and local image/logo assets. GitHub Pages serves the repository root directly. There is no application server, client-side router, build pipeline, package manager, database, API, analytics provider or service worker.

## Pages and routing

`index.html` is the homepage and contains the services, expertise, experience, about, approach and contact sections. Six service-detail documents live in `services/`. Their URLs are ordinary static file URLs; navigation uses HTML links and browser fragments. `404.html` remains at the published root. The sitemap is maintained manually.

| Document | Purpose |
| --- | --- |
| `index.html` | Main business overview and inquiry form |
| `services/custom-dotnet-development.html` | Custom .NET applications |
| `services/aspnet-core-api-development.html` | Backend APIs and integrations |
| `services/legacy-dotnet-modernization.html` | Existing application modernization |
| `services/sql-server-database-development.html` | Database work in .NET systems |
| `services/enterprise-software-maintenance.html` | Application maintenance and ongoing support |
| `services/dotnet-development-outsourcing.html` | Direct independent engineering collaboration |
| `404.html` | Not-found experience |

## Page structure and shared patterns

Each document owns its semantic `<head>`, navigation, main content and footer. Repeated header/footer markup is intentionally duplicated so every page can be served directly without includes or a build step. Shared CSS classes provide consistent navigation, buttons, breadcrumbs, page sections, service cards, contact details and footers. A change to repeated markup should be applied consistently across the relevant documents.

Homepage section order: hero and credibility, services, expertise, selected experience, collaboration model, about, working approach and contact. Service pages use a service hero, contextual information, related links and a contact CTA.

## Styling and responsive behavior

`css/styles.css` holds design tokens and shared component/base rules. `css/responsive.css` contains viewport adaptations. See [Design system](design-system.md) for the palette, typography, spacing and breakpoints.

## JavaScript and state

`js/main.js` is deferred and isolated in an IIFE. It updates the copyright year, toggles the mobile navigation while synchronizing `aria-expanded`, closes the menu on Escape or fragment selection, and converts a valid project form submission into a `mailto:` draft. There is no application state store. The form does not send data to a server or confirm delivery.

The mobile navigation's collapsed styles are enabled only after a small inline script adds the `js` class to the root element. Without JavaScript, navigation links remain visible.

## URL and deployment assumptions

The canonical public host is `https://www.softdesign-ks.com/`. Homepage and service assets use document-relative paths, which also support the current `/WebSite/` project path. `404.html` sets a `<base>` on HTTP(S) requests so its relative CSS and image URLs resolve from `/` on the custom domain or `/WebSite/` on a `github.io` host; for `file://`, it leaves the browser's local directory base unchanged. The project prefix is tied to the repository name `WebSite`.

## External integrations

The only outbound behavior is links to the public email address, telephone number, LinkedIn and GitHub. The contact form creates an email draft using the visitor's email application. No form service, API credentials, runtime environment variables or server-side configuration exist.
