import { COMPONENT_CONFIG } from "$src/lib/constants";

export function pfPrefix(name: string = '', isRoot: string = '') {
  let namespace: string;

  if (isRoot) {
    namespace = COMPONENT_CONFIG.prefix + name;
  } else {
    namespace = COMPONENT_CONFIG.modifierPrefix + name;
  }

  return namespace;
}
