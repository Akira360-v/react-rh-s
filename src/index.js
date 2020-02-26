import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App'

import * as serviceWorker from './serviceWorker'
import state from './redux/state';
// Route
// import {addPost} from './redux/state';
import { BrowserRouter } from 'react-router-dom'
// Route //
ReactDOM.render(
  <BrowserRouter>

    {/* <App state={state} addPost={addPost} /> */}
    <App state={state} />
    </BrowserRouter>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
