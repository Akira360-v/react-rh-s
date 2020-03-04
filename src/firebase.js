import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDfOHIbVIF9AGMu-BLMIi702Fc1TQ3MLtw",
  authDomain: "remote-helpers.firebaseapp.com",
  databaseURL: "https://remote-helpers.firebaseio.com",
  projectId: "remote-helpers",
  storageBucket: "remote-helpers.appspot.com",
  messagingSenderId: "453570540241",
  appId: "1:453570540241:web:f8f59735d6d01a0bfe0bf0",
  measurementId: "G-P5D4HZS0YQ"
}

firebase.initializeApp(config)

export default firebase
export const database = firebase.database()
