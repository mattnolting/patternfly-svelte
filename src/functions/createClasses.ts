import * as init from "./init";
import { kebabCase } from 'case-anything';

export const root = '';
export const appNamespace = 'pf';
export const version = 'v6';
export const type = 'c';
export const rootComponentPrefix = appNamespace + '-' + version + '-' + type + '-';
export const componentPrefix = rootComponentPrefix + root;
export const modPrefix = 'pf-m-';

export const createClass = (className: string, root?: string) => {
  const prefix = (root === 'isRoot' ? rootComponentPrefix : componentPrefix );

  return kebabCase(prefix + className);
}

export const createModifier = (className:string, root?:boolean) => {
  return kebabCase((root === true ? init.componentPrefix : init.modPrefix), className);
}
