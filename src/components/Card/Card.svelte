<script lang="ts">
  import ComponentTemplate from '$lib/ComponentTemplate/ComponentTemplate.svelte';
	import { CardTitle, CardHeader, CardBody } from '$components/Card';
  import { preprocess } from 'svelte/compiler';

  let cardStates = $state({
    isExpanded: false
  })

  let {
    cardTitle = '',
    cardHeader = '',
    cardBody = '',
    componentTemplateClass = 'pf-v6-c-card',
    text = '',
    isPrimary = 'false',
    children,
    ...props
  } = $props();
</script>

<ComponentTemplate componentTemplateClass={componentTemplateClass} {...props}>
  {#if props.cardTitle}
    <CardTitle {...props.cardTitle} />
  {/if}

  {#if props.cardHeader}
    <CardHeader {...props.cardHeader} />
  {/if}

  <!-- render text if passed to component -->
  {#if text}
    {text}
  {/if}

  {@render children?.()}
</ComponentTemplate>