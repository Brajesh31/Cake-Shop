# Development

## Source layout

- src/main.jsx is the React entry point.
- src/App.jsx defines the BrowserRouter routes.
- src/Views/Layout contains the site header, footer, and shared layout.
- src/Views/Pages contains route-level pages and the Home sections.
- src/Views/Pages/Components contains shared button, blog, and image components.
- src/App.css and src/index.css contain application styles.
- public/img contains images copied into the static build.

See architecture.md for the component map and current behavior boundaries.

## Local workflow

Install from the lockfile and start Vite:

    npm ci
    npm run dev

Make a focused change in the component or stylesheet responsible for the behavior. Reuse a component when its page variants are genuinely the same; avoid turning placeholder presentation into a claimed feature without implementing the required behavior.

Before opening a pull request, run:

    npm run lint
    npm run build

No automated tests are configured. For visual work, check the affected route at mobile and desktop widths, exercise keyboard operation, and inspect browser console and network errors. Mention checks that could not be run.

## Routing and navigation

Routes are declared in src/App.jsx: /, /cakes, /about, and /blog. Internal route navigation should use React Router Link or NavLink instead of a plain anchor that reloads the application. The current contact link points to # and the blog pagination anchors are placeholders. Add a route or a real destination before presenting those controls as functional.

## Styling and public assets

The app uses regular CSS plus Bootstrap classes from a CDN. Preserve readable fallbacks if external font or icon services are unavailable. Public files in public/img are served from the URL root, for example /img/items1.jpg. The current background URL expressions in src/App.css use ../public/img; check and correct this convention when touching those rules.

Use descriptive alt text for meaningful images and empty alt text for decorative images. Maintain visible keyboard focus, appropriate heading order, and responsive behavior. Some existing JSX uses class where React expects className, and Section2 and Section4 contain the typo classNameName; correct these carefully when editing.

## Dependencies and repository hygiene

Use npm for dependency changes and commit package.json with package-lock.json. Explain newly added runtime dependencies in the pull request. Do not commit node_modules, dist, environment files, access tokens, or unrelated generated output. The application currently needs no .env values; see ../.env.example.

## Pull requests

Follow the root CONTRIBUTING.md. Describe user-facing changes, affected routes, accessibility behavior, screenshots for visual work, and commands run. Security reports belong in the private reporting path documented in ../SECURITY.md.
