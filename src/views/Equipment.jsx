import React from 'react'

const Equipment = (props) => {
  return (
    <div>
      <h1>{props.head}</h1>
      <div className="">
        <p>
          {props.text}
        </p>
      </div>
    </div>
  )
}

export default Equipment
