import React from 'react'
import { NavLink } from 'react-router-dom'

const SettingsItem = props => {
  // props
  let path = '/settings/' + props.id

  return (
    <div className="SettingsItem">
      {/* <NavLink to={"/Settings/" + props.id}>{props.name}</NavLink> */}
      <NavLink to={path}>
        {props.name}
        {props.messages}
      </NavLink>
    </div>
  )
}
export default SettingsItem
