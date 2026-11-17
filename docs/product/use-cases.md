# 🧭 Use cases

## UC-01: Browse the website
**Primary actor:** Visitor

**Precondition:** The static site is available.

**Main flow:**
1. Visitor opens the root URL.
2. The browser loads the Vite-built application.
3. React Router renders the Home page inside the shared layout.
4. Visitor selects Cakes, About, or Blog.
5. The selected route renders without a full application reload.

**Alternate flow:** A visitor opens a nested route directly. The hosting platform must return index.html for the route.

**Current status:** Routes exist in src/App.jsx. Host fallback depends on deployment configuration.

## UC-02: Browse cake carousel
**Primary actor:** Visitor

**Main flow:**
1. Visitor opens /cakes.
2. The page renders the reusable carousel section.
3. Visitor moves through available images.

**Current status:** Swiper is used. Keyboard support and screen-reader behavior require QA.

## UC-03: Attempt to order
**Primary actor:** Visitor

**Main flow today:**
1. Visitor sees an order-related visual control.
2. The control does not submit an order or create a cart entry.

**Current status:** Not implemented. Do not treat this as a successful transaction.

## UC-04: Future contact request
**Primary actor:** Visitor

**Precondition:** A contact service has been designed and deployed.

**Future flow:** Visitor submits validated information, server applies abuse controls, submission is accepted, and the UI displays a truthful result.

**Current status:** No submission service exists.
