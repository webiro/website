// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://webiro.ir',
  vite: {
    plugins: [tailwindcss()],
  },
});