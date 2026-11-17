# ✅ Definition of done

A change is complete only when the applicable items below are satisfied.

## Functional
- [ ] The behavior matches the agreed acceptance criteria.
- [ ] Empty, loading, error, and success states are handled where relevant.
- [ ] No placeholder is represented as a completed feature.
- [ ] Existing routes and shared layout remain functional.

## Code quality
- [ ] Components have clear responsibilities.
- [ ] React semantics and JSX attributes are valid.
- [ ] No unnecessary dependency is introduced.
- [ ] No secrets or generated build output are committed.

## Accessibility and responsive behavior
- [ ] Keyboard path is usable.
- [ ] Focus is visible.
- [ ] Semantic structure and accessible names are checked.
- [ ] Mobile and desktop layouts are reviewed.
- [ ] Reduced motion and image alternatives are considered.

## Verification
- [ ] npm ci completed.
- [ ] npm run lint completed.
- [ ] npm run build completed.
- [ ] Relevant manual QA cases were executed.
- [ ] Results and any unrun checks are recorded honestly.

## Documentation
- [ ] README or relevant guide updated.
- [ ] Diagrams updated if architecture or routes changed.
- [ ] Known limitations and roadmap updated where needed.
- [ ] Release or migration notes added if applicable.

Not every checkbox applies to every change. Explain any unchecked item in the pull request.
