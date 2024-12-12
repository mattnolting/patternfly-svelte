import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { resolve } from 'path'
// import { rollup } from 'rollup';

// import { fileURLToPath, URL } from 'node:url'
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  root: 'src',
  // build: {
  //   outDir: '../dist',
  //   emptyOutDir: true, // also necessary
  // },
	plugins: [
		sveltekit()
		// rollup()
	],

	resolve: {
		alias: {
			$images: path.resolve("./src/lib/images"),
			$assets: path.resolve("./src/assets"),
			$base: path.resolve("./src/base"),
			$components: path.resolve("./src/components"),
			$functions: path.resolve("./src/lib/functions"),
			$props: path.resolve("./src/lib"),
			$styles: path.resolve("./src/*"),
			$types: path.resolve("./src/types")
		}
	}
});