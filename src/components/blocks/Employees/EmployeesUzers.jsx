import React from 'react'
import EmployeesHead from './EmployeesHead'

const EmployeesUzers = props => {
  let SettingsItemElements = props.state.fullInfo.map(d => (
    <EmployeesHead
      id={d.id}
      name={d.name}
      surname={d.surname}
      patronymic={d.patronymic}
      residence={d.residence}
      position={d.position}
    />
  ))

  return (
    <div className="EmployeesUzers">
      <div className="EmployeesUzers__head">{SettingsItemElements}</div>
    </div>
  )
}

export default EmployeesUzers
