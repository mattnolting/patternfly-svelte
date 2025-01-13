<script lang='ts'>
  import { defaultProps } from '$lib/defaultProps.ts';
  import { setContext } from 'svelte';

  let tableBody = $state ({
    ...defaultProps
  });

  setContext('tableBody', tableBody);

  let {
    children,
    ...props
  } = $props();
</script>

<div class="pf-v6-c-table">
  {@render children?.()}
</div>