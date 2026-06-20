// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/site.config.ts';

// a url do site vem do src/site.config.ts (fonte unica).
// integracoes: mdx pros posts, sitemap automatico. highlight shiki one-dark-pro.
export default defineConfig({
  site: SITE.url,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false,
    },
  },
});
