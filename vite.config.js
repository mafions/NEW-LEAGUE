// Importa la función defineConfig de Vite para obtener autocompletado y validación de tipo
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Exporta la configuración
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Las solicitudes que coincidan con esta ruta serán reenviadas al servidor objetivo
      '/v4/competitions/WC/teams': {
        target: 'http://api.football-data.org', // El servidor objetivo
        changeOrigin: true, // Necesario para evitar problemas de CORS
        rewrite: (path) => path.replace(/^\/v4\/competitions\/WC\/teams/, '/v4/competitions/WC/teams'),
        headers: {
          'X-Auth-Token': '1a339e6dbc3b4c649cc23a710a7bb7fa', // Usa tu clave de API real aquí
        },
      },
    },
  },
});
