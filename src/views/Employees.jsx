import React from 'react'
// import SettingsItem from '../components/blocks/Settings/SettingsItem'
import EmployeesUzers from '../components/blocks/Employees/EmployeesUzers'
import EmployeesAddPost from '../components/blocks/Employees/EmployeesAddPost'

const Employees = props => {
  let EmployeesUzersElements = props.store.staff.map(d => (
    <EmployeesUzers
      id={d.id}
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
          // addPost={props.addPost}
          PostDefault={props.store.addPostsDefault}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  )
}

export default Employees
