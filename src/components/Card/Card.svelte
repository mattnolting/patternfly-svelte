<script lang="ts">
  import ComponentTemplate from '$lib/ComponentTemplate/ComponentTemplate.svelte';
	import { CardTitle, CardHeader, CardBody } from '$components/Card';
  const className = 'pf-v6-c-card';

  let cardStates = $state({
    isExpanded: false
  })

  let {
    componentTemplateClass = 'pf-v6-c-card',
    cardTitle = {},
    cardHeader = {},
    cardBody = {},
    text = '',
    isPrimary = false,
    children,
    ...props
  } = $props();
</script>

<ComponentTemplate componentTemplateClass={className} {...props}>
  {#if props.cardTitle}
    <CardTitle {...props.cardTitle} />
  {/if}

  {#if props.cardHeader}
    <CardHeader {...props.cardHeader} />
  {/if}

  {#if props.cardBody}
    <CardBody {...props.cardBody} />
  {/if}

  <!-- render text if passed to component -->
  {#if text}
    {text}
  {/if}

  <!-- render children if passed to component -->
  {@render children?.()}
</ComponentTemplate>