<script lang='ts'>
	import { Button } from '$components/Button/Button.svelte';
  import './card.scss'
  import { createClass } from '$functions/createClasses.ts'
  import { defaultProps } from '$lib/defaultProps.ts'
  import { defaultStates } from '$props/defaultStates.svelte.ts'

  let {
    cardClass = createClass('card', 'isRoot'),
    cardState = cardStates,
    children,
    data = ...defaultProps,
    ...props
  } = $props();

</script>

<h1>Card</h1>

<div class={cardClass}>
  <Button aria-label="Details" aria-labelledby='' button-icon='' />
  {@render children?.()}
</div>


<!-- <div class="{{pfv}}card__header-toggle{{#if card-header-toggle--modifier}} {{card-header-toggle--modifier}}{{/if}}"
  {{#if card-header-toggle--attribute}}
    {{{card-header-toggle--attribute}}}
  {{/if}}>
  {{> button
    button--IsPlain=true
    button--aria-label="Details"
    button--id=(concat card--id '-toggle')
    button--aria-labelledby=(concat card--id '-title ' card--id '-toggle')
    button--icon-template="card-header-toggle-icon"}}
</div> -->
