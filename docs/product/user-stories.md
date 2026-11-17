# 👥 User stories and acceptance criteria

These stories describe the current showcase and potential future work. Status labels distinguish implemented behavior from ideas.

## Visitor stories

### US-001: Explore the home page
**As a** visitor, **I want** to see the bakery introduction and visual highlights, **so that** I can understand the site's theme.

Acceptance:
- Home route renders without a runtime error.
- Content has a logical heading structure.
- Images have appropriate alternative text.

Status: Partially represented by current UI. Accessibility requires review.

### US-002: Browse cake imagery
**As a** visitor, **I want** to view cake imagery, **so that** I can explore the visual catalogue.

Acceptance:
- Cakes route loads.
- Carousel can be operated by pointer and keyboard.
- Images load at expected sizes.

Status: UI implemented, interaction and accessibility need verification.

### US-003: Learn about the bakery
**As a** visitor, **I want** to read the About page, **so that** I can understand the bakery story.

Acceptance:
- About route loads directly.
- Copy is accurate and approved by the business owner.

Status: Layout implemented, business copy requires owner verification.

### US-004: Read articles
**As a** visitor, **I want** to browse blog content, **so that** I can read bakery-related articles.

Acceptance:
- Blog route loads.
- Each article has a meaningful title and content destination.
- Pagination changes the visible page when implemented.

Status: Static cards present; pagination is not functional.

## Future commerce stories, not implemented

### US-101: View product details
Acceptance: A product has a stable identifier, description, current price, options, availability, and accessible detail page.

### US-102: Add an available product to cart
Acceptance: Server-validated product and price are added; quantity and totals are recalculated safely; cart state survives the intended session.

### US-103: Place an order
Acceptance: Delivery data is validated, the server rechecks stock and price, and an order record is created with an auditable status.

### US-104: Pay securely
Acceptance: A supported payment provider processes payment; webhook signatures are verified; raw card credentials never enter this application.

### US-105: Contact the bakery
Acceptance: A real submission endpoint validates and rate-limits input, reports success only after accepted delivery, and protects personal information.

## Definition of done
- Acceptance criteria are met.
- Responsive and keyboard behavior is checked.
- Tests or manual evidence are supplied.
- Security and privacy implications are reviewed.
- Documentation and known limitations are updated.
