<script lang='ts'>
	import { Button } from '$components/Button/Button.svelte';
  import './card.scss'
  import { createClass } from '$functions/createClasses.ts'
  import { defaultProps } from '$lib/defaultProps.ts'
  import { defaultStates } from '$props/defaultStates.svelte.ts'

  let {
    cardClass = createClass('card', 'isRoot'),
    children,
    ...props
  } = $props();

</script>

<h1>Card</h1>

<div class={cardClass}>
  <Button aria-label="Details" aria-labelledby='' button-icon='' />
  {@render children?.()}
</div>