# 🚦 Release and rollback procedure

## Before release

- [ ] Pull request reviewed and approved.
- [ ] Docs updated for behavior or dependency changes.
- [ ] `npm ci` completes.
- [ ] `npm run lint` completes.
- [ ] `npm run build` completes.
- [ ] Production preview reviewed.
- [ ] Target host rewrite rules checked.
- [ ] Image and font asset licenses reviewed for new assets.

## Release

1. Merge the reviewed change into the deployment branch.
2. Build from the exact commit intended for release.
3. Publish the complete dist directory to the static host.
4. Keep the previous release artifact available until verification completes.
5. Verify all browser routes, refresh behavior, assets, and responsive layout.
6. Record the commit and deployment time in the release notes.

## Rollback

1. Identify the last known good release artifact or commit.
2. Restore that artifact using the host's supported deployment mechanism.
3. Confirm root and deep-link routes work.
4. Check images, CSS, fonts, and browser console.
5. Record the incident and create a follow-up issue.

Because the current application is static, rollback normally means restoring a previous static artifact. There are no application database migrations to reverse in the current version.
