# 💾 Backup and recovery

## Current scope
The application has no database or user-generated records. Recovery is primarily restoration of source code from Git and restoration of a previously built static artifact from the deployment provider.

## What to retain
- Git history and protected repository access.
- Release commit identifiers.
- Build artifacts for the last known good deployment.
- Hosting configuration and rewrite rules, stored without secrets.
- Approved source media and licensing records.

## Recovery procedure
1. Identify the affected deployment and last known good commit.
2. Retrieve the corresponding static artifact or rebuild from the locked dependency set.
3. Verify the artifact and route fallback configuration.
4. Deploy the known good artifact.
5. Open all routes directly and refresh them.
6. Verify assets, links, and console output.
7. Record the recovery and root cause.

## Future persistent services
If a backend or database is introduced, document backup frequency, encryption, retention, recovery point objective, recovery time objective, restore permissions, and recurring restore tests. A backup is not considered reliable until restoration has been tested.
