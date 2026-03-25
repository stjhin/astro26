import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import { SITE } from "./src/consts";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: SITE.URL,
  vite: {
    root: process.cwd(),
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Roboto Mono",
      cssVariable: "--font-mono",
      provider: fontProviders.google(),
    },
    {
      name: "Noto Sans",
      cssVariable: "--font-sans",
      provider: fontProviders.google(),
    },
  ],
  integrations: [sitemap()],
});
