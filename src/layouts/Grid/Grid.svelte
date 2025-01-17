<script lang="ts">
  import ComponentTemplate from "$lib/ComponentTemplate/ComponentTemplate.svelte";

  let {
    componentClass = 'pf-v6-l-grid',
    text = '',
    children,
    ...props
  } = $props();
</script>

<ComponentTemplate templateClass={componentClass} {...props}>
  {#if text}
    {text}
  {/if}

  {@render children?.()}
</ComponentTemplate>