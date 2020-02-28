import React from 'react'
import s from './MyPosts.module.css'

const MyPosts = props => {
  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
    newPostElement.current.value = ''
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default MyPosts
