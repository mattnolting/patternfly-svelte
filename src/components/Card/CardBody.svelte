<script lang='ts'>
	// import { Card } from '$components/Card/Card.svelte';
	// import { CardBody } from '$components/Card/CardBody.svelte';
  import { defaultProps } from '$lib/defaultProps.ts';
  import { defaultStates } from '$lib/defaultStates.svelte.ts';
  import { getContext } from 'svelte';

  // get context from component root if child
  const cardState = getContext('cardState');

  let cardBodyState = $state ({
    ...defaultStates,
  });

  let {
    cardBody = {
      ...defaultProps,
      class: 'pf-v6-c-card__body',
    },
    children = null,
    ...props
  } = $props();

</script>

<svelte:element {...props} this={cardBody.type} aria-expanded={cardBodyState.isExpanded} class="{cardBody.class}">
  <b>Card Body:</b> {@html cardBody.text}
  {@render children?.()}
</svelte:element>