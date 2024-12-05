import { camelCase, pascalCase } from 'case-anything';

// insert selector for class

interface DefaultStates {
  isClickable?: boolean;
  isCompact?: boolean;
  isHidden?: boolean;
  isExpanded?: boolean;
  isVisible?: boolean;
};

export const defaultStates: DefaultStates = $state({
  isClickable: false,
  isHidden: false,
  isExpanded: false,
  isVisible: true,
});


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