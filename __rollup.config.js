import svelte from "rollup-plugin-svelte";
import preprocess from "svelte-preprocess";
import css from "rollup-plugin-css-only";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: [ "src/routes/+page.svelte" ],
    output: {
      format: "es",
      file: "build/patternfly.js",
      name: "App"
    },
    plugins: [
      svelte({
        preprocess: [preprocess()],
        compilerOptions: {
          dev: !production,
          hydratable: true
        }
      }),
      css({ output: "bundle.css" }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
        exportConditions: ["svelte"]
      }),
      commonjs()
    ]},
    // SSR
  {
    input: [ "src/routes/+page.svelte" ],
    output: {
        format: "es",
        file: "src/build/website.ssr.js",
        name: "App"
    },
    plugins: [
        svelte({
          preprocess: [preprocess()],
          compilerOptions: {
              dev: !production,
              generate: "ssr"
            }
        }),
        css({ output: "bundle.css" }),
        resolve({
            browser: true,
            dedupe: ["svelte"],
            exportConditions: ["svelte"]
        }),
        commonjs()
    ]
  }
];