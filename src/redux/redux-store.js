import { combineReducers, createStore } from 'redux'
import employeesReducer from './employees-reducer'
import dialogsReducer from './dialogs-reducer'

// reducers
let reducers = combineReducers({
  employeesPage: employeesReducer,
  dialogsPage: dialogsReducer
})
// store
let store = createStore(reducers)

export default store
