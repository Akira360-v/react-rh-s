import React from 'react'
// import SettingsItem from '../components/blocks/Settings/SettingsItem'
import EmployeesUzers from '../blocks/Employees/EmployeesUzers'
import EmployeesAddPost from '../blocks/Employees/EmployeesAddPost'

const Employees = props => {
  let EmployeesUzersElements = props.employeesPage.staff.map(d => (
    <EmployeesUzers
      key={d.id}
      name={d.name}
      surname={d.surname}
      patronymic={d.patronymic}
      residence={d.residence}
      position={d.position}
    />
  ))
  return (
    <div className="Employees">
      {EmployeesUzersElements}{' '}
      <div className="qweasd">
        <EmployeesAddPost
          PostDefault={props.employeesPage.addPostsDefault}
          addPost={props.addPost}
          updateNewPost={props.updateNewPost}
        />
      </div>
    </div>
  )
}

export default Employees
