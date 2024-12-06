import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default {
  server: {
    port: process.env.PORT || 3000,  // Asegúrate de que el puerto se obtenga del entorno
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
