<script lang='ts'>
  import { defaultProps } from '$lib/defaultProps.ts';
  import { defaultStates } from '$lib/defaultStates.svelte.ts';

  let state = $state(defaultStates);

  let {
    children = null,
    className = defaultProps.className,
    type = defaultProps.type,
    ...props
  } = $props();

  </script>

<svelte:element this={type} class="{className}" class:cool={state.isExpanded} {...props}>
  {@render children?.()}
</svelte:element>
