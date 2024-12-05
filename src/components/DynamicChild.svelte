<script lang="ts">
  let { component: Component, condition, componentProps = condition } = $props();
</script>

{#if condition}
  <Component {...componentProps} />
{/if}