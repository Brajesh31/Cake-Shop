# 🧪 Testing strategy

## Current baseline

The package manifest defines dev, build, preview, and lint commands. It does not define a test command and the repository does not currently include a configured automated unit, component, integration, or browser test suite.

Do not report the project as fully tested based solely on a successful build or lint run.

## Quality layers to introduce

| Layer | Suggested scope | Current status |
| --- | --- | --- |
| Static checks | ESLint and formatting consistency | ESLint configured |
| Build validation | Vite production bundle | npm run build |
| Unit tests | Pure helpers and formatting logic | Not configured |
| Component tests | Header, footer, carousel state, page fragments | Not configured |
| Browser tests | Routes, navigation, responsive behavior | Not configured |
| Accessibility checks | Keyboard, landmarks, contrast, alt text | Manual plan |
| Visual regression | Representative pages and breakpoints | Not configured |

## Minimum local verification

```bash
npm ci
npm run lint
npm run build
npm run preview
```

Run each command and record its actual result in the pull request. Do not mark a step complete when it has not been run.

## Suggested automated coverage

When a test stack is selected, add tests for:
- Each of the four browser routes.
- Shared header navigation and footer links.
- Carousel render and keyboard operation.
- Empty, loading, and error states for any future data service.
- Any future cart calculations, price validation, and order workflow.
- A not-found route when implemented.

## Pull request evidence

Include commands run, pass/fail results, screenshots for visual changes, and known test gaps.
