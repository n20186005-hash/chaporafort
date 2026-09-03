import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 正式域名固定为 chaporafort.com；PUBLIC_SITE_URL 可在 CI/部署环境覆盖（例如临时预览域名）。
const configuredSite = (process.env.PUBLIC_SITE_URL ?? '').trim();
const site = configuredSite || 'https://chaporafort.com';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
