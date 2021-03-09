/**
 * Throw an exception if the current module is already loaded.
 * @param parentModule The parent module.
 * @param moduleName The module name.
 */
// tslint:disable-next-line: no-any
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string): void {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
  }
}
