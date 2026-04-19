import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/vite-colorful-app/',
  plugins: [react()],
  server: {
    host: true
  }
})
