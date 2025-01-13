<script lang='ts'>
  import { defaultProps } from '$lib/defaultProps.ts';
  import { defaultStates } from '$props/defaultStates.svelte.ts';
  import { createClass } from '$functions/createClasses.ts';

  import ButtonText from './ButtonText.svelte';
  import ButtonIcon from './ButtonIcon.svelte';

  export const buttonProps = $state({
    ...defaultProps,
    ...defaultStates
  })

  let isClicked = $state(false);
  let isExpanded = $state(false);

  // export const buttonStates = $state({
  //   ...defaultProps,
  //   ...defaultStates
  // })

  function handleClick() {
    isClicked = !isClicked;
    isExpanded = !isExpanded;
  }

  // Destructure props to get defaults and incoming values
  let {
    className = createClass('button', 'isRoot'),
    tag = 'button',
    children,
    ...props
   } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
  this={tag}
  class="test"
  aria-pressed="{isClicked}"
  onclick={handleClick}
  {...props}>

  clicked: {isClicked}
  expanded: {isExpanded}
  <!-- {#if text}
    <ButtonText {text} />
  {/if}

  {#if icon}
     <ButtonIcon {icon} />
  {/if} -->

  {@render children?.()}
</svelte:element>