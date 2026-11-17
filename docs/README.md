# 📚 Documentation index

Welcome to the Cake Shop project documentation. These guides describe the current React + Vite codebase, how to work on it, and what must be designed before adding real commerce features.

> **Accuracy note:** Cake Shop is currently a static front-end showcase. The docs distinguish existing UI from planned capabilities. No checkout, order API, inventory service, payment integration, or persistent cart is present in the current source.

## 🧭 Guides

### Product and experience
- [Project brief](product/project-brief.md)
- [Feature inventory and limitations](product/features.md)
- [Visitor journeys](product/user-journeys.md)

### Engineering
- [Architecture overview](architecture.md)
- [Architecture diagrams](architecture/diagrams.md)
- [API and integration status](api.md)
- [Database status](database.md)
- [Installation](installation.md)
- [Development workflow](development.md)

### Quality and design
- [Testing strategy](quality/testing-strategy.md)
- [Manual QA checklist](quality/qa-checklist.md)
- [Accessibility and responsive design](design/accessibility.md)
- [Visual asset guide](design/assets.md)

### Security and operations
- [Threat model](security/threat-model.md)
- [Data handling](security/data-handling.md)
- [Deployment](deployment.md)
- [Operations runbook](operations/runbook.md)
- [Release and rollback](operations/release-rollback.md)
- [Incident response](operations/incident-response.md)

### Templates
See [templates/README.md](templates/README.md) for ADR, feature, bug, test-plan, risk, incident, and release templates.

## 🔎 Source of truth

When documentation conflicts with source code, inspect the source and update the guide in the same pull request. Do not document a feature as implemented until the code path exists and has been tested.

## 📝 Maintenance expectations

- Update route and component descriptions when routes or page composition changes.
- Update installation instructions when scripts or dependencies change.
- Update the API and data guides when service integrations are introduced.
- Record important technical decisions as Architecture Decision Records.
- Remove obsolete guidance rather than leaving contradictory instructions.
