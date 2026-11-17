# 🏗️ Architecture diagrams

All diagrams in this guide describe the current code unless explicitly marked as future-state.

## 1. Current runtime context

```mermaid
flowchart LR
  Visitor[Visitor browser] --> HTML[index.html]
  HTML --> React[src/main.jsx]
  React --> Router[src/App.jsx and React Router]
  Router --> Layout[Shared Layout]
  Layout --> Pages[Home, Cakes, About, Blog]
  Pages --> UI[Reusable components]
  UI --> Assets[Local public/img assets]
  UI --> Swiper[Swiper carousel]
  HTML -. external requests .-> CDN[Fonts, Bootstrap, Font Awesome]
```

## 2. Current route and component flow

```mermaid
flowchart TD
  App[src/App.jsx] --> Router[BrowserRouter]
  Router --> Layout[Layout]
  Layout --> Header[Header]
  Layout --> Main[main]
  Layout --> Footer[Footer]
  Main --> Home[/ route: Home]
  Main --> Cakes[/cakes route: Cakes]
  Main --> About[/about route: About]
  Main --> Blog[/blog route: Blog]
  Home --> Sections[Section components]
  Cakes --> Carousel[Section3 carousel]
  About --> Sections
  Blog --> BlogCards[Blog card components]
```

## 3. Current deployment flow

```mermaid
flowchart TD
  Dev[Developer changes source] --> PR[Pull request]
  PR --> Review[Code review and QA]
  Review --> Build[npm ci and npm run build]
  Build --> Artifact[dist static assets]
  Artifact --> Host[Static hosting]
  Host --> Browser[Visitor browser]
  Host -. fallback rewrite .-> Index[index.html for app routes]
```

## 4. Future commerce architecture, not implemented

```mermaid
flowchart LR
  Browser[React storefront] --> API[Server-side API]
  API --> Auth[Authentication and authorization]
  API --> Catalog[Product catalogue]
  API --> Orders[Order service]
  API --> Payments[Payment provider]
  API --> DB[(Database)]
  Payments --> Webhook[Verified payment webhook]
  Webhook --> Orders
```

## Diagram maintenance

Update the current-state diagrams whenever route structure or application boundaries change. Keep future-state diagrams clearly labeled until code exists.
