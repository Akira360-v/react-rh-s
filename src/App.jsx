import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/sass/index.sass'
import './App.css'
// import Navigation from './components/Navigation/index'
import { withAuthentication } from './components/Authorization/Session'
import NavigationAuth from './components/Authorization/Navigation/Navigation'


const App = props => (
  <Router>
    <div className="app-wrapper">
      <NavigationAuth />
    </div>
  </Router>
)
export default withAuthentication(App)
