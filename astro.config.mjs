import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
import favicons from "astro-favicons";
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: "https://www.brainbytez.eu",
  adapter: cloudflare({
     imageService: 'compile'
  }),
  integrations: [sitemap(), mdx(), pagefind(), favicons()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['node:path/posix'],
    },
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
