// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  devToolbar: { 
    enabled: false,
  },

  site: "https://solitarju.uk",
  trailingSlash: "always",

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [{
    provider: fontProviders.local(),
    name: "Bitcount",
    cssVariable: "--font-bitcount",
    options: {
      variants: [
        {
          weight: "100 900",
          style: "normal",
          src: ["./src/assets/fonts/BitcountSingle-Regular.woff2", "./src/assets/fonts/BitcountSingle-Regular.woff"],
        },
      ],
    },
  }],

  integrations: [sitemap()],
  adapter: cloudflare()
});