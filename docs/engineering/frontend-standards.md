# 🧱 Front-end engineering standards

## React
- Use function components and hooks.
- Keep component names in PascalCase and files consistent with existing conventions.
- Use className for CSS classes.
- Provide stable keys for rendered collections.
- Avoid unnecessary effects for values that can be derived during render.
- Keep state close to the component that owns the interaction.
- Use semantic HTML before introducing custom ARIA roles.

## Routing
- Keep the route table centralized in src/App.jsx unless the application grows enough to justify route modules.
- Use React Router Link or NavLink for internal navigation.
- Define a deliberate not-found route.
- Verify direct route loading and refresh on the production host.

## CSS and assets
- Prefer reusable CSS variables and component classes over repeated inline values.
- Public assets should use Vite public URL semantics.
- Confirm asset filename case on Linux hosting.
- Avoid fixed layout dimensions that break mobile screens.
- Include visible focus-visible styles.

## Errors and user feedback
- Do not swallow runtime errors silently.
- Do not display success until an operation has actually succeeded.
- Use clear empty and error states when data-backed features are introduced.
- Avoid browser alerts for polished product workflows.

## Dependencies
- Use npm and update package.json and package-lock.json together.
- Prefer existing dependencies when they meet the need.
- Review package maintenance, license, security advisories, and bundle impact before adding a dependency.

## Pull request expectations
Keep changes focused, explain trade-offs, update docs, run lint and build, and attach screenshots for visual changes.
