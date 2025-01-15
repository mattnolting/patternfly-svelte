<script lang="ts">
  import ComponentTemplate from '$lib/ComponentTemplate/ComponentTemplate.svelte';

  let {
    componentClass = 'pf-v6-c-card__title',
    title = '',
    text = 'sup',
    children,
    ...props
  } = $props();

  // console.log($inspect(props))
</script>

<ComponentTemplate componentTemplateClass={componentClass} {...props}>
  {#if text}
    {text}
  {/if}

  {@render children?.()}
</ComponentTemplate>