import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { autoNewTabExternalLinks } from "./src/autoNewTabExternalLinks";
import astroIcon from "astro-icon";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://dimognetehem.vercel.app",
  output: "server",
  adapter: vercel(),
  
  integrations: [
    mdx(),
    //sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    partytown(),
    astroIcon({
      include: {
        mdi: ["*"],
        ri: ["*"],
        "simple-icons": ["*"],
      },
    }),
    react(),
  ],

  markdown: {
    rehypePlugins: [[autoNewTabExternalLinks, {
      domain: "dimognetehem.vercel.app",
    }]],
  },

  vite: {
    optimizeDeps: {
      exclude: ["fsevents"],
    },
    define: {
      __vite__injectQuery: false,
    },
  }
});