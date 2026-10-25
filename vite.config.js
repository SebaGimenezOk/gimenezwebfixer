import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import SiteMap from 'vite-plugin-sitemap'

export default defineConfig({
  base: './', 
  plugins: [
    react(),
    SiteMap({
      hostname: 'https://www.tusitio.com',
      routes: ['/', '/eliminacion-malware', '/optimizacion-velocidad']
    }),
    tailwindcss(),
  ],ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
})