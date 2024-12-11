import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

export default defineConfig({
  build: {
		outDir: './build',
	},
	plugins: [
		sveltekit()
	],
	resolve: {
		alias: {
			$images: path.resolve("./src/lib/images"),
			$assets: path.resolve("./src/assets"),
			$base: path.resolve("./src/base"),
			$components: path.resolve("./src/components"),
			$functions: path.resolve("./src/lib/functions"),
			$props: path.resolve("./src/lib"),
			$styles: path.resolve("./src/scss"),
			$types: path.resolve("./src/types")
		}
	}
});