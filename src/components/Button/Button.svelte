<script lang="ts">
  import ComponentTemplate from "$lib/ComponentTemplate/ComponentTemplate.svelte";
	import { CardTitle, CardHeader, CardBody } from '$src/components/Card/_index';
  // if component or sub-component is expected to render children,

  export const componentClass = 'pf-v6-c-card';

  let cardStates = $state({
    isExpanded: false,
    isSpan: false
  })

  let {
    tag = cardStates.isSpan ? 'span' : 'button',
    cardTitle = {},
    cardHeader = {},
    cardBody = {},
    text = '',
    type = 'button',
    isPrimary = false,
    children,
    ...props
  } = $props();
</script>

<ComponentTemplate templateClass={componentClass} {...props}>
  {#if props.cardTitle}
    <CardTitle {...props.cardTitle} />
  {/if}

  {#if props.cardHeader}
    <CardHeader {...props.cardHeader} />
  {/if}

  {#if props.cardBody}
    <CardBody {...props.cardBody} />
  {/if}

  <!-- render text if passed to component -->
  {#if text}
    {text}
  {/if}

  <!-- render children if passed to component -->
  {@render children?.()}
</ComponentTemplate>

<!-- <{{#if button--type}}{{button--type}}{{else if button--IsSpan}}span{{else if button--IsAnchor}}a{{else}}button{{/if}} class="{{pfv}}button
  {{setModifiers
    button--IsPrimary='pf-m-primary'
    button--IsSecondary='pf-m-secondary'
    button--IsTertiary='pf-m-tertiary'
    button--IsWarning='pf-m-warning'
    button--IsDanger='pf-m-danger'
    button--IsLink='pf-m-link'
    button--IsPlain='pf-m-plain'
    button--IsActive='pf-m-active'
    button--IsInline='pf-m-inline'
    button--IsControl='pf-m-control'
    button--IsExpanded='pf-m-expanded'
    button--IsProgress='pf-m-progress'
    button--IsInProgress='pf-m-in-progress'
    button--IsAriaDisabled='pf-m-aria-disabled'
    button--HasNoPadding='pf-m-no-padding'
    button--IsSmall='pf-m-small'
    button--IsClicked='pf-m-clicked'
    button--IsStateful='pf-m-stateful'
    button--IsRead='pf-m-read'
    button--IsUnread='pf-m-unread'
    button--IsAttention='pf-m-attention'
    button--IsDisplayLg='pf-m-display-lg'
    button--IsBlock='pf-m-block'
    button--modifier=button--modifier
  }}
  {{#if button--IsDisabled}}
    {{#if (concat button--type button--IsSpan button--IsAnchor)}}
      pf-m-disabled
    {{/if}}
  {{/if}}"
  {{{ternary button--id (concat 'id="' button--id '"') null}}}
  {{#if button--IsSubmit}}
    type="submit"
  {{else if button--IsReset}}
    type="reset"
  {{else}}
    {{#unless (concat button--IsAnchor button--type)}}
      type="button"
    {{/unless}}
  {{/if}}
  {{#if (concat button--IsExpanded button--IsAriaExpanded)}}
    aria-expanded="true"
  {{/if}}
  {{#if button--role}}
    role="{{button--role}}"
  {{/if}}

  {{#if button--aria-controls}}
    aria-controls="{{button--aria-controls}}"
  {{/if}}
  {{#if button--aria-labelledby}}
    aria-labelledby="{{button--aria-labelledby}}"
  {{/if}}

  aria-controls="{button.ariaControls}"
  aria-label="{button.label}"


  {{#if button--IsSpan}}
    role="button"
    tabindex="0"
  {{/if}}
  {{#if button--aria-label}}
    aria-label="{{button--aria-label}}"
  {{/if}}
  {{#if button--aria-describedby}}
    aria-describedby="{{button--aria-describedby}}"
  {{/if}}
  {{#if button--IsAriaDisabled}}
    aria-disabled="true"
  {{/if}}
  {{#if button--IsDisabled}}
    {{#unless (concat button--type button--IsSpan button--IsAnchor)}}
      disabled
    {{/unless}}
  {{/if}}
  {{#if button--url}}
    href="{{button--url}}"
  {{/if}}
  {{#if button--attribute}}
    {{{button--attribute}}}
  {{/if}}>
  {{#if button--IsInProgress}}
    {{> button-progress}}
  {{/if}}
  {{#if button--IsIcon}} {{! button only has an icon - eg, no text}}
    {{#ifAny button--icon button--icon-template}}
      {{> button-icon}}
    {{else if @partial-block}}
      {{#> button-icon}}
        {{> @partial-block}}
      {{/button-icon}}
    {{/ifAny}}
  {{else}}
    {{#ifAny button--icon button--icon-template}}
      {{#unless button-icon--IsEnd}}
        {{> button-icon}}
      {{/unless}}
    {{/ifAny}}
    {{#if @partial-block}}
      {{#if button--ExcludeTextWrapper}}
        {{> @partial-block}}
      {{else}}
        {{#> button-text}}
          {{> @partial-block}}
        {{/button-text}}
      {{/if}}
    {{/if}}
    {{#ifAny button--icon button--icon-template}}
      {{#if button-icon--IsEnd}}
        {{> button-icon}}
      {{/if}}
    {{/ifAny}}
  {{/if}}
  {{#if button--count}}
    {{> button-count}}
  {{/if}}
</{{#if button--type}}{{button--type}}{{else if button--IsSpan}}span{{else if button--IsAnchor}}a{{else}}button{{/if}}> -->
