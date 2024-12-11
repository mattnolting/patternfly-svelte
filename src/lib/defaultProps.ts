import { camelCase, pascalCase } from 'case-anything';

// insert selector for class

interface DefaultProperties {
  root: string;
  class: string;
  id?: string;
  type?: string;
  title?: string;
  text?: string | undefined;
  modifiers?: string;
  isClickable?: boolean;
  isCompact?: boolean;
  isExpandable?: boolean;
  isHidden?: boolean;
  isVisible?: boolean;
};

export const defaultProps: DefaultProperties = {
  root: '',
  class: '',
  id: '',
  type: 'div',
  title: '',
  text: '',
  modifiers: '',
  isClickable: false,
  isCompact: false,
  isHidden: false,
  isExpandable: false,
  isVisible: false,
};

// TODO: interface - input
// TODO: interface - layout

export function initializeComponentProps(componentNames: string[], props: DefaultProperties = defaultProps ): { [key: string]: unknown } {
  const components: { [key: string]: unknown } = {};

  componentNames.forEach((name) => {
    Object.keys(props).forEach((key) => {
      const newKey = camelCase(name) + pascalCase(key.toString());
      components[newKey] = props[key];
    });
  });

  return components;
}

export function initializeComponentStates(componentNames: string[], props: DefaultProperties = defaultProps ): { [key: string]: unknown } {
  const components: { [key: string]: unknown } = {};

  componentNames.forEach((name) => {
    Object.keys(props).forEach((key) => {
      const newKey = camelCase(name) + pascalCase(key.toString());
      components[newKey] = props[key];
    });
  });

  return components;
}

import type { CardProps, CardState } from './types';

export const defaultStates: CardState = {
  isOpen: false,
  isActive: false
};

export const defaultProperties: CardProps = {
  text: '',
  id: crypto.randomUUID(),
  cardClass: '',
  cardState: defaultStates,
  children: []
};

export function withCardProps<T extends CardProps>(localProps: T): T & CardProps {
  return {
    ...defaultProperties,
    ...localProps
  };
}