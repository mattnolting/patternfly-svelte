import { camelCase, pascalCase } from 'case-anything';
import type { CardProps, CardState } from '$props/types.ts';

// insert selector for class

export const defaultStates: CardState = {
  isOpen: false,
  isActive: false
};

export const defaultProps: CardProps = {
  text: '',
  id: crypto.randomUUID(),
  cardClass: '',
  cardState: defaultStates,
  children: []
};

export function withCardProps<T extends CardProps>(localProps: T): T & CardProps {
  return {
    ...defaultProps,
    ...localProps
  };
}