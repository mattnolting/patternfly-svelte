import { derived, type Readable } from 'svelte/store';

/**
 * Generates a class name string based on a boolean store.
 *
 * @param isActive - A readable store containing a boolean.
 * @param activeClass - The class to apply when `isActive` is true.
 * @param inactiveClass - The class to apply when `isActive` is false.
 * @returns A derived store that emits the appropriate class name.
 */
export function classToggle(
  isActive: Readable<boolean>,
  activeClass: string,
  inactiveClass: string = ''
) {
  return derived(isActive, $isActive =>
      $isActive ? activeClass : inactiveClass
  );
}