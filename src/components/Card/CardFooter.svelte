<script lang='ts'>
  import { defaultProps } from '$lib/defaultProps.ts';
  import { defaultStates } from '$lib/defaultStates.svelte.ts';
  import { getContext } from 'svelte';

  // get context from component root if child
  const card = getContext('card');

  let cardFooterState = $state ({
    ...defaultStates,
    options: {}
  });

  let {
    cardFooter = {
      ...defaultProps,
      class: 'pf-v6-c-card__body'
    },
    options = {},
    children,
    ...props
  } = $props();
</script>

<svelte:element {...cardFooter} this={cardFooter.type} class="{cardFooter.class}">
  <b>Card Body:</b> {@html props.text}
  {@render children?.()}
</svelte:element>