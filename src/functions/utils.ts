import * as init from '$functions/conditionals.ts';
import { setContext, getContext } from 'svelte';

/**
 * MARK: capitalize()
 * @desc Capitalizes a string
 * @param string - A string 'expanded'
 * @returns A capitalized word
 */
export const capitalize = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

/**
 * MARK: dasherize()
 * @desc Dasherizes concatinated list
 * @param {...*} args - String values to be processed
 * @returns A lowercase, dash separated string
 */
export const dasherize = (...params: string[]) => {
  return params
    .filter(element => typeof element === 'string') // Filter to ensure only strings
    .map(element => element.toLowerCase().replace(/\s+/g, '-')) // Lowercase and replace spaces with dashes
    .join('-'); // Join with a single dash between each processed element
};

/**
 * MARK: camelCase()
 * @desc Creates a prefixed string/className
 * @param array - An array of literal states
 * @returns
 */
export function camelCase(...params: string[]) {
  return params
  .filter(element => typeof element === 'string') // Filter to ensure only strings
  .map(element => capitalize(element))
  .join(); // Join with a single dash between each processed element
}

/**
 * MARK: createClass()
 * @desc Creates a prefixed string/className
 * @param array - An array of literal states
 * @returns
 */
export const createClass = (className:string, type?:string) => {
  return type === 'isRoot' ? dasherize(init.componentPrefix, className) : dasherize(init.modPrefix, className);
}

// /**
//  * MARK: createStatesObject()
//  * @desc Creates a states object from an array
//  * @param array - An array of literal states
//  * @returns
//  */
// export const createStatesObject = (states: string[]): Record<string, boolean> => {
//   const myObj: Record<string, boolean> = {};

//   states.forEach((state) => {
//     const key = capitalize(state);
//     myObj[key] = false; // Initialize all states as false by default
//   });

//   return myObj;
// };

// First, define your symbol
export const cardKey: unique symbol = Symbol('card');

// Then ensure the function accepts symbols
export function setComponentContext(key: symbol | string)  {
  return setContext({a: 'foo', b: 'bar'}, key);
}

export function getComponentContext(cardContext: symbol) {
  return getContext(cardContext);
}
