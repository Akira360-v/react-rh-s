import React from 'react'
import { Link } from 'react-router-dom'
import SignOutButton from '../SignOut/SignOut'
import * as ROUTES from '../../../constants/routes'
import { AuthUserContext } from '../Session'
import Navbar from '../../app/navbar/Navbar'

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
)

const NavigationAuth = () => (
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
          <Link to={ROUTES.LANDING}>
            <SignOutButton />
          </Link>
        </li>
      </ul>
    </div>
    <Navbar />
    <div className="app-wrapper-content">
      <p>asdasdasd</p>
      <p>asdasdasd</p>
      <p>asdasdasd</p>
      <p>asdasdasd</p>
      <p>asdasdasd</p>
    </div>
  </div>
)

const NavigationNonAuth = () => (
  <div></div>
)

export default Navigation
