# 🚢 Release process

## Release model
The project does not currently publish on a fixed schedule or maintain a formal versioning policy. Releases should be cut from reviewed commits on main.

## Before release
1. Confirm the change scope and update CHANGELOG.md.
2. Review open high-priority issues.
3. Run npm ci.
4. Run npm run lint.
5. Run npm run build.
6. Review the built output with npm run preview.
7. Check route refresh, responsive behavior, assets, and accessibility.
8. Confirm no secrets or unapproved media are included.

## Release record
Record:
- Release date and commit SHA.
- User-visible changes.
- Known limitations.
- Commands and checks run.
- Deployment target and artifact reference.
- Rollback artifact or commit.

## After release
Verify all configured routes from a clean browser session and monitor static-host availability and asset failures. If a serious regression appears, follow the rollback procedure in docs/operations/release-rollback.md.

## Versioning
If semantic versioning is adopted, define what constitutes a breaking change for this front-end project and align Git tags, changelog entries, and deployment artifacts.
