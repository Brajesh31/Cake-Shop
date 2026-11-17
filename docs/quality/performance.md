# ⚡ Performance and web vitals

## Current architecture
The site is a static Vite application with local images and several third-party CDN resources. No measured performance baseline is currently committed.

## Measurement plan
Capture representative measurements for Home, Cakes, About, and Blog on mobile and desktop:
- Largest Contentful Paint (LCP)
- Interaction to Next Paint (INP)
- Cumulative Layout Shift (CLS)
- Total page weight
- JavaScript and CSS transfer size
- Image transfer size and format
- Number of external requests

Use browser DevTools Lighthouse or an equivalent repeatable tool. Record the tested commit and environment.

## Improvement opportunities
- Resize and compress large photographs.
- Prefer modern image formats where browser support and workflow allow.
- Set width and height or aspect ratio to reduce layout shift.
- Lazy-load below-the-fold images.
- Avoid loading unused carousel or icon resources.
- Review whether external CDN dependencies can be reduced or self-hosted.
- Keep initial JavaScript work proportionate to the page's actual behavior.
- Avoid autoplay motion that harms usability or accessibility.

## Reporting template
| Route | Device profile | LCP | INP | CLS | Transfer size | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| / | | Not measured | Not measured | Not measured | | |
| /cakes | | Not measured | Not measured | Not measured | | |
| /about | | Not measured | Not measured | Not measured | | |
| /blog | | Not measured | Not measured | Not measured | | |

Do not publish performance claims until they are measured against a reproducible build.
