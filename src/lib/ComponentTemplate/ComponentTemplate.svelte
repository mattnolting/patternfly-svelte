<script lang="ts">
  import { getClasses } from "$functions/utils";

  interface ComponentTemplateProps {
    name?: string;
    templateClass?: string;
    tag?: string;
    templateStates?: Record<string, boolean>;
    children?: () => unknown;
    [key: string]: any;
  }

  let {
    name = '',
    templateClass = 'template class missing, add to let { props } = props() in your component',
    templateStates = {},
    tag = 'div',
    children,
    ...props
  } = $props();

  let classes = getClasses(templateClass, templateStates);
</script>

<svelte:element
  this={tag}
  class={classes}
  {...props}
>
  {@render children?.()}
</svelte:element>