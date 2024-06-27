import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db()],
  functions: {
    // Rutas de las funciones de la API
    api: './src/pages/api'
  },
  output: 'static' // o 'hybrid'
  ,
  adapter: vercel()
});