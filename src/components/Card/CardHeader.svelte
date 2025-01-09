<script lang='ts'>
  let {
    className = 'pf-v6-c-card__header',
    text = 'Default card header text',
    tag = 'div',
    children,
    ...props
  } = $props()
</script>

<svelte:element this={tag} class="{className}">
  {@html text}
  {@render children?.()}
</svelte:element>