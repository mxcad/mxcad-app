declare module "vue" {
  import { CompilerOptions } from '@vue/compiler-dom';
  import { RenderFunction } from '@vue/runtime-dom';
  export * from '@vue/runtime-dom';
  
  export  function compileToFunction(template: string | HTMLElement, options?: CompilerOptions): RenderFunction;
  
  export { compileToFunction as compile };
}
