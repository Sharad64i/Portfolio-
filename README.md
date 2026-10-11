# Sharad Krishna Singh — Portfolio

React + Vite + plain CSS. No backend.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```
Requires Node.js 18 or newer.

## Customize
- **Content** (text, links, projects, dates): `src/data/content.js`
- **Colors** (dark and light themes): `src/styles/tokens.css`
- **Profile image**: replace `public/images/profile.png` (or change the `image` path in `content.js`). A square image of at least 600x600 px looks sharpest.
- **Resume**: replace `public/resume.pdf` (keep the same file name).

## Structure
```
public/            resume.pdf, favicon.svg, images/profile.png
src/
  components/      Navbar, Hero, Skills, Projects, Experience,
                   Education, Certifications, Contact, Footer, ...
  data/content.js  all site content
  hooks/useTheme.js  dark/light theme (saved in localStorage)
  styles/          tokens.css, base.css, components.css
```

## Deploy
`npm run build`, then upload `/dist` to Netlify, Vercel or GitHub Pages.
For GitHub Pages under a sub-path, set `base` in `vite.config.js`.
