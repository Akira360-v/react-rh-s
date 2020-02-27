import React from 'react'

const EmployeesHead = props => {
  return (
    <div className="EmployeesHead">
      <figure className="EmployeesHead_img">
        <img src="" alt="uzer logo" />
      </figure>
      <div className="EmployeesHead_text">
        <div className="EmployeesHead__name">
          {props.name}
          <br></br>
          {props.surname}
          <br></br>
          {props.patronymic}
        </div>
        <div className="EmployeesHead__residence">{props.residence}</div>
        <div className="EmployeesHead__position">{props.position}</div>
      </div>
    </div>
  )
}

export default EmployeesHead
