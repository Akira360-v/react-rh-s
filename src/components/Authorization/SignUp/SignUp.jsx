import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose'
import { PasswordForgetLink } from '../PasswordForget/PasswordForget'
import * as ROUTES from '../../../constants/routes'

const SignUpPage = () => (
  <div className="form__cont">
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
)
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}
class SignUpFormBase extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }
  onSubmit = event => {
    const { username, email, passwordOne } = this.state
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email
        })
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push('/equipment')
      })
      .catch(error => {
        this.setState({ error })
      })
    event.preventDefault()
  }
  onChange = event => {}
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''
    return (
      <div className="">
        <form className="login__form" onSubmit={this.onSubmit}>
          <input
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>
          {error && <p>{error.message}</p>}
        </form>
        <PasswordForgetLink />

        <p>
          login to account <Link to="/">Sign In</Link>
        </p>
      </div>
    )
  }
}
const SignUpLink = () => (
  // <p>
  //   Don't have an account? <Link to="/register"> Sign Up</Link>
  // </p>

  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)
const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase)
export default SignUpPage
export { SignUpForm, SignUpLink }
