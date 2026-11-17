# 🌐 Browser and device support

## Support policy
The project does not currently publish a formal browser support matrix. Before declaring production support, choose and document the minimum supported versions based on the target audience and hosting requirements.

## Minimum manual coverage
Check the current stable releases of:
- Chrome and Chromium-based browsers
- Firefox
- Safari on macOS and iOS
- Microsoft Edge

Also check a representative Android mobile browser.

## Device and viewport coverage
- 320 CSS px narrow mobile
- 375–390 CSS px common mobile
- 430 CSS px large mobile
- 768 CSS px tablet portrait
- 1024 CSS px tablet landscape
- 1280 CSS px desktop
- 1440 CSS px wide desktop

## Verify
- Navigation and menu behavior
- Carousel controls and touch gestures
- Text wrapping and zoom
- Image loading and cropping
- Focus visibility and keyboard operation
- External font/icon fallback
- Deep-link route refresh
- Reduced-motion preference

Record browser versions and any unsupported behavior in the release notes. Do not infer browser support from a successful build alone.
