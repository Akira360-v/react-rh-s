import React from 'react'
// import React, {Component} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/sass/index.sass'
import './App.css'
import { withAuthentication } from './components/Authorization/Session'
import NavigationAuth from './components/Authorization/Navigation/Navigation'

const App = (props) => (

// class App extends Component {
//   constructor() {
//     super()
    
//     this.state = {
//       speed: 120
//     }
//   }
  // render() {

    // return (
    <Router>
      <div className="app-wrapper">
        <NavigationAuth />
      </div>
      {/* asdasdasdas{this.state.speed} */}
    </Router>
    )
  // }
// }
export default withAuthentication(App)
