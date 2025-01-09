<script lang='ts'>
  import { defaultProps } from '$lib/defaultProps.ts';
  import { defaultStates } from '$lib/defaultProps.ts';
  import { getContext } from 'svelte';
  const card = getContext('card');

  // setContext('cardBody', cardBody);
  // import { setContext } from 'svelte';

  let cardBody = $state ({
    ...defaultProps,
    ...defaultStates,
    className: 'pf-v6-c-card'
  });

  let {
    tag = 'div',
    children,
    ...props
  } = $props();

  console.log(cardBody)

  // let {
  //   className = 'pf-v6-c-card__body',
  //   tag = 'div',
  //   children,
  //   ...props
  // } = $props();
</script>

<svelte:element class="{cardBody.className}" class:pf-m-expanded={card.isExpanded} this={tag}>
  {@html cardBody.text}
  {@render children?.()}
</svelte:element>