export const COMPONENT_CONFIG = {
  prefix: 'pf-v6-c-',
  modifierPrefix: 'pf-m-',
  tag: 'div',
  options: Array,
} as const;

export const GENERIC_MODIFIERS = [
  'primary',
  'secondary',
  'tertiary',
  'warning',
  'danger',
  'disabled',
  'link',
  'plain',
  'active',
  'inline',
  'control',
  'expandable',
  'small',
  'block'
] as const;

export const GENERIC_STATES = [
  'hidden',
  'visible',
  'expanded',
  'disabled',
  'active',
  'selected'
] as const;