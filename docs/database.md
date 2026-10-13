# Database

## Current data model

Cake Shop has no database and does not persist application data. Product carousel images, blog content, footer details, and page text are supplied directly by JSX components. The browser does not submit orders, contact messages, or account information.

Browser cache and the hosting provider's static files are not an application database. The repository has no schema, migrations, database connection settings, or data backup procedure.

## Visitor information

No application code in this repository collects or stores visitor form submissions, orders, payment details, or account records. Third-party CDNs and the deployment host may receive ordinary network request metadata under their own policies. The page has no declared analytics integration.

## If persistent features are introduced

Before adding storage, define the data requirements, ownership, purpose, retention, deletion, backup, and recovery expectations. Choose a backend architecture and record its schema and migrations here. Apply least-privilege access and validate authorization on the server for every record operation.

Never place a database credential or privileged token in React code or in a Vite variable that is shipped to the browser. Payment card handling should be delegated to an appropriately selected payment provider; the site should not collect raw card credentials. Coordinate database, API, privacy, security, and deployment documentation when introducing persistence.
