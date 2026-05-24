# Landing Agent Guide

## Scope

`landing` is the public marketing site for Paragrafic/Lexai. It is a static HTML, CSS, and vanilla JavaScript site with Polish and English JSON translations. It is separate from the authenticated `client-front` product application.

## Current Layout

| Path | Responsibility |
| --- | --- |
| `index.html`, `about.html`, `plans.html`, `contact.html` | Public pages and SEO markup |
| `css/styles.css` | Shared responsive visual styling |
| `js/main.js` | Page interaction behavior |
| `js/i18n.js` and `i18n/*.json` | Language switching and translated content |
| `assets/images` | Static marketing images |

## Rules

- Keep the site static and dependency-light unless the task explicitly requires a tooling change.
- Preserve semantic HTML, heading hierarchy, keyboard usability, visible focus behavior, alt text, form labeling, and responsive behavior.
- Keep Polish and English content aligned when editing user-facing translated copy. Update fallback HTML content and translation keys consistently.
- Marketing claims, plan descriptions, privacy/legal copy, pricing, and contact information must not be invented. Confirm product-backed facts before publishing them.
- Maintain SEO contracts when page content changes: titles, descriptions, canonical/hreflang links where present, Open Graph content, structured data, and indexable text.
- Optimize added imagery and avoid needless scripts, remote dependencies, tracking, or client-side work that harms performance or privacy.
- Do not place application secrets, authenticated functionality, or sensitive customer data in this public static repository.

## Verification

- Open affected pages in a browser at common desktop and mobile widths.
- Verify both language modes, links, forms/interactions, images, keyboard navigation, and no browser-console errors.
- For material landing changes, check Lighthouse accessibility, performance, best-practices, and SEO results.
