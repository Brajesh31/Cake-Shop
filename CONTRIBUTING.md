# Contributing

Thank you for considering a contribution to Cake Shop. Contributions should improve the accuracy, accessibility, maintainability, or usability of this front-end project without suggesting that placeholder commerce controls are already functional.

## Before starting

1. Read the README and the relevant guides in docs.
2. Search the current issues to see whether the work is already being discussed.
3. For a substantial change, open an issue first to agree on scope and avoid duplicated effort.
4. Do not include private credentials, personal customer information, or unlicensed images and fonts.

The repository is maintained by Brajesh Kumar, GitHub account @brajesh31. Maintainer review is required before a contribution is merged.

## Report a bug

Open a GitHub issue in this repository. Include:

- A concise title and the page or component affected.
- Reproduction steps and expected versus observed behavior.
- Browser, operating system, screen size, and whether the problem occurs in development or in the built site.
- Relevant console or network errors, with secrets and personal data removed.
- A screenshot or short recording when it helps explain a visual problem.

For a security vulnerability, follow SECURITY.md and do not disclose it in a public issue.

## Propose a feature

Describe the visitor problem, the intended behavior, the route or component involved, and any accessibility or mobile considerations. State whether the feature is only a visual prototype or requires a real backend. Do not imply that payments, customer data, order fulfillment, or contact delivery are supported unless those services are part of the proposed and reviewed scope.

## Prepare a change

1. Fork the repository and create a focused branch from main. Suggested names include docs/update-setup, fix/case-sensitive-image-path, or feature/accessible-navigation.
2. Keep the change focused and use existing React, CSS, and Vite conventions unless the change has a clear reason to introduce another pattern.
3. Prefer semantic HTML, descriptive accessible names, keyboard support, responsive layouts, and clear React component props.
4. Use repository-relative imports for source modules. Public assets are served from the site root; verify asset references in both development and production output.
5. Keep dependency changes limited. Explain a new dependency and update package-lock.json using npm.
6. Update the relevant docs when routes, scripts, dependencies, deployment behavior, security posture, or user-facing limitations change.
7. Do not commit generated dist output, node_modules, environment secrets, or unrelated formatting churn.

## Review your change

Install the locked dependencies and run the checks relevant to your change:

    npm ci
    npm run lint
    npm run build

There is no automated test script at present. For UI changes, also inspect the affected route at a narrow and wide viewport, exercise keyboard navigation, and check the browser console and network panel. Mention any checks you could not perform in the pull request.

## Commit and pull request

Use clear commit subjects that describe the change, for example:

- docs: clarify static hosting setup
- fix: correct public image references
- feat: add accessible contact destination

Open a pull request against main. Include the motivation, summary, screenshots for visual changes, validation performed, and any known limitations. Link related issues. Keep changes reviewable and respond to maintainer feedback with focused follow-up commits.

## License and conduct

By submitting a contribution, you agree that it may be distributed under this repository's MIT License. You confirm that you have the right to submit the content and that any third-party asset has appropriate permission and attribution. Follow CODE_OF_CONDUCT.md in project spaces.
