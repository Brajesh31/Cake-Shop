# ✅ Manual QA checklist

Use this checklist for meaningful UI or routing changes. Record the results in the pull request rather than silently assuming the checks passed.

## Installation and build
- [ ] `npm ci` completes from a clean checkout.
- [ ] `npm run lint` completes without new errors.
- [ ] `npm run build` completes.
- [ ] `npm run preview` serves the generated bundle.

## Routes and navigation
- [ ] Home route loads.
- [ ] Cakes route loads.
- [ ] About route loads.
- [ ] Blog route loads.
- [ ] Direct route refresh works on the target host.
- [ ] Unknown route behavior is understandable.
- [ ] Header links navigate to the correct route.
- [ ] Footer links have meaningful destinations.

## Visual and responsive
- [ ] No horizontal overflow at 320px, 375px, 768px, 1024px, and 1280px widths.
- [ ] Images load and retain appropriate aspect ratios.
- [ ] Carousel controls work by pointer and keyboard.
- [ ] Header and footer remain usable at mobile widths.
- [ ] Fonts and CDN resources fail gracefully if unavailable.

## Accessibility
- [ ] Keyboard navigation works.
- [ ] Focus state is visible.
- [ ] Heading hierarchy is logical.
- [ ] Images have appropriate alt text.
- [ ] Controls use correct button or link semantics.
- [ ] Contrast and reduced-motion behavior are reviewed.

## Honesty of functionality
- [ ] No placeholder control is described as a working purchase or contact feature.
- [ ] Error, empty, and success states are clear for any newly added behavior.
- [ ] Documentation reflects what the code actually implements.
