// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
   apiKey: "AIzaSyDFA-FkqzZldDUM5PXTK4F6qI6mc7Q7H-s",
    authDomain: "angular6-crud-dd28f.firebaseapp.com",
    databaseURL: "https://angular6-crud-dd28f.firebaseio.com",
    projectId: "angular6-crud-dd28f",
    storageBucket: "angular6-crud-dd28f.appspot.com",
    messagingSenderId: "719465988254"
  }
};
