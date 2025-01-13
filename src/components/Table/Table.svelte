<script lang='ts'>
  import { defaultProps } from '$lib/defaultProps.ts';
  import { setContext } from 'svelte';

  // import DynamicChild from '$components/DynamicChild/DynamicChild.svelte';

  let table = $state ({
    ...defaultProps
  });

  setContext('table', table);

  let {
    children,
    ...props
  } = $props();
</script>

<div class="pf-v6-c-table">
  {@render children?.()}
</div>