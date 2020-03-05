import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// components app
import Sidebar from './components/app/sidebar/Sidebar'
import Navbar from './components/app/navbar/Navbar'
// exemple
// import Dialogs from './components/exemple/Dialogs/Dialogs'
// import Profile from './components/exemple/Profile/Profile'
// exemple //
// components app //
// import Employees from './views/Employees'
import Equipment from './views/Equipment'
import Statistics from './views/Statistics'
import Settings from './views/Settings'
// import { Route } from 'react-router-dom'
import './assets/sass/index.sass'
import './App.css'
import SignUpForm from './components/SignUp/index'
import SignIn from './components/SignIn/index'
// import {Component} from './components/Firebase/context'
import Navigation from './components/Navigation/index'
// import { withFirebase } from './components/Firebase'
// import SignUp from './components/SignUp/index'
// import { PasswordForgetLink } from './components/PasswordForget';
// const App = props => {
import { withAuthentication } from './components/Session'
import AccountPage from './components/Account/index'
import PasswordForgetPage from "./components/PasswordForget";
const App = props => (
  <Router>
    <div className="app-wrapper">
      <div className="qweqwe">
        qweqwe qweqwe qweqwe
        <Navigation />
        qweqwe qweqwe
      </div>

      <Sidebar />
      <div className="app-wrappers">
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route
            path="/employees"
            render={() => (
              <Employees
              state={props.state.EmployeesPage}
              dispatch={props.dispatch}
              PostDefault={props.state.addPostDefault}
              />
            )}
          /> */}
          {/*<PasswordForgetPage />*/}
          <Route path="/pw-forget" render={() =>  <PasswordForgetPage />} />
          <Route path="/equipment" render={() => <Equipment />} />
          <Route path="/statistics" render={() => <Statistics />} />
          <Route
                path="/settings"
                render={() => <Settings state={props.state.SettingsPage} />}
              />
          {/* exemple */}
          {/* <Route
                path="/dialogs"
                render={() => (
                  <Dialogs
                    state={props.state.dialogsPage}
                    dispatch={props.dispatch}
                  />
                )}
              /> */}
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
          <Route
            path="/AccountPage"
            render={() => (
              <AccountPage
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
  </Router>
)
// }
export default withAuthentication(App)
