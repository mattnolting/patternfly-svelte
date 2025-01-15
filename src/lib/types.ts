import type { GENERIC_MODIFIERS, GENERIC_STATES } from '$lib/constants';

export interface ComponentTemplateProps {
  tag?: string;
  class?: string;  // Note: we use 'class' not 'className' in Svelte
  children?: () => unknown;
  [key: string]: any;  // Allow any additional props
}

export interface CardTitleProps {
  text?: string;
  [key: string]: unknown;
}

export interface CardProps extends BaseComponentProps {
  cardTitle?: CardTitleProps;
  text?: string;
  [key: string]: unknown;
}