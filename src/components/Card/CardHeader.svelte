<script lang='ts'>
  import { defaultProps } from '$lib/defaultProps.ts';
  import { defaultStates } from '$lib/defaultStates.svelte.ts';
  import { getContext, setContext } from 'svelte';

  // get context from component root if child
  let cardHeaderState = $state ({
    ...defaultStates,
    options: {},
  });

  // get context from all other siblings
  const card = getContext('card');
  const cardBody = getContext('cardBody');
  const cardTitle = getContext('cardTitle');
  const cardFooter = getContext('cardFooter');
  const cardHeaderTottle = getContext('cardHeaderTottle');

  // set context for sub-component
  setContext('cardHeaderState', cardHeaderState);

  let {
    cardHeader = {
      ...defaultProps,
      text: 'try again',
      class: 'pf-v6-c-card__header'
    },
    children = null,
    ...props
  } = $props();
</script>

<svelte:element this={cardHeader.type} class="{cardHeader.class}">
  <b>Card Header:</b> {@html props.text}
  {@render children?.()}
</svelte:element>