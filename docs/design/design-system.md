# 🎨 Design system and UI conventions

## Current visual foundation
The current UI uses a bakery-themed visual style, local photography, custom CSS, Bootstrap utility/layout classes, Font Awesome icons, Google Fonts, and Swiper. The repository does not yet define a formal token library or component package.

## Design tokens to standardize
When refactoring styles, define reusable CSS custom properties for:
- Brand and accent colors
- Text, muted text, surface, and border colors
- Heading and body font families
- Font sizes and line heights
- Spacing scale
- Border radii
- Shadows
- Content widths and responsive breakpoints
- Focus ring and interaction states

Do not invent final brand values without confirming the intended visual identity. Extract existing values from the current stylesheet before consolidating them.

## Component conventions
- Use semantic elements for structure.
- Use anchors for navigation and buttons for actions.
- Give components one clear responsibility.
- Keep page-specific composition in route components.
- Reuse shared components when behavior and semantics are genuinely shared.
- Keep content data separate from presentation when it improves maintainability.
- Avoid adding a component abstraction for a single trivial markup fragment.

## Interaction states
Interactive components should define default, hover, focus-visible, active, disabled, loading, success, and error states as relevant. Hover must not be the only way to access functionality.

## Responsive behavior
Design mobile-first and verify the layout at narrow phone, wide phone, tablet, and desktop widths. Avoid fixed widths that cause horizontal scrolling.

## Change review
For visual changes, attach screenshots at representative widths and describe any intentional deviation from existing styling.
