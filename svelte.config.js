// import adapter from '@sveltejs/adapter-auto';
// import { sveltePreprocess } from 'svelte-preprocess'
import { sveltePreprocess } from 'svelte-preprocess';
import { sveltekit } from '@sveltejs/kit/vite';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite'
import path, { format } from 'path';
// import { resolve } from 'path';

export default defineConfig({
	mode: 'development',
	extensions: ['.svelte' ],
	type: [ 'module' ],
	// onwarn: (warning, handler) => handler(warning),
  // preprocess: [
	// 	sveltePreprocess({
	//     // Preprocessor options, such as:
	// 		// scss: {
	// 		// 	prependData: `@import 'src/styles/variables.scss';`
	// 		// },
  //   	// typescript: true
  // 	}),
	// ],
	plugins: [
		sveltekit()
	],
	preprocess: [sveltePreprocess()],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			trailingSlash: 'always'
		}),
		// files: {
    //   hooks: 'src/hooks',
    // },
		// prerender: {
		// 	default: true,
		// },
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
	// plugin options
  // vitePlugin: {
  //   exclude: [],
  //   // experimental options
  //   experimental: {},
	// 	compilerOptions: {
	// 		outDir: './dist'
	// 	}
  // },
	// compilerOptions: {
	// 	hydratable: true,
	// 	outDir: './test'
	// },
	// kit: {
	// 	adapter: adapter({
	// 		// default options are shown. On some platforms
	// 		// these options are set automatically — see below
	// 		pages: 'build',
	// 		assets: 'build',
	// 		fallback: undefined,
	// 		precompress: false,e
	// 	})
	// }
	// kit: {
	// 	// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
	// 	// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
	// 	// See https://svelte.dev/docs/kit/adapters for more information about adapters.
	// 	adapter: adapter({
	// 		// default options are shown. On some platforms
	// 		// these options are set automatically — see below
	// 		pages: 'build',
	// 		// assets: 'build',
	// 		fallback: undefined,
	// 		precompress: true,
	// 		strict: true,
	// 	}),
		// adapter: adapter({
		// 	// default options are shown. On some platforms
		// 	// these options are set automatically — see below
		// 	// pages: 'build',
		// 	// assets: 'build',
		// 	// fallback: undefined,
		// 	// precompress: false,
		// 	// strict: true
		// }),
		// alias: {
		// 	$images: path.resolve("./src/lib/images"),
		// 	$assets: path.resolve("./src/assets"),
		// 	$base: path.resolve("./src/base"),
		// 	$components: path.resolve("./src/components"),
		// 	$functions: path.resolve("./src/lib/functions"),
		// 	$props: path.resolve("./src/lib"),
		// 	$styles: path.resolve("./src/scss"),
		// 	$types: path.resolve("./src/types")
		// }
	// },
});

// build: {
// 	lib: {
// 		entry: resolve(__dirname, 'lib/main.js'),
// 		name: 'MyLib',
// 		// the proper extensions will be added
// 		fileName: 'my-lib',
// 	},
// 	rollupOptions: {
// 		// make sure to externalize deps that shouldn't be bundled
// 		// into your library
// 		external: [],
// 		output: {
// 			// Provide global variables to use in the UMD build
// 			// for externalized deps
// 			globals: {
// 				vue: 'Vue',
// 			},
// 		},
// 	},
// },
