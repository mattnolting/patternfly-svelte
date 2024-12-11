import { rootComponentPrefix, componentPrefix } from "./init";
import { kebabCase } from 'case-anything';


export const createClass = (className: string, root?: string) => {
  const prefix = (root === 'isRoot' ? rootComponentPrefix : componentPrefix );

  return kebabCase(prefix + className);
}

// export const createModifier = (className:string, root?:boolean) => {
//   return kebabCase((root === true ? init.componentPrefix : init.modPrefix), className);
// }
