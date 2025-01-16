<script lang="ts">
  import ComponentTemplate from '$lib/ComponentTemplate/ComponentTemplate.svelte';

  let {
    componentClass = 'pf-v6-c-card__footer',
    cardTitle ='',
    title = '',
    text = 'sup',
    children,
    ...props
  } = $props();
</script>

<ComponentTemplate {...props} componentTemplateClass={componentClass}>
  {#if text}
    {text}
  {/if}

  {@render children?.()}
</ComponentTemplate>