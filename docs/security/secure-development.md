# 🛡️ Secure development practices

## Current static application
The current app is delivered to the browser as static JavaScript, CSS, HTML, and images. Anything included in that output is public. There are no server-side credentials to configure in the present application.

## Source handling
- Never commit secrets, tokens, private keys, or customer records.
- Treat VITE_ variables as public build-time values.
- Avoid rendering untrusted strings as raw HTML.
- Review external scripts and CDN resources before adding them.
- Keep dependencies updated through reviewed pull requests.
- Use HTTPS for production hosting.

## Future services
If a server or commerce layer is introduced:
- Enforce authentication and authorization on the server.
- Validate all input at trust boundaries.
- Recalculate price, discounts, stock, and totals on the server.
- Rate-limit public endpoints.
- Verify signed webhooks.
- Restrict database privileges.
- Keep sensitive values in a secret manager.
- Log operational events without exposing personal data or credentials.
- Define data retention, deletion, and backup procedures.

## Review
Use docs/security/security-review-checklist.md for changes that affect dependencies, data, deployment, or integrations. Report vulnerabilities privately using SECURITY.md.
