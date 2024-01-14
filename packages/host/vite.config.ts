import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4200,
  },
  preview: {
    port: 4200,
  },
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        remoteHeader: "http://localhost:4201/assets/remoteEntry.js",
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    outDir:'../../dist/host',
    emptyOutDir:true,
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
