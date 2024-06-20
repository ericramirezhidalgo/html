import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";

export default defineConfig({
  integrations: [tailwind(), db()],
  functions: {
    // Rutas de las funciones de la API
    api: './src/pages/api',
  },
  output: 'server', // o 'hybrid'
});
