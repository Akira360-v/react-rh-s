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
  apiKey: "AIzaSyDfOHIbVIF9AGMu-BLMIi702Fc1TQ3MLtw",
  authDomain: "remote-helpers.firebaseapp.com",
  databaseURL: "https://remote-helpers.firebaseio.com",
  projectId: "remote-helpers",
  storageBucket: "remote-helpers.appspot.com",
  messagingSenderId: "453570540241",
  appId: "1:453570540241:web:f8f59735d6d01a0bfe0bf0",
  measurementId: "G-P5D4HZS0YQ"
})
let rerenderEntireTree

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
