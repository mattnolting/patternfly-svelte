import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      // '@sass': path.resolve(process.cwd(), 'src/styles/sass-utilities/_index.scss'),
      '$styles': path.resolve('./src/styles'),
      '$layouts': path.resolve('./src/layouts'),
      '$components': path.resolve('./src/components'),
      // Add all your SvelteKit aliases here
      // '$lib': path.resolve('./src/lib'),
      '$routes': path.resolve('./src/routes')
    }
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  },
  optimizeDeps: {
    include: ['@sveltejs/kit']
  }
});