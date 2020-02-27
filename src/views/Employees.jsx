import React from 'react'
// import SettingsItem from '../components/blocks/Settings/SettingsItem'
import EmployeesUzers from '../components/blocks/Employees/EmployeesUzers'

const Employees = props => {

  return (
    <div className="Employees">
      <EmployeesUzers state={props.state.staff}  />
    </div>
  )
}

export default Employees
