import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default {
  server: {
    port: process.env.PORT || 3000,  // Usar el puerto proporcionado por Render o 3000 como fallback
  },
  build: {
    outDir: 'dist', // Definir el directorio de salida
  },
  plugins: [
    plugins: [react()],
    // Agregar plugins si es necesario
  ],
};

