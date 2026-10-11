import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If you deploy to a sub-path (e.g. GitHub Pages at /portfolio/), set base: '/portfolio/'
export default defineConfig({
  plugins: [react()],
});
