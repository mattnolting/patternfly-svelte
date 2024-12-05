<script lang="ts">
  let { component: Component, condition, requestedComponentProps = condition } = $props();
</script>

{#if condition}
  <Component {...requestedComponentProps} />
{/if}