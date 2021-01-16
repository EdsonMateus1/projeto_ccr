import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCqmsosdSF8B6JHUaGy--3Dm3tpCTa0qv4",
  authDomain: "hackathonccr-cba21.firebaseapp.com",
  projectId: "hackathonccr-cba21",
  storageBucket: "hackathonccr-cba21.appspot.com",
  messagingSenderId: "653361426687",
  appId: "1:653361426687:web:9da7fadd5fde880362dcca",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export default function install(Vue) {
  Object.defineProperty(Vue.prototype, "$firebase", {
    get() {
      return firebaseApp;
    },
  });
}
