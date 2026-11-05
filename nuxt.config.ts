// The head every page shares: the theme's fonts, then assets/css/styles.css and assets/js/main.js from public/
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Courier+Prime:wght@400;700&family=Libre+Franklin:wght@400;600;700;800&family=Stardos+Stencil:wght@700&display=swap' },
        { rel: 'stylesheet', href: '/assets/css/styles.css' },
      ],
      script: [
        { src: '/assets/js/main.js', defer: true },
      ],
    },
  },
  // The theme's markup keeps its own spacing, so inline text reads as in the plain HTML release
  vue: { compilerOptions: { whitespace: 'preserve' } },
  // Every page from these routes, and every page they link, is written as an HTML file
  nitro: { prerender: { crawlLinks: true, routes: ['/', '/pricing/', '/about/', '/contact/', '/blog/'] } },
});
