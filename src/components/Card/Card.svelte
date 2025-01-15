<script lang="ts">
  import ComponentTemplate from '$lib/ComponentTemplate/ComponentTemplate.svelte';
	import { CardTitle, CardHeader, CardBody } from '$components/Card';


  let {
    className = 'pf-v6-c-card',
    text = '',
    children,
    ...props
  } = $props();

  let optionalComponents = [
    props.cardTitle,
    props.cardHeader,
    props.cardBody,
  ]

</script>

<ComponentTemplate {...props} componentClass="{className}">
  {#if props.cardTitle}
    <CardTitle {...props.cardTitle} />
  {/if}

  {#if props.CardHeader}
    <CardHeader {...props.cardHeader} />
  {/if}

  <!-- render text if passed to component -->
  {#if text}{text}{/if}

  {@render children?.()}
</ComponentTemplate>