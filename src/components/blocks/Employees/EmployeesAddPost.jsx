import React from 'react'


const EmployeesAddPost = props => {
  let newPostElement = React.createRef()
  let addPost = () => {
    props.addPost()
  }
  let onPostChenge = () => {
    let text = newPostElement.current.value
    props.updateNewPost(text)
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
