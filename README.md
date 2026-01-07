# Paragrafic Landing Page

SEO-optimized landing page for Paragrafic - AI-powered legal document generation platform for Polish law firms.

## Technology Stack

- **HTML5**: Semantic markup for optimal SEO
- **CSS3**: Modern styling with CSS variables and responsive design
- **Vanilla JavaScript**: Lightweight interactivity without framework overhead
- **JSON**: i18n translation system

## Features

- ✅ SEO optimized (meta tags, structured data, semantic HTML)
- ✅ Fully responsive design
- ✅ Internationalization support (Polish & English)
- ✅ Fast load times (< 3s)
- ✅ Smooth animations and transitions
- ✅ Glassmorphism effects
- ✅ Accessibility compliant

## File Structure

```
landing/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   ├── main.js         # Main JavaScript
│   └── i18n.js         # Internationalization logic
├── i18n/
│   ├── pl.json         # Polish translations
│   └── en.json         # English translations
├── assets/
│   └── images/         # Images and icons
└── README.md           # This file
```

## Development

### Local Development

Simply open `index.html` in a web browser or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

### Adding Translations

1. Edit `i18n/pl.json` for Polish content
2. Edit `i18n/en.json` for English content
3. Use the same key structure in both files
4. Reference keys in HTML using `data-i18n` attribute

Example:
```html
<h1 data-i18n="hero.title">Default text</h1>
```

### Language Switching

Users can switch languages via:
- Language selector in the header
- URL parameter: `?lang=en`
- Preference is saved in localStorage

## SEO Optimization

### Meta Tags
- Title, description, keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URL
- Language alternatives

### Technical SEO
- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for images
- Schema.org structured data
- Mobile-responsive
- Fast load time

### Performance
- Minimal CSS and JS
- No external dependencies
- Optimized images (use WebP when possible)
- No render-blocking resources

## Deployment

### Production Checklist

- [ ] Optimize and compress images
- [ ] Minify CSS and JavaScript
- [ ] Update canonical URLs to production domain
- [ ] Update Open Graph image URLs
- [ ] Test on multiple devices and browsers
- [ ] Run Lighthouse audit (target: 90+ SEO score)
- [ ] Validate structured data
- [ ] Test language switching
- [ ] Verify all links work

### Hosting

This is a static site and can be hosted on:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2026 Paragrafic. All rights reserved.
