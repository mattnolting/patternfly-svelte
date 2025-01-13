import { camelCase, pascalCase } from 'case-anything';
// import { existsSync, mkdirSync, writeFileSync, copyFileSync, readFileSync, rmSync } from 'node:fs';
// import { readFileSync } from 'node:fs';
// import { readdir } from 'node:fs/promises';
// import glob from 'fast-glob';
// import { join, parse, relative, dirname } from 'node:path';


interface DefaultProperties {
  root: string;
  className: string;
  id?: string;
  type?: string;
  title?: string;
  text?: string;
  modifiers?: string;
  isFilled?: string;
};

export const defaultProps: DefaultProperties = {
  root: '',
  className: '',
  id: '',
  type: 'div',
  title: '',
  text: '',
  modifiers: '',
  isFilled: ''
};

// export function initializeComponentProps(componentNames: string[], props: DefaultProperties = defaultProps ): { [key: string]: unknown } {
//   const components: { [key: string]: unknown } = {};

//   componentNames.forEach((name) => {
//     Object.keys(props).forEach((key) => {
//       const newKey = camelCase(name) + pascalCase(key.toString());
//       components[newKey] = props[key];
//     });
//   });

//   return components;
// }

// export function initializeComponentStates(componentNames: string[], props: DefaultProperties = defaultProps ): { [key: string]: unknown } {
//   const components: { [key: string]: unknown } = {};

//   componentNames.forEach((name) => {
//     Object.keys(props).forEach((key) => {
//       const newKey = camelCase(name) + pascalCase(key.toString());
//       components[newKey] = props[key];
//     });
//   });

//   return components;
// }

// import type { CardProps, CardState } from './types';

// export const defaultStates: CardState = {
//   isOpen: false,
//   isActive: false
// };

// export const defaultProperties: CardProps = {
//   text: '',
//   id: crypto.randomUUID(),
//   cardClass: '',
//   cardState: defaultStates,
//   children: []
// };

// export function withCardProps<T extends CardProps>(localProps: T): T & CardProps {
//   return {
//     ...defaultProperties,
//     ...localProps
//   };
// }