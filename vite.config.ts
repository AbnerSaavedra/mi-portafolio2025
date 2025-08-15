import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mi-portafolio2025/', // nombre del repo
  plugins: [react()],
})
