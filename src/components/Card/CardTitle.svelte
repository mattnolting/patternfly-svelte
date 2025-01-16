<script lang="ts">
  import ComponentTemplate from '$lib/ComponentTemplate/ComponentTemplate.svelte';
  export const cardTitleClass = 'pf-v6-c-card__title';

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

<ComponentTemplate componentTemplateClass={cardTitleClass} {...props}>
  {#if text}
    {text}
  {/if}

  {@render children?.()}
</ComponentTemplate>