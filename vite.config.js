import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:'/spotify-app',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
})
