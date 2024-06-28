import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-teechart.vercel.app/",
  integrations: [tailwind(), db()],
  functions: {
    // Rutas de las funciones de la API
    api: './src/pages/api'
  },
  output: 'server' // o 'hybrid'
  ,
  adapter: vercel()
});