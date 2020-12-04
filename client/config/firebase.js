import firebase from 'firebase/app'
import 'firebase/auth'
// import { firebaseConfig } from './keys'

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DB_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_BUCKER,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
export const authRef = firebase.auth()
export const github = new firebase.auth.GithubAuthProvider()
