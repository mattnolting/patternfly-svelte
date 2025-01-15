<script lang='ts'>
	import Header from './Header.svelte';
	import '../styles/patternfly.scss';
	let { children, data, ...props } = $props();

</script>

<div class="app" {...props}>
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
		grid-template-columns: repeat( auto-fit, minmax(250px, 1fr));
	}

	:global(.grid > *) {
		// background: lightblue;
	}
</style>