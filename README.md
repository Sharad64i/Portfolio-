# Sharad Krishna Singh — Portfolio

React + Vite + plain CSS.
## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```


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
