import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/sass/index.sass'
import './App.css'
import SignIn from './components/Authorization/SignIn/SignIn'
// import Navigation from './components/Navigation/index'
import { withAuthentication } from './components/Authorization/Session'
import SignInPage from './components/Authorization/SignUp/SignUp'
import NavigationAuth from './components/Authorization/Navigation/Navigation'
import PasswordForgetPage from './components/Authorization/PasswordForget/PasswordForget'

const App = props => (
  <Router>
    <div className="app-wrapper">
      <Switch>
        <Route exact path="/" render={() => <SignIn />} />
        <Route path="/register" render={() => <SignInPage />} />
        <Route path="/pw-forget" render={() => <PasswordForgetPage />} />
      </Switch>
      <NavigationAuth />
    </div>
  </Router>
)
export default withAuthentication(App)
