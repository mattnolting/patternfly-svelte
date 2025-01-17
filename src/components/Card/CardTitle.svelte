<script lang='ts'>
  const componentClass = 'pf-v6-c-card__title';

  let {
    isExpanded = false,
    text = '',
    children,
    ...props
  } = $props();
</script>

<div class={componentClass} class:pf-m-expanded={isExpanded}>

  {text}{@render children?.()}
</div>