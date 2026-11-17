# 🚶 Visitor journeys

## Journey A: Discover the bakery

```mermaid
flowchart TD
  A[Visitor opens site] --> B[Home page]
  B --> C[Reads bakery introduction]
  C --> D[Views cake carousel]
  D --> E[Explores About or Blog]
  E --> F[Returns to Home or leaves]
```

**Current behavior:** the visitor can navigate among the four configured routes and view local imagery. No analytics or visitor profile is implemented.

## Journey B: Explore cakes

```mermaid
flowchart TD
  A[Visitor selects Cakes] --> B[Cakes route]
  B --> C[Views image carousel]
  C --> D{Wants to order?}
  D -->|Selects visible order control| E[No ordering action is connected]
  D -->|Continues browsing| F[Views image strip]
```

**Current limitation:** the visible ordering language must not be interpreted as an order flow. A real order journey needs product data, availability, pricing, cart behavior, customer details, delivery rules, and secure server-side order creation.

## Journey C: Read the blog

```mermaid
flowchart TD
  A[Visitor opens Blog] --> B[Static blog cards]
  B --> C[Reads the visible excerpts]
  C --> D[Selects pagination]
  D --> E[Placeholder anchor, no page change]
```

## Future ordering journey, not implemented

```mermaid
flowchart TD
  A[Browse catalogue] --> B[Open product detail]
  B --> C[Choose variant and quantity]
  C --> D[Validate availability]
  D --> E[Add to cart]
  E --> F[Review cart]
  F --> G[Enter delivery details]
  G --> H[Server validates order and price]
  H --> I[Payment provider checkout]
  I --> J{Payment confirmed?}
  J -->|Yes| K[Persist order and confirmation]
  J -->|No| L[Show safe failure and retry path]
```

This diagram is a planning artifact only. It does not describe existing routes or integrations.
