import { kebabCase } from 'case-anything';

export * from './classToggle.ts';
export * from './createClasses.ts';

export const root = '';
export const appNamespace = 'pf';
export const version = 'v6';
export const type = 'c';
export const rootComponentPrefix = appNamespace + '-' + version + '-' + type + '-';
export const componentPrefix = rootComponentPrefix + root;
export const modPrefix = 'pf-m-';
