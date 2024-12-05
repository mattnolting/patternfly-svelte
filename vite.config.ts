import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
console.log(path.dirname);
export default defineConfig({
	// root: path.resolve(__dirname, 'src'),
  // build: {
	// 	outDir: `dist/${path.dirname}`,
  //   rollupOptions: {
	// 		input: {
	// 			index: path.resolve(__dirname, 'src/app.html'),
  //     }
  //   }
  // },
	// test: {
	// 	include: ['src/**/*.{test,spec}.{js,ts}']
	// },
  build: {
		outDir: './test',
	},
	plugins: [
		sveltekit()
	],
	resolve: {
		alias: {
			'$types': '/src/types'
		}
	}
});