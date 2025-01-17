import preprocess from 'svelte-preprocess';
import adapter from './adapter-custom-static.js';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
		adapter: adapter({
      outDir: 'build',
      sourceDir: 'src',
      distDir: 'dist'
    }),
    paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
    alias: {
      '$src': path.resolve("./src"),
			'$assets': path.resolve("./src/assets"),
			'$base': path.resolve("./src/base"),
      '$components': path.resolve('./src/components'),
      '$componentTemplate': path.resolve('./src/lib/ComponentTemplate/ComponentTemplate.svelte'),
			'$functions': path.resolve("./src/functions"),
			'$images': path.resolve("./src/lib/images"),
			'$layouts': path.resolve("./src/layouts"),
      '$lib': path.resolve('./src/lib'),
			'$props': path.resolve("./src/lib"),
      '$routes': path.resolve('./src/routes'),
			'$stores': path.resolve("./src/stores"),
			'$styles': path.resolve("./src/styles"),
			'$types': path.resolve("./src/types")
    },
    // prerender: {
    //   handleHttpError: ({ path, referrer, message }) => {
    //     // Ignore 404s during prerendering
    //     if (message.includes('404')) {
    //       return;
    //     }
    //     // Otherwise, throw the error
    //     throw new Error(message);
    //   }
    // }
  },
  preprocess: [
    preprocess({
      scss: {
        includePaths: [path.join(process.cwd(), 'src/styles')],
      }
    })
  ],
  // compilerOptions: {
  //   runes: true
  // }
};

export default config;