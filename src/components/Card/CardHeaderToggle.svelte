<script lang='ts'>
  // import './card.scss';
	import { Button } from '$components/Button/Button.svelte';
  import { createClass } from '$functions/createClasses.ts';
  import { defaultProps } from '$lib/defaultProps.ts';
  import { defaultStates } from '$props/defaultStates.svelte.ts';

  let {
    className = 'pf-v6-c-card__header-toggle',
    children,
    ...props
  } = $props();
</script>

<h1>Card</h1>

<div class={cardClass}>
  <Button aria-label="Details" aria-labelledby='' button-icon='' />
  {@render children?.()}
</div>