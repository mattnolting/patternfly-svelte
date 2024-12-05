<script lang='ts'>
	import { page } from '$app/stores';
	import logo from '$lib/images/PF-IconLogo.svg';
</script>

<header>

	<div class="corner">
		<a href="https://svelte.dev/docs/kit">
			<img src="{logo}" alt="" />
		</a>
	</div>

	<nav>
		<ul class="pf-v6-c-nav">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/card' ? 'page' : undefined}>
				<a href="/card">Card</a>
			</li>
			<li aria-current={$page.url.pathname ==='/button' ? 'page' : undefined}>
				<a href="/button">Button</a>
			</li>
		</ul>
	</nav>
</header>