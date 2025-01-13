import { defaultProps } from "./defaultProps";
import { defaultStates } from "./defaultStates.svelte";

export function createComp(name: string, props = defaultProps) {
  return {
    ...props,
    state: { ...defaultStates }
  };
}