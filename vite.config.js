// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/site-axel/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: { port: 5173 },
  preview: { port: 4173 }
})
