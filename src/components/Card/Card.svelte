<script lang="ts">
  import ComponentTemplate from '$componentTemplate';
  import { CardTitle, CardHeader, CardBody } from '$src/components/Card/_index.ts';

  const className = 'pf-v6-c-card';

  const cardState = $state({
    isPrimary: false,
    isExpanded: false,
    isNeat: false,
    isTough: false
  })

  let {
    tag='div',
    cardClassName = className,
    cardTitle = {}, // when calling sub-components, the variable must be intitialized
    cardHeader = {}, // when calling sub-components, the variable must be intitialized
    cardBody = {}, // when calling sub-components, the variable must be intitialized
    text = '',
    options = {},
    children,
    ...props
  } = $props();

  console.log($inspect(props))
</script>

<svelte:element this={tag} class='pf-v6-c-card' class:pf-m-expanded={cardState.isExpanded} {...props}>
  {#if props.cardTitle}
    <CardTitle {...props.cardTitle} />
  {/if}

  {#if props.cardHeader}
    <CardHeader {...props.cardHeader} />
  {/if}

  {#if props.cardBody}
    <CardBody {...props.cardBody} />
  {/if}

  {#if text}
    {text}
  {/if}

  {@render children?.()}
</svelte:element>