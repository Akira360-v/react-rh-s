import React from 'react'
const EmployeesUzers = props => {
  // let newPostElement = React.createRef();

  // let addPost = () => {
  //     let text = newPostElement.current.value;
  //     props.addPost(text);
  //     newPostElement.current.value = '';
  // }
  return (
    <div className="EmployeesUzers">
      <div className="EmployeesHead">
        <figure className="EmployeesHead_img">
          <img src="" alt="uzer logo" />
        </figure>
        <div className="EmployeesHead_text">
          <div className="EmployeesHead__fullname">
            {props.name}
            <br></br>
            {props.surname}
            <br></br>
            {props.patronymic}
          </div>
          <div className="EmployeesHead__residence">
            <img src="" alt="v" />
            {props.residence}
          </div>
          <div className="EmployeesHead__position">
            <img src="" alt="v" />
            {props.position}
          </div>
        </div>
      </div>
      <div className="Employees__button">
        {/* <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default EmployeesUzers
