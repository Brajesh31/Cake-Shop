# Architecture

## Overview

Cake Shop is a browser-rendered single-page application. Vite serves the development entry point and bundles the React source for static hosting. The application has no server process, API, database, authentication, or application-managed persistent state.

Request and render flow:

index.html → src/main.jsx → src/App.jsx → React Router → shared Layout → Header, route page, Footer.

The Home page composes reusable sections. The carousel uses Swiper and local public images. Bootstrap, Font Awesome, Google Fonts, and the Swiper stylesheet are loaded through CDN links in the HTML entry point.

## Startup and routing

- index.html provides the root element and loads src/main.jsx as an ES module.
- src/main.jsx imports global CSS, creates the React root, and renders App inside StrictMode.
- src/App.jsx configures BrowserRouter and maps /, /cakes, /about, and /blog to their page components.
- The shared Layout renders Header, a main element containing the selected route, and Footer.
- There is no explicit not-found route.

BrowserRouter changes the visible path without a full page load. The deployment host must return index.html for application paths such as /cakes when a visitor refreshes or opens a deep link.

## Component map

| Area | Source | Responsibility |
| --- | --- | --- |
| Application | src/App.jsx | Router and page route table |
| Shared shell | src/Views/Layout/Layout.jsx | Header, main content, footer |
| Header and footer | src/Views/Layout/Header.jsx, Footer.jsx | Site branding, navigation, sample contact details |
| Home | src/Views/Pages/Home/Home.jsx | Composes hero, introduction, carousel, media panel, blog cards, image strip |
| Hero | src/Views/Pages/Home/Section1.jsx | Reusable page title area and visual order control |
| Carousel | src/Views/Pages/Home/Section3.jsx | Swiper carousel with six local images |
| Other home sections | src/Views/Pages/Home/Section2.jsx through Section7.jsx | Introductory copy, media panel, blog cards, and image strip |
| Other pages | src/Views/Pages/{Cakes,About,Blog}/ | Compose shared sections for each route |
| Reusable items | src/Views/Pages/Components/ | Button, blog, and image presentation components |

The Cakes route currently renders the same carousel twice. Blog entries and carousel images are repeated or hard-coded in JSX rather than loaded from a product or content service.

## Assets and external resources

Images are stored in public/img and referenced by root-based URLs such as /img/logo.png. Vite copies the public directory into the output root. src/App.css currently constructs background-image URLs with paths beginning ../public/img; verify these URLs against Vite's build output and prefer the public URL form when correcting them.

index.html loads Bootstrap 5.1.3 CSS and JavaScript, Font Awesome 6.6.0, Google Fonts, and Swiper's stylesheet from external CDNs. Section3 imports Swiper and its module CSS from the npm dependency. CDN resources require network access and are outside the repository's release artifact.

## State and service boundaries

The UI does not fetch application data, call an API, submit a form, or persist state. The visible order control is a styled element; the cart overlay is CSS text; the play button has no player; the contact navigation points to a placeholder; and blog pagination anchors do not select another page. These elements must not be described as working commerce or communication features.

If real ordering or contact handling is added, introduce a separately designed service boundary. Keep privileged credentials and authorization on the server, and document the API, data handling, and deployment requirements before collecting visitor information.
