# Installation

## Requirements

- Git
- Node.js compatible with the Vite version declared in package.json
- npm, normally included with Node.js

No database, external API credential, or environment variable is required by the current application.

## Clone and install

    git clone https://github.com/Brajesh31/Cake-Shop.git
    cd Cake-Shop
    npm ci

npm ci installs the dependency versions recorded in package-lock.json and expects that lockfile to remain in sync with package.json. If you intentionally change dependencies, use npm to update the lockfile and commit both files.

## Start the development server

    npm run dev

Vite prints a local URL, typically http://localhost:5173. Open that URL in a browser. The development server supports the app's client-side routes while it is running.

## Other local commands

    npm run lint
    npm run build
    npm run preview

The lint command runs ESLint. The build command writes static output to dist. Preview serves the most recent build locally; run the build first. There is no test script configured.

## Common setup problems

- If npm ci fails, confirm Node and npm are installed and that package.json and package-lock.json have not been edited inconsistently.
- If images or backgrounds are missing, verify the exact filename and capitalization under public/img and inspect the browser Network panel.
- Bootstrap, Font Awesome, Google Fonts, and the Swiper stylesheet are loaded externally; offline development may omit their styles or icons.
- Use the Vite URL rather than opening index.html directly. Browser modules and client-side navigation are designed to run through the development server.
- On a deployed app, refreshing a nested path requires host fallback to index.html. See deployment.md.
