import React from 'react'
import { AuthUserContext, withAuthorization } from '../Session'
import { PasswordForgetForm } from '../PasswordForget/PasswordForget'
import PasswordChangeForm from '../PasswordChange/PasswordChange'
// import { withAuthorization } from '../Session';
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
)
// export default AccountPage;
const condition = authUser => !!authUser
export default withAuthorization(condition)(AccountPage)
