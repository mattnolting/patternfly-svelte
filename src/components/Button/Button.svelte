<script lang='ts'>
  import { createClass } from '$functions/createClasses.ts'

  import ButtonText from './ButtonText.svelte';
  import ButtonIcon from './ButtonIcon.svelte';

  // Use `$props()` once and store in a `props` variable
  // Reactive
  let isClicked = $state(false);
  let isExpanded = $state(false);

  function handleClick() {
    isClicked = !isClicked;
    isExpanded = !isExpanded;
  }

  // Destructure props to get defaults and incoming values
  let {
    className = createClass('button', 'isRoot'),
    tag = 'button',
    buttonText = '',
    buttonIcon = '',
    children = null,
    ...buttonProps
   } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
  this={tag}
  class="test"
  aria-pressed="{isClicked}"
  onclick={handleClick}>

  clicked: {isClicked}
  expanded: {isExpanded}
  {#if buttonText}
    <ButtonText {buttonText} />
  {/if}

  {#if buttonIcon}
     <ButtonIcon {buttonIcon} />
  {/if}

  {@render children?.()}
</svelte:element>