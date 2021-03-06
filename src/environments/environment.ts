// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'process.env.API_KEY',
    authDomain: 'hc-bands-rest.firebaseapp.com',
    databaseURL: 'https://hc-bands-rest.firebaseio.com',
    projectId: 'hc-bands-rest',
    storageBucket: 'hc-bands-rest.appspot.com',
    messagingSenderId: 'process.env.MESSAGING_SENDER_ID',
    appId: 'process.env.APP_ID'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
