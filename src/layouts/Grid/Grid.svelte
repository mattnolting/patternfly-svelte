<script lang='ts'>
  import { defaultProps } from '$lib/defaultProps.ts';
  import { defaultStates } from '$props/defaultStates.svelte.ts';
  import { createClass } from '$functions/createClasses.ts';
  import 'grid.scss';

  // Destructure props to get defaults and incoming values
  let {
    className = createClass('grid', 'isRoot'),
  tag = 'div',
    children,
    ...props
   } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
  this={tag}
  class="test"
  {...props}>

  {@render children?.()}
</svelte:element>