# 🧪 Manual test case catalogue

Use these cases as a repeatable baseline. Record the actual browser, viewport, commit, and result when executing them.

| ID | Area | Scenario | Expected result |
| --- | --- | --- | --- |
| TC-001 | Home | Open / | Home page and shared layout render |
| TC-002 | Cakes | Open /cakes directly | Cakes page renders |
| TC-003 | About | Open /about directly | About page renders |
| TC-004 | Blog | Open /blog directly | Blog page renders |
| TC-005 | Routing | Refresh each route | Host returns the SPA entry point |
| TC-006 | Navigation | Use header links | Correct route opens |
| TC-007 | Keyboard | Navigate with Tab and Enter | Focus is visible and links work |
| TC-008 | Carousel | Operate carousel | Slides change without layout breakage |
| TC-009 | Assets | Inspect all page images | No missing image requests |
| TC-010 | Responsive | Test mobile widths | No unexpected horizontal overflow |
| TC-011 | External assets | Block a CDN request | Page remains understandable |
| TC-012 | Unknown path | Open an unknown route | Deliberate not-found behavior is shown once implemented |

## Execution record

| Field | Value |
| --- | --- |
| Tester | |
| Date | |
| Commit | |
| Browser/version | |
| Viewport | |
| Overall result | Not run |

Do not mark a case as passed without executing it.
