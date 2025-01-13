<script lang="ts">
  let { component: Component, condition, values = null } = $props();

  let componentProps = $state({});

  if(values) {
    componentProps = values;
  } else if(!values) {
    componentProps = condition;
  }
</script>

{#if condition}
  <Component {...componentProps} />
{/if}