<script lang='ts'>
  import CardTitle from '$components/Card/CardTitle.svelte';
  import CardHeader from '$components/Card/CardHeader.svelte';
  import CardBody from '$components/Card/CardBody.svelte';
  import CardFooter from '$components/Card/CardFooter.svelte';
  // dynamic child get imported automatically
  import DynamicChild from '$components/DynamicChild/DynamicChild.svelte';
  import Component from '$components/Component/Component.svelte';

  import { createComp } from '$lib/createComponent.svelte.ts';


  // Get current values

  let cardTest = createComp('cardTest');

  console.log($inspect(cardTest));
  // Update values

  // import { setContext } from 'svelte';
  // import { setContext, getContext } from 'svelte';

  // get context from component root if child

  // - Card props
  import { defaultProps } from '$lib/defaultProps.ts';
  // import { defaultStates } from '$lib/defaultStates.svelte.ts';

  // let cardState = $state ({
  //   ...defaultStates
  // });

  // function createComp(componentProps: {} = defaultProps) {
  //   let name = $state(componentProps);

  //   return {
  //     get name() { return componentProps;},
  //     set name(value) { componentProps = value }
  //   }
  // }

  // let test = createComp('card');

  // let card = {
  //   ...defaultProps
  // }

  // setContext('cardState', cardState);

  let {
    card = {
      ...defaultProps,
      name: 'card',
      className: 'pf-v6-c-card',
      cardHeader: { ...defaultProps},
    },

    data,
    children = null,
    ...props
  } = $props();

</script>

<!-- <Component>
  <DynamicChild component={CardHeader} condition={props.cardHeader} />
</Component> -->

<svelte:element this={cardTest.type || 'div'} class={cardTest.className}>
  {cardTest.text}
  {#if card.cardHeader}
    check this out<CardHeader {...props.card} />
  {/if}
  <DynamicChild component={CardHeader} condition={props.cardHeader} />
  <DynamicChild component={CardTitle} condition={props.cardTitle} />
  <DynamicChild component={CardBody} condition={props.cardBody} />
  <DynamicChild component={CardFooter} condition={props.cardFooter} />
  {@render children?.()}
</svelte:element>