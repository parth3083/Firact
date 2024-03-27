import React from 'react'
import './Message.scss'
function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.unsplash.com/photo-1588768987479-bcebeefb8a5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" />
        <div className="time">just now</div>
      </div>
      <div className="messageContent">
        <img src="https://images.unsplash.com/photo-1588768987479-bcebeefb8a5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" />
        <p>hello</p>
      </div>
    </div>
  )
}

export default Message