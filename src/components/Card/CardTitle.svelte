<script lang='ts'>
  import { createClass } from '$functions/createClasses.ts';
	import cardStates from './Card.svelte';

  let {
    className = createClass('card-title'),
    text = 'Default card title text',
    tag = 'div',
    children,
    ...props
  } = $props()
</script>

<svelte:element this={tag} class="{className}">
  <!-- <button onclick={() => { c }}>Click me</button> -->
  {@html text}
  {@render children?.()}
</svelte:element>