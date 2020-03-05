import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sidebar from './components/app/sidebar/Sidebar'
import Navbar from './components/app/navbar/Navbar'
import Equipment from './views/Equipment'
import Statistics from './views/Statistics'
import Settings from './views/Settings'
import './assets/sass/index.sass'
import './App.css'
import SignUpForm from './components/Authorization/SignUp/SignUp'
import SignIn from './components/Authorization/SignIn/SignIn'
// import Navigation from './components/Navigation/index'
import { withAuthentication } from './components/Session'
import AccountPage from './components/Account/index'
import PasswordForgetPage from './components/PasswordForget'
import Authorization from './components/Authorization/Authorization'

const App = props => (
  <Router>
    <div className="app-wrapper">
      <Switch>
        <Authorization />
      </Switch>
      <div className="qweqwe">
        qweqwe qweqwe qweqwe
        {/* <Navigation /> */}
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
          <Route path="/pw-forget" render={() => <PasswordForgetPage />} />
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
          {/* />
          <Route
            path="/navigation"
            render={() => (
              <Navigation
              // state={props.state.dialogsPage}
              // dispatch={props.dispatch}
              />
            )}
          /> */}
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
export default withAuthentication(App)
