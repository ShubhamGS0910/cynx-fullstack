import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  include: [
    "three", "vanta"
  ],
  plugins: [
    react(), 
    tailwindcss(),
  ],
  server: {
    historyApiFallback: true, // ✅ Ensures React Router works on page refresh
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
