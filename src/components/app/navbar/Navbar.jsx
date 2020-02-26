import React from 'react'
import NavMenu from './NavMenu'
import Uzers from './NavbarUzer'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <Uzers />
      <nav>
        <NavMenu url="/Employees" name="Employees" />
        <NavMenu url="/Equipment" name="Equipment" />
        <NavMenu url="/Statistics" name="Statistics" />
        <NavMenu url="/Settings" name="Settings" />
        <NavMenu url="/dialogs" name="dialogs" />
      </nav>
    </div>
  )
}

export default Navbar
