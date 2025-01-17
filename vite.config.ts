import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '$src': path.resolve("./src"),
      '$assets': path.resolve("./src/assets"),
      '$base': path.resolve("./src/base"),
      '$components': path.resolve('./src/components'),
      '$functions': path.resolve("./src/functions"),
      '$images': path.resolve("./src/lib/images"),
      '$layouts': path.resolve("./src/layouts"),
      '$lib': path.resolve('./src/lib'),
      '$props': path.resolve("./src/lib"),
      '$routes': path.resolve('./src/routes'),
      '$stores': path.resolve("./src/stores"),
      '$styles': path.resolve("./src/styles"),
      '$types': path.resolve("./src/types")    }
  },
  plugins: [sveltekit(),
    {
      name: 'global-utilities',
      // File transformers - #all svelte files, #all svelte scss and js files
      transform(code, id) {
        // @docs ALL SVELTE, SCSS, AND JS FILES - #tread lightly
        // @docs #ALL-SVELTES-FILES - #tread lightly
        if (id.endsWith('.svelte')) {
          return {
            code: `
              // Make case utilities available everywhere
              import { camelCase, pascalCase, kebabCase, snakeCase } from 'case-anything';

              // We could also add our core utilities
              import { getClasses } from '$functions/utils';
              import { GENERIC_MODIFIERS } from '$lib/constants';

              ${code}
            `,
            map: null
          };
        }

        if (id.endsWith('.svelte') || id.endsWith('.scss') || id.endsWith('.js')) {
          // This ensures consistent documentation across our entire codebase
          // We can parse @docs syntax and generate comprehensive documentation
          // This helps maintain our system's clarity and usability
          // Parse @docs syntax consistently across all files
        }
      }
    },
  ],
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
