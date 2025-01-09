<script lang='ts'>
  import { createClass } from '$functions/createClasses.ts'

  let {
    className = 'pf-v6-c-card__footer',
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