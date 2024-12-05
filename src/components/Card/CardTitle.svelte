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
  // console.log(cardStates);
  // console.log('cardtitle', $inspect(cardStates));
</script>

<svelte:element this={tag} class="{className}">
  {@html text}
  {@render children?.()}
</svelte:element>