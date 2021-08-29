import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDzYLYEHLABcsiauO_6FDkRRhbhY6aWIT4",
  authDomain: "auth-development-8f681.firebaseapp.com",
  projectId: "auth-development-8f681",
  storageBucket: "auth-development-8f681.appspot.com",
  messagingSenderId: "406637333056",
  appId: "1:406637333056:web:07a59b7dd632423dddeda5"
};

const app = initializeApp(firebaseConfig);

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app