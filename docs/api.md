# API and integrations

## Application API status

The repository does not implement or consume an application API. There are no server routes, fetch or Axios calls, GraphQL clients, authentication endpoints, or form submission handlers. Product and blog content is hard-coded in React components.

The following are browser routes handled by React Router, not API endpoints:

| Route | Component | Purpose |
| --- | --- | --- |
| / | Home | Main storefront concept |
| /cakes | Cakes | Hero, repeated image carousel, image strip |
| /about | About | Introductory and promotional sections |
| /blog | Blog | Static sample entries and placeholder pagination |

All routes are served by the same SPA entry point. A host must provide a history fallback for direct requests to these paths.

## Third-party resources

index.html loads presentation resources from external services:

- Bootstrap 5.1.3 CSS and JavaScript from jsDelivr.
- Font Awesome 6.6.0 stylesheet from cdnjs.
- Jost, Noto Sans, and Poiret One font files through Google Fonts.
- Swiper 11 stylesheet from jsDelivr.

The carousel implementation and CSS also use the Swiper npm package. These resources are styling and UI dependencies; they are not a Cake Shop business API. Availability depends on external network requests.

## Adding a service

If a future change adds contact submissions, product inventory, orders, or payments, update this guide with each endpoint's purpose, method, request and response shape, authentication and authorization rules, validation, rate limits, and error behavior. Keep secrets and privileged operations on a server. A Vite variable exposed to browser code is public and must not be used for credentials.

Do not treat a visual button or form as an API integration. Document and test the actual service before claiming the feature is live.
