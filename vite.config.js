import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 👉 Replace 'ngo-website' with your actual GitHub repo name
export default defineConfig({
  base: '/ngo-website/',
  plugins: [react(), tailwindcss()]
})
