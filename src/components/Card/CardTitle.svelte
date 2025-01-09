<script lang='ts'>
  // import { createClass } from '$functions/createClasses.ts';
  import { defaultProps } from '$lib/defaultProps.ts';
  import { defaultStates } from '$lib/defaultProps.ts';
  import { getContext } from 'svelte';

  const card = getContext('card');

  let cardTitle = $state ({
    ...defaultProps,
    ...defaultStates,
  });

  let {
    className = 'pf-v6-c-card__title',
    tag = 'div',
    children,
    ...props
  } = $props();
</script>

<svelte:element this={tag} class="{className}">
  {@html cardTitle.text}
  {@render children?.()}
</svelte:element>