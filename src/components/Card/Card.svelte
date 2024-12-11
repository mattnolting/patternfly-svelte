<script lang='ts'>
// TODO: create function for all children
// 1) Accepts array of elements
// 2) Looks for `props.{component}` by default
// 3) Accepts alernate conditionals
// 4)

  import './card.scss'
  import { createClass } from '$functions/createClasses.ts'
  import { defaultProps } from '$lib/defaultProps.ts'
  import { defaultStates } from '$props/defaultStates.svelte.ts'
  import { setContext } from 'svelte'
  import DynamicChild from '$components/DynamicChild.svelte'
  // import returnProps from '$functions/utils.ts';

  // Import sub components
  import CardHeader from './CardHeader.svelte'
  import CardTitle from './CardTitle.svelte'
  import CardBody from './CardBody.svelte'

  export const cardChildren = [ 'title', 'header', 'body', 'footer' ]

  export const cardState = $state({
    ...defaultStates
  })

  export const cardProps = $state({
    card: { ...defaultProps },
    text: 'lets update the text'
  })
  // bindableProperty = $bindable('fallback value'),

  setContext('card', cardState);
  let {
    cardClass = createClass('card', 'isRoot'),
    children,
    ...props
  } = $props();
</script>

<!-- {bindableProperty} -->
<div class={cardClass}>
  <DynamicChild component={CardTitle} condition={props.cardTitle} />
  <DynamicChild component={CardHeader} condition={props.cardHeader} />
  <DynamicChild component={CardBody} condition={props.cardBody} />
  {@render children?.()}
</div>