import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import { SITE } from "./src/consts";
import sitemap from "@astrojs/sitemap";

const [repoOwner, repoName] = (process.env.GITHUB_REPOSITORY || "").split("/");
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserSite =
  !!repoOwner &&
  !!repoName &&
  repoName.toLowerCase() === `${repoOwner.toLowerCase()}.github.io`;

const deploySite = isGitHubActions && repoOwner
  ? `https://${repoOwner}.github.io`
  : SITE.URL;

const deployBase = isGitHubActions && repoName && !isUserSite
  ? `/${repoName}`
  : undefined;

// https://astro.build/config
export default defineConfig({
  site: deploySite,
  base: deployBase,
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
