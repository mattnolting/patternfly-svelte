## Development

Once you've created a project and installed dependencies with `yarn install`

```bash
yarn run dev

# or start the server and open the app in a new browser tab
yarn run dev -- --open
```

## Building

To create a production version of your app:

```bash
yarn run build
```

## Context
getContext()
setContext()

## Props
`$props()`

## Partial
`{@render children()}`

## Comparison operators

```
{#if component.visibility === ’’hidden”}

{:else if component.visibility === ’’hidden”}

// show me

{:else}

// not much here

{/if}
```

## Logical operators

## Conditional rendering
`{@render children?.()}`
`{@render children?.()}`

You can preview the production build with `npm run preview`.

## Loading content

### Static content



### Object content

### Each loop


> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# PatternFly Svelte: A Modern Approach to Component Development

## Introduction

In the evolving landscape of frontend development, we've discovered that the most powerful solutions often come from understanding and working with fundamental patterns rather than fighting against them. PatternFly Svelte represents a breakthrough in component development - not because it adds new complexities, but because it removes unnecessary constraints.

## Core Philosophy

Our approach emerged from a deep understanding of web platform fundamentals and years of experience with various component systems. We learned that the best solutions come not from adding more abstractions, but from embracing the platform's natural strengths.

### The Power of Simplicity

Consider a traditional component implementation:

```typescript
interface ButtonProps extends BaseProps, InteractiveProps {
    variant: 'primary' | 'secondary';
    size: 'small' | 'medium' | 'large';
    isDisabled?: boolean;
    onClick?: (event: Event) => void;
    // Many more specific props
}
```

Now compare it to our approach:

```typescript
let {
    children,
    ...props
} = $props();
```

This isn't just less code - it's more powerful. By removing unnecessary constraints, we create components that can adapt to needs we haven't even discovered yet.

## Implementation Details

### Component Structure

Every component in our system follows a simple, consistent pattern:

```svelte
<script lang="ts">
  import { getClasses } from "$functions/utils";
  import { GENERIC_MODIFIERS } from "$lib/constants";

  let {
    tag = 'div',
    class: className = 'pf-v6-c-card',
    children,
    ...props
  } = $props();

  const states = $derived({
    ...GENERIC_MODIFIERS,
    ...props
  });

  const classes = getClasses(className, states);
</script>

<svelte:element this={tag} class={classes} {...props}>
  {@render children?.()}
</svelte:element>
```

### Global Utilities

We leverage Vite's plugin system to make common utilities available throughout our application:

```javascript
// vite.config.js
plugins: [
  {
    name: 'global-utilities',
    transform(code, id) {
      if (id.endsWith('.svelte')) {
        return {
          code: `
            import { camelCase, pascalCase, kebabCase } from 'case-anything';
            import { getClasses } from '$functions/utils';
            import { GENERIC_MODIFIERS } from '$lib/constants';
            ${code}
          `,
          map: null
        };
      }
    }
  }
]
```

### Generic States

Instead of creating specific states for each component, we provide a set of generic modifiers that can be used consistently across our system:

```typescript
export const GENERIC_MODIFIERS = {
  isExpanded: false,
  isDisabled: false,
  isVisible: false,
  isHidden: false,
  isSelected: false,
  isActive: false,
  isPrimary: false,
  // Additional states can be added as needed
};
```

### Class Generation

Our class generation utility transforms states into BEM-style modifiers:

```typescript
export function getClasses(templateClass: string, templateStates: Record<string, boolean>) {
  const stateClasses = Object.entries(templateStates)
    .filter(([_, value]) => value)
    .map(([key]) => `pf-m-${key.replace('is', '').toLowerCase()}`)
    .join(' ');

  return `${templateClass} ${stateClasses}`.trim();
}
```

## Using Components

### Basic Usage

Components can be used with minimal configuration:

```svelte
<Card>Simple content</Card>
```

### With States

States can be applied naturally:

```svelte
<Card
  isExpanded={true}
  isPrimary={true}
>
  Content adapts to states
</Card>
```

### Complex Composition

Components support natural composition:

```svelte
<Card>
  <CardTitle>Dynamic Title</CardTitle>
  <CardBody>Flexible content structure</CardBody>
</Card>
```

## Error Handling

We provide clear, actionable error messages:

```typescript
let {
    className = 'this component needs a class (Component.svelte:10:4)',
    ariaLabel = 'this component needs an aria-label',
    role = 'this component needs a role',
} = $props();
```

These messages serve as both errors and documentation, guiding developers toward correct implementation.

## Best Practices

### Working with States

States should be used to describe what a component is, not how it looks:

```svelte
<!-- Good -->
<Card isExpanded={true} />

<!-- Avoid -->
<Card displayStyle="expanded" />
```

### Composition over Configuration

Build complex interfaces through composition rather than configuration:

```svelte
<!-- Good -->
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardBody>Content</CardBody>
</Card>

<!-- Avoid -->
<Card
  headerConfig={{
    title: "Title"
  }}
  bodyContent="Content"
/>
```

## Advanced Topics

### Custom States

While generic states cover most needs, custom states can be added when necessary:

```svelte
<script>
  let {
    children,
    ...props
  } = $props();

  const states = $derived({
    ...GENERIC_MODIFIERS,
    isCustomState: props.isCustomState
  });
</script>
```

### Style Customization

Styles follow our BEM-inspired naming convention:

```scss
.pf-v6-c-card {
  // Base styles

  &.pf-m-expanded {
    // Expanded state styles
  }

  &__title {
    // Title element styles
  }
}
```

## Testing

Components can be tested straightforwardly:

```typescript
import { render } from '@testing-library/svelte';
import Card from './Card.svelte';

test('renders with correct classes', () => {
  const { container } = render(Card, {
    props: {
      isPrimary: true
    }
  });

  expect(container.firstChild).toHaveClass('pf-v6-c-card pf-m-primary');
});
```

## Conclusion

Our component system demonstrates that by embracing platform strengths and removing unnecessary constraints, we can create more powerful, flexible, and maintainable solutions. The key is understanding fundamental patterns and working with them rather than against them.

Remember: The best solutions often come not from adding complexity, but from understanding deeply enough to embrace simplicity.