<script lang='ts'>
	import Header from './Header.svelte';
	import '../styles/patternfly.scss';
	let { data, children } = $props();

</script>

<div class="app">
	<Header />

	<main class="container">
		{@render children?.()}
	</main>

	<footer>
		<p>
			visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
		</p>
	</footer>
</div>

<style lang="scss">
	:global(.grid) {
		display: grid;
		gap: 24px;
		grid-auto-columns: minmax(100px, 400px);
		grid-auto-flow: column;
	}

	:global(.grid > *) {
		// background: lightblue;
	}
</style>