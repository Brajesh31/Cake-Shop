# Cake Shop

Cake Shop is a React and Vite front-end project for a bakery storefront concept. It presents cake and bakery imagery across a home page, cakes page, about page, and blog page. It is a UI demonstration: this repository does not contain commerce services or a production ordering flow.

The existing demo link in the original project points to a Vercel deployment. Availability, ownership, and deployed revision can change independently of this repository.

## What is included

- React 19 components rendered by Vite.
- Client-side routes for Home, Cakes, About, and Blog using React Router.
- Shared header, footer, hero, image, blog, and page-section components.
- A Swiper carousel with local product imagery.
- Local images under public/img.
- Bootstrap, Font Awesome, Google Fonts, and Swiper styles loaded from CDNs or package imports.

The current interface includes design placeholders. The order button, contact navigation item, social icons, video play control, blog pagination, and add-to-cart overlay do not implement purchasing, navigation, playback, or other backend actions. There is no cart, inventory, payment integration, customer account, contact submission, or order storage.

## Technology

- Node.js and npm
- Vite 6
- React and React DOM 19
- React Router DOM 7
- Swiper 11
- ESLint 9

The exact dependency ranges and resolved versions are recorded in package.json and package-lock.json.

## Run locally

Requirements: a supported Node.js release compatible with the Vite version in the lockfile, and npm.

    git clone https://github.com/Brajesh31/Cake-Shop.git
    cd Cake-Shop
    npm ci
    npm run dev

Open the local URL printed by Vite, usually http://localhost:5173. The development server provides client-side route fallback.

## Available commands

- npm run dev starts Vite's local development server.
- npm run build creates the static production bundle in dist.
- npm run preview serves the built bundle locally for a production-style review.
- npm run lint runs ESLint over the repository.

There is no test script or automated test suite in the package manifest.

## Pages

| Path | Page content |
| --- | --- |
| / | Hero, introductory section, cake image carousel, visual media panel, blog cards, and Instagram-style image strip |
| /cakes | Hero, two instances of the image carousel, and image strip |
| /about | Hero, introductory content, visual media panel, blog cards, and image strip |
| /blog | Hero, five repeated blog cards, and placeholder pagination |

The shared layout wraps these routes in the same header and footer. Unknown paths do not currently have a dedicated not-found page.

## Project structure

    index.html                  Vite HTML entry point and external CDN assets
    src/main.jsx                React root and global CSS import
    src/App.jsx                 Browser router and route table
    src/App.css                 Page and component styles
    src/index.css               Global CSS
    src/Views/Layout/           Shared header, footer, and layout
    src/Views/Pages/            Route pages and home-page sections
    src/Views/Pages/Components/ Reusable button, blog, and image components
    public/img/                 Images served from the site root
    docs/                       Architecture, setup, operations, and support guides

See the [architecture guide](docs/architecture.md), [installation guide](docs/installation.md), and [development guide](docs/development.md) for more detail.

## Current limitations to review

- The visible ORDER NOW control is a styled element rather than a working link or form.
- The CONTACT navigation item points to a placeholder fragment. Social icons and several more-content controls are not actionable links.
- The carousel's “Add to cart” text is a CSS hover overlay, not a cart action.
- The play control does not open or play a video. Blog pagination links point to placeholder fragments.
- The home/about copy, testimonials or business details, and image rights should be checked by the project owner before real business use.
- Some components use class or a misspelled classNameName attribute rather than React's className. Review the browser console and styling when changing these sections.
- Stylesheet image URLs refer to paths under ../public/img. Vite serves public assets from the site root; verify these references in the production build and use root-based public URLs where needed.
- Bootstrap, Font Awesome, and Google Fonts depend on third-party CDN availability. Review the exact provider terms, versions, integrity metadata, and privacy implications before production use.
- BrowserRouter deployments need the host configured to serve index.html for application routes such as /cakes and /about.

See [troubleshooting](docs/troubleshooting.md) for known issues and [deployment](docs/deployment.md) for hosting notes.

## Contributing and security

Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing changes. Report security issues privately using the process in [SECURITY.md](SECURITY.md); do not post sensitive details in a public issue.

## License

The project source is offered under the MIT License. See [LICENSE](LICENSE). Third-party libraries and media may have separate terms; verify those before redistribution or commercial use.

Last updated: 2026-10-26 17:12 UTC
