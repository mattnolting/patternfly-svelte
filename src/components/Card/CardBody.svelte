<script lang='ts'>
  import { createClass } from '$functions/createClasses.ts'
  import { defaultProps } from '$lib/defaultProps.ts'

  export const cardBody = defaultProps;
  export const cardBodyState = $state(defaultProps);

  let {
    compClass = 'card__body',
    tag = 'div',
    children,
    ...props
  } = $props()
</script>

<svelte:element class="{compClass}" class:pf-m-expanded={cardBodyState.isExpanded} this={tag}>
  {@html cardBody.text}
  {@render children?.()}
</svelte:element>