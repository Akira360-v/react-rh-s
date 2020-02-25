import React from 'react'
import { NavLink } from 'react-router-dom'

const SettingsItem = props => {
  return (
    <div className="SettingsItem">
      <NavLink to={"/Settings/" + props.id}>{props.name}</NavLink>
    </div>
  )
}

const Settings = () => {
  return (
    <ul className="Settings">
      <SettingsItem id='1' name='SettingsItem(1)' />
      <SettingsItem id='2' name='SettingsItem(2)'  />
      <SettingsItem id='3' name='SettingsItem(3)'  />
      <SettingsItem id='4' name='SettingsItem(4)'  />
    </ul>
  )
}

export default Settings
