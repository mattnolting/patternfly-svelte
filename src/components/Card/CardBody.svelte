<script lang="ts">
  import ComponentTemplate from "$lib/ComponentTemplate/ComponentTemplate.svelte";

  let {
    componentClass = 'pf-v6-c-card__body',
    text = '',
    children,
    ...props
  } = $props();
</script>

<ComponentTemplate {...props} templateClass={componentClass}>
  {#if text}
    {text}
  {/if}

  {@render children?.()}
</ComponentTemplate>