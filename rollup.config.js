// import postcss from 'rollup-plugin-postcss'

// plugins: [
//   svelte({
//     // enable run-time checks when not in production
//     dev: !production,
//     // we'll extract any component CSS out into
//     // a separate file - better for performance
//     css: css => {
//       css.write('public/build/bundle.css')
//     }
//   }),
//   postcss({
//     extensions: ['.css'],
//     extract: true,
//     minimize: true,
//     use: [['sass', { includePaths: ['./src/styles', './node_modules'] }]]
//   })
// ];