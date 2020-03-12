import React from 'react'
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from '../../redux/employees-reducer'
import Employees from './Employees'
import StoreContext from '../../StoreContext'

const EmployeesContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let addPostAction = () => {
          store.dispatch(addPostActionCreator())
        }
        let updateNewPostText = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text))
        }
        return (
          <Employees
            addPost={addPostAction}
            updateNewPost={updateNewPostText}
            employeesPage={store.getState().employeesPage}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}
export default EmployeesContainer

// store={props.store.getState().EmployeesPage}
// dispatch={props.store}
