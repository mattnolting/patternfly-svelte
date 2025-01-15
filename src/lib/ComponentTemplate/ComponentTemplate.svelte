<script lang='ts'>
  let {
    tag = 'div',
    class: className = '',
    children,
    ...props
  } = $props();
</script>

<svelte:element this={tag} class="{props.componentClass}" {...props}>
  {#if props.text}
    {props.text}
  {/if}

  {@render children?.()}
</svelte:element>