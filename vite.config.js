import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// // 👉 Replace 'ngo-website' with your actual GitHub repo name
// export default defineConfig({
//   base: '/kartavyapath-website/',
//   plugins: [react(), tailwindcss()]
// })
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // This is key for correct relative paths
})
