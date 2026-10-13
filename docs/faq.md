# Frequently asked questions

## What is this project?

A React and Vite front-end concept for a bakery storefront. It includes Home, Cakes, About, and Blog routes and local image assets.

## How do I run it?

Install Node.js and npm, then run npm ci and npm run dev from the repository root. Open the local address Vite prints. See installation.md.

## Does it accept cake orders or payments?

No. The page has no cart, checkout, order API, payment service, inventory, or fulfillment workflow. The displayed order and add-to-cart controls are visual placeholders.

## Does the contact link or form deliver a message?

No contact submission flow exists. The header contact item points to a placeholder fragment, and there is no configured form handler or API.

## Does the app use a database?

No. Content such as images and blog cards is hard-coded into React components. See database.md.

## Which routes are available?

The current route table contains /, /cakes, /about, and /blog. There is no dedicated not-found page. Static hosts must be configured to serve index.html for these client-side routes.

## Does it require environment variables?

No. The current application does not read environment variables. The .env.example file records this. Do not add secrets to browser-bundled Vite variables.

## Why are images, icons, or fonts sometimes missing?

Images are stored in public/img and served from the URL root. Check filename capitalization and the CSS background paths. Bootstrap, Font Awesome, fonts, and some Swiper styles load from CDNs and require network access. See troubleshooting.md.

## Is there a test suite?

The package manifest does not define a test script. The project provides npm run lint, npm run build, and npm run preview for code checks and local build review.

## Can I use the demo URL and sample content in production?

The live demo's availability and revision may change. Sample business details and media rights should be verified before real-world use. A static UI demonstration is not a production commerce system.

## How do I contribute or report a vulnerability?

Read ../CONTRIBUTING.md for change workflow. Report security issues using ../SECURITY.md and avoid posting sensitive details publicly.
