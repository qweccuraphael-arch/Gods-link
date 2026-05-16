# Gods Link — Digital Agency Website

A production-ready multi-page website for Gods Link digital agency.

## Structure

```
gods-link-website/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services overview
├── portfolio.html      # Portfolio with filter
├── pricing.html        # Pricing plans + FAQ
├── contact.html        # Contact form
│
├── assets/
│   ├── css/
│   │   ├── colors.css      # CSS custom properties / design tokens
│   │   ├── style.css       # Main stylesheet (all components)
│   │   ├── animations.css  # Keyframes + reveal animations
│   │   └── responsive.css  # Media queries (tablet + mobile)
│   └── js/
│       ├── navbar.js          # Scroll effect + hamburger menu
│       ├── animation.js       # Intersection Observer + cursor glow
│       ├── main.js            # Counter animations + portfolio filter
│       └── form-validation.js # Contact form validation + submission
│
├── pages/services/
│   └── mobile-development.html  # (Template — replicate for others)
│
└── data/
    ├── services.json
    ├── portfolio.json
    └── testimonials.json
```

## Design System

| Token | Value |
|-------|-------|
| Background | `#080a0f` |
| Surface | `#161b26` |
| Accent (Gold) | `#c9a84c` |
| Font Display | Bebas Neue |
| Font Body | Cormorant Garamond |
| Font Mono | DM Mono |

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Scroll-triggered reveal animations
- ✅ Animated counter stats
- ✅ Portfolio category filter
- ✅ Contact form with validation
- ✅ Sticky navbar with scroll effect
- ✅ Mobile hamburger menu
- ✅ Cursor glow effect
- ✅ Ticker / marquee animation

## Adding Service Pages

Copy `pages/services/mobile-development.html` and update:
- Page title
- Hero headline + description
- Feature cards content
- Path references (`../../`) stay the same

## Deployment

Works on any static host:
- **Vercel**: `vercel deploy`
- **Netlify**: drag & drop the folder
- **GitHub Pages**: push to `gh-pages` branch

## Adding Images

Place images in:
- `assets/images/hero/` — Banner images
- `assets/images/portfolio/` — Project screenshots
- `assets/images/team/` — Team photos
- `assets/images/logo/` — Logo files

Replace CSS gradient backgrounds in `.port-img-*` and `.portfolio-item-img` classes with `background-image: url(...)`.
