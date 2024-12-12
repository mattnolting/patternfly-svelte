// svelte.config.js
import { sveltePreprocess } from 'svelte-preprocess';
import { sveltekit } from '@sveltejs/kit/vite';
import adapterCustomStatic from './adapter-custom-static.js';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	mode: 'development',
	extensions: ['.svelte'],
	plugins: [sveltekit()],
	preprocess: [sveltePreprocess()],
	kit: {
		adapter: adapterCustomStatic({
			outDir: 'patternfly',
			assets: 'patternfly/static',
			pages: 'patternfly/components/',
			scss: 'patternfly/components/',
			precompress: false,
			trailingSlash: 'always'
		}),
		alias: {
			$images: path.resolve("./src/lib/images"),
			$assets: path.resolve("./src/assets"),
			$base: path.resolve("./src/base"),
			$components: path.resolve("./src/components"),
			$layouts: path.resolve("./src/layouts"),
			$functions: path.resolve("./src/lib/functions"),
			$props: path.resolve("./src/lib"),
			$styles: path.resolve("./src/scss"),
			$types: path.resolve("./src/types")
		}
	}
});