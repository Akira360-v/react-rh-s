import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
// import Firebase, { FirebaseContext } from './components/Authorization/Firebase'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'

// let rerenderEntireTree = () => {
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
// }

// rerenderEntireTree();

// store.subscribe(() => {
//   rerenderEntireTree();
// });

// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

// auth
// let rerenderEntireTree = state => {
//   ReactDOM.render(
//     <FirebaseContext.Provider value={new Firebase()}>
//       <BrowserRouter>
//         <App state={state} dispatch={store.dispatch.bind(store)} store={store}  />
//       </BrowserRouter>
//     </FirebaseContext.Provider>,
//     document.getElementById('root')
//   )
// }
// rerenderEntireTree(store.getState())
// store.subscribe(rerenderEntireTree)
