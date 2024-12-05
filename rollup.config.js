import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import postcss from 'rollup-plugin-postcss';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: !production,
      },
    }),

    postcss({
      extract: 'public/style.css', // Extracts CSS to a specific file
      minimize: production,
      sourceMap: !production,
      use: [
        ['sass', {
          includePaths: ['./src/scss'],
        }]
      ],
    }),

    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),

    !production && livereload('public'),

    production && terser(),
  ],
  watch: {
    clearScreen: false
  }
};