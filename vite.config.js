// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './', 
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit to 1MB to stop the warning
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        share: resolve(__dirname, 'share.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        faq: resolve(__dirname, 'faq.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
      output: {
        // This splits your code into "App logic" and "Library logic"
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
  },
});
