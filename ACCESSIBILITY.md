# ♿ Accessibility statement

## Commitment
Cake Shop aims to make its website understandable and usable by people with different abilities, devices, and input methods. This statement records the project's intent and the current review process. It is not a claim of WCAG conformance.

## Current status
The application is a React/Vite front-end showcase. A formal independent accessibility audit has not been completed. Keyboard behavior, contrast, image alternatives, heading structure, and responsive reflow need route-by-route verification.

## Known review areas
- The carousel needs keyboard and screen-reader testing.
- Some visible controls are placeholders and may not have a useful action.
- Existing JSX contains nonstandard class attributes that may affect styling and focus presentation.
- Image alternative text should be reviewed for meaningful content versus decoration.

## Feedback
Report accessibility barriers through the repository issue tracker. Include the route, browser, assistive technology if relevant, steps to reproduce, and the expected outcome. Avoid including private information.

## Project guidance
See [the accessibility guide](docs/design/accessibility.md) and [audit record](docs/quality/accessibility-audit.md). Accessibility improvements should be included in ordinary feature and bug-fix reviews, not deferred to a final polish phase.
