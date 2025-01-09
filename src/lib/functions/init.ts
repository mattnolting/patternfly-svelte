export * from './createClasses.ts';
export const rootName: string = '';
export const appNamespace: string = 'pf';
export const version: string = 'v6';
export const type: string = 'c';
export const rootComponentPrefix = appNamespace + '-' + version + '-' + type + '-';
export const componentPrefix = rootComponentPrefix + rootName;
export const modPrefix = 'pf-m-';

// import * as scss from 'scss'