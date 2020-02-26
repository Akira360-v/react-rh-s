import React from 'react'
import SettingsItem from '../components/blocks/Settings/SettingsItem'

const Settings = props => {
  // props
  let SettingsItemElements = props.state.dialogs.map(d => (
    <SettingsItem name={d.name} id={d.id} />
  ))
  // let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );

  return <div className="Settings">{SettingsItemElements}</div>
}

export default Settings
