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