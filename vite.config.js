import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: process.env.PORT || 3000,  // Usar el puerto proporcionado por Render o 3000 como fallback
  },
  build: {
    outDir: 'dist', // Definir el directorio de salida
  },
  plugins: [
    react(), // Agregar el plugin de React
  ],
});
