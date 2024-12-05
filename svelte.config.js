// import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

import path from 'path'

export const config = {
	// Consult https://svelte.dev/docs/kit/integrations#preprocessors
	// for more information about preprocessors
	// mode: 'development',
	extensions: ['.svelte'],
	onwarn: (warning, handler) => handler(warning),
  // plugin options
  vitePlugin: {
    exclude: [],
    // experimental options
    experimental: {}
  },
	preprocess: [
		vitePreprocess(),
		sveltePreprocess({
			scss: {
				includePaths: ['src'], // Set the base directory for your SCSS files
				outputStyle: 'compressed', // Optional: Can be 'compressed' or 'expanded'
			},
		})
	],
	compilerOptions: {
		hydratable: true,
	},
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
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