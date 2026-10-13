# Security Policy

## Supported version

Security fixes are considered for the current code on the main branch. Older deployments may not include current fixes. This project is a browser-side demonstration and does not currently implement user accounts, order processing, payment handling, or a server-side API.

## Report a vulnerability privately

Please do not report exploitable details in a public issue or pull request. Use GitHub's private vulnerability reporting for this repository if it is enabled:

https://github.com/Brajesh31/Cake-Shop/security/advisories/new

If private reporting is unavailable, contact the maintainer, Brajesh Kumar (@brajesh31), through the contact options on https://github.com/brajesh31. Include the affected commit or route, impact, reproduction steps, and a safe proof of concept. Do not include real customer information or secrets.

## What to report

Examples include a vulnerable dependency used by the project, unsafe handling of visitor input, a compromised deployment path, or a security issue introduced by a code change. Also report an unintended exposure of credentials or private data.

## Response

The maintainer will acknowledge and assess reports as reasonably soon as possible, coordinate on a fix and disclosure where practical, and credit reporters if they want credit. No fixed response or patch deadline is promised.

## Project-specific notes

The current application is static client-side code. Anything bundled for the browser is public and must not contain a secret. The order, contact, social, video, and pagination elements are placeholders rather than secure transaction flows. A future backend or commerce integration must be reviewed for authentication, authorization, input validation, abuse controls, payment-provider requirements, and data retention before collecting real user data.
