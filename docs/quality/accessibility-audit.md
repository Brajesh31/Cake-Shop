# ♿ Accessibility audit record

## Audit status
No formal accessibility audit result is currently recorded. The checklist below is a starting point for manual and automated review, not a conformance statement.

## WCAG-oriented checks
- [ ] Page language is declared.
- [ ] Page title identifies the route.
- [ ] Landmarks and heading order are meaningful.
- [ ] Images have accurate alternative text or are marked decorative.
- [ ] Links have meaningful accessible names.
- [ ] Buttons perform actions and expose appropriate names.
- [ ] Keyboard focus is visible.
- [ ] Focus order follows reading order.
- [ ] Carousel can be controlled without a pointer.
- [ ] Motion respects reduced-motion preferences.
- [ ] Text contrast is checked.
- [ ] Zoom to 200% does not hide content or actions.
- [ ] Content reflows at narrow viewport widths.
- [ ] Errors and status messages are programmatically available.

## Findings

| ID | Route/component | Finding | Severity | Owner | Status |
| --- | --- | --- | --- | --- | --- |
| A-001 | Header | Contact placeholder is not a useful destination | Medium | | Open |
| A-002 | Carousel | Keyboard and screen-reader behavior needs verification | Medium | | Open |
| A-003 | Page sections | Existing JSX includes nonstandard class attributes | Medium | | Open |
| A-004 | Images | Alt text quality needs route-by-route review | Medium | | Open |

## Audit record
- Auditor:
- Date:
- Commit:
- Tools:
- Browsers:
- Summary:
