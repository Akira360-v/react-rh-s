import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ))
  let messagesElements = props.state.messages.map(m => (
    <Message message={m.message} />
  ))

  let addPost = () => {
    alert('hello')
  }
  // {/* непровильно для react (11) */}
  // let addPosts = () => {
  //   let text = document.getElementById('textarea_textarea').value
  //   alert(text)
  // }
  // createRef = создает ссылку
  let newPostsElements = React.createRef()
  let addPosts = () => {
    let text = newPostsElements.current.value
    alert(text)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className="button123">
        {/* <button onClick={ () => {alert('hello')}}>мая кнопка</button> */}
        <button onClick={addPost}>мая кнопка</button>
        {/* непровильно для react (11) */}
        {/* <div className="button_text123">
          <textarea
            name=""
            id="textarea_textarea"
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={addPosts}>text button</button>
        </div> */}
        <div className="button_text123">
          <textarea
            name=""
            ref={newPostsElements}
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={addPosts}>text button</button>
        </div>

      </div>
    </div>
  )
}

export default Dialogs
