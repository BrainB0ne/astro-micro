import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  site: "https://www.brainbytez.eu",
  integrations: [sitemap(), mdx(), pagefind(), favicons()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
