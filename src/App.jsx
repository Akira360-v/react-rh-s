import React from 'react'
// components app
import Sidebar from './components/app/sidebar/Sidebar'
import Navbar from './components/app/navbar/Navbar'
// exemple
// import Dialogs from './components/exemple/Dialogs/Dialogs'
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

const App = props => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="app-wrappers">
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/employees"
            render={() => (
              <Employees
                state={props.state.EmployeesPage}
                addPost={props.addPost}
                PostDefault={props.state.addPostDefault}
                updataNewPostText={props.updataNewPostText}
              />
            )}
          />
          <Route path="/equipment" render={() => <Equipment />} />
          <Route path="/statistics" render={() => <Statistics />} />
          <Route
            path="/settings"
            render={() => <Settings state={props.appState.SettingsPage} />}
          />
          {/* exemple */}
          {/* <Route
              path="/dialogs"
              render={() => <Dialogs state={props.state.dialogsPage} />}
            /> */}
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
