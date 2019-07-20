export const environment = {
  production: true,
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
