<script lang='ts'>
  import { createClass } from '$functions/createClasses.ts'

  let {
    className = createClass('card-title'),
    text = 'Default card title text',
    tag = 'div',
    children,
    ...props
  } = $props()
</script>

<svelte:element this={tag} class="{className}">
  {@html text}
  {@render children?.()}
</svelte:element>