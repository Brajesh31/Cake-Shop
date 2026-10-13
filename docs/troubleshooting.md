# Troubleshooting

## The development server will not start

Confirm that Node.js and npm are installed and that package-lock.json is present. Run npm ci from the repository root, then npm run dev. If installation reports a lockfile mismatch, review dependency changes rather than deleting the lockfile without a reason.

## The production build cannot find a background image

The stylesheet in src/App.css references files under ../public/img. Vite serves public-directory assets from the site URL root. Inspect the resulting CSS and Network panel; update source references to the appropriate root URL, for example /img/cakeimage.jpg, if the generated request path is incorrect.

## A public image is missing

Confirm the file exists in public/img and that the URL matches the capitalization exactly. Files in public are served from the root, so a file at public/img/logo.png is requested at /img/logo.png. Check the Network panel for 404 responses and confirm the deployed base path matches the configured Vite base.

## Refreshing /cakes or /blog returns 404

The app uses BrowserRouter. Configure the host to serve index.html for application routes that are not existing static files. Test opening and refreshing each route directly after deployment. See deployment.md.

## The page is unstyled or icons and fonts are missing

Bootstrap, Font Awesome, Google Fonts, and the Swiper stylesheet load from external CDNs. Check network access, content blockers, and the browser Network panel. The UI may not match its intended appearance when a CDN request is blocked.

## Header links or controls appear to do nothing

Some controls are currently presentation placeholders. CONTACT points to a fragment, ORDER NOW is not a working button or link, the video play control has no player, and blog pagination links point to #. The add-to-cart label is a CSS hover effect and does not change application state. These require implementation before they can perform an action.

## A section's CSS selector does not apply

Check the JSX attribute. React expects className; Section2 and Section4 use the misspelling classNameName, and other sections use class. Correct the attribute to className and inspect the browser console and responsive layout.

## Lint warnings or accessibility concerns appear

Run npm run lint and review output against the source line. Some current markup uses class instead of className, generic or empty image alt text, and controls without functional destinations. Make improvements in the affected component and manually check keyboard behavior.
