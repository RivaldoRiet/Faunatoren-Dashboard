// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseUrl: string = 'https://tst-gravitee-gateway.dataplatform.nl/lab/1.0/observation/json/entity/';

export const environment = {
  production: false,
  api: `${baseUrl}`,
  token: `24e0586f-175d-44b5-8fa5-24579736497b`,
  birdnetAPI: `birdnet.cornell.edu/api2/upload`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
