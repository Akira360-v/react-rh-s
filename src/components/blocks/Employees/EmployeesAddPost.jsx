import React from 'react'
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from '../../../redux/employees-reducer'


const EmployeesAddPost = props => {
  let newPostElement = React.createRef()
  let addPost = () => {
    props.dispatch.dispatch(addPostActionCreator())
  }
  let onPostChenge = () => {
    let text = newPostElement.current.value
    let action = updateNewPostTextActionCreator(text)
    props.dispatch.dispatch(action)
  }
  // one ///////////////////////
  return (
    <div className="EmployeesAddPost">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChenge}
            ref={newPostElement}
            value={props.PostDefault.newPostsText}
          />
        </div>
        <div>
          <button onClick={addPost}  type={'ADD-POST'} >Add post</button>
        </div>
      </div>
    </div>
  )
}

export default EmployeesAddPost
