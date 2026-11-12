# SEO and discoverability

## Per-page metadata

Each HTML page should have a unique, accurate `<title>` and meta description, `lang="en"`, viewport and theme color, canonical URL, icon references, Open Graph metadata and Twitter card metadata. Match each canonical URL to its deployed page. Do not add keyword lists, unsupported claims or repeated boilerplate descriptions.

The homepage canonical is `https://www.softdesign-ks.com/`. Each service page canonical uses the same host and its exact `/services/<page>.html` path. Keep the canonical, `og:url`, structured data URL and sitemap `<loc>` in agreement.

## Structured data

The homepage contains JSON-LD for `WebSite`, `Person` and `ProfessionalService`, based on visible business details. Service pages identify themselves as `WebPage`. Keep schema factual and consistent with page text; do not add fabricated reviews, prices, hours, ratings, outcomes or credentials. Parse JSON after any JSON-LD edit.

## Social previews and images

Open Graph and Twitter title/description should describe the corresponding page. `og:image` and `twitter:image` use the supplied social avatar at the canonical host. Keep the portrait alternatives descriptive and preserve intrinsic image dimensions. Social images are not substitutes for meaningful image alt text.

## Sitemap and robots

`sitemap.xml` is maintained manually and lists the homepage plus all six service URLs. Add or remove an entry when a public page is added or removed. `robots.txt` allows crawling and declares the sitemap at `https://www.softdesign-ks.com/sitemap.xml`. Keep both aligned with the configured public host.

## Internal links and URL policy

Use descriptive link text and connect service pages to relevant related services and the inquiry section. Existing homepage section anchors remain stable. Service pages are static `.html` paths; preserve those URLs once deployed. Local assets and links are relative to support the root and `/WebSite/` project path. The 404 page's home CTA returns to the canonical custom domain.

## SEO maintenance checklist

1. Confirm title and description are unique and factual.
2. Confirm canonical and social URLs match the page's public URL.
3. Parse page JSON-LD and verify it agrees with visible content.
4. Check every service URL is in the sitemap and reachable by internal links.
5. Confirm image paths and alt text.
6. Keep `CNAME`, canonical host, robots sitemap reference and sitemap URLs synchronized if the domain changes.
