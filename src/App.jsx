import React from 'react'
// components app
import Sidebar from './components/app/sidebar/Sidebar'
import Navbar from './components/app/navbar/Navbar'
// exemple
import Dialogs from './components/exemple/Dialogs/Dialogs'
// import Profile from './components/exemple/Profile/Profile'
// exemple //
// components app //
import Employees from './views/Employees'
import Equipment from './views/Equipment'
import Statistics from './views/Statistics'
import Settings from './views/Settings'
import { Route } from 'react-router-dom'
import './assets/sass/index.sass'
import './App.css'
import SignUpForm from './components/SignUp/index'
import SignIn from './components/SignIn/index'
import Navigation from './components/Navigation/index'

const App = props => {
  return (
    <div className="app-wrapper">
      
      <Navigation />
      <Sidebar />
      
      <div className="app-wrappers">
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/employees"
            render={() => (
              <Employees
                state={props.state.EmployeesPage}
                dispatch={props.dispatch}
                PostDefault={props.state.addPostDefault}
              />
            )}
          />
          <Route path="/equipment" render={() => <Equipment />} />
          <Route path="/statistics" render={() => <Statistics />} />
          <Route
            path="/settings"
            render={() => <Settings state={props.state.SettingsPage} />}
          />
          {/* exemple */}
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/register"
            render={() => (
              <SignUpForm
              // state={props.state.dialogsPage}
              // dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <SignIn
              // state={props.state.dialogsPage}
              // dispatch={props.dispatch}
              />
            )}
          />
          />
          <Route
            path="/navigation"
            render={() => (
              <Navigation
              // state={props.state.dialogsPage}
              // dispatch={props.dispatch}
              />
            )}
          />
          {/* <Route path='/profile'
              render={ () => <Profile
              state={props.state.profilePage}
              addPost={props.addPost} />}/> */}
        </div>
      </div>
    </div>
  )
}

export default App
