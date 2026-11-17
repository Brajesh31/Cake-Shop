# 🔎 SEO and metadata guidance

## Current state
The project has a single index.html document title. Route-specific metadata and a sitemap are not currently part of the confirmed application implementation.

## Recommendations
- Give each route a unique, descriptive title and meta description.
- Use one clear H1 per page and a logical heading hierarchy.
- Use descriptive alt text for meaningful images.
- Use meaningful internal links and avoid placeholder anchors.
- Add Open Graph metadata for shareable pages.
- Create a sitemap only for canonical, publicly accessible routes.
- Add robots.txt only after deciding indexing policy.
- Avoid structured data that describes products, reviews, prices, or business details that are not verified and actually visible.

## Deployment
If the app is deployed at a custom domain, confirm canonical URLs, HTTPS, redirects, and robots behavior. For client-rendered pages, evaluate whether the target search engines can render the page content reliably or whether prerendering/SSR is warranted.

## Validation
Inspect page source and rendered metadata, test social previews, check Search Console after a real deployment, and keep the sitemap aligned with actual routes.
