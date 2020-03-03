import React from 'react'
import NavMenu from './NavMenu'
import Uzers from './NavbarUzer'

const Navbar = () => {
  return (
    <div className="Navbar">
      <Uzers />
      <nav>
        <NavMenu url="/employees" name="Employees" />
        <NavMenu url="/equipment" name="Equipment" />
        <NavMenu url="/statistics" name="Statistics" />
        <NavMenu url="/settings" name="Settings" />
        {/* exemple */}
        <NavMenu url="/dialogs" name="dialogs" />
        {/* <NavMenu url="/profile" name="profile" /> */}
      </nav>
    </div>
  )
}

export default Navbar
