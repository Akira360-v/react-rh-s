import React from 'react'
// import SettingsItem from '../components/blocks/Settings/SettingsItem'
import EmployeesUzers from '../components/blocks/Employees/EmployeesUzers'
import MyPosts from '../components/exemple/Profile/MyPosts/MyPosts'

const Employees = props => {
  let EmployeesUzersElements = props.state.staff.map(d => (
    <EmployeesUzers
      id={d.id}
      name={d.name}
      surname={d.surname}
      patronymic={d.patronymic}
      residence={d.residence}
      position={d.position}
    />
  ))
  // debugger
  return (
    <div className="Employees">
      {EmployeesUzersElements}{' '}
      <div className="qweasd">
        <MyPosts addPost={props.addPost} />
      </div>
    </div>
  )
}

export default Employees
