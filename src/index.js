// import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
})
let rerenderEntireTree

// class Firebase {
//   constructor() {
//     app.initializeApp(config);
//   }
// }
// export default Firebase;

firebase.auth().onAuthStateChanged(() => {
  if (!rerenderEntireTree) {
    let rerenderEntireTree = state => {
      ReactDOM.render(
        <BrowserRouter>
          <App
            state={state}
            dispatch={store.dispatch.bind(store)}
            database={database}
          />
        </BrowserRouter>,
        document.getElementById('root')
      )
    }
    rerenderEntireTree(store.getState())
    store.subscribe(rerenderEntireTree)
  }
})


export const database = firebase.database()
export const auth = firebase.auth()
