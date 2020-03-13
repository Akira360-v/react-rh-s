import React from 'react'
// import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import './assets/sass/index.sass'
import './App.css'

import Navbar from './components/app/navbar/Navbar'
import EmployeesContainer from './components/Employees/EmployeesContainer'
import Equipment from './views/Equipment'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Profile from './components/Profile/Profile'

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/employees" render={() => <EmployeesContainer />} />
        <Route path="/equipment" render={() => <Equipment />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <Profile />} />
      </div>
    </div>
  )
}

export default App

// auth

// import { withAuthentication } from './components/Authorization/Session'
// import NavigationAuth from './components/Authorization/Navigation/Navigation'
// const App = (props) => (

// // class App extends Component {
// //   constructor() {
// //     super()

// //     this.state = {
// //       speed: 120
// //     }
// //   }
//   // render() {

//     // return (
//     <Router>
//       <div className="app-wrapper">
//         <NavigationAuth store={props.store}   />
//       </div>
//       {/* asdasdasdas{this.state.speed} */}
//     </Router>
//     )
//   // }
// // }
// export default withAuthentication(App)
