import firebase from "firebase/app";
// import firebaseui from "firebaseui";

export class FirebaseAuthHelper {
  private static FIREBASE_CONFIG = {
    apiKey: "AIzaSyBkXz7MQcFloom_gbWBUS-dsJ1BFaojZ6k",
    authDomain: "st-luke-the-doctor.firebaseapp.com",
    databaseURL: "https://st-luke-the-doctor.firebaseio.com",
    projectId: "st-luke-the-doctor",
    storageBucket: "st-luke-the-doctor.appspot.com",
    messagingSenderId: "10125821972"
  };

  public static initialize(opts: FirebaseAuthHelper.InitializeOptions) {
    firebase.initializeApp(FirebaseAuthHelper.FIREBASE_CONFIG);
    firebase.auth().onAuthStateChanged((user: FirebaseAuthHelper.User | null) => {
      if (user) {
        opts.authenticatedCb(user);
      } else {
        opts.notAuthenticatedCb();
      }
    });
  }

  public static async signOut() {
    await firebase.auth().signOut();
  }
}

export namespace FirebaseAuthHelper {
  export interface InitializeOptions {
    authenticatedCb: (user: FirebaseAuthHelper.User) => void;
    notAuthenticatedCb: () => void;
  }

  export type User = firebase.User;
}
