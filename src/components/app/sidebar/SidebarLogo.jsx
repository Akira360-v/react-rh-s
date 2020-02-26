import React from 'react'
import Header_logo from '../../../assets/images/RH_logo.svg'

const Logo = () => {
  return (
    <div className="Logo">
      <a href="/">
        <img src={Header_logo} alt="logo" />
      </a>
    </div>
  )
}

export default Logo
