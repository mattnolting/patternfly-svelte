// import type { PageLoad } from './$types';
// export const load: PageLoad = async ({ fetch, setHeaders }) => {
// 	const url = `https://cms.example.com/products.json`;
// 	const response = await fetch(url);

// 	// Headers are only set during SSR, caching the page's HTML
// 	// for the same length of time as the underlying data.
// 	setHeaders({
// 		age: response.headers.get('age'),
// 		'cache-control': response.headers.get('cache-control')
// 	});

// 	return response.json();
// };

// {
//   name: "John",
//   age: 30,
//   car:null
// }