import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = props => {
  return (
    <ul className="NavMenu">
      <li>
        <NavLink to={props.to}>{props.name}</NavLink>
      </li>
    </ul>
  )
}

export default NavMenu
