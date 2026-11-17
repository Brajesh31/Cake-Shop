# 🎂 Product brief

## 1. Purpose

Cake Shop is a visual website concept for a bakery. Its purpose is to present a bakery identity, show cake imagery, communicate editorial content, and provide a base from which a more complete storefront could be developed.

## 2. Intended audience

- Visitors exploring a bakery's visual identity and cake range.
- People looking for basic business and brand information.
- Readers browsing bakery-related editorial content.
- Developers evaluating or extending the React front-end.

## 3. Product goals

1. Present a coherent bakery-themed visual experience.
2. Keep navigation and shared layout consistent across pages.
3. Reuse page sections and image components instead of duplicating all markup.
4. Keep the app easy to install and build with npm.
5. Document current capabilities and technical limitations honestly.

## 4. Non-goals of the current version

The current source does not provide:
- Customer registration or authentication.
- A live product catalogue or inventory.
- Cart state that survives navigation or refresh.
- Checkout, order creation, payment processing, or refunds.
- Delivery address capture or order tracking.
- Admin tools, CMS, or database storage.
- Working contact submissions or newsletter subscriptions.

These are possible future product directions, not existing capabilities.

## 5. Success indicators

For the current showcase:
- Routes load and refresh correctly in local and hosted environments.
- The production build completes.
- Images and third-party assets load correctly.
- Navigation works with keyboard and touch input.
- Layout remains usable at mobile, tablet, and desktop widths.
- No dead controls are presented as fully functional actions.

For a future commerce release, add measurable indicators such as product detail engagement, cart conversion, successful order rate, payment failure rate, and fulfilment accuracy only after the required services exist.

## 6. Constraints and assumptions

- The project is a React 19 client-side application bundled by Vite.
- The browser router requires a host-side history fallback.
- Current content is hard-coded in components.
- Local images live in public/img.
- External CDN resources require network access.
- Business details, claims, photography, and asset permissions must be verified by the owner before public commercial use.

## 7. Product principles

- Be transparent about what a control does.
- Do not collect visitor data without a documented purpose and privacy approach.
- Prefer accessible HTML semantics and keyboard-operable controls.
- Keep secrets out of browser bundles.
- Build commerce functionality as a deliberate architecture change, not a cosmetic button update.
