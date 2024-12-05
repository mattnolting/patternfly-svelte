<!--
TODO: create function for all children
  1) Accepts array of elements
  2) Looks for `props.{component}` by default
  3) Aceepts alernate conditionals
  4)
-->
<script lang='ts'>
  import './card.scss'
  import { createClass } from '$functions/createClasses.ts'
  import { defaultProps } from '$lib/defaultProps.ts'
  import { defaultStates } from '$props/defaultStates.svelte.ts'
  import { setContext } from 'svelte'
  import DynamicChild from '$components/DynamicChild.svelte'

  // Import sub components
  import CardHeader from './CardHeader.svelte'
  import CardTitle from './CardTitle.svelte'
  import CardBody from './CardBody.svelte'

  export const cardChildren = [ 'title', 'header', 'body', 'footer' ]
  export const cardStates = $state({
    ...defaultProps,
    ...defaultStates
  })

  export const cardProps = $state({
    card: { ...defaultProps },
    text: 'lets update the text'
  })

  setContext('card', cardProps)

  let {
    cardClass = createClass('card', 'isRoot'),
    children,
    ...props
  } = $props();
</script>
<!--
@component
Here's some documentation for this component.
It will show up on hover.

- You can use markdown here.
- You can also use code blocks here.
- Usage:
  ```tsx
  <main name="Aret">
    ```
  -->

<div class={cardClass}>
  <DynamicChild component={CardTitle} condition={props.cardTitle} />
  <DynamicChild component={CardHeader} condition={props.cardHeader} />
  <DynamicChild component={CardBody} condition={props.cardBody} />
  {@render children?.()}
</div>