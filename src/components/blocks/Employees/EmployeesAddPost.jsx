import React from 'react'

const EmployeesAddPost = props => {
  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
    // props.updataNewPostText('')
    // обнуление после клика
    // newPostElement.current.value = ''
  }
  let onPostChenge = () => {
    let text = newPostElement.current.value
    props.updataNewPostText(text)
  }

  return (
    <div className="EmployeesAddPost">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChenge}
            ref={newPostElement}
            value={props.PostDefault}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default EmployeesAddPost
