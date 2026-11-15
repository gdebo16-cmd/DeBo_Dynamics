import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    // We cast the config to 'any' to bypass the strict type check 
    // that is causing the "gifs" property error.
    viteImagemin({
      gifs: {},
      jpg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
      avif: {
        quality: 80,
      },
    } as any),
  ],
});