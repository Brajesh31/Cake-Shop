# 🧹 Technical debt register

This register captures issues observed in the current source tree. Reassess each item before implementation because the code may change.

| ID | Area | Observation | Suggested action | Priority |
| --- | --- | --- | --- |
| TD-001 | JSX | Some components use class instead of className | Normalize attributes and inspect styles | High |
| TD-002 | JSX | Section2 and Section4 use classNameName | Correct the misspelled attribute | High |
| TD-003 | Assets | CSS references ../public/img paths | Verify generated URLs and use public URL paths | High |
| TD-004 | Navigation | Contact points to a placeholder fragment | Provide a real destination or remove action styling | Medium |
| TD-005 | Commerce UI | Order and cart affordances are not connected | Label as demo or implement complete service | High |
| TD-006 | Blog | Pagination anchors are placeholders | Implement actual pagination or remove misleading controls | Medium |
| TD-007 | Routing | No dedicated not-found route | Add explicit fallback route | Medium |
| TD-008 | SEO | Route-specific metadata is not configured | Add document titles and descriptions per route | Medium |
| TD-009 | Testing | No automated test suite | Add tests for route and shared UI behavior | Medium |
| TD-010 | Assets | Asset provenance is not recorded | Confirm rights and add asset inventory | Medium |

## Work policy
Create an issue for each meaningful item, agree on scope, and update this register when it is resolved. Avoid making a large unrelated refactor in a documentation-only change.
