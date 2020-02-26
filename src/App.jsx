import React from 'react'
// components app
import Sidebar from './components/app/sidebar/Sidebar'
import Navbar from './components/app/navbar/Navbar'
import Dialogs from './components/exemple/Dialogs/Dialogs'
// components app //
// views
import Employees from './views/Employees'
import Equipment from './views/Equipment'
import Statistics from './views/Statistics'
import Settings from './views/Settings'
// views //
// Route
import { Route } from 'react-router-dom'
// Route //
// css
import './assets/sass/index.sass'
import './App.css'
// css //

const App = props => {
  // debugger;
  return (
      <div className="app-wrapper">
        <Sidebar />
        <div className="app-wrappers">
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/employees" render={() => <Employees />} />
            <Route path="/equipment" render={() => <Equipment />} />
            <Route path="/statistics" render={() => <Statistics />} />
            <Route
              path="/settings"
              render={() => <Settings state={props.state.SettingsPage} />}
            />
            <Route
              path="/dialogs"
              render={() => <Dialogs state={props.state.dialogsPage} />}
            />
          </div>
        </div>
      </div>
  )
}

export default App
