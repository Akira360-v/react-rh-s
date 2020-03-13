import React from 'react'
import NavMenu from './NavMenu'
import Uzers from './NavbarUzer'
import * as ROUTES from '../../../constants/routes'


const Navbar = () => {
  return (
    <div className="Navbar">
      <Uzers />
      <nav>
        <NavMenu to={ROUTES.HOME} name="Приборная доска" />
        <NavMenu to="/employees" name="Employees" />
        <NavMenu to="/profile" name="Profile" />
        <NavMenu to="/equipment" name="Equipment" />
        <NavMenu to="/statistics" name="Statistics" />
        <NavMenu to="/settings" name="Settings" />
        <NavMenu to="/register" name="Register" />
        <NavMenu to="/dialogs" name="Dialogs" />
      </nav>
    </div>
  )
}

export default Navbar
