import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Canonical production origin; existing www requests are redirected by the Worker.
const site = 'https://chaporafort.com';

export default defineConfig({
  site,
  output: 'static',
  i18n: {
    defaultLocale: 'kok',
    locales: ['kok', 'en'],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    sitemap({
      filter: page => !/\/404(?:\/|\.html)?$/.test(new URL(page).pathname),
      i18n: {
        defaultLocale: 'kok',
        locales: { kok: 'kok-Deva', en: 'en' }
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
