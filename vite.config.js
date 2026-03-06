import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages: set BASE_PATH to your repo name, e.g. BASE_PATH=/ankit_portfolio/
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
