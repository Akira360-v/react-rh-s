import React from 'react'
// components app
import Navbar from './components/app/Navbar'
import Sidebar from './components/app/Sidebar'
// components app //
// views
import Employees from './views/Employees'
import Equipment from './views/Equipment'
import Statistics from './views/Statistics'
import Settings from './views/Settings'
// views //
// Route
import { BrowserRouter, Route  } from 'react-router-dom'
// Route //
// css
import './assets/sass/index.sass'
import './App.css'
// css //

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <div className="app-wrappers">
          <Sidebar />
          <div className="app-wrapper-content">
            <Route path='/Employees' component={Employees} />
            <Route path='/Equipment' component={Equipment} />
            <Route path='/Statistics' component={Statistics} />
            <Route path='/Settings' component={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
