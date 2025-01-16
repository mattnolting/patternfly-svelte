<script lang="ts">
interface ComponentTemplateProps {
  tag?: string;
  componentTemplateClass?: string;
  isExpanded?: boolean;  // Make it optional with '?'
  children?: () => unknown;
  [key: string]: any;
}

let {
  tag = 'div',
  componentTemplateClass = '',
  isExpanded = false,  // Provide default value
  children,
  ...props
} = $props();
</script>

<svelte:element
  this={tag}
  class={componentTemplateClass}
  data-expanded={isExpanded}
  {...props}
>
  {@render children?.()}
</svelte:element>