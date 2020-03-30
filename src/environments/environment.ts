// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/************* Local ********************/
// export const environment = {
//   production: false,
//   apiEndpoint: 'http://192.168.24.208/ionic-api/api/',
//   imageURL: 'http://192.168.24.208/ionic-api/media/',
//   fcmEndpoint: 'https://fcm.googleapis.com/fcm/'
// };


/************* Staging 1 ********************/
// export const environment = {
//   production: true,
//   apiEndpoint: 'http://192.168.0.7/saha-tour-travels/api/',
//   imageURL: 'http://192.168.0.7/saha-tour-travels/media/',
//   fcmEndpoint: 'https://fcm.googleapis.com/fcm/'
// };

/************* Staging ********************/
export const environment = {
  production: false,
  apiEndpoint: 'http://tobuekalabya.com/carservice_manage/api/',
  imageURL: 'http://tobuekalabya.com/carservice_manage/uploads/',
  fcmEndpoint: 'https://fcm.googleapis.com/fcm/',
  firebase: {
    // apiKey: "AIzaSyBNW49l9wDIkWl4gMXAst2vgo8KegoYOyA",
    // authDomain: "carservice-a1973.firebaseapp.com",
    // databaseURL: "https://carservice-a1973.firebaseio.com",
    // projectId: "carservice-a1973",
    // storageBucket: "carservice-a1973.appspot.com",
    // messagingSenderId: "501561849132",
    // appId: "1:501561849132:web:79ad4dc81820d4df1d6889",
    // measurementId: "G-FRLBBZGTBG"

    apiKey: "AIzaSyDNIAFNj3IejLFwapHtxRO7BBLOTEdogSk",
    authDomain: "carservice-f2bce.firebaseapp.com",
    databaseURL: "https://carservice-f2bce.firebaseio.com",
    projectId: "carservice-f2bce",
    storageBucket: "carservice-f2bce.appspot.com",
    messagingSenderId: "140417380423",
    appId: "1:140417380423:web:4f959ca97d17f9cf67c162",
    measurementId: "G-X9E0Y8LWZJ"



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
