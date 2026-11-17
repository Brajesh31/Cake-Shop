# 📦 Dependency management

## Package manager
Use npm. package.json and package-lock.json must be committed together for dependency changes.

## Adding a dependency
Before adding a package:
1. Check whether the platform or an existing dependency already provides the behavior.
2. Review maintenance activity and compatibility with the current React/Vite versions.
3. Review package license and known security advisories.
4. Consider bundle size and browser impact.
5. Add only the dependency required for the feature.
6. Explain why it is needed in the pull request.

## Updating dependencies
- Prefer focused updates over broad, unreviewed upgrades.
- Run npm install to update the lockfile.
- Run npm ci from a clean checkout.
- Run lint and production build.
- Review breaking changes and browser support.
- Test routes and relevant interactions.

## Automated updates
Dependabot may open grouped or individual npm update pull requests. Automated updates still require review and CI checks. Do not merge solely because a bot opened the pull request.
