# 📈 Monitoring and observability

## Current application
The current app is a static front end and has no application server, database, background worker, or built-in telemetry pipeline. Do not invent uptime, conversion, or error-rate metrics without a measurement source.

## Static deployment checks
A deployment owner can monitor:
- Availability of the published root page.
- HTTP status for /, /cakes, /about, and /blog.
- Failed static asset requests.
- Browser runtime errors reported through an approved monitoring service.
- Deployment commit and release time.
- CDN and font availability.

## Privacy
If client-side monitoring is introduced:
- Review what data is collected.
- Avoid capturing form values, credentials, or sensitive page content.
- Configure retention and access controls.
- Provide required notices and consent mechanisms.
- Review the provider's security and privacy terms.

## Incident evidence
Capture timestamps, affected URLs, browser versions, deployment identifiers, sanitized console errors, and the first known failing release. Never include private user information or secrets in public tickets.
