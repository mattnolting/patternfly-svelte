<script lang='ts'>
  import { defaultProps } from '$lib/defaultProps.ts';
  import { defaultStates } from '$lib/defaultStates.svelte.ts';
  import { getContext } from 'svelte';

  // get context from component root if child
  const card = getContext('card');

  let cardHeaderToggleState: any = $state ({
    ...defaultStates,
    options: {},
  });

  let {
    cardHeaderToggle = {
      ...defaultProps,
      class: 'pf-v6-c-card__header'
    },
    options = {},
    children,
    ...props
  } = $props();
</script>

<svelte:element this={cardHeaderToggle.type} class="{cardHeaderToggle.class}">
  <b>Card Header:</b> {@html props.text}
  {@render children?.()}
</svelte:element>