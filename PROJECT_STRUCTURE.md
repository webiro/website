# Webiro Static Redesign - Project Structure

## Tech Stack
- Astro 4+ + TypeScript
- Tailwind CSS v4
- Three.js (ready)
- AOS.js + Animate.css
- Fully RTL Persian

## Folder Structure

```
webiro-static/
├── public/
│   ├── fonts/               # IRANSansX + Doran font files
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ServiceCard.astro
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── web-design/
│   │   │   └── index.astro
│   │   ├── programming/
│   │   │   └── index.astro
│   │   ├── search-engine-optimization/
│   │   │   └── index.astro
│   │   ├── portfolio/
│   │   │   └── index.astro
│   │   ├── blog/
│   │   │   └── index.astro
│   │   ├── request/
│   │   │   └── index.astro
│   │   └── contact/
│   │       └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── lib/
├── astro.config.mjs
├── package.json
└── README.md
```

## Color Palette (exact match)
- `--bg`: #0f0e17
- `--accent`: #ffc300
- `--primary`: #4a5bfc
- etc.

## Next Steps
1. Add Persian fonts
2. Build reusable components
3. Implement full menu structure with dropdowns
4. Add Three.js hero animation
5. Create content collections for portfolio & blog
