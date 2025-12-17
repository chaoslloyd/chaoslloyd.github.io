# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static website for Ross Whitaker, a guitarist/pedal steel guitarist/instructor based in Lexington, KY. Hosted on GitHub Pages at rosswhitaker.net.

## Development

No build process required. To develop locally:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Changes pushed to master automatically deploy via GitHub Pages.

## Architecture

### Pages
- `index.html` - Bio/homepage with random rotating hero image
- `shows.html` - Upcoming shows (Google Calendar embed + MailChimp signup)
- `instruction.html` - Guitar lessons info with Google Maps embed
- `contact.html` - Contact information
- `404.html` - Error page

### Assets
- `css/master.css` - Single stylesheet using CSS Grid, Flexbox, and custom properties
- `js/random-image.js` - Vanilla JS for random hero image rotation (no jQuery)
- `images/` - Photo assets

### CSS Architecture
Uses CSS custom properties for theming:
- `--color-bg`, `--color-surface`, `--color-accent` - Dark theme colors
- `--font-sans`, `--font-serif` - System font stacks
- `--space-*` - Spacing scale
- `--max-width: 1000px` - Content width

Responsive breakpoints:
- Mobile: < 640px (single column)
- Tablet: 640-768px
- Desktop: > 768px (two-column layout)

### Layout Pattern
All pages follow the same structure:
```
<body>
  <header class="site-header">     - Waveform background, name
  <nav>                            - Horizontal navigation with aria-current
  <main class="site-wrapper">      - CSS Grid two-column layout
    <aside class="sidebar">        - Text content
    <div class="main-content">     - Images/embeds
  <footer class="site-footer">     - Copyright
</body>
```

### External Dependencies
- Google Calendar embed (shows.html)
- Google Maps embed (instruction.html)
- MailChimp form (shows.html)

No JavaScript frameworks or CSS libraries.

## Domain

Custom domain configured via `CNAME` file pointing to rosswhitaker.net.
