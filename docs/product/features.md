# ✨ Feature inventory and implementation status

This document separates visible presentation from actual working behavior.

| Feature | Current status | Evidence / notes |
| --- | --- | --- |
| Home page | Implemented UI | Composes home sections |
| Cakes page | Implemented UI | Reuses hero, carousel, image strip |
| About page | Implemented UI | Composes shared content sections |
| Blog page | Static UI | Repeated local blog cards |
| Shared header and footer | Implemented UI | Shared layout |
| Browser routes | Implemented | React Router routes /, /cakes, /about, /blog |
| Image carousel | Implemented UI | Swiper 11 |
| Local image assets | Implemented | public/img |
| Product catalogue service | Not implemented | Content is embedded in JSX |
| Product detail route | Not implemented | No product identity or detail route |
| Add to cart | Not implemented | Overlay text is presentation only |
| Persistent cart | Not implemented | No cart state or storage |
| Checkout | Not implemented | No checkout flow |
| Payment | Not implemented | No payment provider |
| Order history/tracking | Not implemented | No backend or order store |
| Customer accounts | Not implemented | No authentication |
| Contact form submission | Not implemented | No service or submission handler |
| Blog pagination | Placeholder | Links do not select another data page |
| Video playback | Not implemented | Play control is not wired to a player |
| Admin/CMS | Not implemented | No admin route or content service |

## Recommended feature acceptance standard

A feature is complete only when:
1. The user can start it through a real semantic control.
2. Input is validated and clear errors are shown.
3. The feature has a working outcome, not just a visual state.
4. Loading, success, empty, and failure states are handled where relevant.
5. Accessibility and responsive behavior are checked.
6. Automated or documented manual tests cover the key path.
7. Related documentation is updated.

## Suggested order of future work

1. Fix navigation and dead controls.
2. Extract product and blog content into structured local data.
3. Add a real product detail experience.
4. Decide whether the app remains static or adds a backend.
5. Only after that decision, design cart, checkout, order, and payment services.
