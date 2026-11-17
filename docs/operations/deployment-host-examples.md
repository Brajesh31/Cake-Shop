# 🌍 Static hosting examples

The app uses BrowserRouter. Every host must serve the built files and return index.html for application paths that do not match an existing file. The exact configuration depends on the provider.

## Netlify
A typical SPA fallback can be expressed in a public/_redirects file:

```text
/* /index.html 200
```

Confirm the provider's current redirect precedence and ensure real static files are still served correctly.

## Vercel
A typical rewrite configuration uses a vercel.json file:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Review the provider's current routing rules before using this example in production.

## Nginx
A common static SPA location rule is:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

Configure the correct root directory and cache headers separately.

## Release validation
Test direct requests and refresh for /, /cakes, /about, and /blog. Also verify that missing image files return 404 rather than being silently rewritten to HTML.
