import React from 'react'
// import'./User.sass'
import * as axios from 'axios'

let Users = props => {
  if (props.users.length === 0) {
    // axios.get("http://base.rh-s.com/api/employees").then(response => {
    axios
      // .get('https://social-network.samuraijs.com/api/1.0/users')
      .get('http://base.rh-s.com/api/employees')
      .then(response => {
        debugger

        props.setUsers()
      })
    // props.setUsers([
    //   {
    //     id: 1,
    //     photoUrl: '',
    //     followed: false,
    //     fullName: 'Dmitry',
    //     status: 'I am a boss',
    //     location: { city: 'Minsk', country: 'Belarus' }
    //   },
    //   {
    //     id: 2,
    //     photoUrl: '',
    //     followed: true,
    //     fullName: 'Sasha',
    //     status: 'I am a boss too',
    //     location: { city: 'Moscow', country: 'Russia' }
    //   },
    //   {
    //     id: 3,
    //     photoUrl: '',
    //     followed: false,
    //     fullName: 'Andrew',
    //     status: 'I am a boss too',
    //     location: { city: 'Kiev', country: 'Ukraine' }
    //   }
    // ])
  }

  return (
    <div className="Users">
      {props.users.map(u => (
        <div className="Users__list" key={u.id}>
          <span>
            <div>
              <img src="" alt="logo" className="list_img" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
