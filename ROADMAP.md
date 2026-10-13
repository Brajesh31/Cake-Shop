# Roadmap

This is a set of possible next steps based on the current repository. It is not a release schedule or a promise that each item will be implemented. Scope should be discussed in an issue before substantial work begins.

## Current baseline

The application provides a Vite-powered React UI with Home, Cakes, About, and Blog routes and local image assets. Commerce actions, contact handling, and durable data are not implemented.

## Candidate priorities

### Improve the current front end

- Correct public asset URLs and confirm all images and fonts load from a production build.
- Replace invalid or misspelled JSX class attributes with className and check component console output.
- Improve semantic markup, alt text, focus visibility, keyboard interaction, and narrow-screen behavior.
- Add a not-found route and make navigation's active state follow the current route.
- Replace placeholder fragments and inert controls with useful destinations or clearly non-interactive presentation.
- Review sample copy, business details, and third-party media rights.

### Improve project maintenance

- Add automated component and route checks if the project scope warrants a test framework.
- Pin or update dependencies deliberately and review dependency security notices.
- Document hosting-specific SPA fallback and base-path configuration for supported deployment targets.
- Add automated accessibility and link checks where maintainers can sustain them.

### Only if real commerce is intended

- Define product, price, availability, fulfillment, customer privacy, and operational requirements.
- Design a secure server-side service and data model before implementing orders or accounts.
- Use an established payment provider; never collect or store card credentials in this front end.
- Add authorization, input validation, anti-abuse controls, monitoring, retention, and recovery procedures.
- Treat the result as a separate product milestone requiring security and legal review.

## Suggesting a roadmap change

Open an issue describing the user need, expected outcome, and proposed scope. Roadmap order can change as maintainers learn more.
