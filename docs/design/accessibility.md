# ♿ Accessibility and responsive design

## Baseline

The current site is a visual React storefront. Accessibility must be checked as part of each UI change; this document is a verification plan, not a claim that the entire interface is already conformant.

## Required checks

### Keyboard
- All links and buttons are reachable in a logical Tab order.
- Focus indicators remain visible against the page background.
- No interactive element requires a mouse hover to reveal its only action.
- Escape closes any future modal or menu.
- Focus is not trapped or lost when responsive navigation opens and closes.

### Semantics
- Use one clear page-level h1 per route.
- Use buttons for actions and anchors for navigation.
- Use lists for repeated navigation or product collections where appropriate.
- Use descriptive link text rather than “click here”.
- Mark purely decorative images with empty alt text; provide useful alt text for meaningful product and editorial images.
- Set document language and meaningful page titles.

### Visual
- Text contrast should meet WCAG AA expectations.
- Do not rely on color alone to communicate status.
- Support browser zoom to 200% without losing core content.
- Respect prefers-reduced-motion for nonessential animation.
- Avoid text embedded in images when equivalent HTML text is possible.

### Responsive
Check at minimum:
- Narrow mobile: 320–375 CSS px
- Typical mobile: 390–430 CSS px
- Tablet: 768–1024 CSS px
- Desktop: 1280 CSS px and wider

Verify header wrapping, carousel controls, image cropping, footer columns, and absence of horizontal overflow.

## Suggested manual test

1. Load each route directly.
2. Navigate using Tab, Shift+Tab, Enter, and Space.
3. Inspect headings and landmarks with a screen reader.
4. Zoom to 200%.
5. Test reduced-motion preference.
6. Check a narrow viewport and landscape orientation.
7. Confirm every visible control has an understandable action.

## Release gate

A UI pull request should list routes and viewport sizes checked, keyboard checks performed, and any known accessibility limitations.
