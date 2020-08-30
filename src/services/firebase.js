import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import * as keys from "../Keys";

const config = {
  apiKey: keys.API_KEY,
  authDomain: keys.FB_AUTH_DOMAIN,
}
firebase.initializeApp(config)

export const auth = firebase.auth
