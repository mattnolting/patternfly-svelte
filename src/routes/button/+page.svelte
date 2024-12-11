<script lang='ts'>
  import Button from '$components/Button/Button.svelte';
  let buttonText = 'Button text from +page.svelte';
  let buttonIcon = 'ellipsis';

  const myData = [
    {
      buttonText: 'First butt',
      buttonIcon: 'butt',
      isExpanded: true,
      isClicked: true,
      ariaExpanded: true,
      tag: 'div'
    },
    {
      buttonText: 'Second booty',
      ariaExpanded: true,
      buttonIcon: 'snail-butts'
    },
    {
      buttonText: 'Third wanger',
      buttonIcon: 'hola-wave'
    },
  ];
</script>

<div class="flex">
  {#each myData as item}
    <Button tag={item.tag} isExpanded={item.isExpanded} isClicked={item.isClicked} text={item.buttonText} icon={item.buttonIcon} />
    aria-expanded: {item.ariaExpanded}
  {/each}

  <Button buttonText="Hey now" ariaExpanded thing="stuff">Child content</Button>
</div>

<style>
  .flex {
    display: grid;
    gap: 16px;
  }
</style>
