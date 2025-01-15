import { capitalCase } from 'case-anything';
import { COMPONENT_CONFIG, GENERIC_MODIFIERS, GENERIC_STATES } from './constants';
import type { PropValue } from './types';

function createPropMap(items: readonly string[]): Record<string, PropValue> {
  return Object.fromEntries(
    items.map(item => [
      `is${capitalCase(item)}`,
      { value: `${COMPONENT_CONFIG.modifierPrefix}${item}`, truthy: false }
    ])
  );
}

export function createComponentProps(componentName: string) {
  return {
    className: `${COMPONENT_CONFIG.prefix}${componentName}`,
    text: '',
    id: undefined,
    ...createPropMap([...GENERIC_MODIFIERS, ...GENERIC_STATES])
  };
}

export function updateComponentState(state: any, props: any) {
  if (props.componentProps) {
    Object.entries(props.componentProps).forEach(([key, value]) => {
      if (key in state) {
        if (typeof state[key] === 'object' && 'truthy' in state[key]) {
          state[key].truthy = Boolean(value);
        } else {
          state[key] = value;
        }
      }
    });
  }
}