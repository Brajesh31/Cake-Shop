# 🧾 Data handling and privacy

## Current data collection

The current repository has no application data service, account system, form submission endpoint, analytics client, or persistent cart. The visible UI is composed from source code and local image assets.

External fonts and stylesheets are requested from third-party CDNs. Those providers may receive normal request metadata such as IP address and user-agent. Review the provider privacy terms and local legal obligations before production deployment.

## If data collection is added

Document each data category before implementation:

| Category | Example | Required documentation |
| --- | --- | --- |
| Contact details | Name, email, phone | Purpose, lawful basis, retention, access |
| Delivery details | Address, delivery notes | Fulfilment purpose, restricted access, deletion |
| Order data | Items, quantities, totals | Transaction record, correction and retention policy |
| Payment state | Provider transaction reference | Provider ownership, verification, reconciliation |
| Analytics | Page interaction events | Consent requirements and retention |

## Handling rules

- Collect only information needed for a defined purpose.
- Show a clear privacy notice before collection.
- Do not place private details in URLs, logs, analytics events, or public repositories.
- Restrict access to customer records.
- Encrypt traffic and protect stored data.
- Define retention and deletion behavior.
- Provide a way to handle access or correction requests where required.
- Never store full payment card numbers or security codes in the app database.

This is engineering guidance, not legal advice. Obtain appropriate legal review before collecting customer data.
