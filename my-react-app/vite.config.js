// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Disables the error overlay to avoid blocking your work with pop-ups.
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Allows importing files with '@/...' instead of relative paths
    },
  },
  css: {
    // Optional: Enable CSS modules if needed
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});

