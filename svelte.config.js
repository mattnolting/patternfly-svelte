// import adapter from '@sveltejs/adapter-auto';
// import { sveltePreprocess } from 'svelte-preprocess'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

import path from 'path';

export const config = {
	mode: 'development',
	extensions: ['.svelte' ],
	onwarn: (warning, handler) => handler(warning),
	preprocess: [
		vitePreprocess(),
		// sveltePreprocess({
		// 	scss: {
		// 		outDir: './test',
		// 		includePaths: ['src'], // Set the base directory for your SCSS files
		// 		api: 'modern-compiler',
		// 		outputStyle: 'expanded', // Optional: Can be 'compressed' or 'expanded'
		// 	},
		// })
	],
  // plugin options
  vitePlugin: {
    exclude: [],
    // experimental options
    experimental: {}
  },
	compilerOptions: {
		hydratable: true,
	},
	// kit: {
	// 	adapter: adapter({
	// 		// default options are shown. On some platforms
	// 		// these options are set automatically — see below
	// 		pages: 'build',
	// 		assets: 'build',
	// 		fallback: undefined,
	// 		precompress: false,
	// 		strict: true
	// 	})
	// }
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		// adapter: adapter({
		// 	// default options are shown. On some platforms
		// 	// these options are set automatically — see below
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: undefined,
		// 	precompress: true,
		// 	strict: false
		// }),
    adapter: adapter({
			pages: 'build',
			assets: 'build',
      out: 'build',
      precompress: false,
      envPrefix: 'tesss',
			strick: false
    }),
		alias: {
			$images: path.resolve("./src/lib/images"),
			$assets: path.resolve("./src/assets"),
			$base: path.resolve("./src/base"),
			$components: path.resolve("./src/components"),
			$functions: path.resolve("./src/functions"),
			$props: path.resolve("./src/lib"),
			$styles: path.resolve("./src/scss"),
			$types: path.resolve("./src/types")
		}
	}
};

export default config;