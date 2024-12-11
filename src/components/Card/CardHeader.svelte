<script lang='ts'>
  import { createClass } from '$functions/createClasses.ts'
  let {
    className = createClass('card-header'),
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