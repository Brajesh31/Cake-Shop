# ⚙️ Environment and configuration

## Current configuration
The current React + Vite application does not read environment variables for runtime behavior. The root .env.example explains that no values are currently required.

## Vite variable warning
Variables prefixed with VITE_ are exposed to client-side code at build time. They are not suitable for passwords, private API keys, database credentials, signing secrets, or payment-provider secret keys.

## Adding configuration
When a variable is introduced:
1. Document its purpose and whether it is public or secret.
2. Add a safe placeholder to .env.example.
3. Validate required values during the appropriate build or server startup.
4. Keep secrets in the hosting provider's secret manager.
5. Never commit .env files containing real values.
6. Document local setup and deployment configuration.
7. Avoid exposing unnecessary values to browser code.

## Configuration inventory

| Variable | Required today | Visibility |
| --- | --- | --- |
| None | No | No application environment variables currently used |

Update this table whenever the application starts reading configuration.
