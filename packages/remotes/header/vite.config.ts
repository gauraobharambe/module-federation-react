import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  server: {
    port: 4201,
  },
  preview: {
    port: 4201,
  },
  plugins: [
    react(),
    federation({      
      name: 'remoteHeader',
      filename: 'remoteEntry.js',
      exposes: {
          './Header': './src/App',
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    outDir:'../../../dist/remotes/header',
    emptyOutDir:true,
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,    
  }  
})
