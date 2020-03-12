import React from 'react'
import { Link } from 'react-router-dom'
import SignOutButton from '../SignOut/SignOut'
import * as ROUTES from '../../../constants/routes'
import { AuthUserContext } from '../Session'
import Navbar from '../../app/navbar/Navbar'

import PasswordForgetPage from '../PasswordForget/PasswordForget'
import SignInPage from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import AdminPage from '../Admin/index'
import { Route, Switch } from 'react-router-dom'
import Equipment from '../../../views/Equipment'
import Employees from '../../../views/Employees'


const Navigation = (props) => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
)

const NavigationAuth = (props) => (
  <div className="app-wrapper-content">
    <div className="navbar">
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>

        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
        <li>
          <Link to={ROUTES.LANDING}>
            <SignOutButton />
          </Link>
        </li>
      </ul>
    </div>
    <div className="app-wrapper-contents">
      <Navbar />
      <Route path="/home" render={() =><AdminPage />} />
      <Route path="/equipment" render={() =><Equipment />} />
      <Route path="/employees" render={() =><Employees />} />
      <Route path="/register" render={() => <SignInPage />} />
    </div>
  </div>
)

const NavigationNonAuth = () => (
  <div>
    <Switch>
      <Route exact path="/" render={() => <SignIn />} />
      <Route path="/register" render={() => <SignInPage />} />
      <Route path="/pw-forget" render={() => <PasswordForgetPage />} />
      <Route path="*" render={() => <div>404 NOT FOUND</div>} />
    </Switch>
  </div>
)

export default Navigation
