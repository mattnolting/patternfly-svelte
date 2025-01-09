<script lang='ts'>
  import CardHeader from '$components/Card/CardHeader.svelte';
  import CardTitle from '$components/Card/CardTitle.svelte';
  import CardBody from '$components/Card/CardBody.svelte';
  import DynamicChild from '$components/DynamicChild/DynamicChild.svelte';
  import { setContext } from 'svelte';

  // - Card props
  import { defaultProps } from '$lib/defaultProps.ts';
  import { defaultStates } from '$lib/defaultProps.ts';

  let card = $state ({
    ...defaultProps,
    ...defaultStates,
    className: 'pf-v6-c-card'
  });

  setContext('card', card);

  let {
    children,
    ...props
  } = $props();

</script>

<div class="{card.className}">
  <DynamicChild component={CardTitle} condition={props.cardTitle} />
  <DynamicChild component={CardHeader} condition={props.cardHeader} />
  <DynamicChild component={CardBody} condition={props.cardBody} />
  {#if props.text}
    {props.text}
  {/if}
  {@render children?.()}
</div>