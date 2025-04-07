// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-repo-name' with your actual GitHub repo name
export default defineConfig({
  base: '/ticketing-website/',
  plugins: [react()],
})
