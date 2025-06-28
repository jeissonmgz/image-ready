// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  i18n: {
      locales: ["es", "en"],
      defaultLocale: "en",
      routing: {
          prefixDefaultLocale: false
      }
	},

  vite: {
      plugins: [tailwindcss()],
	},
  site: 'https://image.isreadyfor.work',
  integrations: [sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
    })],
});