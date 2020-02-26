import React from 'react'



const MessagesExemple = (props) => {
  return (
    <div className="MessagesExemple">
      MessagesExemple
      MessagesExemple
      MessagesExemple
      {/* <div className="">
        <Messages messages={MessagesData[0].messages} />
        <Messages messages={MessagesData[1].messages} />
        <Messages messages={MessagesData[2].messages} />
        <Messages messages={MessagesData[3].messages} />
      </div> */}
      <div className="Messages">
        <div>{props.messages}</div>
      </div>
    </div>
  )
}
// const Messages = props => {
//   return (
//     <div className="Messages">
//       <div>{props.messages}</div>
//     </div>
//   )
// }
export default MessagesExemple
