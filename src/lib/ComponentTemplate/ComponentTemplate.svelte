<script lang='ts'>
  interface ComponentTemplateProps {
      tag?: string;
      selector?: string;  // If this is required, give it a default value
      class?: string;
      children?: () => unknown;
      [key: string]: any;
  }

  let {
      tag = 'div',
      componentTemplateClass = 'component-template',     // Add default if required
      children,
      ...props
  } = $props();

</script>

<svelte:element this={tag} class="{componentTemplateClass}" {...props}>
  {#if props.text}
    {props.text}
  {/if}

  {@render children?.()}
</svelte:element>