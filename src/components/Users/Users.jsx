import React from 'react'
// import'./User.sass'
import * as axios from 'axios'
import LogoUzerDefault from '../../assets/images/LogoUzerDefault.png'

class Users extends React.Component {
  componentDidMount() {
    axios
      // .get('https://social-network.samuraijs.com/api/1.0/users')
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
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
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div className="Users">
        <div className="">
          {pages.map(p => {
            return (
              <span className={this.props.currentPage === p && 'qwe'} onClick={() => {this.props.setCurrentPage{p}}}>{p}</span>
            )
          })}
          {/* <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span> */}
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
