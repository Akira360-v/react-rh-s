// import React from 'react'
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from '../../redux/employees-reducer'
import Employees from './Employees'
// import StoreContext from '../../StoreContext'
// import { StoreContext } from 'react-redux'

import { connect } from 'react-redux'

// const EmployeesContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let addPostAction = () => {
//           store.dispatch(addPostActionCreator())
//         }
//         let updateNewPostText = text => {
//           store.dispatch(updateNewPostTextActionCreator(text))
//         }
//         return (
//           <Employees
//             addPost={addPostAction}
//             // updateNewPost={updateNewPostText}
//             // employeesPage={store.getState().employeesPage}
//           />
//         )
//       }}
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = state => {
  return {
    employeesPage: state.employeesPage
  }
}
let mapDispatchToProps = dispatch => {
  return {
    updateNewPost: text => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const EmployeesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees)

export default EmployeesContainer

// store={props.store.getState().EmployeesPage}
// dispatch={props.store}
