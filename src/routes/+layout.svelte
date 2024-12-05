<script lang='ts'>
	import Header from './Header.svelte';
	// import { page } from '$app/stores';
	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main class="container">
		<!-- Here's the id: {$page.route.id} -->
		{@render children()}
	</main>

	<footer>
		<p>
			visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
		</p>
	</footer>
</div>

