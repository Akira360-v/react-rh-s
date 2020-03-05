// import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import Firebase, { FirebaseContext } from './components/Authorization/Firebase'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import App from './App'
import './index.css'

let rerenderEntireTree = state => {
  ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </FirebaseContext.Provider>,
    document.getElementById('root')
  )
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
