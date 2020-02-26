import React from 'react'
import NavMenu from './NavMenu'
import Uzers from './Uzers'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
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

export default Sidebar
