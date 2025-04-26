import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/uMusic-frontend/', // 👈 add this line for GitHub Pages
  server: {
    proxy: {
      '/api': 'http://localhost:8000'
    }
  },
  plugins: [react(), tailwindcss()],
})
