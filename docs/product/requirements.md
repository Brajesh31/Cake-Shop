# 📋 Product requirements specification

## Document status
- Product: Cake Shop
- Version: 1.0
- Scope: Current front-end showcase and explicitly separated future requirements
- Status: Baseline specification

## 1. Purpose
Define the scope and observable requirements for the current bakery-themed React website. This document does not claim that future commerce requirements are implemented.

## 2. Current system context
The current product is a static client-side application built with React and Vite. It contains four browser routes, shared layout components, local imagery, and a carousel. There is no application API, database, authentication, or transaction processing.

## 3. Functional requirements

| ID | Requirement | Current status |
| --- | --- | --- |
| FR-001 | Render the home page at / | Implemented |
| FR-002 | Render cake gallery page at /cakes | Implemented |
| FR-003 | Render about page at /about | Implemented |
| FR-004 | Render blog page at /blog | Implemented |
| FR-005 | Reuse a shared header and footer | Implemented |
| FR-006 | Display local image assets | Implemented, asset paths require validation |
| FR-007 | Display an image carousel | Implemented using Swiper |
| FR-008 | Submit contact messages | Not implemented |
| FR-009 | Add products to a persistent cart | Not implemented |
| FR-010 | Place and track orders | Not implemented |
| FR-011 | Process payments | Not implemented |
| FR-012 | Authenticate customers or administrators | Not implemented |

## 4. Non-functional requirements
- NFR-001: Production output must be deployable as static files.
- NFR-002: Direct visits and refreshes on all configured routes must work on the target host.
- NFR-003: Core navigation must be keyboard accessible.
- NFR-004: Layout must remain usable on mobile, tablet, and desktop.
- NFR-005: No credentials may be embedded in browser-delivered code.
- NFR-006: Images and third-party resources must have documented rights and dependencies.
- NFR-007: A release must be reproducible from package-lock.json.

## 5. Acceptance baseline
A baseline release is acceptable when the four routes render, shared navigation works, required assets load, the build completes, and the deployment host correctly serves deep links. Any control that is still a placeholder must be clearly treated as such.

## 6. Future commerce requirements
A real ordering product requires approved product data, prices, availability, customer and delivery requirements, server-side order validation, payment-provider integration, fulfillment operations, privacy notices, retention rules, and support processes. These requirements must be specified and reviewed before implementation.
