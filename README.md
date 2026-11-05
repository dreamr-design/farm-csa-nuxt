<p align="center"><!-- theme:hero --><img src=".github/assets/hero.gif" width="100%" alt="Scrolling through the Bramblecut Farm home page"><!-- /theme:hero --></p>

<!-- theme:title --><h1 align="center">Bramblecut</h1><!-- /theme:title -->

<p align="center"><!-- theme:tagline -->A small organic farm: CSA farm-share boxes, farm stand, farm dinners<!-- /theme:tagline --></p>

<!-- theme:badges -->
<p align="center">
  <a href="https://dreamr-design.github.io/dreamr-web/themes/farm-csa/preview"><img src="https://img.shields.io/badge/demo-live-862612" alt="demo: live"></a>
  <a href="https://github.com/dreamr-design/farm-csa-nuxt"><img src="https://img.shields.io/badge/format-Nuxt-862612" alt="format: Nuxt"></a>
  <img src="https://img.shields.io/badge/version-1.0.0-862612" alt="version: 1.0.0">
  <a href="LICENSE.md"><img src="https://img.shields.io/badge/license-free-862612" alt="license: free"></a>
  <a href="https://dreamr-design.github.io/dreamr-web"><img src="https://img.shields.io/badge/more%20themes-Dreamr-862612" alt="more themes: Dreamr"></a>
</p>
<!-- /theme:badges -->

Bramblecut Farm, a fictional five-person certified organic vegetable farm on 22 acres of Driftless hillside near Viroqua, Wisconsin. It sells a twenty-week CSA (the Stand Card, Half, Full and Kitchen shares, with pay-in-4 and sliding-scale options), runs an honor-box farm stand, and hosts four farm dinners a year at one long table in the squash field. The whole site is dressed as seed packets and produce crates, printed in two inks on kraft.

Live demo: https://dreamr-design.github.io/dreamr-web/themes/farm-csa/preview

Source repo: https://github.com/dreamr-design/farm-csa-nuxt

<!-- theme:callout -->

> [!NOTE]
> This theme is free to use on any site, personal or commercial. The "Free theme by Dreamr" credit in the footer stays; to remove it, get a [credit-removal license](https://dreamr-design.github.io/dreamr-web/license).

<!-- /theme:callout -->

## Quick start

Install the dependencies, then start a live-reloading preview at http://localhost:3000:

```
npm install
npm run dev
```

Write the finished static site to `.output/public/`, linked as `dist/`:

```
npm run generate
```

The site title, description and every service setting live in `app/app.config.ts`. Each page is `app/pages/<route>.vue`; the shared header and footer are `app/layouts/default.vue`, and the head every page shares (the fonts, `assets/css/styles.css`, `assets/js/main.js`) is `app.head` in `nuxt.config.ts`. Styles, scripts and images sit in `public/assets/`. Links are plain `<a href>`, so every page loads in full and `main.js` runs on each one; text that shows a literal `{{` carries `v-pre`, so Vue prints it as written. Blog posts are `posts/*.html`, each opening with its front matter; `app/utils/posts.js` reads them newest first, `app/components/BlogList.vue` lists them 6 to a page at `/blog/` and `/blog/page/<n>/`, and `app/pages/blog/[slug].vue` shows one.

To deploy, connect the repo to Netlify: the included `netlify.toml` runs that same build and publishes `dist`. Any static host works the same way.

## Contents

- [Pages](#pages)
- [Settings](#settings)
- [Built-in services](#built-in-services)
- [Design DNA](#design-dna)
- [Fonts](#fonts)
- [License](#license)

## Pages

- `/` Bramblecut Farm
- `/pricing/` Shares and pricing
- `/about/` About the farm
- `/contact/` Write to the farm
- `/blog/` Farm notes

## Settings

- `chatsy_agent_id`: Chatsy agent id. Create a free AI chat agent at https://chatsy.ai, paste its id here, and a chat button appears on every page. Leave empty for no chat button.
- `slapform_form_id`: Slapform form id. Create a free form at https://slapform.com and paste its id here; every form on the site then delivers to your inbox with spam protection.

## Built-in services

### AI chat with Chatsy

Set `chatsy_agent_id` and a chat button in the theme's accent color appears on every page. Create an agent free at [chatsy.ai](https://chatsy.ai): it answers visitors from your own knowledge base.

### Working forms with Slapform

Set `slapform_form_id` and every form on the site (index, pricing, contact) delivers to your inbox. Create a form free at [slapform.com](https://slapform.com); no server needed. A form's `data-slapform-success` attribute sets its thank-you text.

## Design DNA

[DESIGN.md](DESIGN.md) describes the palette, type, spacing and signature moves so a designer or an AI assistant can extend the site in the same voice.

## Fonts

Google Fonts: Alfa Slab One, Courier Prime, Libre Franklin, Stardos Stencil.

## License

The `free` license: use it on any site and keep the footer credit. See `LICENSE.md`.

---

A free theme by [Dreamr](https://dreamr-design.github.io/dreamr-web). More themes: https://dreamr-design.github.io/dreamr-web
