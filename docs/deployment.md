# Deployment

## Build artifact

The application is a Vite static site. A generic deployment pipeline can install the locked dependencies and build the project:

    npm ci
    npm run build

Publish the contents of dist as the site's document root. The repository does not currently include a hosting-specific deployment configuration, server API, or environment variable requirements.

## Single-page application fallback

The app uses BrowserRouter. Configure the static host so a request for a known application route such as /cakes, /about, or /blog returns the root index.html. Without this history fallback, navigating from the home page may work while refreshing a deep link returns a host-level 404.

For hosts that use a rewrite file or dashboard setting, add a catch-all rewrite to /index.html while allowing existing static files to be served normally. Verify direct navigation and refresh on each route after deployment.

## Base path and assets

The app's public images use absolute root URLs such as /img/logo.png. This works when the app is deployed at a domain root. If it is hosted under a path prefix, configure Vite's base path and review root-based asset references and router behavior for that host.

The CSS background declarations currently point to ../public/img files from source CSS. Verify the resulting URLs in the built CSS and browser Network panel. Public assets should resolve from the deployed site's public URL root; fix the references if the production build requests nonexistent paths.

## External resources

The HTML entry point loads Bootstrap, Font Awesome, Google Fonts, and Swiper CSS from third-party CDNs. Production rendering therefore depends on external availability and their current terms. Confirm these dependencies, integrity attributes where applicable, and privacy expectations before release. The project does not bundle a local fallback for all of these resources.

## Release review

Before promoting a deployment:

- Confirm the expected commit and locked dependency install.
- Build the site and review the generated dist directory.
- Test each route by direct URL and refresh.
- Confirm images, backgrounds, fonts, and icons load with no failed requests.
- Check responsive layout, keyboard navigation, console warnings, and links.
- Confirm the controls are described honestly: no cart, checkout, order API, video player, or contact submission is included.
- Verify that the business copy and media have approval for the intended use.

## Rollback

Keep the previously deployed static artifact or release identifier so the hosting platform can restore it. A static rollback does not alter Git history. If a release exposed sensitive information, remove it from the active deployment and follow SECURITY.md; rotate any exposed credentials.
