import { camelCase, pascalCase } from 'case-anything';

// insert selector for class

interface DefaultStates {
  isHidden?: boolean;
  isExpanded?: boolean;
  isVisible?: boolean;
};

export const defaultStates: DefaultStates = $state({
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