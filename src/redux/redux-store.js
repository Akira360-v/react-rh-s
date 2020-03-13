import { combineReducers, createStore } from 'redux'
import employeesReducer from './employees-reducer'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'

// reducers
let reducers = combineReducers({
  employeesPage: employeesReducer,
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer

})
// store
let store = createStore(reducers)

export default store
