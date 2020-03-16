import React from 'react'
// import'./User.sass'
import * as axios from 'axios'
import LogoUzerDefault from '../../assets/images/LogoUzerDefault.png'

class Users extends React.Component {
  componentDidMount() {
    // axios.get("http://base.rh-s.com/api/employees").then(response => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      // .get('http://base.rh-s.com/api/employees')
      .then(response => {
        // debugger
        this.props.setUsers(response.data.items)
      })
    // .catch(error => {
    //   debugger
    //   console.error(error)
    // })
  }
  render() {
    return (
      <div className="Users">
        <div className="">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        {this.props.users.map(u => (
          <div className="Users__list" key={u.id}>
            <span>
              <div>
                {/* <img src="" alt="logo" className="list_img" /> */}
                <img
                  src={
                    u.photos.small != null ? u.photos.small : LogoUzerDefault
                  }
                  alt="logo"
                  className="list_img"
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id)
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id)
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                {/* <div>{u.location.country}</div> */}
                {/* <div>{u.location.city}</div> */}
              </span>
            </span>
          </div>
        ))}
      </div>
    )
  }
}

export default Users
