import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PlexusNav',
      formats: ['es', 'iife'],
      fileName: (format) => `plexus-nav.${format === 'es' ? 'js' : 'min.js'}`,
    },
    rollupOptions: {
      output: {
        // Inline Lit for IIFE bundle (standalone use)
        inlineDynamicImports: true,
      },
    },
    minify: 'esbuild',
    sourcemap: true,
  },
  esbuild: {
    keepNames: true,
  },
});
