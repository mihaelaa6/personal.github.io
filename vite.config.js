import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/personal.github.io/', // ⚠️ Replace this with your exact GitHub repo name!
})
