<script lang='ts'>
  import { createClass } from '$functions/createClasses.ts'

  let {
    compClass = createClass('card__body'),
    tag = 'div',
    text = '',
    children,
    ...props
  } = $props()
</script>

<svelte:element this={tag} class="{compClass}">
  {@html text}
  {@render children?.()}
</svelte:element>