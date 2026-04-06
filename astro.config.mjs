import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  site: "https://www.brainbytez.eu",
  integrations: [
    sitemap(),
    mdx(),
    pagefind(),
    favicons({
      name: "BrainByteZ",
      short_name: "0xBB",
      manifest: {},
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // temporarily resolve the UNUSED_EXTERNAL_IMPORT warning for Astro 6.
    // https://github.com/withastro/astro/issues/15957#issuecomment-4189129539
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (
            warning.code === "UNUSED_EXTERNAL_IMPORT" &&
            warning.message.includes("@astrojs/internal-helpers")
          ) {
            return;
          }
          warn(warning);
        },
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
