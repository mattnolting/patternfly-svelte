<script lang="ts">
  import ComponentTemplate from '$lib/ComponentTemplate/ComponentTemplate.svelte';

  let {
    className = 'pf-v6-c-card__title',
    title = '',
    text = 'sup',
    children,
    ...props
  } = $props();
</script>

<ComponentTemplate {...props}>
  {#if text}
    <div class="card__title">{text}</div>
  {/if}

  {@render children?.()}
</ComponentTemplate>