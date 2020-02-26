import React from 'react'
// components app
import Navbar from './components/app/Navbar'
import Sidebar from './components/app/Sidebar'
import Dialogs from './components/Dialogs/Dialogs.jsx'
// components app //
// views
import Employees from './views/Employees'
import Equipment from './views/Equipment'
import Statistics from './views/Statistics'
import Settings from './views/Settings'
// views //
// Route
import { BrowserRouter, Route } from 'react-router-dom'
// Route //
// css
import './assets/sass/index.sass'
import './App.css'
// css //

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <div className="app-wrappers">
          <Sidebar />
          <div className="app-wrapper-content">
            <Route path="/Employees" render={() => <Employees />} />
            <Route path="/Equipment" render={() => <Equipment />} />
            <Route path="/Statistics" render={() => <Statistics />} />
            <Route path="/Settings" render={() => <Settings />} />
            <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
