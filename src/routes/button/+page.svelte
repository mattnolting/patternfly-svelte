<script lang='ts'>
  import ComponentTemplate from "$lib/ComponentTemplate/ComponentTemplate.svelte";
  import Button from '$components/Button/Button.svelte';
  let buttonText = 'Button text from +page.svelte';
  let buttonIcon = 'ellipsis';

  const myData = [
    {
      buttonText: 'First button',
      buttonIcon: 'button',
      isExpanded: true,
      isClicked: true,
      ariaExpanded: true,
      tag: 'div'
    },
    {
      buttonText: 'Second button',
      ariaExpanded: true,
      buttonIcon: 'button'
    },
    {
      buttonText: 'Third wing',
      buttonIcon: 'hola-wave'
    },
  ];
</script>

<div class="flex">
  {#each myData as entry}
    <Button tag={entry.tag} isExpanded={entry.isExpanded} isClicked={entry.isClicked} text={entry.buttonText} icon={entry.buttonIcon} />
    aria-expanded: {entry.ariaExpanded}
  {/each}

  <Button buttonText="Hey now" ariaExpanded thing="stuff">Child content</Button>
</div>

<style>
  .flex {
    display: grid;
    gap: 16px;
  }
</style>
