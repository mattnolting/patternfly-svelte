<script lang="ts">
  import ComponentTemplate from '$lib/ComponentTemplate/ComponentTemplate.svelte';
  export const gridClass = 'pf-v6-l-grid pf-m-all-6-col-on-sm pf-m-all-4-col-on-md pf-m-all-2-col-on-lg pf-m-all-1-col-on-xl';

  let {
    cardTitle = {},
    cardHeader = {},
    cardBody = {},
    text = '',
    isPrimary = false,
    children,
    ...props
  } = $props();
</script>

<ComponentTemplate componentTemplateClass={gridClass} {...props}>
  {#if text}
    {text}
  {/if}

  {@render children?.()}
</ComponentTemplate>