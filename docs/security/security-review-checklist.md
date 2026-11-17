# 🔐 Security review checklist

Use this checklist for dependency, deployment, data, or integration changes.

## Source and dependencies
- [ ] No credentials, tokens, or private keys are committed.
- [ ] No secret is placed in a VITE_ variable.
- [ ] New dependencies are justified and reviewed.
- [ ] Dependency lockfile is updated.
- [ ] Known vulnerabilities are reviewed.
- [ ] External scripts and stylesheets are version-pinned where practical.

## Browser and content
- [ ] User-provided content is not inserted as unsafe HTML.
- [ ] Links to external sites are intentional.
- [ ] No sensitive data appears in URLs, screenshots, or logs.
- [ ] Content and media rights are verified.

## Future API and commerce work
- [ ] Authentication and authorization are enforced server-side.
- [ ] Prices, stock, and order totals are recalculated server-side.
- [ ] Input is validated and requests are rate-limited.
- [ ] Payment provider webhooks are signature-verified.
- [ ] Raw payment card credentials are never stored.
- [ ] Personal data purpose, access, retention, and deletion are documented.
- [ ] Backups and recovery are tested.

## Release decision
- Reviewer:
- Date:
- Commit:
- Findings:
- Decision: Pending | Approved | Rejected
